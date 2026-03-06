<template>
  <section class="container w-full mx-auto min-h-screen flex flex-col space-between">
    <div class="flex-none mb-16">
      <HeaderComponent :pageTitle="pageTitle" ref="header" />
    </div>

    <div class="main portfolio flex grow items-center justify-center mx-auto w-full md:w-5/6" ref="mainContent">
      <div class="container ">
        <div v-for="(project, index) in projects" :key="index" class="row-container">
          <div class="row flex flex-col flex-wrap lg:flex-row items-center py-8 md:space-x-2 lg:space-x-0 w-full">
            <div class="w-full lg:w-4/12">
              <h1 class="text-2xl lg:text-2xl heading">{{ project.name }}</h1>
            </div>
            <div class="w-full lg:w-8/12 flex">
              <div class="w-6/12 justify-self-start lg:justify-self-center text-start lg:text-center flex justify-start lg:justify-center items-end lg:items-center mt-3 md:mt-0">
                <h5 class="uppercase text-xs paragraph">
                  <template v-if="project.role === 'design & code'">
                    Design &amp; Development
                  </template>
                  <template v-else-if="project.role === 'just code'">
                    Development &mdash; Design by
                    <template v-if="project.designByUrl">
                      <a
                        :href="project.designByUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline"
                      >
                        {{ project.designByLabel }}
                      </a>
                    </template>
                    <template v-else>
                      {{ project.designByLabel }}
                    </template>
                  </template>
                  <template v-else>
                    {{ project.role }}
                  </template>
                </h5>
              </div>
              <div class="w-6/12 text-end flex justify-end items-end">
                <a :href="project.url" target="_blank" v-hover-animate rel="noopener noreferrer" class="button text-base paragraph border-2 border-color rounded-full px-8 py-1">
                  Check it out!
                </a>
              </div>
            </div>
          </div>
          <div class="bg-secondary-color h-0.5 w-full opacity-50"></div>
        </div>
      </div>
    </div>
    <div class="flex-none">
      <SocialComponent svgClass="fill" />
    </div>
  </section>

</template>

<script>
import { gsap } from "gsap";
import HeaderComponent from "@/components/HeaderComponent.vue";
import SocialComponent from "@/components/SocialComponent.vue";

export default {
  name: "Portfolio",
  components: {
    HeaderComponent,
    SocialComponent
  },
  data() {
    
    return {
      pageTitle: "Portfolio",
      projects: [
        {
          name: "Dubstone Festival",
          role: "design & code",
          url: "https://www.dubstone.it",
        },
        {
          name: "Potere al Popolo",
          role: "just code",
          url: "https://poterealpopolo.org/",
          designByLabel: "Salvatore Caruso",
        },
        {
          name: "Toil",
          role: "design & code",
          url: "https://toil.it/",
        },
        {
          name: "Alessandra Piezzo",
          role: "just code",
          url: "https://alessandrapiezzo.com/",
          designByLabel: "Alessandra Piezzo",
          designByUrl: "https://alessandrapiezzo.com/",
        },
        {
          name: "Campi Deantera",
          role: "just code",
          url: "https://deantera.it/",
          designByLabel: "Dopolavoro",
          designByUrl: "https://dopolavoro.org",
        },
        {
          name: "Je So' Pazzo",
          role: "just code",
          url: "https://www.jesopazzo.org",
          designByLabel: "Salvatore Caruso",
        },
        {
          name: "Resta Abitante",
          role: "design & code",
          url: "https://restabitante.org/",
        },
        {
          name: "Addolorata",
          role: "just code",
          url: "https://addolorata.lol/",
          designByLabel: "Sigiu Bellettini",
        },
      ],
    };
  },
  mounted() {
    // Timeline GSAP per animazioni sequenziali
    const tl = gsap.timeline();

    // Animazioni delle righe in modo sequenziale
    this.$refs.mainContent.querySelectorAll('.row-container').forEach((row, index) => {
      tl.from(row, { opacity: 0, y: 50, duration: 0.4 }, "-=0.2");
    });
    tl.delay(1); // Ritarda l'intera animazione di 1 secondo (modifica a piacere)
  }
};
</script>

<style scoped>
/* Aggiungi i tuoi stili qui */
</style>
