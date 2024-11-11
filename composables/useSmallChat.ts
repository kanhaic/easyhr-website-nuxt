export const useSmallChat = () => {
  const isLoaded = ref(false)

  const initialize = () => {
    // You can add additional initialization logic here
    isLoaded.value = true
  }

  const destroy = () => {
    // Clean up logic if needed
    const existingScript = document.querySelector('script[src*="small.chat"]')
    if (existingScript) {
      existingScript.remove()
    }
    isLoaded.value = false
  }

  return {
    isLoaded,
    initialize,
    destroy
  }
} 