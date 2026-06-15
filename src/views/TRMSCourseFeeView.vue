<template>
    <main class="trms-page" style="padding-top: 80px;">
        <div class="container py-5">
            <h2 class="fw-bold mb-4" style="font-family: 'Playfair Display', serif;">Course Fees</h2>
            <div class="dashboard-card">
                <div class="table-responsive">
                    <table class="table table-hover align-middle">
                        <thead class="table-light">
                            <tr>
                                <th>Type</th>
                                <th>Price</th>
                                <th>Unit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="fee in trms.courseFees" :key="fee.id">
                                <td>{{ fee.type }}</td>
                                <td class="fw-bold" style="color: #b19426;">${{ fee.price }}</td>
                                <td class="text-muted">{{ fee.unit }}</td>
                            </tr>
                        </tbody>
                    </table>
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