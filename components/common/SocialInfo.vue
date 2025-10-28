<template>
  <section class="flex flex-col gap-4">
    <div class="flex gap-4">
      <a href="https://instagram.com/bromiana_edu" target="_blank">
        <img src="~/assets/images/socials/instagram.png" alt="" class="w-8 h-auto object-cover">
      </a>
      <!-- <a href="https://www.linkedin.com/company/82846072" target="_blank">
        <img src="~/assets/images/socials/linkedin.png" alt="" class="w-8 object-cover">
      </a> -->
    </div>
    <div class="flex flex-col gap-2">
      <h5>Copyright &copy; {{ currentYear }} Bromiana</h5>
      <h6 class="font-light text-sm">Supported by Kokocoder (kokocoder.com)</h6>
    </div>
  </section>
</template>


<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>