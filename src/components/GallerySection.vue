<template>
    <section class="py-5 my-5">
        <div class="container">
            <div class="text-center mb-5">
                <span class="text-accent fw-semibold text-uppercase tracking-wide" style="letter-spacing: 3px;">Visual
                    Journey</span>
                <h2 class="display-5 fw-bold mt-2 section-header">Gallery</h2>
                <p class="text-muted mt-4 mx-auto" style="max-width: 600px;">
                    Glimpses of performances, rehearsals, and the vibrant life at Resonanz.
                </p>
            </div>

            <div class="row g-3">
                <div v-for="(img, index) in store.gallery" :key="index" class="col-6 col-md-4">
                    <div class="gallery-item ratio ratio-4x3">
                        <img :src="img" :alt="`Gallery image ${index + 1}`" class="img-fluid object-fit-cover">
                        <div class="gallery-overlay rounded-3">
                            <i class="bi bi-zoom-in"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useStudioStore } from '@/stores/studio'
const store = useStudioStore()
</script>