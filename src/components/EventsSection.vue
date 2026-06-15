<template>
    <section id="events" class="py-5 my-5 bg-white">
        <div class="container">
            <div class="text-center mb-5">
                <span class="text-accent fw-semibold text-uppercase tracking-wide" style="letter-spacing: 3px;">Stay
                    Updated</span>
                <h2 class="display-5 fw-bold mt-2 section-header">Upcoming Events</h2>
                <p class="text-muted mt-4 mx-auto" style="max-width: 600px;">
                    Join us for performances, workshops, and community gatherings that celebrate the power of music.
                </p>
            </div>

            <div class="row g-4">
                <div v-for="event in store.upcomingEvents" :key="event.id" class="col-md-6">
                    <div class="card card-resonanz h-100">
                        <div class="card-body p-4 d-flex gap-4">
                            <div class="flex-shrink-0">
                                <div class="event-date">
                                    <span class="day">{{ event.day }}</span>
                                    <span class="month">{{ event.month }}</span>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <span class="badge bg-accent bg-opacity-10 text-accent mb-2">{{ event.category }}</span>
                                <h5 class="fw-bold mb-2">{{ event.title }}</h5>
                                <p class="text-muted small mb-3">{{ event.description }}</p>
                                <div class="d-flex gap-3 text-muted small">
                                    <span><i class="bi bi-clock me-1"></i>{{ event.time }}</span>
                                    <span><i class="bi bi-geo-alt me-1"></i>{{ event.venue }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-5">
                <button class="btn btn-outline-dark rounded-pill px-4">
                    View All Events
                    <i class="bi bi-calendar ms-2"></i>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useStudioStore } from '@/stores/studio'
const store = useStudioStore()
</script>