<template>
  <section class="py-12 flex px-4 lg:px-36 w-full flex-col justify-center items-center gap-8 bg-slate-100 relative">
    <h3 class="text-2xl lg:text-4xl font-bold">Testimonials</h3>
    <div class="grid grid-cols-12 gap-4">
      <TestimonialCard 
        class="col-span-12 lg:col-span-4"
        v-for="testimonial in testimonials" 
        :key="testimonial.name"
        :name="testimonial.name"
        :href="testimonial.href"
        :from="testimonial.from"
        :achievement="testimonial.achievement"
        :content="testimonial.content"
        :imageSrc="testimonial.imageSrc"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          name: "Willy Wijaya",
          from: "Gold medalist and best experiment OSN 2025",
          achievement: "🥇 Gold Medalist OSN Kimia 2025",
          imageSrc: "student/Willy Wijaya.jpeg",
          content: "Saya pertama kali tahu Bromiana dari tahun lalu, karena memang terkenal TO dan pelatihan nya sangat bagus. Sempat menyesal waktu tahun kemarin tidak ikut pelatihan OSN offline dari bromiana, dan akhirnya di nasional tahun lalu belum dapat medal. Di tahun kedua, akhirnya saya ngikutin TO dan pelatihan Bromiana mulai persiapan OSK, materinya mantap banget, lengkap semua mulai dari dasar sampai yang advance. Tutor nya juga keren-keren banget, sangat membantu pemahaman saya."
        },
        {
          name: "Leonard Irvin Gunadi",
          from: "Gold medalist and absolute winner OSN 2025",
          achievement: "🥇 Gold Medalist OSN Kimia 2025",
          imageSrc: "student/Leonard Irvin.jpeg",
          content: "Program pelatihan yang diadakan Bromiana Edu selalu baguss dan sangat membantu saya dalam mengikuti lomba OSN Kimia karena materi yang diberikan oleh para pengajar sangat relevan dengan soal-soal OSN. Pelatihan Bromiana juga menyediakan Try Out yang sangat melatih problem solving dan selalu menambah pengetahuan yang berguna untuk perlombaan OSN. Tutor-tutornya juga ramah-ramah dalam menyampaikan materi dan sangat welcome kalau ada yang nanya ges🫶."
        },
        {
          name: "Alia Rahmania",
          from: "Gold Medalist OSN 2024",
          achievement: "🥇 Gold Medalist OSN Kimia 2024",
          imageSrc: "student/Alia Rahmania.jpeg",
          content: "Aku merasa bromiana membantu saya dalam meraih juara dalam osn tahun ini, mulai dari mengembangkan pengetahuan aku sampai mempelajari materi yang belum aku kuasai dan juga try out yang diadakan bromiana itu sangat menantang dan sangat cocok untuk melatih kemampuan kita. Saya sangat bersyukur bisa ikut bromiana karna program-programnya yang jelas, seru, dan sangat informatif serta tutor yang sangat asyik."
        }
      ]
    }
  }
}
</script>