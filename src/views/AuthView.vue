<template>
  <div class="auth-page">
    <div class="auth-background">
      <div class="auth-shape auth-shape-1"></div>
      <div class="auth-shape auth-shape-2"></div>
      <div class="auth-shape auth-shape-3"></div>
    </div>

    <div class="auth-container">
      <div class="auth-header text-center mb-4">
        <router-link to="/" class="auth-brand">
          <i class="bi bi-music-note-beamed text-gold"></i>
          <span class="brand-text">RESONANZ</span>
        </router-link>
        <p class="auth-subtitle text-muted mt-2">Music Studio Management</p>
      </div>

      <div class="auth-card">
        <ul class="nav nav-tabs auth-tabs" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              :class="{ active: mode === 'login' }"
              @click="switchMode('login')"
              type="button"
            >Login</button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              :class="{ active: mode === 'register' }"
              @click="switchMode('register')"
              type="button"
            >Register</button>
          </li>
        </ul>

        <div class="auth-body p-4">
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="email" class="form-label text-light">Email address</label>
              <div class="input-group">
                <span class="input-group-text bg-dark border-secondary text-gold">
                  <i class="bi bi-envelope"></i>
                </span>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  class="form-control bg-dark text-light border-secondary"
                  :class="{ 'is-invalid': emailError }"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div v-if="emailError" class="invalid-feedback d-block text-danger small">
                {{ emailError }}
              </div>
            </div>

            <div class="mb-3">
              <label for="password" class="form-label text-light">Password</label>
              <div class="input-group">
                <span class="input-group-text bg-dark border-secondary text-gold">
                  <i class="bi bi-lock"></i>
                </span>
                <input
                  id="password"
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  class="form-control bg-dark text-light border-secondary"
                  :class="{ 'is-invalid': passwordError }"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  class="btn btn-outline-secondary border-secondary"
                  @click="showPassword = !showPassword"
                >
                  <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                </button>
              </div>
              <div v-if="passwordError" class="invalid-feedback d-block text-danger small">
                {{ passwordError }}
              </div>
              <div v-if="mode === 'register'" class="form-text text-muted small">
                Minimum 6 characters
              </div>
            </div>

            <div v-if="mode === 'register'" class="mb-3">
              <label for="confirmPassword" class="form-label text-light">Confirm Password</label>
              <div class="input-group">
                <span class="input-group-text bg-dark border-secondary text-gold">
                  <i class="bi bi-lock-fill"></i>
                </span>
                <input
                  id="confirmPassword"
                  v-model="confirmPassword"
                  :type="showPassword ? 'text' : 'password'"
                  class="form-control bg-dark text-light border-secondary"
                  :class="{ 'is-invalid': confirmPasswordError }"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <div v-if="confirmPasswordError" class="invalid-feedback d-block text-danger small">
                {{ confirmPasswordError }}
              </div>
            </div>

            <div v-if="authError" class="alert alert-danger d-flex align-items-center" role="alert">
              <i class="bi bi-exclamation-triangle-fill me-2"></i>
              <div>{{ authError }}</div>
            </div>

            <div v-if="successMessage" class="alert alert-success d-flex align-items-center" role="alert">
              <i class="bi bi-check-circle-fill me-2"></i>
              <div>{{ successMessage }}</div>
            </div>

            <button
              type="submit"
              class="btn btn-gold w-100 py-2 fw-semibold mt-2"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              <i v-else :class="mode === 'login' ? 'bi bi-box-arrow-in-right' : 'bi bi-person-plus'"></i>
              {{ isSubmitting ? 'Please wait...' : (mode === 'login' ? 'Login' : 'Create Account') }}
            </button>
          </form>
        </div>

        <div class="auth-footer text-center py-3 border-top border-secondary">
          <small class="text-muted">
            &copy; {{ new Date().getFullYear() }} Resonanz Music Studio. All rights reserved.
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAuthStore } from '@/stores/auth.js'

const authStore = useAuthStore()

const mode = ref('login')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const isSubmitting = ref(false)

const emailError = computed(() => {
  if (!email.value) return ''
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.value) ? '' : 'Please enter a valid email address'
})

const passwordError = computed(() => {
  if (!password.value) return ''
  if (mode.value === 'register' && password.value.length < 6) {
    return 'Password must be at least 6 characters'
  }
  return ''
})

const confirmPasswordError = computed(() => {
  if (mode.value === 'register' && confirmPassword.value !== password.value) {
    return 'Passwords do not match'
  }
  return ''
})

const authError = computed(() => authStore.error)
const successMessage = ref('')

function switchMode(newMode) {
  mode.value = newMode
  authStore.error = null
  successMessage.value = ''
  email.value = ''
  password.value = ''
  confirmPassword.value = ''
}

async function handleSubmit() {
  authStore.error = null
  successMessage.value = ''
  isSubmitting.value = true

  try {
    if (mode.value === 'register') {
      await authStore.register(email.value, password.value)
      successMessage.value = 'Account created! Redirecting...'
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 1200)
    } else {
      await authStore.login(email.value, password.value)
    }
  } catch {
    // error already set in store
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, #3f0303 0%, #6b0f1a 50%, #0f0505 100%);
  overflow: hidden;
  padding: 2rem 1rem;
}

.auth-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.auth-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.05;
  background: #b19426;
}

.auth-shape-1 {
  width: 600px;
  height: 600px;
  top: -200px;
  right: -100px;
  animation: float 20s ease-in-out infinite;
}

.auth-shape-2 {
  width: 400px;
  height: 400px;
  bottom: -150px;
  left: -100px;
  animation: float 15s ease-in-out infinite reverse;
}

.auth-shape-3 {
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 8s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-40px) rotate(10deg); }
}

@keyframes pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.03; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.08; }
}

.auth-container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 440px;
}

.auth-header {
  margin-bottom: 1.5rem;
}

.auth-brand {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'Playfair Display', serif;
}

.auth-brand i {
  font-size: 2.5rem;
  filter: drop-shadow(0 0 20px rgba(223, 205, 109, 0.5));
}

.brand-text {
  font-size: 1.75rem;
  font-weight: 700;
  color: #f0e6d2;
  letter-spacing: 2px;
}

.auth-subtitle {
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: 0.75rem;
}

.auth-card {
  background: rgba(15, 5, 5, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(223, 205, 109, 0.15);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(223, 205, 109, 0.05);
  overflow: hidden;
}

.auth-tabs {
  border-bottom: 1px solid rgba(223, 205, 109, 0.15);
}

.auth-tabs .nav-link {
  flex: 1;
  text-align: center;
  color: #f2ece6;
  border: none;
  border-bottom: 2px solid transparent;
  border-radius: 0;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.8rem;
  padding: 1rem 1.5rem;
  transition: all 0.3s ease;
  background: transparent;

  &:hover {
    color: #b19426;
    border-bottom-color: rgba(223, 205, 109, 0.3);
    background: rgba(223, 205, 109, 0.03);
  }

  &.active {
    color: #b19426;
    background: transparent;
    border-bottom-color: #b19426;
    border-radius: 0;
  }
}

.auth-body {
  padding: 2rem;
}

.form-label {
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
}

.input-group-text {
  min-width: 44px;
  justify-content: center;
}

.form-control:focus {
  border-color: #b19426;
  box-shadow: 0 0 0 0.2rem rgba(223, 205, 109, 0.15);
  background-color: rgba(15, 5, 5, 0.8);
  color: #f2ece6;
}

.form-control::placeholder {
  color: rgba(176, 160, 144, 0.4);
}

.btn-gold {
  background: linear-gradient(135deg, #b19426, #dfcd6d);
  border: none;
  color: #3f0303;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.85rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(177, 148, 38, 0.3);
}

.btn-gold:hover {
  background: linear-gradient(135deg, #dfcd6d, #b19426);
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(177, 148, 38, 0.4);
  color: #3f0303;
}

.btn-gold:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(177, 148, 38, 0.3);
}

.btn-gold:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.alert {
  border-radius: 8px;
  font-size: 0.875rem;
  border: none;
}

.auth-footer {
  background: rgba(15, 5, 5, 0.3);
}

@media (max-width: 480px) {
  .brand-text {
    font-size: 1.4rem;
  }

  .auth-body {
    padding: 1.5rem;
  }
}
</style>
