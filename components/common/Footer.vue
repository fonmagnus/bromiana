<template>
  <footer class="flex flex-col text-white">
    <section class="flex flex-col justify-center items-center bg-navy px-4 py-8 gap-4">
      <div class="flex flex-col">
        <h2 class="text-center font-bold text-xl lg:text-2xl">Chemistry is hard?</h2>
        <h2 class="text-center font-bold text-xl lg:text-2xl">
          Nah, Chemistry is fun! 💃🕺
        </h2>
      </div>
      <Button cta variant="primary">Let's Reach out to Us</Button>
    </section>

    <section class="flex flex-col gap-8 lg:flex-row px-8 lg:px-36 py-8 bg-secondary">
      <div class="flex flex-col w-full lg:w-1/3 gap-8">
        <img src="@/assets/images/brom-logo-transparent.png" alt="" class="w-24">
        <SocialInfo class="hidden lg:flex"/>
      </div>

      <SocialInfo class="lg:hidden"/>

      <div class="flex flex-col gap-2">
        <a class="font-light hover:underline" v-for="menu in footerMenu" :key="menu.name" :href="menu.to" target="blank">{{ menu.name }}</a>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerMenu: [
        // { name: 'About Us', to: 'about', icon: '👩🏻‍💻' },
        // { name: 'OSN Informatika Class', to: '/programs/osn', icon: '👩🏻‍💻' },
        // { name: 'University Preparation Class', to: '/programs/uniprep', icon: '👩‍🎓' },
        // { name: 'Stories', to: 'stories', icon: '👩🏻‍💻' },
      ]
    }
  }
}
</script>