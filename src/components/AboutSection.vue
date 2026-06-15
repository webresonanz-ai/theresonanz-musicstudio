<template>
    <section id="about" class="py-5 my-5">
        <div class="container">
            <div class="row align-items-center g-5">
                <div class="col-lg-6">
                    <div class="position-relative reveal-left">
                        <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=500&fit=crop"
                            alt="Studio interior" class="img-fluid rounded-4 shadow-lg about-main-img">
                        <div class="position-absolute top-0 end-0 bg-white rounded-4 p-4 shadow-lg about-mission-card"
                            style="max-width: 250px; transform: translate(10%, -20%);">
                            <div class="d-flex align-items-center gap-3 mb-3">
                                <div class="bg-accent rounded-circle d-flex align-items-center justify-content-center text-white mission-icon"
                                    style="width: 50px; height: 50px;">
                                    <i class="bi bi-heart-fill fs-5"></i>
                                </div>
                                <div>
                                    <h5 class="fw-bold mb-0">Our Mission</h5>
                                </div>
                            </div>
                            <p class="text-muted small mb-0">
                                To make exceptional music education accessible to all, fostering creativity, discipline,
                                and a lifelong love for the arts.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <span class="text-accent fw-semibold text-uppercase tracking-wide reveal"
                        style="letter-spacing: 3px;">About Us</span>
                    <h2 class="display-5 fw-bold mt-2 reveal reveal-delay-1 section-header">
                        A Foundation Built on <span class="text-gold text-shimmer">Harmony</span>
                        & Excellence
                    </h2>
                    <p class="text-muted lead mb-4 reveal reveal-delay-2">
                        Founded in 2011, Resonanz Music Studio & Foundation has grown from a single piano room into one
                        of the region's most respected music institutions. We believe every student carries a unique
                        musical voice waiting to be discovered.
                    </p>

                    <div class="row g-4 mb-4">
                        <div class="col-md-6 reveal reveal-delay-2">
                            <div class="d-flex align-items-start gap-3">
                                <div class="value-icon-box bg-light rounded-3 p-2 text-accent">
                                    <i class="bi bi-bullseye fs-4"></i>
                                </div>
                                <div>
                                    <h6 class="fw-bold mb-1">Personalized Learning</h6>
                                    <p class="text-muted small mb-0">Tailored curricula for every age and skill level
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 reveal reveal-delay-3">
                            <div class="d-flex align-items-start gap-3">
                                <div class="value-icon-box bg-light rounded-3 p-2 text-accent">
                                    <i class="bi bi-people fs-4"></i>
                                </div>
                                <div>
                                    <h6 class="fw-bold mb-1">Community First</h6>
                                    <p class="text-muted small mb-0">Collaborative environment fostering growth</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 reveal reveal-delay-4">
                            <div class="d-flex align-items-start gap-3">
                                <div class="value-icon-box bg-light rounded-3 p-2 text-accent">
                                    <i class="bi bi-building fs-4"></i>
                                </div>
                                <div>
                                    <h6 class="fw-bold mb-1">World-Class Facilities</h6>
                                    <p class="text-muted small mb-0">Professional studios and concert halls</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 reveal reveal-delay-5">
                            <div class="d-flex align-items-start gap-3">
                                <div class="value-icon-box bg-light rounded-3 p-2 text-accent">
                                    <i class="bi bi-trophy fs-4"></i>
                                </div>
                                <div>
                                    <h6 class="fw-bold mb-1">Proven Results</h6>
                                    <p class="text-muted small mb-0">Students accepted into top conservatories</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="#programs" class="btn btn-outline-dark rounded-pill px-4 reveal reveal-delay-5">
                        Discover Our Programs
                        <i class="bi bi-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
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
.about-main-img {
    transition: transform 0.7s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.about-main-img:hover {
    transform: scale(1.03);
}

.about-mission-card {
    transition: all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.about-mission-card:hover {
    transform: translate(8%, -18%) translateY(-4px);
    box-shadow: 0 16px 45px rgba(0, 0, 0, 0.12) !important;
}

.mission-icon {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.about-mission-card:hover .mission-icon {
    transform: rotate(-10deg) scale(1.1);
}
</style>
