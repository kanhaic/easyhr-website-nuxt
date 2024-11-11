export default defineNuxtPlugin(() => {
  if (process.client) {
    // Add resource hints dynamically
    const addResourceHint = (url: string, type: 'preload' | 'prefetch') => {
      const link = document.createElement('link')
      link.rel = type
      link.href = url
      link.as = 'script'
      document.head.appendChild(link)
    }

    // Prefetch main third-party resources
    window.addEventListener('load', () => {
      // Delay prefetching to not block main content
      setTimeout(() => {
        addResourceHint('https://static.small.chat/messenger.js', 'prefetch')
        addResourceHint('https://static.small.chat/messenger.css', 'prefetch')
      }, 5000)
    })
  }
}) 