<template>
  <section class="container w-full lg:w-5/6 xl:4/6 mx-0 md:mx-auto">
    <div class="flex-none">
      <HeaderComponent :pageTitle="pageTitle" ref="header" />
    </div>

    <div
      class="intro-resume container mt-24 mb-16 w-full flex justify-start md:justify-center flex-wrap"
      ref="introResume"
    >
      <p class="text-color text-xl md:text-2xl paragraph text-start md:text-center mb-12">
        My name is Michele Paolino, I'm a web designer and developer. My job involves designing and developing
        modern, lightweight, and high-performance web solutions. I apply to my works the knowledge I have gained from
        studying the processes that govern visual communication in its formal and functional aspects.
      </p>

      <div class="dropdown-container relative inline-block">
        <button
          v-hover-animate
          @click="toggleDropdown"
          class="paragraph text-color border-color button rounded-full px-8 py-1 text-lg"
        >
          Download CV
        </button>
        <div
          ref="dropdownMenu"
          :class="['dropdown-menu w-full mt-2 shadow-lg backdrop-blur-sm bg-white/50 overflow-hidden', { show: isDropdownVisible }]"
        >
          <ul>
            <li>
              <a href="./download/Michele_Paolino_CV_ENG.pdf" target="_blank" class="block px-4 pt-2 pb-1 text-md color-black hover:bg-dark hover:color-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  class="inline fill-black mr-1 -mt-1 bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"
                  />
                  <path
                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"
                  /></svg >
                PDF English</a>
            </li>
            <li>
              <a href="./download/Michele_Paolino_CV_ITA.pdf" target="_blank" class="block px-4 pt-1 pb-2 text-md color-black hover:bg-dark hover:color-white"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  class="inline fill-black mr-1 -mt-1 bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"
                  />
                  <path
                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"
                  /></svg>
                PDF Italiano</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="work-history" ref="workHistory">
      <div class="">
        <h2 class="text-color mt-20 mb-12 heading uppercase text-3xl">Work history</h2>
        <div class="bg-secondary-color h-0.5 w-full opacity-50"></div>
      </div>

      <div class="mb-12 flex flex-wrap">
        <div v-for="(item, index) in items" :key="index">
          <div class="block md:flex py-4 my-4">
            <div class="w-full md:w-1/3 lg:w-1/4 pt-2">
              <h2 class="text-color text-xl heading mb-2">{{ item.job }}</h2>
            </div>
            <div class="w-full md:w-2/3 lg:w-3/4">
              <h3 class="text-color text-lg mb-1 paragraph uppercase">{{ item.position }}</h3>
              <p class="text-color text-base paragraph">{{ item.description }}</p>
            </div>
          </div>

          <div class="bg-secondary-color h-0.5 w-full opacity-50"></div>
        </div>
      </div>
    </div>

    <div class="mx-auto tech-stack w-full" ref="techStack">
      <div class="">
        <h2 class="text-color mt-20 mb-12 heading uppercase technical-skills text-xl">Expertise Areas</h2>
      </div>

      <div class="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div v-for="(skill, index) in skills" :key="index">
          <h3 class="text-color text-base heading mb-2 uppercase scope opacity-75">{{ skill.scope }}</h3>
          <p class="text-color text-lg paragraph">{{ skill.skill }}</p>
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
import { nextTick } from "vue"; // Importa nextTick da Vue
import HeaderComponent from "@/components/HeaderComponent.vue";
import SocialComponent from "@/components/SocialComponent.vue";

export default {
  name: "Resume",
  components: {
    HeaderComponent,
    SocialComponent,
  },
  data() {
    return {
      pageTitle: "Resume",
      items: [
        {
          job: "Dopolavoro",
          position: "Web developer",
          description:
            "My primary responsibility at Dopolavoro centered on a critical translation process: transforming the studio's meticulously developed visual identities into fully realized websites and web applications. This role demanded an exceptional level of precision in preserving the nuanced visual language conceived by the design team while ensuring optimal digital functionality. I specialized in creating digital experiences that were not just technically sound, but true visual narratives, seamlessly converting complex brand identities into interactive, responsive web solutions that maintained the studio's renowned design excellence.",
        },
        {
          job: "Sari Advertising",
          position: "Web designer & developer",
          description:
            "At Sari Advertising I was a driving force in high-velocity e-commerce web development, successfully delivering up to 20 fully functional e-commerce websites annually. My role extended beyond technical implementation, as I coordinated cross-functional teams of designers and copywriters to ensure cohesive project execution. By carefully managing these creative professionals, I transformed complex client requirements into strategically crafted digital storefronts that maximized SEO performance and user conversion rates. This approach demanded a unique blend of technical expertise, team leadership, and marketing insight, allowing me to create e-commerce platforms that were both technically robust and commercially compelling.",
        },
        {
          job: "Becoming Lab",
          position: "Web designer & developer",
          description:
            "At Becoming Lab, I took full ownership of client relationships, managing every aspect of web development projects from initial consultation to final delivery. My approach went beyond traditional design and development, positioning me as a comprehensive point of contact who handled client interactions with good care and strategic insight. I independently managed client communications, deeply understanding their unique business objectives and translating those insights into tailored web applications and marketing solutions that precisely aligned with their brand identity.",
        },
      ],
      skills: [
        {
          scope: "Frontend",
          skill: "Vue.js, React, Tailwind, Bootstrap",
        },
        {
          scope: "Backend",
          skill: "PHP, Laravel",
        },
        {
          scope: "CMS",
          skill: "WordPress, PrestaShop",
        },
        {
          scope: "Design & Prototyping",
          skill: "Figma, Adobe Photoshop, Adobe Illustrator",
        },
        {
          scope: "UI design",
          skill: "UI design principles, typography, color theory",
        },
        {
          scope: "Animation & Effects",
          skill: "GreenSock Animation Platform (GSAP), anime.js",
        },
        {
          scope: "Version Control",
          skill: "Git",
        },
      ],
      isDropdownVisible: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
      if (this.isDropdownVisible) {
        this.fadeInDropdown();
      } else {
        this.fadeOutDropdown();
      }
    },
    fadeInDropdown() {
      // Controllo per verificare che il riferimento non sia nullo
      if (this.$refs.dropdownMenu) {
        gsap.to(this.$refs.dropdownMenu, {
          opacity: 1,
          y: 0,
          display: "block",
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        console.warn("Riferimento dropdownMenu non trovato per fadeIn.");
      }
    },
    fadeOutDropdown() {
      // Controllo per verificare che il riferimento non sia nullo
      if (this.$refs.dropdownMenu) {
        gsap.to(this.$refs.dropdownMenu, {
          opacity: 0,
          y: 0,
          display: "none",
          duration: 0.25,
          ease: "linear.in",
        });
      } else {
        console.warn("Riferimento dropdownMenu non trovato per fadeOut.");
      }
    },
    closeDropdown(event) {
      if (!event.target.closest(".dropdown-container")) {
        this.isDropdownVisible = false;
        if (this.$refs.dropdownMenu) { // Aggiunto controllo
          this.fadeOutDropdown(); 
        }
      }
    },
  },
  mounted() {
    window.addEventListener("click", this.closeDropdown);

    nextTick(() => { // Usa nextTick al posto di Vue.nextTick
      const tl = gsap.timeline();

      if (this.$refs.introResume && this.$refs.workHistory && this.$refs.techStack) {
        tl.from(this.$refs.introResume, { opacity: 0, y: 50, duration: 0.8, ease: 'power2.out' }, "-=0.2")
          .from(this.$refs.workHistory, { opacity: 0, y: 50, duration: 0.8, ease: 'power2.out' }, "-=0.6")
          .from(this.$refs.techStack, { opacity: 0, y: 50, duration: 0.8, ease: 'power2.out' }, "-=0.2");
          tl.delay(1); // Ritarda l'intera animazione di 1 secondo (modifica a piacere)

      } else {
        console.warn("Uno o più riferimenti non sono stati trovati per la timeline GSAP.");
      }
    });

  },
  beforeUnmount() {
    window.removeEventListener("click", this.closeDropdown);
  },
};
</script>

<style scoped>
.technical-skills, .scope {
  text-transform: uppercase !important;
}

.dropdown-menu {
  display: none; /* Nascondi il dropdown di default */
  position: absolute;
  z-index: 10; /* Assicurati che il dropdown sia sopra gli altri elementi */
  border-radius: 0.375rem; /* Stile del bordo arrotondato */
  opacity: 0; /* Inizia nascosto per l'animazione */
}

.dropdown-menu.show {
  display: block; /* Mostra il dropdown quando la classe "show" è presente */
}

.dropdown-menu a {
  transition: all 0.2s linear !important;
}

.dropdown-menu svg {
  transition: all 0.2s linear !important;
}
</style>
