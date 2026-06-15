<template>
    <nav ref="navbarEl" class="navbar navbar-expand-lg navbar-dark navbar-resonanz fixed-top">
        <div class="container">
            <button class="sidebar-toggle d-lg-none border-0" type="button" aria-label="Open organization sidebar" @click="$emit('toggle-sidebar')">
                <i class="bi bi-list"></i>
            </button>

            <router-link class="navbar-brand d-flex align-items-center gap-2" to="/">
                <i class="bi bi-music-note-beamed text-gold fs-3"></i>
                <div>
                    <span class="fw-bold fs-4" style="font-family: 'Playfair Display', serif;">RESONANZ</span>
                    <small class="d-block text-gold brand-subtitle">MUSIC STUDIO</small>
                </div>
            </router-link>

            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center gap-lg-3">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#programs">Programs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#faculty">Faculty</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#events">Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                    <li v-if="!authStore.isAuthenticated" class="nav-item ms-lg-2">
                        <router-link class="btn btn-outline-gold btn-sm" to="/auth">
                            <i class="bi bi-person me-2"></i>Login / Register
                        </router-link>
                    </li>
                    <li v-else class="nav-item dropdown ms-lg-2">
                        <a class="btn btn-gold btn-sm dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            <i class="bi bi-person-circle me-2"></i>{{ authStore.user?.email }}
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end dropdown-resonanz">
                            <li>
                                <router-link class="dropdown-item" to="/dashboard">
                                    <i class="bi bi-grid-3x3-gap me-2"></i>Dashboard
                                </router-link>
                            </li>
                            <li><hr class="dropdown-divider"></li>
                            <li>
                                <a class="dropdown-item text-danger" href="#" @click.prevent="handleLogout">
                                    <i class="bi bi-box-arrow-right me-2"></i>Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
defineOptions({
    name: 'AppNavbar'
})

import { ref, onMounted, onUnmounted } from 'vue'
import { useAuthStore } from '@/stores/auth.js'

const authStore = useAuthStore()
const navbarEl = ref(null)

function onScroll() {
    const navbar = navbarEl.value
    if (!navbar) return
    if (window.scrollY > 60) {
        navbar.classList.add('navbar-scrolled')
    } else {
        navbar.classList.remove('navbar-scrolled')
    }
}

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navbar = document.querySelector('.navbar-collapse')
            if (navbar.classList.contains('show')) {
                navbar.classList.remove('show')
            }
        })
    })
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
})

async function handleLogout() {
    await authStore.logout()
}
</script>

<style scoped>
.brand-subtitle {
    font-size: 0.65rem;
    letter-spacing: 3px;
    transition: all 0.4s ease;
}

.navbar-scrolled .brand-subtitle {
    font-size: 0.6rem;
    letter-spacing: 2.5px;
}

.sidebar-toggle {
    width: 42px;
    height: 42px;
    border-radius: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    color: #fff;
    background: rgba(223, 205, 109, 0.14);
    border: 1px solid rgba(223, 205, 109, 0.22);
    transition: all 0.25s ease;
}

.sidebar-toggle:hover {
    color: #3f0303;
    background: linear-gradient(135deg, #b19426, #dfcd6d);
    border-color: transparent;
}
</style>
