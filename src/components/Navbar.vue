<template>
    <nav class="navbar navbar-expand-lg navbar-dark navbar-resonanz fixed-top">
        <div class="container">
            <router-link class="navbar-brand d-flex align-items-center gap-2" to="/">
                <i class="bi bi-music-note-beamed text-gold fs-3"></i>
                <div>
                    <span class="fw-bold fs-4" style="font-family: 'Playfair Display', serif;">RESONANZ</span>
                    <small class="d-block text-gold" style="font-size: 0.65rem; letter-spacing: 3px;">MUSIC
                        STUDIO</small>
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
                    <li class="nav-item ms-lg-2">
                        <router-link class="btn btn-gold btn-sm" to="/dashboard">
                            <i class="bi bi-grid-3x3-gap me-2"></i>Dashboard
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navbar = document.querySelector('.navbar-collapse')
            if (navbar.classList.contains('show')) {
                navbar.classList.remove('show')
            }
        })
    })
})
</script>