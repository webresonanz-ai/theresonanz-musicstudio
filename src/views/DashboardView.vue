<template>
    <div class="bg-light min-vh-100" style="padding-top: 80px;">
        <div class="container py-5">
            <!-- Dashboard Header -->
            <div class="d-flex justify-content-between align-items-center mb-5">
                <div>
                    <h2 class="fw-bold mb-1" style="font-family: 'Playfair Display', serif;">Foundation Dashboard</h2>
                    <p class="text-muted mb-0">Real-time insights and management overview</p>
                </div>
                <div class="d-flex gap-2">
                    <button class="btn btn-outline-dark rounded-pill">
                        <i class="bi bi-download me-2"></i>Export Report
                    </button>
                    <button class="btn btn-gold rounded-pill">
                        <i class="bi bi-plus-lg me-2"></i>New Entry
                    </button>
                </div>
            </div>

            <!-- Stats Grid -->
            <div class="row g-4 mb-5">
                <div v-for="(stat, key) in statCards" :key="key" class="col-6 col-lg-4 col-xl-2">
                    <div class="stat-card">
                        <div class="stat-icon mb-3">
                            <i :class="['bi', stat.icon]"></i>
                        </div>
                        <h3 class="fw-bold mb-1">{{ store.stats[key] }}</h3>
                        <p class="text-white-50 small mb-0">{{ stat.label }}</p>
                    </div>
                </div>
            </div>

            <div class="row g-4">
                <!-- Programs Overview -->
                <div class="col-lg-8">
                    <div class="dashboard-card h-100">
                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <h5 class="fw-bold mb-0">Programs Overview</h5>
                            <button class="btn btn-sm btn-outline-secondary rounded-pill">View All</button>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-hover align-middle">
                                <thead class="table-light">
                                    <tr>
                                        <th>Program</th>
                                        <th>Category</th>
                                        <th>Duration</th>
                                        <th>Level</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="program in store.programs" :key="program.id">
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="rounded-2 d-flex align-items-center justify-content-center"
                                                    style="width: 36px; height: 36px;"
                                                    :style="{ backgroundColor: program.color + '15', color: program.color }">
                                                    <i :class="['bi', program.icon, 'small']"></i>
                                                </div>
                                                <span class="fw-semibold small">{{ program.title }}</span>
                                            </div>
                                        </td>
                                        <td><span class="badge bg-light text-dark">{{ program.category }}</span></td>
                                        <td class="text-muted small">{{ program.duration }}</td>
                                        <td class="text-muted small">{{ program.level }}</td>
                                        <td><span class="badge bg-success bg-opacity-10 text-success">Active</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Recent Activity -->
                <div class="col-lg-4">
                    <div class="dashboard-card h-100">
                        <h5 class="fw-bold mb-4">Recent Activity</h5>
                        <div class="d-flex flex-column gap-3">
                            <div v-for="i in 5" :key="i" class="d-flex gap-3 align-items-start">
                                <div class="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center text-white"
                                    style="width: 36px; height: 36px; background: linear-gradient(135deg, #1a1a2e, #e94560);">
                                    <i class="bi bi-person small"></i>
                                </div>
                                <div>
                                    <p class="small fw-semibold mb-1">New student enrollment</p>
                                    <p class="text-muted small mb-0">Sarah M. joined Piano Mastery</p>
                                    <small class="text-muted">2 hours ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Upcoming Events -->
                <div class="col-lg-6">
                    <div class="dashboard-card">
                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <h5 class="fw-bold mb-0">Upcoming Events</h5>
                            <button class="btn btn-sm btn-outline-secondary rounded-pill">Calendar</button>
                        </div>
                        <div class="d-flex flex-column gap-3">
                            <div v-for="event in store.upcomingEvents.slice(0, 3)" :key="event.id"
                                class="d-flex gap-3 align-items-center p-3 rounded-3 bg-light">
                                <div class="event-date flex-shrink-0" style="width: 55px; height: 55px;">
                                    <span class="day" style="font-size: 18px;">{{ event.day }}</span>
                                    <span class="month" style="font-size: 10px;">{{ event.month }}</span>
                                </div>
                                <div class="flex-grow-1">
                                    <h6 class="fw-bold mb-1 small">{{ event.title }}</h6>
                                    <p class="text-muted mb-0 small"><i class="bi bi-clock me-1"></i>{{ event.time }} ·
                                        {{ event.venue }}</p>
                                </div>
                                <button class="btn btn-sm btn-outline-dark rounded-pill">Details</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Quick Stats Chart Placeholder -->
                <div class="col-lg-6">
                    <div class="dashboard-card">
                        <h5 class="fw-bold mb-4">Enrollment Trends</h5>
                        <div class="bg-light rounded-3 p-4 text-center">
                            <div class="row g-3">
                                <div class="col-4">
                                    <h4 class="text-accent fw-bold mb-1">+24%</h4>
                                    <small class="text-muted">This Month</small>
                                </div>
                                <div class="col-4">
                                    <h4 class="text-gold fw-bold mb-1">+18%</h4>
                                    <small class="text-muted">This Quarter</small>
                                </div>
                                <div class="col-4">
                                    <h4 class="fw-bold mb-1">+67%</h4>
                                    <small class="text-muted">This Year</small>
                                </div>
                            </div>
                            <div class="mt-4 p-3 bg-white rounded-3">
                                <div class="d-flex align-items-end gap-2 justify-content-center" style="height: 120px;">
                                    <div v-for="h in [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88]" :key="h"
                                        class="rounded-top"
                                        style="width: 20px; background: linear-gradient(to top, #1a1a2e, #e94560);"
                                        :style="{ height: h + '%', opacity: 0.7 + (h / 300) }"></div>
                                </div>
                                <div class="d-flex justify-content-between mt-2 text-muted small">
                                    <span>Jan</span><span>Dec</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStudioStore } from '@/stores/studio'

const store = useStudioStore()

const statCards = {
    students: { label: 'Total Students', icon: 'bi-people' },
    faculty: { label: 'Faculty Members', icon: 'bi-person-badge' },
    programs: { label: 'Active Programs', icon: 'bi-collection' },
    concerts: { label: 'Concerts Held', icon: 'bi-music-note-beamed' },
    awards: { label: 'Awards Won', icon: 'bi-trophy' },
    years: { label: 'Years Active', icon: 'bi-calendar-check' }
}
</script>