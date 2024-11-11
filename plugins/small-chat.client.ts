export default defineNuxtPlugin(() => {
  setTimeout(() => {
    const script = document.createElement("script");
    script.src = "https://embed.small.chat/T179A90J0GVC000RNZ.js";
    script.async = true;
    script.defer = true;
    script.setAttribute("fetchpriority", "low");
    document.body.appendChild(script);
  }, 2000);
});
