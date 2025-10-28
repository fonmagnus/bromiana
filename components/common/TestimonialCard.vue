<template>
  <div class="flex flex-col rounded-lg bg-white px-4 py-4 gap-4 relative">
    <div class="flex flex-col gap-4">
      <div class="flex gap-2 items-center">
        <!-- <img :src="getImageSrc" alt="" class="w-12 h-12 lg:w-20 lg:h-20"> -->

        <div class="flex flex-col">
          <a :href="href" target="_blank" class="hover:underline hover:text-primary">
            <h5 class="text-lg font-bold">{{ name }}</h5>
          </a>
          <span class="text-xs">{{ from }}</span>
          <span class="text-sm font-bold bg-primary">{{ achievement }}</span>
        </div>
      </div>
    </div>
    <span class="italic text-slate-600">{{ content }}</span>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    from: {
      type: String,
      required: true
    },
    achievement: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    }
  },
  computed: {
    getImageSrc() {
      return require(`@/assets/images/${this.imageSrc}`)
    }
  }
}
</script>