<template>
  <div class="relative inline-block text-left">
    <div @mouseenter="showDropdown">
      <button type="button" class="inline-flex justify-center w-full rounded-md shadow-sm bg-white text-sm font-bold text-gray-700 hover:bg-gray-50">
        <slot/>
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5 7a1 1 0 011.707-.707L10 9.586l3.293-3.293A1 1 0 0115 7l-4 4a1 1 0 01-1.414 0l-4-4z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>

    <div v-show="isOpen" class="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" @mouseleave="hideDropdown">
      <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <a 
          v-for="item in menuItems" 
          :key="item.name" 
          :href="item.to" 
          class="px-4 py-2 text-sm text-gray-700 transition-all hover:bg-black hover:text-primary flex items-center" 
          role="menuitem"
          @mouseenter="hoverItem = item.name" 
          @mouseleave="hoverItem = null"
        >
        <span v-if="hoverItem === item.name" class="ml-2">
          {{ item.icon }}
        </span> &nbsp;
        {{ item.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    menuItems: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      isOpen: false,
      hoverItem: null,
    };
  },
  methods: {
    showDropdown() {
      this.isOpen = true;
    },
    hideDropdown() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
/* Add any additional styles you need */
</style>
