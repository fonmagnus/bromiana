<template>
  <span class="underline-primary">
    <span class="underline-content">
      <slot></slot>
    </span>
  </span>
</template>

<script>
export default {
  name: 'UnderlinedText',
};
</script>

<style scoped>
.underline-primary {
  position: relative;
  display: inline-flex; /* Use inline-flex to align items inside an inline container */
  align-items: center; /* Vertically center items */
  text-underline-offset: 4px; /* Add space above the underline */
}

.underline-content {
  display: inline-block; /* Ensure the content spans only the necessary width */
  position: relative; /* Needed for the absolute positioning of the pseudo-element */
}

.underline-content::after {
  content: '';
  position: absolute;
  bottom: -4px; /* Offset for the underline */
  left: 0;
  width: 100%;
  height: 4px; /* Adjust thickness */
  background-color: #FBBC05; /* Primary color */
  transform-origin: left;
  /* animation: sliding-window 2s linear infinite; */
}

@keyframes sliding-window {
  0% {
    transform: scaleX(0);
    left: 0;
  }
  50% {
    transform: scaleX(1);
    left: 0;
  }
  50.01% {
    transform: scaleX(1);
    left: 0;
  }
  100% {
    transform: scaleX(1);
    left: 100%;
  }
}
</style>
