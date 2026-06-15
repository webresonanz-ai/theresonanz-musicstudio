<template>
    <main class="coming-soon-page">
        <section class="coming-soon-section">
            <div class="coming-soon-card reveal active">
                <div class="coming-soon-icon">
                    <i class="bi bi-cone-striped"></i>
                </div>
                <span class="coming-soon-label">Coming Soon</span>
                <h1>{{ displayName }} Section</h1>
                <p>
                    The {{ displayName }} section is currently being prepared.
                    Check back soon for updates, shared programs, and announcements.
                </p>
                <router-link class="btn btn-gold rounded-pill px-4" to="/">
                    <i class="bi bi-house-door me-2"></i>Back to TRMS
                </router-link>
            </div>
        </section>
    </main>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    organization: {
        type: String,
        required: true
    }
})

const displayNameMap = {
    bms: 'BMS',
    trcc: 'TRCC',
    jco: 'JCO'
}

const displayName = computed(() => displayNameMap[props.organization] || props.organization.toUpperCase())
</script>

<style scoped>
.coming-soon-page {
    min-height: 100vh;
    padding: 8rem 1.5rem 4rem;
    background:
        radial-gradient(circle at 20% 20%, rgba(223, 205, 109, 0.12), transparent 32%),
        radial-gradient(circle at 80% 10%, rgba(177, 148, 38, 0.12), transparent 28%),
        linear-gradient(160deg, #f2ece6 0%, #ffffff 55%, #f2ece6 100%);
}

.coming-soon-section {
    min-height: calc(100vh - 12rem);
    display: flex;
    align-items: center;
    justify-content: center;
}

.coming-soon-card {
    max-width: 680px;
    text-align: center;
    padding: 3.5rem 2.5rem;
    border-radius: 32px;
    background: rgba(255, 255, 255, 0.88);
    border: 1px solid rgba(223, 205, 109, 0.16);
    box-shadow: 0 24px 70px rgba(63, 3, 3, 0.12);
    backdrop-filter: blur(18px);
}

.coming-soon-icon {
    width: 86px;
    height: 86px;
    border-radius: 28px;
    margin: 0 auto 1.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #3f0303;
    background: linear-gradient(135deg, #b19426, #dfcd6d);
    box-shadow: 0 18px 40px rgba(177, 148, 38, 0.28);
    font-size: 2.4rem;
}

.coming-soon-label {
    display: inline-flex;
    padding: 0.45rem 0.9rem;
    border-radius: 999px;
    color: #b19426;
    background: rgba(177, 148, 38, 0.1);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-transform: uppercase;
}

.coming-soon-card h1 {
    margin: 1.15rem 0 0.9rem;
    color: #3f0303;
    font-family: 'Playfair Display', serif;
}

.coming-soon-card p {
    margin: 0 auto 2rem;
    max-width: 520px;
    color: rgba(63, 3, 3, 0.68);
    line-height: 1.8;
}

@media (max-width: 576px) {
    .coming-soon-page {
        padding-top: 6rem;
    }

    .coming-soon-card {
        padding: 2.5rem 1.4rem;
        border-radius: 26px;
    }
}
</style>
