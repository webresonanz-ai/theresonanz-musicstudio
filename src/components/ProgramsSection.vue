<template>
    <section id="programs" class="py-5 my-5 bg-white">
        <div class="container">
            <div class="text-center mb-5">
                <span class="text-accent fw-semibold text-uppercase tracking-wide reveal"
                    style="letter-spacing: 3px;">What We Offer</span>
                <h2 class="display-5 fw-bold mt-2 reveal reveal-delay-1 section-header">Our Programs</h2>
                <p class="text-muted mt-4 mx-auto reveal reveal-delay-2" style="max-width: 600px;">
                    From classical mastery to modern production, our diverse programs cater to every musical aspiration.
                </p>
            </div>

            <div class="d-flex justify-content-center gap-2 mb-5 flex-wrap reveal reveal-delay-2">
                <button v-for="cat in categories" :key="cat" class="btn rounded-pill px-4 filter-tab"
                    :class="selectedCategory === cat ? 'btn-dark' : 'btn-outline-secondary'"
                    @click="selectedCategory = cat">
                    {{ cat }}
                </button>
            </div>

            <div class="row g-4">
                <div v-for="(program, index) in filteredPrograms" :key="program.id"
                    class="col-md-6 col-lg-4 reveal reveal-scale"
                    :class="`reveal-delay-${Math.min(index + 1, 6)}`">
                    <div class="card card-resonanz h-100">
                        <div class="card-body p-4">
                            <div class="rounded-3 d-inline-flex align-items-center justify-content-center mb-4 program-icon-wrapper"
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

                            <button class="btn btn-outline-dark w-100 rounded-pill program-btn">
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
import { ref, computed, onMounted } from 'vue'
import { useStudioStore } from '@/stores/studio'
import { initGlobalRevealAnimations } from '@/composables/useReveal.js'

const store = useStudioStore()
const selectedCategory = ref('All')

const categories = computed(() => store.programCategories)
const filteredPrograms = computed(() => {
    if (selectedCategory.value === 'All') return store.programs
    return store.programs.filter(p => p.category === selectedCategory.value)
})

onMounted(() => {
    initGlobalRevealAnimations()
})
</script>

<style scoped>
.filter-tab {
    transition: all 0.35s cubic-bezier(0.22, 0.61, 0.36, 1);
    border-width: 1.5px;
}

.filter-tab:not(.btn-dark) {
  color: #6c757d;

  &:hover {
    border-color: #1a1a2e;
    color: #1a1a2e;
    background: rgba(26, 26, 46, 0.04);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  }
}

.filter-tab.btn-dark {
  animation: borderGlow 2s ease-in-out infinite;
  border-color: transparent;
}

.program-btn {
  transition: all 0.3s ease;

  &:hover {
    background: #1a1a2e;
    border-color: #1a1a2e;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(26, 26, 46, 0.2);
  }
}
</style>
