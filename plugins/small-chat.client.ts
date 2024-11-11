export default defineNuxtPlugin(() => {
  const loadSmallChat = () => {
    // Remove any existing instances
    const existingScript = document.querySelector('script[src*="small.chat"]')
    if (existingScript) return

    // Create and configure script
    const script = document.createElement("script")
    script.src = "https://embed.small.chat/T179A90J0GVC000RNZ.js"
    script.async = true
    script.defer = true
    script.setAttribute("fetchpriority", "low")
    script.setAttribute("loading", "lazy")
    
    // Add loading optimization attributes
    script.setAttribute("data-type", "third-party")
    script.setAttribute("importance", "low")

    // Load script only when user has scrolled or after 5 seconds
    const appendScript = () => {
      document.body.appendChild(script)
      // Cleanup listeners
      window.removeEventListener('scroll', scrollHandler)
      document.removeEventListener('mousemove', appendScript)
    }

    // Scroll handler with debounce
    let scrollTimeout: NodeJS.Timeout
    const scrollHandler = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(appendScript, 150)
    }

    // Add multiple triggers for loading
    window.addEventListener('scroll', scrollHandler, { passive: true })
    document.addEventListener('mousemove', appendScript, { once: true })
    
    // Fallback loading after 5 seconds
    setTimeout(appendScript, 5000)
  }

  // Load after initial page render
  if (process.client) {
    nextTick(() => {
      // Wait for page load
      if (document.readyState === 'complete') {
        loadSmallChat()
      } else {
        window.addEventListener('load', loadSmallChat)
      }
    })
  }
})
