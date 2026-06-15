<template>
    <section id="faculty" class="py-5 my-5">
        <div class="container">
            <div class="text-center mb-5">
                <span class="text-accent fw-semibold text-uppercase tracking-wide reveal"
                    style="letter-spacing: 3px;">Meet The Experts</span>
                <h2 class="display-5 fw-bold mt-2 reveal reveal-delay-1 section-header">Our Faculty</h2>
                <p class="text-muted mt-4 mx-auto reveal reveal-delay-2" style="max-width: 600px;">
                    Learn from world-renowned musicians, educators, and industry professionals dedicated to your growth.
                </p>
            </div>

            <div class="row g-4">
                <div v-for="(member, index) in store.faculty" :key="member.id"
                    class="col-md-6 col-lg-3 reveal reveal-scale"
                    :class="`reveal-delay-${Math.min(index + 1, 6)}`">
                    <div class="card card-resonanz h-100 text-center p-4 faculty-card">
                        <div class="faculty-img-wrapper mb-4">
                            <img :src="member.image" :alt="member.name" class="img-fluid">
                        </div>
                        <h5 class="fw-bold mb-1">{{ member.name }}</h5>
                        <p class="text-accent small fw-semibold mb-3">{{ member.role }}</p>
                        <p class="text-muted small mb-4">{{ member.bio }}</p>
                        <div class="d-flex flex-wrap justify-content-center gap-2">
                            <span v-for="spec in member.specialties" :key="spec"
                                class="badge bg-light text-dark faculty-badge">
                                {{ spec }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStudioStore } from '@/stores/studio'
import { initGlobalRevealAnimations } from '@/composables/useReveal.js'

const store = useStudioStore()

onMounted(() => {
    initGlobalRevealAnimations()
})
</script>

<style scoped>
.faculty-card {
  transition: all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.faculty-badge {
  transition: all 0.25s ease;
  font-size: 0.7rem;
  letter-spacing: 0.3px;
}

.faculty-card:hover .faculty-badge {
  background: rgba(201, 162, 39, 0.1);
  color: #8b6914;
}
</style>
