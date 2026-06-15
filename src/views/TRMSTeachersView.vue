<template>
    <main class="trms-page" style="padding-top: 80px;">
        <div class="container py-5">
            <h2 class="fw-bold mb-4" style="font-family: 'Playfair Display', serif;">Teachers</h2>
            <div class="row g-4">
                <div v-for="teacher in trms.teachers" :key="teacher.id" class="col-md-6 col-lg-4">
                    <div class="dashboard-card h-100">
                        <div class="text-center mb-3">
                            <img :src="teacher.image" :alt="teacher.name" class="rounded-circle mb-3" style="width: 100px; height: 100px; object-fit: cover;">
                            <h5 class="fw-bold mb-1">{{ teacher.name }}</h5>
                            <p class="text-muted small">{{ teacher.role }}</p>
                        </div>
                        <p class="small mb-2">{{ teacher.bio }}</p>
                        <div>
                            <span v-for="spec in teacher.specialties" :key="spec" class="badge bg-light text-dark me-1">{{ spec }}</span>
                        </div>
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