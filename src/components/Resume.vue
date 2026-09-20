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
        My name is Michele Paolino, and I'm a web designer and full-stack developer. I design and build websites and
        applications by combining visual communication principles with frontend and backend expertise. I favour
        open-source technologies and standards, selecting the solutions that best meet each project's needs.
      </p>

      <div>
        <a
          v-hover-animate
          href="mailto:mic.paolino@gmail.com"
          class="paragraph text-color border-color button rounded-full px-8 py-1 text-lg"
        >
          Request CV
        </a>
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
              <p class="text-color text-base paragraph opacity-75">{{ item.period }}</p>
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
          job: "Freelance",
          position: "Web Developer & UI/UX Designer",
          period: "Aug 2024 – Present",
          description:
            "I directly manage clients, from requirements gathering to the definition of priorities, architecture and product roadmap. I design and develop websites and e-commerce end to end with WordPress, WooCommerce and PrestaShop, including custom themes, plugins and modules, and build Vue.js/TypeScript frontends and PHP backends with integrations of APIs, CRMs, payment systems and external services. I design the interfaces and optimize accessibility, performance, technical SEO and maintainability, selecting and tailoring open source technologies to each project's requirements and context.",
        },
        {
          job: "Dopolavoro Studio",
          position: "Web Developer",
          period: "May 2022 – Aug 2024",
          description:
            "I developed and maintained websites and e-commerce based on WordPress, WooCommerce, PrestaShop and Shopify, building custom themes, plugins, modules and frontend components in PHP, JavaScript and Vue.js. I analyzed and implemented integrations with APIs, CRMs and external services, and collaborated with designers, account managers and marketing teams within shared workflows versioned with Git.",
        },
        {
          job: "Sari Advertising",
          position: "Web Designer & Developer",
          period: "Mar 2020 – May 2022",
          description:
            "I designed and developed responsive interfaces, websites and landing pages aligned with the goals of digital campaigns, managing client relationships and collaborating with the marketing team to define content, user journeys and design priorities. I built custom WordPress websites and themes in PHP, JavaScript, HTML and CSS, from UX design to backend implementation, integrating forms, CRMs, APIs, tracking systems and e-commerce platforms, and verified cross-device rendering, accessibility and consistency between the visual design and its implementation.",
        },
        {
          job: "Becoming Lab",
          position: "Web Designer & Developer",
          period: "Oct 2018 – Mar 2020",
          description:
            "I gathered client requirements and translated communication goals into responsive interfaces for websites and landing pages. I turned layouts and prototypes into modular WordPress templates and reusable components, defining visual hierarchies, typography, responsive behavior and coherence between desktop and mobile. I made customizations in HTML, CSS/Sass, JavaScript and PHP, and provided technical and creative support to digital marketing campaigns.",
        },
        {
          job: "Freelance",
          position: "Web Designer",
          period: "Feb 2015 – Oct 2018",
          description:
            "I directly managed small clients, from defining their needs to delivering and maintaining the projects. I designed and built WordPress websites and responsive landing pages for businesses and professionals, customizing themes and defining visual identity and digital materials. I provided technical support, client training and post-launch assistance.",
        },
      ],
      skills: [
        {
          scope: "Backend & Data",
          skill: "PHP, Laravel, REST API, MySQL, Python",
        },
        {
          scope: "Frontend",
          skill: "Vue.js, JavaScript, TypeScript, HTML5, CSS3, Sass/SCSS, Tailwind CSS, Bootstrap",
        },
        {
          scope: "Development Workflow",
          skill: "Docker, Git, Gitflow",
        },
        {
          scope: "Analysis & Architecture",
          skill: "Architectural design, functional analysis, flow definition, requirements gathering",
        },
        {
          scope: "AI & Agentic Systems",
          skill: "LLM integration, agentic workflows, LangChain, LangGraph",
        },
        {
          scope: "CMS & E-commerce",
          skill: "WordPress, WooCommerce, PrestaShop, Shopify, custom themes, plugins and modules",
        },
        {
          scope: "UI/UX",
          skill: "Figma, prototyping, design systems, accessibility, typography, color theory, information architecture",
        },
      ],
    };
  },
  mounted() {
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
};
</script>

<style scoped>
.technical-skills, .scope {
  text-transform: uppercase !important;
}
</style>
