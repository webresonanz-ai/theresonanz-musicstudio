<template>
    <footer class="footer-resonanz pt-5 pb-4">
        <div class="container">
            <div class="row g-4 mb-5">
                <div class="col-lg-4 reveal">
                    <div class="d-flex align-items-center gap-2 mb-3">
                        <i class="bi bi-music-note-beamed text-gold fs-3"></i>
                        <div>
                            <span class="fw-bold fs-4 text-white footer-brand"
                                style="font-family: 'Playfair Display', serif;">RESONANZ</span>
                            <small class="d-block text-gold" style="font-size: 0.65rem; letter-spacing: 3px;">MUSIC
                                STUDIO</small>
                        </div>
                    </div>
                    <p class="small mb-4 reveal reveal-delay-1">
                        Empowering musicians since 2011. We provide world-class education, professional facilities, and
                        a community that inspires artistic excellence.
                    </p>
                    <div class="d-flex gap-2 reveal reveal-delay-2">
                        <a href="#" class="footer-social-icon"><i class="bi bi-facebook fs-5"></i></a>
                        <a href="#" class="footer-social-icon"><i class="bi bi-instagram fs-5"></i></a>
                        <a href="#" class="footer-social-icon"><i class="bi bi-youtube fs-5"></i></a>
                        <a href="#" class="footer-social-icon"><i class="bi bi-twitter-x fs-5"></i></a>
                    </div>
                </div>

                <div class="col-6 col-lg-2 reveal reveal-delay-1">
                    <h6 class="text-white fw-bold mb-3">Programs</h6>
                    <ul class="list-unstyled small">
                        <li class="mb-2"><a href="#">Piano</a></li>
                        <li class="mb-2"><a href="#">Vocal</a></li>
                        <li class="mb-2"><a href="#">Jazz</a></li>
                        <li class="mb-2"><a href="#">Production</a></li>
                        <li class="mb-2"><a href="#">Theory</a></li>
                    </ul>
                </div>

                <div class="col-6 col-lg-2 reveal reveal-delay-2">
                    <h6 class="text-white fw-bold mb-3">Company</h6>
                    <ul class="list-unstyled small">
                        <li class="mb-2"><a href="#">About Us</a></li>
                        <li class="mb-2"><a href="#">Faculty</a></li>
                        <li class="mb-2"><a href="#">Careers</a></li>
                        <li class="mb-2"><a href="#">Press</a></li>
                        <li class="mb-2"><a href="#">Blog</a></li>
                    </ul>
                </div>

                <div class="col-6 col-lg-2 reveal reveal-delay-3">
                    <h6 class="text-white fw-bold mb-3">Support</h6>
                    <ul class="list-unstyled small">
                        <li class="mb-2"><a href="#">Help Center</a></li>
                        <li class="mb-2"><a href="#">Contact</a></li>
                        <li class="mb-2"><a href="#">Privacy</a></li>
                        <li class="mb-2"><a href="#">Terms</a></li>
                    </ul>
                </div>

                <div class="col-6 col-lg-2 reveal reveal-delay-4">
                    <h6 class="text-white fw-bold mb-3">Hours</h6>
                    <ul class="list-unstyled small">
                        <li class="mb-2">Mon-Fri: 9AM - 9PM</li>
                        <li class="mb-2">Saturday: 10AM - 6PM</li>
                        <li class="mb-2">Sunday: 12PM - 5PM</li>
                    </ul>
                </div>
            </div>

            <hr class="border-secondary">

            <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 reveal reveal-delay-3">
                <p class="small mb-0"> 2026 Resonanz Music Studio & Foundation. All rights reserved.</p>
                <div class="d-flex gap-3 small">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookie Settings</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { onMounted } from 'vue'
import { initGlobalRevealAnimations } from '@/composables/useReveal.js'

onMounted(() => {
    initGlobalRevealAnimations()
})
</script>

<style scoped>
.footer-brand {
  transition: all 0.4s ease;
}

.footer-resonanz:hover .footer-brand {
  letter-spacing: 2px;
}
</style>
