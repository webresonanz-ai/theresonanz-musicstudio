<template>
    <button v-if="isOpen" class="sidebar-backdrop" type="button" aria-label="Close organization sidebar" @click="emit('close-sidebar')"></button>

    <aside class="organization-sidebar" :class="{ 'is-open': isOpen }">
        <div class="sidebar-brand">
            <i class="bi bi-buildings"></i>
            <div>
                <h1>TRMS</h1>
                <p>Organization Hub</p>
            </div>
        </div>

        <div class="sidebar-section">
            <span>Organizations</span>
        </div>

        <nav class="sidebar-nav" aria-label="Organization sidebar">
            <router-link v-for="item in organizations" :key="item.name" custom :to="item.path" v-slot="{ href, isActive, navigate }">
                <a class="sidebar-link" :class="{ active: isActive }" :href="href" @click="handleNavigate(navigate)">
                    <i :class="item.icon"></i>
                    <span>{{ item.name }}</span>
                </a>
            </router-link>
        </nav>

        <div class="sidebar-footer">
            <i class="bi bi-music-note-beamed"></i>
            <span>Powered by TRMS</span>
        </div>
    </aside>
</template>

<script setup>
import { onUnmounted, watch } from 'vue'

defineOptions({
    name: 'OrganizationSidebar'
})

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['close-sidebar'])

const organizations = [
    {
        name: 'TRMS',
        path: '/',
        icon: 'bi bi-house-door-fill'
    },
    {
        name: 'BMS',
        path: '/organizations/bms',
        icon: 'bi bi-diagram-3'
    },
    {
        name: 'TRCC',
        path: '/organizations/trcc',
        icon: 'bi bi-music-note-list'
    },
    {
        name: 'JCO',
        path: '/organizations/jco',
        icon: 'bi bi-people'
    }
]

function handleNavigate(navigate) {
    navigate()
    emit('close-sidebar')
}

watch(() => props.isOpen, value => {
    document.body.classList.toggle('sidebar-open', value)
})

onUnmounted(() => {
    document.body.classList.remove('sidebar-open')
})
</script>

<style scoped>
:global(:root) {
    --sidebar-width: 280px;
}

:global(.sidebar-aware) {
    margin-left: var(--sidebar-width);
    width: calc(100% - var(--sidebar-width));
    transition: margin-left 0.3s ease, width 0.3s ease;
}

.organization-sidebar {
    position: fixed;
    inset: 0 auto 0 0;
    z-index: 1050;
    width: var(--sidebar-width);
    height: 100vh;
    overflow-y: auto;
    background: linear-gradient(180deg, #1a1a2e 0%, #10152f 100%);
    color: rgba(255, 255, 255, 0.82);
    border-right: 1px solid rgba(201, 162, 39, 0.18);
    box-shadow: 12px 0 40px rgba(0, 0, 0, 0.22);
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1rem;
    transition: transform 0.3s ease;
}

.sidebar-backdrop {
    display: none;
}

.sidebar-brand {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    padding: 1rem 0.75rem 1.25rem;
    border-bottom: 1px solid rgba(201, 162, 39, 0.16);
}

.sidebar-brand i {
    width: 48px;
    height: 48px;
    border-radius: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(201, 162, 39, 0.14);
    color: #e9c84a;
    font-size: 1.5rem;
}

.sidebar-brand h1 {
    margin: 0;
    font-family: 'Playfair Display', serif;
    font-size: 1.55rem;
    color: #fff;
    letter-spacing: 0.08em;
}

.sidebar-brand p {
    margin: 0.1rem 0 0;
    color: rgba(255, 255, 255, 0.58);
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.sidebar-section {
    margin: 1.45rem 0 0.7rem;
    padding: 0 0.75rem;
}

.sidebar-section span {
    color: rgba(255, 255, 255, 0.42);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
}

.sidebar-nav {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
}

.sidebar-link {
    display: grid;
    grid-template-columns: 38px 1fr;
    align-items: center;
    gap: 0.75rem;
    padding: 0.8rem 0.85rem;
    border-radius: 16px;
    color: rgba(255, 255, 255, 0.76);
    text-decoration: none;
    transition: all 0.25s ease;
    position: relative;
    overflow: hidden;
}

.sidebar-link::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(201, 162, 39, 0.16), rgba(233, 69, 96, 0.06));
    opacity: 0;
    transition: opacity 0.25s ease;
}

.sidebar-link i {
    position: relative;
    z-index: 1;
    width: 38px;
    height: 38px;
    border-radius: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.76);
    font-size: 1.1rem;
}

.sidebar-link span,
.sidebar-link small {
    position: relative;
    z-index: 1;
}

.sidebar-link span {
    font-weight: 700;
    letter-spacing: 0.02em;
}

.sidebar-link:hover,
.sidebar-link.active {
    color: #fff;
    transform: translateX(3px);
}

.sidebar-link:hover::before,
.sidebar-link.active::before {
    opacity: 1;
}

.sidebar-link.active i {
    background: linear-gradient(135deg, #c9a227, #e9c84a);
    color: #1a1a2e;
    box-shadow: 0 10px 24px rgba(201, 162, 39, 0.24);
}

.sidebar-footer {
    margin-top: auto;
    padding: 1rem 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: rgba(255, 255, 255, 0.5);
    border-top: 1px solid rgba(201, 162, 39, 0.14);
    font-size: 0.82rem;
}

.sidebar-footer i {
    color: #e9c84a;
}

@media (max-width: 992px) {
    :global(:root) {
        --sidebar-width: 280px;
    }

    :global(.sidebar-aware) {
        margin-left: 0;
        width: 100%;
    }

    :global(body.sidebar-open) {
        overflow: hidden;
    }

    .sidebar-backdrop {
        position: fixed;
        inset: 0;
        z-index: 1040;
        display: block;
        width: 100%;
        border: 0;
        background: rgba(0, 0, 0, 0.45);
        backdrop-filter: blur(3px);
    }

    .organization-sidebar {
        transform: translateX(-100%);
    }

    .organization-sidebar.is-open {
        transform: translateX(0);
    }
}
</style>
