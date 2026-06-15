<template>
    <main class="trms-page" style="padding-top: 80px;">
        <div class="container py-5">
            <h2 class="fw-bold mb-4" style="font-family: 'Playfair Display', serif;">Courses</h2>
            <div class="row g-4">
                <div v-for="course in trms.courses" :key="course.id" class="col-md-6 col-lg-4">
                    <div class="dashboard-card h-100">
                        <h5 class="fw-bold mb-2">{{ course.name }}</h5>
                        <span class="badge bg-light text-dark mb-2">{{ course.category }}</span>
                        <p class="text-muted small mb-2">{{ course.duration }} | {{ course.level }}</p>
                        <p class="fw-semibold mb-1">Instructor: {{ course.instructor }}</p>
                        <p class="text-muted small mb-2">Schedule: {{ course.schedule }}</p>
                        <p class="fw-bold mb-0" style="color: #b19426;">${{ course.price }}</p>
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
</style>