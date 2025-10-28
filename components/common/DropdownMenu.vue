<template>
  <div v-bind="$attrs" v-on="$listeners">
    <button @click="toggleMenu" class="w-full text-left flex justify-between items-center text-gray-700 hover:bg-gray-100 transition-all px-4 py-2">
      <slot/>
      <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div v-if="isOpen" class="flex flex-col gap-1">
      <a v-for="item in menuItems" :key="item.name" :href="item.to" class="text-sm text-gray-700 hover:bg-black hover:text-primary px-4 py-2 font-bold transition-all">
        {{ item.icon }} {{ item.name }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownMenu',
  props: {
    title: {
      type: String,
      required: true,
    },
    menuItems: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
/* Add any additional styles you need */
</style>
