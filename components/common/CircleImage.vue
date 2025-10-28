<template>
  <div class="rounded-full" :class="[{
    'h-16 w-16': size === 'small',
    'h-28 w-28': size === 'normal',
  }]">
    <img
      :src="imageSrc"
      :alt="alt"
      class="rounded-full h-full w-full object-cover"
    />
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
    size: {
      type: String,
      default: 'normal',
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
