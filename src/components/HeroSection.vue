<template>
    <section class="hero-section d-flex align-items-center">
        <div class="hero-glow-1"></div>
        <div class="hero-glow-2"></div>
        <div class="hero-glow-3"></div>

        <div class="container position-relative z-1">
            <div class="row align-items-center min-vh-100 py-5">
                <div class="col-lg-7">
                    <div class="reveal badge bg-accent bg-opacity-25 text-white mb-3 px-3 py-2 rounded-pill hero-badge-shimmer animate-fade-in">
                        <i class="bi bi-award me-2"></i>Est. 2011 — Excellence in Music Education
                    </div>
                    <h1 class="display-2 fw-bold text-white mb-4 reveal reveal-delay-1"
                        style="font-family: 'Playfair Display', serif; line-height: 1.1;">
                        Where <span class="text-shimmer">Music</span> Finds Its<br>True Voice
                    </h1>
                    <p class="lead text-white-50 mb-5 fs-5 reveal reveal-delay-2" style="max-width: 600px;">
                        Resonanz Music Studio & Foundation nurtures artistic excellence through world-class instruction,
                        state-of-the-art facilities, and a community that celebrates every musical journey.
                    </p>
                    <div class="d-flex flex-wrap gap-3 reveal reveal-delay-3">
                        <a href="#programs" class="btn btn-gold btn-lg">
                            Explore Programs
                            <i class="bi bi-arrow-right ms-2"></i>
                        </a>
                        <a href="#contact" class="btn btn-outline-light btn-lg rounded-pill px-4">
                            Book a Trial
                        </a>
                    </div>

                    <div class="row mt-5 pt-4 g-4">
                        <div class="col-4 reveal reveal-delay-3">
                            <h3 class="text-gold fw-bold mb-1 stat-number" data-count="1240">1,240+</h3>
                            <small class="text-white-50">Active Students</small>
                        </div>
                        <div class="col-4 reveal reveal-delay-4">
                            <h3 class="text-gold fw-bold mb-1 stat-number" data-count="48">48</h3>
                            <small class="text-white-50">Expert Faculty</small>
                        </div>
                        <div class="col-4 reveal reveal-delay-5">
                            <h3 class="text-gold fw-bold mb-1 stat-number" data-count="15">15</h3>
                            <small class="text-white-50">Years of Legacy</small>
                        </div>
                    </div>
                </div>

                <div class="col-lg-5 d-none d-lg-block">
                    <div class="position-relative reveal reveal-delay-2">
                        <div class="rounded-4 overflow-hidden shadow-lg hero-image-wrapper"
                            style="transform: rotate(2deg);">
                            <img src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=700&fit=crop"
                                alt="Musician performing" class="img-fluid">
                        </div>
                        <div class="position-absolute bg-white rounded-4 p-3 shadow-lg live-card"
                            style="bottom: -20px; left: -30px; max-width: 200px;">
                            <div class="d-flex align-items-center gap-2 mb-2">
                                <div class="bg-success rounded-circle live-dot" style="width: 10px; height: 10px;"></div>
                                <small class="fw-semibold text-muted">Live Now</small>
                            </div>
                            <p class="mb-0 fw-semibold small">Spring Orchestra Rehearsal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="wave-divider">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M0 60L48 52C96 44 192 28 288 22C384 16 480 20 576 26C672 32 768 40 864 42C960 44 1056 40 1152 34C1248 28 1344 20 1392 16L1440 12V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" fill="#f5f5f7"/>
            </svg>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { initGlobalRevealAnimations } from '@/composables/useReveal.js'

onMounted(() => {
    initGlobalRevealAnimations()
})
</script>

<style scoped>
.hero-image-wrapper {
    transition: transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.hero-image-wrapper:hover {
    transform: rotate(0deg) scale(1.02) !important;
}

.live-card {
    animation: fadeInUp 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) 0.8s both;
    transition: all 0.3s ease;
}

.live-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15) !important;
}

.live-dot {
    background: #22c55e;
    animation: accentPulse 2s ease-in-out infinite;
    box-shadow: 0 0 8px rgba(34, 197, 94, 0.4);
}

.wave-divider {
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    overflow: hidden;
    line-height: 0;
    pointer-events: none;
}

.wave-divider svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 60px;
}
</style>
