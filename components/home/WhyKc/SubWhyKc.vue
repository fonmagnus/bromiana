<template>
  <section class="rounded-t-2xl py-12 flex px-8 lg:px-36 w-full flex-col justify-center items-center gap-8 bg-[#1C1C28]">
    <h2 class="text-2xl lg:text-4xl font-bold text-white text-center">
      Get your 
      <UnderlinedText>
        best chemistry learning experiences 
      </UnderlinedText>
      with Bromiana
    </h2>

    <section class="flex flex-col lg:flex-row gap-8 px-4 lg:px-12 lg:items-stretch">
      <CtaImageCard v-for="card in imageCards" :key="card.title" class="w-full lg:w-1/2 flex" :imageSrc="card.imageSrc" :title="card.title" :description="card.description" cta="Learn More" :cta-url="card.ctaUrl"/>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imageCards: [
        {
          imageSrc: 'brom-Benzaldehyde.png',
          title: 'OSN Preparation Class',
          description: '🏆 Dominate OSN Kimia and join the elite circle of national chemistry champions! Our proven training methodology has produced 20+ OSN medalists who conquered Indonesia\'s most prestigious science competition. Master advanced problem-solving techniques, tackle challenging organic synthesis like benzaldehyde reactions, and develop the strategic thinking that separates winners from participants. Don\'t just dream of wearing that medal - make it reality with Bromiana!',
          ctaUrl: '/programs/osn',
        },
        {
          imageSrc: 'brom-Menthol.png',
          title: 'University Chemistry Class',
          description: '🎓 Step into the exciting realm of advanced chemistry where molecules tell their stories! Explore the cooling sensation of menthol, unravel the secrets of organic synthesis, and master university-level concepts that will make you see the world differently. From pharmaceutical chemistry to environmental science - build the foundation for your future career in the molecular universe!',
          ctaUrl: '/programs/uniprep',
        }
      ]
    }
  }
}
</script>