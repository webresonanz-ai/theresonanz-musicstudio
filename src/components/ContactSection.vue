<template>
    <section id="contact" class="py-5 my-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-5">
                    <span class="text-accent fw-semibold text-uppercase tracking-wide" style="letter-spacing: 3px;">Get
                        In Touch</span>
                    <h2 class="display-5 fw-bold mt-2 mb-4">Start Your <span class="text-gold">Musical Journey</span>
                    </h2>
                    <p class="text-muted mb-5">
                        Ready to begin? Reach out for a free consultation, trial lesson, or to learn more about our
                        programs.
                    </p>

                    <div class="d-flex flex-column gap-4">
                        <div class="d-flex align-items-center gap-3">
                            <div class="bg-accent bg-opacity-10 rounded-3 p-3 text-accent">
                                <i class="bi bi-geo-alt fs-4"></i>
                            </div>
                            <div>
                                <h6 class="fw-bold mb-1">Visit Us</h6>
                                <p class="text-muted mb-0">123 Symphony Lane, Arts District, NY 10001</p>
                            </div>
                        </div>

                        <div class="d-flex align-items-center gap-3">
                            <div class="bg-accent bg-opacity-10 rounded-3 p-3 text-accent">
                                <i class="bi bi-envelope fs-4"></i>
                            </div>
                            <div>
                                <h6 class="fw-bold mb-1">Email Us</h6>
                                <p class="text-muted mb-0">hello@resonanz.studio</p>
                            </div>
                        </div>

                        <div class="d-flex align-items-center gap-3">
                            <div class="bg-accent bg-opacity-10 rounded-3 p-3 text-accent">
                                <i class="bi bi-telephone fs-4"></i>
                            </div>
                            <div>
                                <h6 class="fw-bold mb-1">Call Us</h6>
                                <p class="text-muted mb-0">+1 (555) 234-5678</p>
                            </div>
                        </div>
                    </div>

                    <div class="mt-5">
                        <h6 class="fw-bold mb-3">Follow Us</h6>
                        <div class="d-flex gap-3">
                            <a href="#" class="btn btn-outline-dark rounded-circle" style="width: 45px; height: 45px;">
                                <i class="bi bi-facebook"></i>
                            </a>
                            <a href="#" class="btn btn-outline-dark rounded-circle" style="width: 45px; height: 45px;">
                                <i class="bi bi-instagram"></i>
                            </a>
                            <a href="#" class="btn btn-outline-dark rounded-circle" style="width: 45px; height: 45px;">
                                <i class="bi bi-youtube"></i>
                            </a>
                            <a href="#" class="btn btn-outline-dark rounded-circle" style="width: 45px; height: 45px;">
                                <i class="bi bi-spotify"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-7">
                    <div class="card card-resonanz p-4 p-md-5">
                        <h4 class="fw-bold mb-4">Send us a Message</h4>
                        <form @submit.prevent="submitForm">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label class="form-label fw-semibold small">First Name</label>
                                    <input type="text" class="form-control form-control-lg bg-light border-0"
                                        placeholder="John">
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label fw-semibold small">Last Name</label>
                                    <input type="text" class="form-control form-control-lg bg-light border-0"
                                        placeholder="Doe">
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label fw-semibold small">Email</label>
                                    <input type="email" class="form-control form-control-lg bg-light border-0"
                                        placeholder="john@example.com">
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label fw-semibold small">Phone</label>
                                    <input type="tel" class="form-control form-control-lg bg-light border-0"
                                        placeholder="+1 234 567 890">
                                </div>
                                <div class="col-12">
                                    <label class="form-label fw-semibold small">Interested Program</label>
                                    <select class="form-select form-select-lg bg-light border-0">
                                        <option selected>Select a program</option>
                                        <option v-for="p in store.programs" :key="p.id">{{ p.title }}</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label class="form-label fw-semibold small">Message</label>
                                    <textarea class="form-control bg-light border-0" rows="4"
                                        placeholder="Tell us about your musical goals..."></textarea>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-gold w-100 btn-lg">
                                        Send Message
                                        <i class="bi bi-send ms-2"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useStudioStore } from '@/stores/studio'

const store = useStudioStore()

const submitForm = () => {
    alert('Thank you for your message! We will get back to you within 24 hours.')
}
</script>