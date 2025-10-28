<template>
  <div class="hero-banner-animation">
    <div v-for="n in 10" :key="n" class="circle" :class="'circle-' + n"></div>
  </div>
</template>

<script>
export default {
  name: 'HeroBannerAnimation',
}
</script>

<style scoped>
.hero-banner-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
}

.circle {
  position: absolute;
  background: radial-gradient(circle, rgba(255, 214, 95, 0.5) 0%, rgba(255, 214, 95, 0) 70%); /* Gradient background */
  border-radius: 50%;
  animation: move 20s linear infinite;
  opacity: 0.5;
}

/* Base size for mobile */
.circle {
  width: 480px;
  height: 480px;
}

/* Larger size for medium and larger devices */
@media (min-width: 640px) {
  .circle {
    width: 720px;
    height: 720px;
  }
}

@media (min-width: 1280px) {
  .circle {
    width: 1280px;
    height: 1280px;
  }
}

/* Keyframes for top left to bottom right */
@keyframes move-tl-br {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(100vw, 100vh);
  }
}

/* Keyframes for bottom left to top right */
@keyframes move-bl-tr {
  0% {
    transform: translate(0, 100vh);
  }
  100% {
    transform: translate(100vw, 0);
  }
}

/* Keyframes for static position */
@keyframes move-static {
  0%, 100% {
    transform: translate(0, 0);
  }
}

/* Assigning different animations to circles */
.circle-1 {
  top: 10%;
  left: 10%;
  animation: move-tl-br 25s linear infinite;
  animation-delay: 0s;
}

.circle-2 {
  top: 20%;
  left: 70%;
  animation: move-tl-br 30s linear infinite;
  animation-delay: 2s;
}

.circle-3 {
  top: 50%;
  left: 30%;
  animation: move-tl-br 18s linear infinite;
  animation-delay: 4s;
}

.circle-4 {
  top: 70%;
  left: 50%;
  animation: move-bl-tr 28s linear infinite;
  animation-delay: 6s;
}

.circle-5 {
  top: 80%;
  left: 20%;
  animation: move-bl-tr 35s linear infinite;
  animation-delay: 8s;
}

.circle-6 {
  top: 15%;
  left: 80%;
  animation: move-bl-tr 22s linear infinite;
  animation-delay: 1s;
}

.circle-7 {
  top: 25%;
  left: 40%;
  animation: move-static 27s linear infinite;
  animation-delay: 3s;
}

.circle-8 {
  top: 55%;
  left: 60%;
  animation: move-static 20s linear infinite;
  animation-delay: 5s;
}

.circle-9 {
  top: 75%;
  left: 30%;
  animation: move-static 32s linear infinite;
  animation-delay: 7s;
}

.circle-10 {
  top: 85%;
  left: 70%;
  animation: move-static 24s linear infinite;
  animation-delay: 9s;
}
</style>
