// components/home.vue

<template>
  <div class="flex flex-col home-screen">
    <div class="flex-none">
      <header>
        <nav id="nav-back" class="flex my-6 w-full lg:w-5/6 mx-auto justify-start md:justify-center">
          <div class="flex w-auto">
            <div class="title-page-container">
              <h1 ref="carouselTitle" class="text-color title-page-text text-lg 2xl:text-xl heading uppercase">{{
                currentItemData.title }}</h1>
              <div ref="underline" class="bg-secondary-color title-page-underline h-0.5 bg-slate-900"></div>
            </div>
          </div>
        </nav>
      </header>
    </div>

    <div class="main home flex grow items-center w-full justify-center">
      <div class="container">

        <!-- GSAP Carousel per desktop -->
        <div class="hidden md:flex carousel justify-center items-center">
          <button ref="prevArrow" aria-label="Previous slide" @click="prevItem"
            class="hidden border-color lg:block arrow prev border-t-2 border-l-2 h-4 w-4"></button>
          <p ref="carouselContent"
            class="text-color paragraph w-full lg:w-5/6 carousel text-center md:px-5 flex justify-center flex-wrap text-xl md:text-3xl xl:text-4xl 2xl:text-5xl">
            <span v-html="currentItemData.text"></span>
          </p>
          <button ref="nextArrow" aria-label="Next slide" @click="nextItem"
            class="hidden border-color lg:block arrow next border-t-2 border-l-2 h-4 w-4"></button>
        </div>

  <!-- Swiper Element Carousel per mobile -->
  <div ref="swiperContainer" class="w-full opacity-0 block md:hidden carousel-swiper">
    <swiper-container ref="swiper" slides-per-view="1" space-between="50" loop="true">
      <swiper-slide v-for="(item, index) in items" :key="index">
        <div v-html="item.text"
          class="swiper-content text-color paragraph w-full text-start flex justify-center flex-wrap text-2xl">
        </div>
      </swiper-slide>
    </swiper-container>
  </div>

  <div class="block md:hidden mt-8">
    <!-- Aggiungi @click per rendere cliccabile -->
    <p ref="swipe" class="swipe swipe-forward heading uppercase text-lg text-color inline opacity-100" @click="nextSlide">
      swipe 
    </p>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" ref="swipeArrow"
      class="swipe-arrow inline fill opacity-0" viewBox="0 0 16 16">
      <path fill-rule="evenodd"
        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
    </svg>
  </div>

        <div ref="buttonContainer" class="flex justify-start md:justify-center mt-8 md:mt-12">
          <router-link to="/portfolio"
            class="text-color border-color button py-2 px-8 mr-4 paragraph uppercase text-base xl:text-lg 2xl:text-xl border-2 rounded-full"
            v-hover-animate>Portfolio</router-link>
          <router-link to="/resume"
            class="text-color border-color button py-2 px-8 mr-4 paragraph uppercase text-base xl:text-lg 2xl:text-xl border-2 rounded-full"
            v-hover-animate>Resume</router-link>
        </div>
      </div>
    </div>

    <div class="flex-none footer" ref="footerIcons">
      <SocialComponent svgClass="fill" />
    </div>
  </div>

</template>

<script>
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import SocialComponent from "@/components/SocialComponent.vue";

gsap.registerPlugin(CSSPlugin);

export default {
  name: "Home",
  components: {
    SocialComponent
  },
  data() {
    return {
      currentItem: 0,
      items: [
        {
          title: "Hello",
          text: "My name is Michele Paolino, <br>I'm a Napoli based web designer <br>and developer.",
        },
        {
          title: "Skills",
          text: "Vue, WordPress, Sass, Tailwind, <br>Figma, React, UI design, Typography, <br>Adobe, Bootstrap, GSAP, Git",
        },
        {
          title: "The Logical Theme",
          text: `<p>I'm author of The Logical Theme, <br>a sharp WordPress theme for devs. <br>Take a look on my <span><a class="underline underline-offset-8" href="https://github.com/michelediss/the-logical-theme" target="_blank"><strong>GitHub.</strong></a></span></p>`,
        },
        {
          title: "Let's play!",
          text: `<p>Press <kbd class="s-key text-color">s</kbd> on your keyboard<br> or double tap on mobile to generate<br> a new website skin!</p>`,
        },
      ],
      isFontAssignActive: false,  // Variabile per controllare quando bloccare le animazioni
    };
  },
  computed: {
    currentItemData() {
      return this.items[this.currentItem];
    },
  },
  methods: {
    nextSlide() {
      const swiper = this.$refs.swiper?.swiper;
      if (swiper) {
        swiper.slideNext();
      }
    },
    nextItem() {
      if (!this.isFontAssignActive) {
        this.transitionSlide(() => {
          this.currentItem = (this.currentItem + 1) % this.items.length;
        });
      }
    },
    prevItem() {
      if (!this.isFontAssignActive) {
        this.transitionSlide(() => {
          this.currentItem = (this.currentItem - 1 + this.items.length) % this.items.length;
        });
      }
    },
    goToItem(index) {
      if (!this.isFontAssignActive && index !== this.currentItem) {
        this.transitionSlide(() => {
          this.currentItem = index;
        });
      }
    },
    handleKeydown(event) {
      if (!this.isFontAssignActive) {
        if (event.key === 'ArrowRight') {
          this.nextItem();
        } else if (event.key === 'ArrowLeft') {
          this.prevItem();
        }
      }
    },
    transitionSlide(callback) {
      const carouselContent = this.$refs.carouselContent;
      const carouselTitle = this.$refs.carouselTitle;
      const underline = this.$refs.underline;

      // Controlla se la funzione fontAssign è attiva
      if (!this.isFontAssignActive && carouselContent && carouselTitle) {
        gsap.to([carouselContent, carouselTitle], {
          duration: 0.5,
          opacity: 0,
          onComplete: () => {
            callback();
            gsap.to([carouselContent, carouselTitle], {
              duration: 0.5,
              opacity: 1,
            });
          },
        });
      }

      if (!this.isFontAssignActive && underline) {
        gsap.to(underline, {
          duration: 0.5,
          width: 0,
          opacity: 0,
          onComplete: () => {
            gsap.to(underline, {
              duration: 0.5,
              width: '100%',
              opacity: 1,
            });
          },
        });
      }
    },
    handleSlideChange() {
      const swiperInstance = this.$refs.swiper?.swiper;
      if (!this.isFontAssignActive && swiperInstance) {
        let activeIndex = swiperInstance.realIndex;
        this.transitionSlide(() => {
          this.currentItem = activeIndex;
        });
      }
    },
    setVH() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    },
    checkSwiper() {
      if (this.$refs.swiper && this.$refs.swiper.swiper) {
        this.$refs.swiper.swiper.on('slideChange', this.handleSlideChange);
      } else {
        setTimeout(this.checkSwiper, 100);
      }
    },
  },
  mounted() {
    const tl = gsap.timeline();

    const animateElement = (element, options, position) => {
      if (element) {
        tl.to(element, options, position);
      }
    };

    const animateElementsWithStagger = (elements, options, staggerValue, position) => {
      if (elements.length > 0) {
        tl.to(elements, { ...options, stagger: staggerValue }, position);
      }
    };

    const animateCarousel = () => {
      const {
        carouselTitle,
        underline,
        carouselContent,
        prevArrow,
        nextArrow,
        buttonContainer,
        footerIcons,
        swiperContainer,
        swipe,
        swipeArrow
      } = this.$refs;

      if (carouselTitle && underline && carouselContent && prevArrow && nextArrow && buttonContainer && footerIcons) {
        tl.addLabel("start", "+=0.5");
        animateElement(carouselTitle, { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }, "start+=0");
        animateElement(underline, { opacity: 1, width: '100%', duration: 0.9, ease: "power2.out" }, "start+=0");

        animateElement(carouselContent, { opacity: 1, y: 0, duration: 3, ease: "power2.out" }, "start+=0.3");
        animateElement(swiperContainer, { opacity: 1, y: 0, duration: 3, ease: "power2.out" }, "start+=0.3");

        animateElement(swipe, { opacity: 1, y: 0, duration: 2, ease: "power2.out" }, "start+=1.5");
        animateElement(swipeArrow, { opacity: 1, y: 0, duration: 2, ease: "power2.out" }, "start+=1.5");

        const buttons = buttonContainer.querySelectorAll('.button');
        animateElementsWithStagger([...buttons], { opacity: 1, y: 0, duration: 2, ease: "power2.out" }, 0, "start+=1.5");

        animateElement(footerIcons, { opacity: 1, y: 0, duration: 2, ease: "power2.out" }, "start+=1.5");

        gsap.set([prevArrow, nextArrow], { display: 'block' });
        animateElement([prevArrow, nextArrow], { opacity: 1, duration: 2, ease: "power2.out" }, "start+=1.5");
      }
    };

    // Chiamata alla funzione di animazione
    animateCarousel();

    // Controlla se Swiper è pronto
    this.$nextTick(this.checkSwiper);

    window.addEventListener('keydown', this.handleKeydown);

    // Imposta la variabile vh
    this.setVH();
    window.addEventListener('resize', this.setVH);
  },
  beforeUnmount() {
    if (this.$refs.swiper && this.$refs.swiper.swiper) {
      this.$refs.swiper.swiper.off('slideChange', this.handleSlideChange);
    }
    window.removeEventListener('resize', this.setVH);
    window.removeEventListener('keydown', this.handleKeydown);
  },
};
</script>



<style scoped>
.home-screen {
  min-height: calc(var(--vh, 1vh) * 100);
}

.title-page-underline,
p,
h1,
.button,
.footer,
.arrow {
  opacity: 0;
}

.title-page-underline {
  width: 0;
}

span,
a,
strong {
  display: inline;
}

.swipe-arrow {
  display: inline-block;
  animation: bounceX 2s infinite;
}

@keyframes bounceX {

  0%,
  100% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(10px);
  }
}
</style>
