<template>
  <section class="w-full h-full relative">
    <div
      v-for="(image, index) in images"
      :key="index"
      :class="['absolute w-full h-full transition-opacity', { 'opacity-0': index !== currentIndex, 'opacity-100': index === currentIndex }]"
      :style="{ backgroundImage: `url(${require(`@/assets/images/${image}`)})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
    ></div>
  </section>
</template>

<script>
export default {
  name: 'ImageCollection',
  props: {
    images: {
      type: Array,
      required: true
    },
    interval: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  mounted() {
    this.startImageRotation();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    startImageRotation() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, this.interval);
    }
  }
};
</script>

<style scoped>
.absolute {
  top: 0;
  left: 0;
}
.transition-opacity {
  transition: opacity 1s ease-in-out;
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
</style>
