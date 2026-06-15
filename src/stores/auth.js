import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { auth, db } from '../firebase.js'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const role = ref(null)
  const loading = ref(true)
  const error = ref(null)

  const isAuthenticated = computed(() => !!user.value)
  const isGuest = computed(() => role.value === 'guest')
  const isAdmin = computed(() => role.value === 'admin')

  async function saveUserToFirestore(uid, email) {
    const userRef = doc(db, 'users', uid)
    const docSnap = await getDoc(userRef)

    if (!docSnap.exists()) {
      await setDoc(userRef, {
        email,
        role: 'guest',
        createdAt: new Date().toISOString()
      })
      role.value = 'guest'
    } else {
      role.value = docSnap.data().role
    }
  }

  async function register(email, password) {
    error.value = null
    try {
      const credential = await createUserWithEmailAndPassword(auth, email, password)
      await saveUserToFirestore(credential.user.uid, email)
      user.value = credential.user
    } catch (e) {
      error.value = e.message
      throw e
    }
  }

  async function login(email, password) {
    error.value = null
    try {
      const credential = await signInWithEmailAndPassword(auth, email, password)
      await saveUserToFirestore(credential.user.uid, email)
      user.value = credential.user
    } catch (e) {
      error.value = e.message
      throw e
    }
  }

  async function logout() {
    error.value = null
    await signOut(auth)
    user.value = null
    role.value = null
  }

  function initAuth() {
    loading.value = true
    onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        user.value = firebaseUser
        await saveUserToFirestore(firebaseUser.uid, firebaseUser.email)
      } else {
        user.value = null
        role.value = null
      }
      loading.value = false
    })
  }

  return {
    user,
    role,
    loading,
    error,
    isAuthenticated,
    isGuest,
    isAdmin,
    register,
    login,
    logout,
    initAuth
  }
})
