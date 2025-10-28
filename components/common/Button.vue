<template>
  <button 
    v-bind="$attrs"
    v-on="$listeners"
    class="transition-all cursor-pointer font-bold py-3 px-4 rounded-lg uppercase" 
    :class="[{
      'bg-primary hover:bg-black text-black hover:text-primary': variant === 'primary',
      'bg-primary text-black bg-opacity-40 cursor-auto': variant === 'disabled',
    }]"
    @click="ctaClick"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'primary'
    },
    cta: {
      type: Boolean,
      default: false
    },
    ctaUrl: {
      type: String,
      default: 'https://wa.link/7b47zf'
    }
  },
  methods: {
    ctaClick() {
      if (this.cta) {
        window.open(this.ctaUrl, '_blank');
      }
    }
  }
}
</script>