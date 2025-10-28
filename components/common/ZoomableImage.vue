<template>
  <div class="relative rounded-xl overflow-hidden" @mouseenter="hovered = true" @mouseleave="hovered = false">
    <img
      :src="imageSrc"
      :alt="alt"
      class="rounded-xl h-full w-full object-cover hover:scale-125 transition-all"
    />
    <div 
      class="text-sm text-center absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 transition-all"
      :class="{ 'lg:transform lg:translate-y-full': !hovered, 'lg:transform lg:translate-y-0': hovered }"
    >
      {{ caption }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoundedImage',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      hovered: false
    }
  },
  computed: {
    imageSrc() {
      return require(`@/assets/images/${this.src}`);
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>