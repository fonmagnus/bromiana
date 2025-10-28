<template>
  <div class="flex flex-col rounded-lg border border-gray-100 overflow-hidden h-full">
    <div class="overflow-hidden h-48 lg:h-56">
      <img class="hover:scale-125 transition-all w-full h-full object-cover" :src="getImageSrc" alt="">
    </div>

    <div class="flex flex-col px-4 py-4 text-center bg-white gap-4 flex-1">
      <h3 class="font-bold">{{ title }}</h3>
      <p class="flex-1">{{ description }}</p>
      <!-- <Button cta :cta-url="ctaUrl" class="w-full">
        {{ cta }}
      </Button> -->
    </div>

  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    cta: {
      type: String,
      required: true
    },
    ctaUrl: {
      type: String,
      required: true,
    }
  },
  computed: {
    getImageSrc() {
      return require(`@/assets/images/${this.imageSrc}`)
    }
  },  
  data() {
    return {

    }
  }
}
</script>