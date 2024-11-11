export default defineNuxtPlugin(() => {
  nextTick(() => {
    const script = document.createElement("script");
    script.src = "https://embed.small.chat/T179A90J0GVC000RNZ.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  });
}) 