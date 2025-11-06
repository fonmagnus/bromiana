<template>
  <header class="fixed top-0 bg-white shadow z-50 w-screen">
    <nav class="container mx-auto flex justify-between items-center px-2 lg:px-36">
      
      <!-- Logo Section -->
      <div class="flex items-center">
        <!-- <div class="lg:hidden flex items-center">
          <button @click="toggleSidebar" class="focus:outline-none">
            <svg class="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div> -->
        <a href="/" aria-label="Home">
          <img id="logo" class="w-20 h-20 lg:w-24 lg:h-24" src="~/assets/images/brom-logo-transparent.png" alt="Bromiana Logo">
        </a>
        <span class="font-black">
          Bromiana
        </span>
      </div>

      <!-- Supported by Kokocoder -->
      <div class="flex items-center gap-2">
        <a href="https://kokocoder.com" target="_blank" rel="noopener noreferrer" class="flex items-center hover:opacity-80 transition-opacity">
          <span class="text-xs lg:text-sm text-gray-600">supported by kokocoder</span>
          <img src="~/assets/images/logo-kc.svg" alt="Kokocoder Logo" class="h-8 lg:h-10 w-auto">
        </a>
      </div>
    </nav>

    <!-- Sidebar -->
    <!-- <div :class="{'translate-x-0': isSidebarOpen, '-translate-x-full': !isSidebarOpen}" class="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out px-4 py-2">
      <div class="flex">
        <a href="/" aria-label="Home">
          <img id="logo" class="w-20 h-20 lg:w-24 lg:h-24" src="~/assets/images/brom-New Logo Bromiana.png" alt="Bromiana Logo">
        </a>
        <div class="absolute top-4 right-4">
          <button @click="toggleSidebar" class="focus:outline-none">
            <svg class="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <nav class="w-full">
        <DropdownMenu class="py-2" :menu-items="ourProgramsMenu">
          OUR PROGRAMS
        </DropdownMenu>
        <a href="/stories" class="flex px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all w-full" aria-label="Success Stories">
          SUCCESS STORIES
        </a>
        <DropdownMenu class="py-2" :menu-items="aboutUsMenu">
          ABOUT US
        </DropdownMenu>
      </nav>
    </div>
    <div v-if="isSidebarOpen" class="fixed inset-0 bg-black opacity-50" @click="toggleSidebar"></div> -->
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isSidebarOpen: false,
      ourProgramsMenu: [
        // { name: 'OSN Informatika Class', to: '/programs/osn', icon: '👩🏻‍💻' },
        // { name: 'University Preparation Class', to: '/programs/uniprep', icon: '👩‍🎓' },
        // { name: 'Knight Camp', to: '/programs/knightcamp', icon: '⚔' },
      ],

      aboutUsMenu: [
        // { name: 'About KC', to: '/about', icon: '🔟'},
        // { name: 'Our Coaches', to: '/about/coaches', icon: '👩‍👩‍👧‍👦'},
        // { name: 'Our Teams', to: '/about/teams', icon: '🤝'},
      ]
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
}
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
