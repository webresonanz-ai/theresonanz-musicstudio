<template>
    <section id="programs" class="py-5 my-5 bg-white">
        <div class="container">
            <div class="text-center mb-5">
                <span class="text-accent fw-semibold text-uppercase tracking-wide" style="letter-spacing: 3px;">What We
                    Offer</span>
                <h2 class="display-5 fw-bold mt-2 section-header">Our Programs</h2>
                <p class="text-muted mt-4 mx-auto" style="max-width: 600px;">
                    From classical mastery to modern production, our diverse programs cater to every musical aspiration.
                </p>
            </div>

            <!-- Filter Tabs -->
            <div class="d-flex justify-content-center gap-2 mb-5 flex-wrap">
                <button v-for="cat in categories" :key="cat" class="btn rounded-pill px-4"
                    :class="selectedCategory === cat ? 'btn-dark' : 'btn-outline-secondary'"
                    @click="selectedCategory = cat">
                    {{ cat }}
                </button>
            </div>

            <div class="row g-4">
                <div v-for="program in filteredPrograms" :key="program.id" class="col-md-6 col-lg-4">
                    <div class="card card-resonanz h-100">
                        <div class="card-body p-4">
                            <div class="rounded-3 d-inline-flex align-items-center justify-content-center mb-4"
                                style="width: 60px; height: 60px;"
                                :style="{ backgroundColor: program.color + '15', color: program.color }">
                                <i :class="['bi', program.icon, 'fs-3']"></i>
                            </div>
                            <span class="badge bg-light text-dark mb-2">{{ program.category }}</span>
                            <h4 class="fw-bold mb-3">{{ program.title }}</h4>
                            <p class="text-muted mb-4">{{ program.description }}</p>

                            <div class="d-flex gap-3 text-muted small mb-4">
                                <span><i class="bi bi-clock me-1"></i>{{ program.duration }}</span>
                                <span><i class="bi bi-bar-chart me-1"></i>{{ program.level }}</span>
                            </div>

                            <button class="btn btn-outline-dark w-100 rounded-pill">
                                Learn More
                                <i class="bi bi-arrow-right ms-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStudioStore } from '@/stores/studio'

const store = useStudioStore()
const selectedCategory = ref('All')

const categories = computed(() => store.programCategories)
const filteredPrograms = computed(() => {
    if (selectedCategory.value === 'All') return store.programs
    return store.programs.filter(p => p.category === selectedCategory.value)
})
</script>