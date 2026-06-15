<template>
    <main class="trms-page" style="padding-top: 80px;">
        <div class="container py-5">
            <h2 class="fw-bold mb-4" style="font-family: 'Playfair Display', serif;">News</h2>
            <div class="row g-4">
                <div v-for="article in trms.news" :key="article.id" class="col-lg-6">
                    <div class="dashboard-card h-100">
                        <h5 class="fw-bold mb-2">{{ article.title }}</h5>
                        <small class="text-muted d-block mb-2">{{ formatDate(article.date) }}</small>
                        <p>{{ article.excerpt }}</p>
                        <p class="small text-muted">{{ article.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useTrmsStore } from '@/stores/studio'

const trms = useTrmsStore()

const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
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