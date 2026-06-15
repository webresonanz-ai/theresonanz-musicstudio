import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const observerMap = new Map()

function getOrCreateObserver(threshold, rootMargin) {
  const key = `${threshold}-${rootMargin}`
  if (observerMap.has(key)) {
    return observerMap.get(key)
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold, rootMargin }
  )

  observerMap.set(key, observer)
  return observer
}

export function useReveal(options = {}) {
  const elementRef = ref(null)
  const threshold = options.threshold ?? 0.12
  const rootMargin = options.rootMargin ?? '0px 0px -40px 0px'

  onMounted(async () => {
    await nextTick()
    const el = elementRef.value
    if (el) {
      const observer = getOrCreateObserver(threshold, rootMargin)
      observer.observe(el)
    }
  })

  onUnmounted(() => {
    const el = elementRef.value
    if (el) {
      const key = `${threshold}-${rootMargin}`
      const observer = observerMap.get(key)
      if (observer) {
        observer.unobserve(el)
      }
    }
  })

  return { elementRef }
}

const revealSelectors = [
  '.reveal',
  '.reveal-left',
  '.reveal-right',
  '.reveal-scale',
]

let globalObserver = null
let mutationObserver = null
let isInitialized = false

export function initGlobalRevealAnimations() {
  if (isInitialized) return

  function observeAll() {
    revealSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        if (!el.classList.contains('active')) {
          globalObserver.observe(el)
        }
      })
    })
  }

  globalObserver = getOrCreateObserver(0.12, '0px 0px -40px 0px')

  mutationObserver = new MutationObserver(() => {
    observeAll()
  })

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  })

  observeAll()
  isInitialized = true
}

export function destroyGlobalRevealAnimations() {
  if (mutationObserver) {
    mutationObserver.disconnect()
    mutationObserver = null
  }
  if (globalObserver) {
    globalObserver.disconnect()
    globalObserver = null
  }
  isInitialized = false
}
