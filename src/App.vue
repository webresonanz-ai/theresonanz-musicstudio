<template>
    <div id="app">
        <Sidebar :is-open="isSidebarOpen" @close-sidebar="closeSidebar" />
        <div class="sidebar-aware">
            <Navbar @toggle-sidebar="toggleSidebar" />
            <router-view />
            <Footer />
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const isSidebarOpen = ref(false)

function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
}

function closeSidebar() {
    isSidebarOpen.value = false
}

function handleResize() {
    if (window.innerWidth > 992) {
        closeSidebar()
    }
}

onMounted(() => {
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
</script>