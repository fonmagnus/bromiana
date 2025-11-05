<template>
  <section class="py-12 flex px-4 lg:px-36 w-full flex-col justify-center items-center gap-8 bg-slate-100">
    <h2 class="text-2xl lg:text-4xl text-center">
      <UnderlinedText class="font-bold">
        Our Head Coach
      </UnderlinedText>
    </h2>

    <div class="flex flex-col lg:flex-row w-full justify-center items-center lg:items-start gap-8">
      <img src="~/assets/images/coaches/Stefanus.jpeg" class="h-32 w-32 lg:h-48 lg:w-48 object-cover rounded-full" alt="">

      <div class="flex flex-col gap-2 lg:w-1/3">
        <h4 class="text-xl lg:text-2xl font-bold text-center lg:text-left">
          Hello Chemistrians, I'm 
          <span class="bg-primary">
            Stefanus, S.Si.
          </span>
        </h4>

        <p class="text-center lg:text-left">
          I'm successfully helped some students to learn Chemistry and get medal at National Science Olympiad (OSN) at Chemistry subjects.
        </p>
      </div>
    </div>
    
    <div class="flex gap-4">
      <Button cta cta-url="https://wa.link/7b47zf">
        <b>Whatsapp</b>
      </Button>
      <Button cta cta-url="https://www.linkedin.com/in/stefanus-6b29aa204">
        <b>Linkedin</b>
      </Button>
    </div>

    <!-- Coaches Section -->
    <div class="w-full mt-12">
      <h3 class="text-xl lg:text-3xl font-bold text-center mb-8">
        Our Coaches
      </h3>
      
      <div class="flex flex-col lg:flex-row gap-8 justify-center items-center">
        <!-- Aryo Razak -->
        <div class="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-md max-w-sm">
          <img src="~/assets/images/coaches/Aryo Razak.jpeg" class="h-32 w-32 object-cover rounded-full mb-4" alt="Aryo Razak">
          <h4 class="text-lg font-bold mb-2">Aryo Razak</h4>
          <div class="text-sm text-gray-600">
            <p>Absolute Winner OSN 23</p>
            <p>Absolute Winner KSR 2023</p>
            <p>Bronze IChO 2024</p>
          </div>
        </div>

        <!-- James Adhimulia -->
        <div class="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-md max-w-sm">
          <img src="~/assets/images/coaches/James.jpeg" class="h-32 w-32 object-cover rounded-full mb-4" alt="James Adhimulia">
          <h4 class="text-lg font-bold mb-2">James Adhimulia</h4>
          <div class="text-sm text-gray-600">
            <p>Bronze OSN 23</p>
            <p>Bronze IChO 2024</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>