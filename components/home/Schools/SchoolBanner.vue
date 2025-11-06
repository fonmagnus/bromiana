<template>
  <section class="pt-72 lg:pt-12 pb-12 flex px-4 lg:px-36 w-full flex-col items-center gap-8">
    <span class="text-2xl lg:text-4xl text-center">
      Bromiana has been trusted by students from 
      <UnderlinedText>
        <b class="bg-black text-primary">various schools</b> 
      </UnderlinedText>
      across Indonesia
    </span>
    <section class="grid grid-cols-4 lg:grid-cols-8 gap-4">
      <div class="col-span-1 flex flex-col items-center gap-2" v-for="(school, i) in schools" :key="i">
        <img class="w-16 lg:w-24 h-16 lg:h-24 object-cover" :src="getImageSrc(school.src)" alt="" />
        <span class="text-center text-sm">{{ school.name }}</span>
      </div>
    </section>

    <span class="font-bold">... and many more</span>
  </section>
</template>

<script>
export default {
  name: 'SchoolBanner',
  data() {
    return {
      schools: [
        {
          name: 'SMAK 8 BPK Penabur',
          src: 'logo-smak-1.jpeg'
        },
        {
          name: 'SMA Kolese Kanisius',
          src: 'logo-cc.png'
        },
        {
          name: 'SMAN 2 Lumajang',
          src: 'logo-sman2-lumajang.jpeg'
        },
        {
          name: 'SMAN 1 Purwokerto',
          src: 'logo-sman1-purwokerto.gif'
        },
        {
          name: 'SMAN 4 Denpasar',
          src: 'logo-sman4-denpasar.jpeg'
        },
        {
          name: 'SMA Katolik Rajawali',
          src: 'logo-rajawali.png'
        },
        {
          name: 'SMAN 10 Samarinda',
          src: 'logo-sman-10-samarinda.jpeg'
        },
        {
          name: 'SMAN 2 Cirebon',
          src: 'logo-sman2-cirebon.png'
        },
        {
          name: 'SMAS Immanuel Pontianak',
          src: 'logo-immanuel.jpg'
        },
        {
          name: 'SMAN 6 Surabaya',
          src: 'logo-sman6-surabaya.jpg'
        },
        {
          name: 'SMA Plus Ar Rahmat Bojonegoro',
          src: 'logo-sma-plus-arrahmat.webp'
        }
      ]
    }
  },
  methods: {
    getImageSrc(imageName) {
      // Use require to resolve the image path dynamically
      return require(`~/assets/images/schools/${imageName}`);
    }
  }
}
</script>
