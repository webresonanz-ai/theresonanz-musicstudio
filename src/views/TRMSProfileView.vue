<template>
    <main class="trms-page" style="padding-top: 80px;">
        <!-- Hero Background -->
        <section class="profile-hero">
            <div class="hero-overlay">
                <h1 class="hero-title">Profile</h1>
                <p class="hero-subtitle">The Resonanz Music Studio</p>
            </div>
        </section>

        <div class="container py-5">
            <!-- Profile and Organizations -->
            <div class="row g-4 mb-5">
                <div class="col-lg-8">
                    <div class="content-section mb-4">
                        <h3 class="section-title">Profile</h3>
                        <p class="section-text">{{ trms.profile.tagline }}</p>
                        <p class="section-content">{{ trms.profile.description }}</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="content-section">
                        <h3 class="section-title">Collaborate Organization</h3>
                        <div class="org-list">
                            <div v-for="org in trms.organizations" :key="org.name" class="org-item">
                                <i :class="org.icon" class="org-icon"></i>
                                <span>{{ org.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Director Profile -->
            <section class="director-section mb-5">
                <div class="director-card">
                    <div class="row g-4 align-items-center">
                        <div class="col-md-4">
                            <img :src="trms.director.image" :alt="trms.director.name" class="director-image">
                        </div>
                        <div class="col-md-8">
                            <h3 class="section-title">{{ trms.director.name }}</h3>
                            <p class="text-gold fw-semibold mb-3">{{ trms.director.role }}</p>
                            <p class="section-content">{{ trms.director.bio }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Facilities -->
            <section class="facilities-section mb-5">
                <h3 class="section-title mb-4">Facilities</h3>
                <div class="row g-4">
                    <div v-for="facility in trms.facilities" :key="facility.id" class="col-sm-6 col-lg-3">
                        <div class="facility-card">
                            <i :class="facility.icon" class="facility-icon"></i>
                            <h5 class="facility-name">{{ facility.name }}</h5>
                            <p class="facility-desc">{{ facility.description }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Gallery -->
            <section class="gallery-section">
                <h3 class="section-title mb-4">Gallery</h3>
                <div class="gallery-grid">
                    <div v-for="(img, index) in trms.galleryImages" :key="index" class="gallery-item">
                        <img :src="img" :alt="`Gallery image ${index + 1}`" class="gallery-image">
                    </div>
                </div>
            </section>
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

.profile-hero {
    position: relative;
    height: 20vh;
    min-height: 180px;
    background: url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1600&h=800&fit=crop') center/cover no-repeat;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: rgba(63, 3, 3, 0.75);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
}

.hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    margin: 0;
    color: #fff;
}

.hero-subtitle {
    font-size: 1.1rem;
    color: #dfcd6d;
    margin: 0.5rem 0 0;
}

.content-section {
    background: rgba(255, 255, 255, 0.88);
    border-radius: 16px;
    padding: 1.5rem;
    border: 1px solid rgba(223, 205, 109, 0.16);
    height: 100%;
}

.section-title {
    font-family: 'Playfair Display', serif;
    color: #3f0303;
    margin-bottom: 1rem;
    position: relative;
    padding-bottom: 0.5rem;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #b19426, #dfcd6d);
}

.text-gold {
    color: #b19426;
}

.org-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.org-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    background: rgba(223, 205, 109, 0.1);
    border-radius: 12px;
}

.org-icon {
    color: #b19426;
    font-size: 1.2rem;
}

.director-card {
    background: rgba(255, 255, 255, 0.88);
    border-radius: 16px;
    padding: 2rem;
    border: 1px solid rgba(223, 205, 109, 0.16);
}

.director-image {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 12px;
}

.section-content {
    line-height: 1.7;
    color: rgba(63, 3, 3, 0.7);
    white-space: pre-wrap;
}

.facility-card {
    background: rgba(255, 255, 255, 0.88);
    border-radius: 16px;
    padding: 1.5rem;
    text-align: center;
    border: 1px solid rgba(223, 205, 109, 0.16);
    height: 100%;
}

.facility-icon {
    font-size: 2rem;
    color: #b19426;
    margin-bottom: 1rem;
}

.facility-name {
    color: #3f0303;
    margin-bottom: 0.5rem;
}

.facility-desc {
    color: rgba(63, 3, 3, 0.6);
    font-size: 0.9rem;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
}

.gallery-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 12px;
    transition: transform 0.3s ease;
}

.gallery-image:hover {
    transform: scale(1.05);
}

@media (max-width: 576px) {
    .hero-title {
        font-size: 1.8rem;
    }

    .hero-subtitle {
        font-size: 0.9rem;
    }

    .director-image {
        height: 200px;
    }
}
</style>