<template>
    <main class="trms-page" style="padding-top: 80px;">
        <div class="container py-5">
            <h2 class="fw-bold mb-4" style="font-family: 'Playfair Display', serif;">Contact</h2>
            <div class="row g-4">
                <div class="col-lg-6">
                    <div class="dashboard-card">
                        <h5 class="fw-bold mb-3">Get in Touch</h5>
                        <p class="mb-3"><i class="bi bi-telephone me-2"></i>{{ trms.contact.phone }}</p>
                        <p class="mb-3"><i class="bi bi-envelope me-2"></i>{{ trms.contact.email }}</p>
                        <p class="mb-3"><i class="bi bi-geo-alt me-2"></i>{{ trms.contact.address }}</p>
                        <p class="mb-0"><i class="bi bi-clock me-2"></i>{{ trms.contact.officeHours }}</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="dashboard-card">
                        <h5 class="fw-bold mb-3">Send a Message</h5>
                        <form @submit.prevent>
                            <div class="mb-3">
                                <input type="text" class="form-control" placeholder="Your Name">
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" placeholder="Your Email">
                            </div>
                            <div class="mb-3">
                                <textarea class="form-control" rows="4" placeholder="Your Message"></textarea>
                            </div>
                            <button class="btn btn-gold rounded-pill">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useTrmsStore } from '@/stores/studio'

const trms = useTrmsStore()
</script>

<style scoped>
.trms-page {
    min-height: 100vh;
    background: linear-gradient(160deg, #f2ece6 0%, #ffffff 55%);
}
.dashboard-card {
    background: rgba(255, 255, 255, 0.88);
    border-radius: 16px;
    padding: 1.5rem;
    border: 1px solid rgba(223, 205, 109, 0.16);
}
.form-control {
    border-radius: 12px;
    padding: 0.75rem 1rem;
}
</style>