(()=>{"use strict";var e={450:(e,t,o)=>{var n=o(751),s=o(641);const i={class:"px-5"};function a(e,t,o,n,a,r){const l=(0,s.g2)("router-view"),c=(0,s.g2)("MenuComponent");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("main",i,[(0,s.bF)(l)]),(0,s.bF)(c)],64)}const r={class:"hamburger-container z-50 fixed bottom-5 right-3.5 container inline-block w-auto"},l={ref:"modal",class:"px-4 menu-fullscreen flex flex-col justify-between min-h-screen fixed inset-0 bg-menu-color z-40"},c={id:"nav-back",class:"flex pt-6 w-full lg:w-5/6 mx-auto"},d={class:"flex justify-start md:justify-center w-full"},p={class:"title-page-container"},u={ref:"title",class:"title-page-text text-2xl 2xl:text-3xl heading text-menu-color opacity-0"},h={ref:"underline",class:"title-page-underline h-0.5 bg-secondary-menu-color w-0"},m={class:"menu-content flex flex-col items-start md:items-center text-white"},g={class:"text-start md:text-center",ref:"menuItems"},f={class:"paragraph my-8 md:my-10 lg:my-8 xl:my-12 menu-item-li"},v={class:"inline-block w-auto menu-item-wrapper"},x={class:"paragraph my-8 md:my-10 lg:my-8 xl:my-12 menu-item-li"},w={class:"inline-block w-auto menu-item-wrapper"},b={class:"paragraph my-8 md:my-10 lg:my-8 xl:my-12 menu-item-li"},y={class:"inline-block w-auto menu-item-wrapper"},k={class:"paragraph my-8 md:my-10 lg:my-8 xl:my-12 menu-item-li"},L={class:"inline-block w-auto menu-item-wrapper"},C={class:"flex-none footer",ref:"footerIcons"};function $(e,t,o,n,i,a){const $=(0,s.g2)("router-link"),I=(0,s.g2)("SocialComponent");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",r,[(0,s.Lk)("button",{ref:"menuButton",id:"hamburger-menu","aria-label":"Hamburger menu",class:"hamburger p-4 shadow-lg backdrop-blur-sm rounded-full bg-white/50 flex items-center",onClick:t[0]||(t[0]=(...e)=>a.toggleMenu&&a.toggleMenu(...e))},t[1]||(t[1]=[(0,s.Lk)("svg",{class:"hamburger-icon fill-black",width:"20px",height:"20px",viewBox:"0 0 12 12","enable-background":"new 0 0 12 12",id:"hamburger",version:"1.1","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[(0,s.Lk)("g",null,[(0,s.Lk)("rect",{class:"line top",height:"1",width:"11",x:"0.5",y:"2.5"}),(0,s.Lk)("rect",{class:"line middle",height:"1",width:"11",x:"0.5",y:"5.5"}),(0,s.Lk)("rect",{class:"line bottom",height:"1",width:"11",x:"0.5",y:"8.5"})])],-1)]),512)]),(0,s.Lk)("div",l,[(0,s.Lk)("header",null,[(0,s.Lk)("nav",c,[(0,s.Lk)("div",d,[(0,s.Lk)("div",p,[(0,s.Lk)("h1",u,"Menu",512),(0,s.Lk)("div",h,null,512)])])])]),(0,s.Lk)("div",m,[(0,s.Lk)("ul",g,[(0,s.Lk)("li",f,[(0,s.Lk)("div",v,[(0,s.bF)($,{to:"/",class:"text-4xl md:text-5xl xl:text-4xl 2xl:text-5xl text-menu-color my-0",onClick:a.toggleMenu},{default:(0,s.k6)((()=>t[2]||(t[2]=[(0,s.Lk)("span",{class:"inline md:hidden text-2xl relative bottom-1"},"•",-1),(0,s.eW)(" Home")]))),_:1},8,["onClick"]),t[3]||(t[3]=(0,s.Lk)("div",{class:"w-0 h-1 bg-secondary-menu-color menu-item-line"},null,-1))])]),(0,s.Lk)("li",x,[(0,s.Lk)("div",w,[(0,s.bF)($,{to:"/portfolio",class:"text-4xl md:text-5xl xl:text-4xl 2xl:text-5xl text-menu-color my-0",onClick:a.toggleMenu},{default:(0,s.k6)((()=>t[4]||(t[4]=[(0,s.Lk)("span",{class:"inline md:hidden text-2xl relative bottom-1"},"•",-1),(0,s.eW)(" Portfolio")]))),_:1},8,["onClick"]),t[5]||(t[5]=(0,s.Lk)("div",{class:"w-0 h-1 bg-secondary-menu-color menu-item-line"},null,-1))])]),(0,s.Lk)("li",b,[(0,s.Lk)("div",y,[(0,s.bF)($,{to:"/resume",class:"text-4xl md:text-5xl xl:text-4xl 2xl:text-5xl text-menu-color my-0",onClick:a.toggleMenu},{default:(0,s.k6)((()=>t[6]||(t[6]=[(0,s.Lk)("span",{class:"inline md:hidden text-2xl relative bottom-1"},"•",-1),(0,s.eW)(" Resume")]))),_:1},8,["onClick"]),t[7]||(t[7]=(0,s.Lk)("div",{class:"w-0 h-1 bg-secondary-menu-color menu-item-line"},null,-1))])]),(0,s.Lk)("li",k,[(0,s.Lk)("div",L,[(0,s.bF)($,{to:"/vision",class:"text-4xl md:text-5xl xl:text-4xl 2xl:text-5xl text-menu-color my-0",onClick:a.toggleMenu},{default:(0,s.k6)((()=>t[8]||(t[8]=[(0,s.Lk)("span",{class:"inline md:hidden text-2xl relative bottom-1"},"•",-1),(0,s.eW)(" Vision")]))),_:1},8,["onClick"]),t[9]||(t[9]=(0,s.Lk)("div",{class:"w-0 h-1 bg-secondary-menu-color menu-item-line"},null,-1))])])],512)]),(0,s.Lk)("div",C,[(0,s.bF)(I,{svgClass:"fill-menu"})],512)],512)],64)}var I=o(738),M=o(33);const T={class:"flex justify-start md:justify-center w-full left-0 z-50 flex-wrap"},_={class:"container flex items-center relative inline-block w-auto mt-16 2xl:scale-125 2xl:mt-32 mb-8"},S={id:"email","aria-label":"email",href:"mailto:mail@michelepaolino.me",target:"_blank",class:"icon flex items-center pr-8 md:px-8"},A={id:"linkedin","aria-label":"linkedin",href:"https://www.linkedin.com/in/michele-paolino/",target:"_blank",class:"icon flex items-center px-8"},E={id:"github","aria-label":"github",href:"https://github.com/michelediss?tab=repositories",target:"_blank",class:"icon flex items-center px-8"};function j(e,t,o,n,i,a){return(0,s.uX)(),(0,s.CE)("footer",T,[(0,s.Lk)("div",_,[(0,s.Lk)("a",S,[((0,s.uX)(),(0,s.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",class:(0,M.C4)(o.svgClass),viewBox:"0 0 15.6 16",preserveAspectRatio:"xMidYMid meet"},t[0]||(t[0]=[(0,s.Lk)("path",{d:"M15.6,7.1c0-4.2-3.2-7.1-7.7-7.1C3.2,0,0,3.3,0,8c0,4.9,3.1,8,8.1,8c1.2,0,2.4-0.2,3.2-0.5v-1.2c-0.6,0.3-1.9,0.5-3.2,0.5\n\tc-4.1,0-6.7-2.6-6.7-6.7c0-4,2.7-6.8,6.4-6.8c3.8,0,6.5,2.4,6.5,5.8c0,2.4-0.8,3.9-2,3.9c-0.7,0-1.1-0.4-1.1-1.1V4.2H9.7v1.2H9.6\n\tC9.2,4.6,8.3,4,7.3,4C5.4,4,4,5.7,4,8c0,2.4,1.3,4.1,3.3,4.1c1.1,0,2-0.5,2.4-1.5h0.2c0.1,0.9,1,1.6,2.1,1.6\n\tC14.2,12.2,15.6,10.2,15.6,7.1L15.6,7.1z M5.5,8c0-1.7,0.8-2.7,2-2.7c1.3,0,2.1,1,2.1,2.7s-0.8,2.7-2.2,2.7C6.3,10.7,5.5,9.7,5.5,8"},null,-1)]),2))]),(0,s.Lk)("a",A,[((0,s.uX)(),(0,s.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",class:(0,M.C4)(o.svgClass),viewBox:"0 0 16 16"},t[1]||(t[1]=[(0,s.Lk)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"},null,-1)]),2))]),(0,s.Lk)("a",E,[((0,s.uX)(),(0,s.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",class:(0,M.C4)(o.svgClass),viewBox:"0 0 32 32"},t[2]||(t[2]=[(0,s.Lk)("g",{class:"st0"},[(0,s.Lk)("path",{class:"st1",d:"M16,2.7C8.7,2.7,2.7,8.7,2.7,16s6,13.4,13.4,13.4s13.4-6,13.4-13.4S23.4,2.7,16,2.7z M0,16C0,7.2,7.2,0,16,0\n\t\ts16,7.2,16,16s-7.2,16-16,16S0,24.9,0,16z"}),(0,s.Lk)("path",{class:"st1",d:"M12.8,30.4c-0.1-0.2-0.1-1.7,0-4.5c-1.4,0-2.3,0-2.6-0.3c-0.5-0.4-1.1-1.5-1.6-2.3s-1.6-0.9-2-1.1\n\t\tc-0.4-0.2-0.5-0.9,1.2-0.3c1.7,0.5,1.8,2,2.4,2.4c0.6,0.3,1.9,0.2,2.5-0.1c0.6-0.3,0.6-1.3,0.7-1.7c0.1-0.4-0.3-0.5-0.4-0.5\n\t\tc-0.6,0-3.6-0.7-4.5-3.6c-0.8-3,0.2-4.9,0.8-5.7c0.4-0.6,0.4-1.7-0.1-3.6c1.6-0.2,2.9,0.3,3.8,1.6c0,0,1.2-0.7,3-0.7\n\t\tc1.9,0,2.5,0.6,3,0.7c0.5,0.1,0.9-2.2,4-1.6c-0.7,1.3-1.2,2.9-0.8,3.6c0.4,0.7,2.1,2.8,1.1,5.7c-0.7,2-2,3.2-4,3.6\n\t\tc-0.2,0.1-0.3,0.2-0.3,0.3c0,0.2,0.3,0.3,0.7,1.4c0.3,0.8,0.3,2.9,0.1,6.4c-0.6,0.2-1.1,0.3-1.5,0.3c-0.6,0.1-1.3,0.2-2,0.2\n\t\tc-0.7,0-0.9,0-1.8-0.1C14,30.6,13.4,30.5,12.8,30.4z"})],-1)]),2))])])])}const F={name:"SocialComponent",props:{svgClass:{type:String,default:"fill"}}};var H=o(262);const D=(0,H.A)(F,[["render",j],["__scopeId","data-v-46c958a8"]]),P=D,X={components:{SocialComponent:P},name:"MenuComponent",data(){return{isModalOpen:!1}},methods:{toggleMenu(){this.isModalOpen=!this.isModalOpen;const e=this.$refs.menuButton.querySelector(".hamburger-icon");this.isModalOpen?(e&&e.classList.add("is-open"),document.body.classList.add("no-scroll"),this.$nextTick((()=>{this.$refs.modal&&I.os.fromTo(this.$refs.modal,{y:"-100%"},{y:"0%",duration:.4,ease:"power2.out",onComplete:()=>this.animateTitleAndUnderline()}),this.$refs.menuItems&&this.$refs.menuItems.children.length>0&&I.os.fromTo(this.$refs.menuItems.children,{x:-50,opacity:0},{x:0,opacity:1,duration:.5,delay:.5,stagger:.1,ease:"power2.out"}),this.$refs.footerIcons&&I.os.fromTo(this.$refs.footerIcons,{opacity:0},{opacity:1,duration:.5,ease:"power2.out",delay:.9})}))):(e&&e.classList.remove("is-open"),document.body.classList.remove("no-scroll"),this.$refs.modal&&I.os.to(this.$refs.modal,{y:"-100%",duration:.4,ease:"power2.in",onComplete:()=>this.resetTitleAndUnderline()}),this.$refs.footerIcons&&I.os.to(this.$refs.footerIcons,{opacity:0,duration:.5,ease:"power1.in"}))},animateTitleAndUnderline(){this.$nextTick((()=>{this.$refs.title&&this.$refs.underline&&(I.os.fromTo(this.$refs.title,{opacity:0},{opacity:1,duration:.5,ease:"power2.out"}),I.os.fromTo(this.$refs.underline,{width:0,opacity:0},{width:"100%",opacity:1,duration:.5,ease:"power2.out"}))}))},resetTitleAndUnderline(){this.$nextTick((()=>{this.$refs.title&&this.$refs.underline&&(I.os.set(this.$refs.title,{opacity:0}),I.os.set(this.$refs.underline,{width:0}))}))}},beforeRouteLeave(e,t,o){this.$refs.title&&this.$refs.underline&&I.os.killTweensOf([this.$refs.title,this.$refs.underline]),o()}},V=(0,H.A)(X,[["render",$],["__scopeId","data-v-7e2b86da"]]),z=V,O={name:"App",components:{MenuComponent:z}},W=(0,H.A)(O,[["render",a]]),B=W;var U=o(220);const R={class:"flex flex-col home-screen"},K={class:"flex-none"},G={id:"nav-back",class:"flex my-6 w-full lg:w-5/6 mx-auto justify-start md:justify-center"},N={class:"flex w-auto"},q={class:"title-page-container"},Y={ref:"underline",class:"bg-secondary-color title-page-underline h-0.5 bg-slate-900"},J={class:"main home flex grow items-center w-full justify-center"},Q={class:"container"},Z={class:"hidden md:flex carousel justify-center items-center"},ee={ref:"carouselContent",class:"text-color paragraph w-full lg:w-5/6 carousel text-center md:px-5 flex justify-center flex-wrap text-xl md:text-3xl xl:text-4xl 2xl:text-5xl"},te=["innerHTML"],oe={ref:"swiperContainer",class:"w-full opacity-0 block md:hidden carousel-swiper"},ne={ref:"swiper","slides-per-view":"1","space-between":"50",loop:"true"},se=["innerHTML"],ie={class:"block md:hidden mt-8"},ae={xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",ref:"swipeArrow",class:"swipe-arrow inline fill opacity-0",viewBox:"0 0 16 16"},re={ref:"buttonContainer",class:"flex justify-start md:justify-center mt-8 md:mt-12"},le={class:"flex-none footer",ref:"footerIcons"};function ce(e,t,o,n,i,a){const r=(0,s.g2)("router-link"),l=(0,s.g2)("SocialComponent"),c=(0,s.g2)("MenuComponent"),d=(0,s.gN)("hover-animate");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",R,[(0,s.Lk)("div",K,[(0,s.Lk)("header",null,[(0,s.Lk)("nav",G,[(0,s.Lk)("div",N,[(0,s.Lk)("div",q,[(0,s.Lk)("h1",{ref:"carouselTitle",class:"text-color title-page-text text-2xl 2xl:text-3xl heading"},(0,M.v_)(a.currentItemData.title),513),(0,s.Lk)("div",Y,null,512)])])])])]),(0,s.Lk)("div",J,[(0,s.Lk)("div",Q,[(0,s.Lk)("div",Z,[(0,s.Lk)("button",{ref:"prevArrow","aria-label":"Previous slide",onClick:t[0]||(t[0]=(...e)=>a.prevItem&&a.prevItem(...e)),class:"hidden border-color lg:block arrow prev border-t-2 border-l-2 h-4 w-4"},null,512),(0,s.Lk)("p",ee,[(0,s.Lk)("span",{innerHTML:a.currentItemData.text},null,8,te)],512),(0,s.Lk)("button",{ref:"nextArrow","aria-label":"Next slide",onClick:t[1]||(t[1]=(...e)=>a.nextItem&&a.nextItem(...e)),class:"hidden border-color lg:block arrow next border-t-2 border-l-2 h-4 w-4"},null,512)]),(0,s.Lk)("div",oe,[(0,s.Lk)("swiper-container",ne,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.items,((e,t)=>((0,s.uX)(),(0,s.CE)("swiper-slide",{key:t},[(0,s.Lk)("div",{innerHTML:e.text,class:"swiper-content text-color paragraph w-full text-start flex justify-center flex-wrap text-2xl"},null,8,se)])))),128))],512)],512),(0,s.Lk)("div",ie,[(0,s.Lk)("p",{ref:"swipe",class:"swipe swipe-forward heading uppercase text-lg text-color inline opacity-100",onClick:t[2]||(t[2]=(...e)=>a.nextSlide&&a.nextSlide(...e))}," swipe ",512),((0,s.uX)(),(0,s.CE)("svg",ae,t[3]||(t[3]=[(0,s.Lk)("path",{"fill-rule":"evenodd",d:"M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"},null,-1)]),512))]),(0,s.Lk)("div",re,[(0,s.bo)(((0,s.uX)(),(0,s.Wv)(r,{to:"/portfolio",class:"text-color border-color button py-2 px-8 mr-4 paragraph uppercase text-base xl:text-lg 2xl:text-xl border-2 rounded-full"},{default:(0,s.k6)((()=>t[4]||(t[4]=[(0,s.eW)("Portfolio")]))),_:1})),[[d]]),(0,s.bo)(((0,s.uX)(),(0,s.Wv)(r,{to:"/resume",class:"text-color border-color button py-2 px-8 mr-4 paragraph uppercase text-base xl:text-lg 2xl:text-xl border-2 rounded-full"},{default:(0,s.k6)((()=>t[5]||(t[5]=[(0,s.eW)("Resume")]))),_:1})),[[d]])],512)])]),(0,s.Lk)("div",le,[(0,s.bF)(l,{svgClass:"fill"})],512)]),(0,s.bF)(c)],64)}var de=o(650);I.os.registerPlugin(de.H0);const pe={name:"Home",components:{MenuComponent:z,SocialComponent:P},data(){return{currentItem:0,items:[{title:"Hello",text:"My name is Michele Paolino, <br>I'm a Napoli based web designer <br>and front-end developer."},{title:"Skills",text:"Vue, WordPress, Sass, Tailwind, <br>Figma, Adobe, UI design, Typography, <br>Bootstrap, GSAP, Git"},{title:"Swell Scales",text:'<p>I\'m author of Swell Scales, <br>a design system for web devs. <br>Take a look on my <span><a class="underline underline-offset-8" href="https://github.com/michelediss?tab=repositories" target="_blank"><strong>GitHub.</strong></a></span></p>'},{title:"Let's play!",text:'<p>Press <kbd class="c-key text-color">c</kbd> on your keyboard<br> or double tap on mobile to generate<br> a new website skin!</p>'}],isFontAssignActive:!1}},computed:{currentItemData(){return this.items[this.currentItem]}},methods:{nextSlide(){const e=this.$refs.swiper?.swiper;e&&e.slideNext()},nextItem(){this.isFontAssignActive||this.transitionSlide((()=>{this.currentItem=(this.currentItem+1)%this.items.length}))},prevItem(){this.isFontAssignActive||this.transitionSlide((()=>{this.currentItem=(this.currentItem-1+this.items.length)%this.items.length}))},goToItem(e){this.isFontAssignActive||e===this.currentItem||this.transitionSlide((()=>{this.currentItem=e}))},handleKeydown(e){this.isFontAssignActive||("ArrowRight"===e.key?this.nextItem():"ArrowLeft"===e.key&&this.prevItem())},transitionSlide(e){const t=this.$refs.carouselContent,o=this.$refs.carouselTitle,n=this.$refs.underline;!this.isFontAssignActive&&t&&o&&I.os.to([t,o],{duration:.5,opacity:0,onComplete:()=>{e(),I.os.to([t,o],{duration:.5,opacity:1})}}),!this.isFontAssignActive&&n&&I.os.to(n,{duration:.5,width:0,opacity:0,onComplete:()=>{I.os.to(n,{duration:.5,width:"100%",opacity:1})}})},handleSlideChange(){const e=this.$refs.swiper?.swiper;if(!this.isFontAssignActive&&e){let t=e.realIndex;this.transitionSlide((()=>{this.currentItem=t}))}},fontAssign(){let e;this.isFontAssignActive=!0;do{e=Math.floor(12*Math.random())+1}while(e===lastRandomNum);lastRandomNum=e,document.body.classList.forEach((e=>{e.startsWith("style-")&&document.body.classList.remove(e)})),document.body.classList.add(`style-${e}`),setTimeout((()=>{this.isFontAssignActive=!1}),500)},setVH(){let e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)},checkSwiper(){this.$refs.swiper&&this.$refs.swiper.swiper?this.$refs.swiper.swiper.on("slideChange",this.handleSlideChange):setTimeout(this.checkSwiper,100)}},mounted(){const e=I.os.timeline(),t=(t,o,n)=>{t&&e.to(t,o,n)},o=(t,o,n,s)=>{t.length>0&&e.to(t,{...o,stagger:n},s)},n=()=>{const{carouselTitle:n,underline:s,carouselContent:i,prevArrow:a,nextArrow:r,buttonContainer:l,footerIcons:c,swiperContainer:d,swipe:p,swipeArrow:u}=this.$refs;if(n&&s&&i&&a&&r&&l&&c){e.addLabel("start","+=0.5"),t(n,{opacity:1,y:0,duration:.9,ease:"power2.out"},"start+=0"),t(s,{opacity:1,width:"100%",duration:.9,ease:"power2.out"},"start+=0"),t(i,{opacity:1,y:0,duration:3,ease:"power2.out"},"start+=0.3"),t(d,{opacity:1,y:0,duration:3,ease:"power2.out"},"start+=0.3"),t(p,{opacity:1,y:0,duration:2,ease:"power2.out"},"start+=1.5"),t(u,{opacity:1,y:0,duration:2,ease:"power2.out"},"start+=1.5");const h=l.querySelectorAll(".button");o([...h],{opacity:1,y:0,duration:2,ease:"power2.out"},0,"start+=1.5"),t(c,{opacity:1,y:0,duration:2,ease:"power2.out"},"start+=1.5"),I.os.set([a,r],{display:"block"}),t([a,r],{opacity:1,duration:2,ease:"power2.out"},"start+=1.5")}};n(),this.$nextTick(this.checkSwiper),window.addEventListener("keydown",this.handleKeydown),this.setVH(),window.addEventListener("resize",this.setVH)},beforeDestroy(){this.$refs.swiper&&this.$refs.swiper.swiper&&this.$refs.swiper.swiper.off("slideChange",this.handleSlideChange),window.removeEventListener("resize",this.setVH),window.removeEventListener("keydown",this.handleKeydown)}},ue=(0,H.A)(pe,[["render",ce],["__scopeId","data-v-4d5ca9c8"]]),he=ue,me={class:"container w-full mx-auto min-h-screen flex flex-col space-between"},ge={class:"flex-none mb-16"},fe={class:"main portfolio flex grow items-center justify-center mx-auto w-full md:w-5/6",ref:"mainContent"},ve={class:"container"},xe={class:"row flex flex-col flex-wrap lg:flex-row items-center py-8 md:space-x-2 lg:space-x-0 w-full"},we={class:"w-full lg:w-4/12"},be={class:"text-2xl lg:text-2xl heading"},ye={class:"w-full lg:w-8/12 flex"},ke={class:"w-5/12 justify-self-start lg:justify-self-center text-start lg:text-center flex justify-start lg:justify-center items-end lg:items-center mt-3 md:mt-0"},Le={class:"uppercase text-base paragraph"},Ce={class:"w-7/12 text-end flex justify-end items-end"},$e=["href"],Ie={class:"flex-none"};function Me(e,t,o,n,i,a){const r=(0,s.g2)("HeaderComponent"),l=(0,s.g2)("SocialComponent"),c=(0,s.gN)("hover-animate");return(0,s.uX)(),(0,s.CE)("section",me,[(0,s.Lk)("div",ge,[(0,s.bF)(r,{pageTitle:i.pageTitle,ref:"header"},null,8,["pageTitle"])]),(0,s.Lk)("div",fe,[(0,s.Lk)("div",ve,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.projects,((e,o)=>((0,s.uX)(),(0,s.CE)("div",{key:o,class:"row-container"},[(0,s.Lk)("div",xe,[(0,s.Lk)("div",we,[(0,s.Lk)("h1",be,(0,M.v_)(e.name),1)]),(0,s.Lk)("div",ye,[(0,s.Lk)("div",ke,[(0,s.Lk)("h5",Le,(0,M.v_)(e.role),1)]),(0,s.Lk)("div",Ce,[(0,s.bo)(((0,s.uX)(),(0,s.CE)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",class:"button text-base paragraph border-2 border-color rounded-full px-8 py-1"},t[0]||(t[0]=[(0,s.eW)(" Check it out! ")]),8,$e)),[[c]])])])]),t[1]||(t[1]=(0,s.Lk)("div",{class:"bg-secondary-color h-0.5 w-full opacity-50"},null,-1))])))),128))])],512),(0,s.Lk)("div",Ie,[(0,s.bF)(l,{svgClass:"fill"})])])}const Te={id:"nav-back",class:"flex pt-6 w-full lg:w-5/6 mx-auto"},_e={class:"flex justify-start md:justify-center w-full"},Se={class:"title-page-container"},Ae={ref:"underline",class:"title-page-underline bg-secondary-color h-0.5 bg-slate-900"};function Ee(e,t,o,n,i,a){return(0,s.uX)(),(0,s.CE)("header",null,[(0,s.Lk)("nav",Te,[(0,s.Lk)("div",_e,[(0,s.Lk)("div",Se,[(0,s.Lk)("h1",{ref:"title",class:"title-page-text text-color text-2xl 2xl:text-3xl heading"},(0,M.v_)(o.pageTitle),513),(0,s.Lk)("div",Ae,null,512)])])])])}const je={name:"HeaderComponent",props:{pageTitle:{type:String,required:!0}},mounted(){this.$nextTick((()=>{this.$refs.underline&&this.$refs.title?(I.os.fromTo(this.$refs.underline,{opacity:0,width:"0%"},{opacity:1,width:"100%",duration:1,delay:.6,ease:"power2.out"}),I.os.fromTo(this.$refs.title,{opacity:0},{opacity:1,duration:1,delay:.6,ease:"power2.out"})):console.warn("GSAP target elements 'underline' or 'title' are null.")}))}},Fe=(0,H.A)(je,[["render",Ee]]),He=Fe,De={name:"Portfolio",components:{HeaderComponent:He,MenuComponent:z,SocialComponent:P},data(){return{pageTitle:"Portfolio",projects:[{name:"Je So' Pazzo",role:"visual design / developing",url:"https://www.jesopazzo.org"},{name:"Hexenschuhe",role:"visual design / developing",url:"https://hexenschuhe.com"},{name:"Dubstone",role:"visual design / developing",url:"https://www.dubstone.it"},{name:"Caffé Seddio",role:"developing",url:"https://caffeseddio.com/"},{name:"Buy and rent",role:"visual design / developing",url:"https://buyandrent.it/"},{name:"Becoming lab",role:"visual design / developing",url:"https://becominglab.it"}]}},mounted(){const e=I.os.timeline();this.$refs.mainContent.querySelectorAll(".row-container").forEach(((t,o)=>{e.from(t,{opacity:0,y:50,duration:.4},"-=0.2")})),e.delay(1)}},Pe=(0,H.A)(De,[["render",Me],["__scopeId","data-v-6c0521b9"]]),Xe=Pe,Ve={class:"container w-full lg:w-5/6 xl:4/6 mx-0 md:mx-auto"},ze={class:"flex-none"},Oe={class:"intro-resume container mt-24 mb-16 w-full flex justify-start md:justify-center flex-wrap",ref:"introResume"},We={class:"dropdown-container relative inline-block"},Be={class:"work-history",ref:"workHistory"},Ue={class:"mb-12 flex flex-wrap"},Re={class:"block md:flex py-4 my-4"},Ke={class:"w-full md:w-1/3 lg:w-1/4 pt-2"},Ge={class:"text-color text-xl heading mb-2"},Ne={class:"w-full md:w-2/3 lg:w-3/4"},qe={class:"text-color text-lg mb-1 paragraph uppercase"},Ye={class:"text-color text-base paragraph"},Je={class:"mx-auto tech-stack w-full",ref:"techStack"},Qe={class:"w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"},Ze={class:"text-color text-base heading mb-2 uppercase scope opacity-75"},et={class:"text-color text-lg paragraph"},tt={class:"flex-none"};function ot(e,t,o,n,i,a){const r=(0,s.g2)("HeaderComponent"),l=(0,s.g2)("SocialComponent"),c=(0,s.g2)("MenuComponent"),d=(0,s.gN)("hover-animate");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("section",Ve,[(0,s.Lk)("div",ze,[(0,s.bF)(r,{pageTitle:i.pageTitle,ref:"header"},null,8,["pageTitle"])]),(0,s.Lk)("div",Oe,[t[3]||(t[3]=(0,s.Lk)("p",{class:"text-color text-xl md:text-2xl paragraph text-start md:text-center mb-12"}," My name is Michele Paolino, I'm a web designer and front-end developer. My job involves designing and developing modern, lightweight, and high-performance web solutions. I apply to my works the knowledge I have gained from studying the processes that govern visual communication in its formal and functional aspects. ",-1)),(0,s.Lk)("div",We,[(0,s.bo)(((0,s.uX)(),(0,s.CE)("button",{onClick:t[0]||(t[0]=(...e)=>a.toggleDropdown&&a.toggleDropdown(...e)),class:"paragraph text-color border-color button rounded-full px-8 py-1 text-lg"},t[1]||(t[1]=[(0,s.eW)(" Download CV ")]))),[[d]]),(0,s.Lk)("div",{ref:"dropdownMenu",class:(0,M.C4)(["dropdown-menu w-full mt-2 shadow-lg backdrop-blur-sm bg-white/50 overflow-hidden",{show:i.isDropdownVisible}])},t[2]||(t[2]=[(0,s.Fv)('<ul data-v-63450cd6><li data-v-63450cd6><a href="./download/Michele_Paolino_CV_ENG.pdf" target="_blank" class="block px-4 pt-2 pb-1 text-md color-black hover:bg-dark hover:color-white" data-v-63450cd6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="inline fill-black mr-1 -mt-1 bi bi-download" viewBox="0 0 16 16" data-v-63450cd6><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" data-v-63450cd6></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" data-v-63450cd6></path></svg> PDF English</a></li><li data-v-63450cd6><a href="./download/Michele_Paolino_CV_ITA.pdf" target="_blank" class="block px-4 pt-1 pb-2 text-md color-black hover:bg-dark hover:color-white" data-v-63450cd6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="inline fill-black mr-1 -mt-1 bi bi-download" viewBox="0 0 16 16" data-v-63450cd6><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" data-v-63450cd6></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" data-v-63450cd6></path></svg> PDF Italiano</a></li></ul>',1)]),2)])],512),(0,s.Lk)("div",Be,[t[5]||(t[5]=(0,s.Lk)("div",{class:""},[(0,s.Lk)("h2",{class:"text-color mt-20 mb-12 heading uppercase text-3xl"},"Work history"),(0,s.Lk)("div",{class:"bg-secondary-color h-0.5 w-full opacity-50"})],-1)),(0,s.Lk)("div",Ue,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.items,((e,o)=>((0,s.uX)(),(0,s.CE)("div",{key:o},[(0,s.Lk)("div",Re,[(0,s.Lk)("div",Ke,[(0,s.Lk)("h2",Ge,(0,M.v_)(e.job),1)]),(0,s.Lk)("div",Ne,[(0,s.Lk)("h3",qe,(0,M.v_)(e.position),1),(0,s.Lk)("p",Ye,(0,M.v_)(e.description),1)])]),t[4]||(t[4]=(0,s.Lk)("div",{class:"bg-secondary-color h-0.5 w-full opacity-50"},null,-1))])))),128))])],512),(0,s.Lk)("div",Je,[t[6]||(t[6]=(0,s.Lk)("div",{class:""},[(0,s.Lk)("h2",{class:"text-color mt-20 mb-12 heading uppercase technical-skills text-xl"},"Expertise Areas")],-1)),(0,s.Lk)("div",Qe,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.skills,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t},[(0,s.Lk)("h3",Ze,(0,M.v_)(e.scope),1),(0,s.Lk)("p",et,(0,M.v_)(e.skill),1)])))),128))])],512),(0,s.Lk)("div",tt,[(0,s.bF)(l,{svgClass:"fill"})])]),(0,s.bF)(c)],64)}const nt={name:"Resume",components:{HeaderComponent:He,MenuComponent:z,SocialComponent:P},data(){return{pageTitle:"Resume",items:[{job:"Dopolavoro ",position:"Web developer",description:"I specialize in creating websites that are both visually stunning and functionally robust, maintaining the firm's reputation for design excellence. I continuously explore and implement new web design trends, ensuring our offerings remain innovative and competitive. By integrating technical and design expertise, I create cohesive and engaging user experiences."},{job:"Sari Advertising",position:"Web designer & developer",description:"I played an integral role in a team focused on delivering advanced web designs and strategic advertising solutions. I developed SEO-optimized websites to enhance client visibility and improve user engagement and conversion rates. I worked closely with cross-functional teams to ensure a unified and effective brand message."},{job:"Becoming Lab",position:"Web designer & developer",description:"I led a team in creating web applications and marketing solutions, with a focus on enhancing clients' digital presence. I managed projects from concept to completion, ensuring timelines were met without compromising on quality. I built and maintained strong client relationships to align projects with their business goals and brand identity."}],skills:[{scope:"Development",skill:"Vue.js, Bootstrap, Tailwind, Sass, PHP"},{scope:"CMS",skill:"WordPress, PrestaShop"},{scope:"Design & Prototyping",skill:"Figma, Adobe Photoshop, Adobe Illustrator"},{scope:"UI design",skill:"UI design principles, typography, color theory"},{scope:"Animation & Effects",skill:"GreenSock Animation Platform (GSAP)"},{scope:"Version Control",skill:"Git"}],isDropdownVisible:!1}},methods:{toggleDropdown(){this.isDropdownVisible=!this.isDropdownVisible,this.isDropdownVisible?this.fadeInDropdown():this.fadeOutDropdown()},fadeInDropdown(){this.$refs.dropdownMenu?I.os.to(this.$refs.dropdownMenu,{opacity:1,y:0,display:"block",duration:.5,ease:"power2.out"}):console.warn("Riferimento dropdownMenu non trovato per fadeIn.")},fadeOutDropdown(){this.$refs.dropdownMenu?I.os.to(this.$refs.dropdownMenu,{opacity:0,y:0,display:"none",duration:.25,ease:"linear.in"}):console.warn("Riferimento dropdownMenu non trovato per fadeOut.")},closeDropdown(e){e.target.closest(".dropdown-container")||(this.isDropdownVisible=!1,this.$refs.dropdownMenu&&this.fadeOutDropdown())}},mounted(){window.addEventListener("click",this.closeDropdown),(0,s.dY)((()=>{const e=I.os.timeline();this.$refs.introResume&&this.$refs.workHistory&&this.$refs.techStack?(e.from(this.$refs.introResume,{opacity:0,y:50,duration:.8,ease:"power2.out"},"-=0.2").from(this.$refs.workHistory,{opacity:0,y:50,duration:.8,ease:"power2.out"},"-=0.6").from(this.$refs.techStack,{opacity:0,y:50,duration:.8,ease:"power2.out"},"-=0.2"),e.delay(1)):console.warn("Uno o più riferimenti non sono stati trovati per la timeline GSAP.")}))},beforeDestroy(){window.removeEventListener("click",this.closeDropdown)}},st=(0,H.A)(nt,[["render",ot],["__scopeId","data-v-63450cd6"]]),it=st,at={class:"flex flex-col h-screen"},rt={class:"flex-none"},lt={class:"philosophy w-full lg:w-4/6 mx-auto mt-10 md:mt-20 2xl:mt-40",ref:"philosophyContent"},ct={class:"flex-none"};function dt(e,t,o,n,i,a){const r=(0,s.g2)("HeaderComponent"),l=(0,s.g2)("SocialComponent");return(0,s.uX)(),(0,s.CE)("div",at,[(0,s.Lk)("div",rt,[(0,s.bF)(r,{pageTitle:i.pageTitle,ref:"header"},null,8,["pageTitle"])]),(0,s.Lk)("div",lt,t[0]||(t[0]=[(0,s.Fv)('<div class="philosophy-title" data-v-b27b4ae6><h1 class="mb-12 heading text-4xl leading-tight" data-v-b27b4ae6> Suspension of disbelief in digital design: a narrative approach to Ui/Ux </h1></div><div class="philosophy-paragraph" data-v-b27b4ae6><p class="text-xl md:text-2xl paragraph text-start mb-12" data-v-b27b4ae6> The concept of <a class="underline" target="_blank" href="https://en.wikipedia.org/wiki/Suspension_of_disbelief" data-v-b27b4ae6>suspension of disbelief</a>, originally articulated by the poet and literary critic <a class="underline" target="_blank" href="https://en.wikipedia.org/wiki/Samuel_Taylor_Coleridge" data-v-b27b4ae6>Samuel Taylor Coleridge</a>, refers to the intentional act of setting aside one&#39;s skepticism to engage with and enjoy elements within a narrative that may not conform to the laws of reality or logic. This cognitive process enables the audience to immerse themselves in a narrative by willingly accepting fantastical or non-realistic aspects as plausible within the context of the story. In essence, suspension of disbelief is a mental state where the audience consents to overlook the implausibility of certain elements to fully engage with the narrative experience. </p></div><div class="philosophy-paragraph" data-v-b27b4ae6><p class="text-xl md:text-2xl paragraph text-start mb-12" data-v-b27b4ae6> When applied to the domain of UI/UX design and frontend web development, the principle of suspension of disbelief assumes a pivotal role in crafting digital experiences that captivate and retain user engagement. Digital interfaces, much like narratives, can benefit from designing elements that encourage users to transcend their everyday realities and immerse themselves in the digital environment presented to them. This immersion is achieved through a combination of visual design, animation, interactive storytelling, and consistency in user experience. By carefully orchestrating these elements, designers are able to construct digital environments that not only attract the user&#39;s attention but also sustain their engagement over time. </p></div><div class="philosophy-paragraph" data-v-b27b4ae6><p class="text-xl md:text-2xl paragraph text-start mb-12" data-v-b27b4ae6> Visual design in this context is more than just aesthetic appeal; it serves as a gateway to an immersive experience. Through the use of color schemes, typography, imagery, and spatial arrangements, designers create a visually cohesive environment that supports the narrative or thematic elements of the digital experience. This visual coherence helps users to suspend their disbelief and accept the digital environment as a coherent, navigable space. Furthermore, animation and micro-interactions contribute to a dynamic sense of realism, providing immediate feedback and enhancing the perceived interactivity of the digital interface, which further supports the user&#39;s suspension of disbelief. </p></div><div class="philosophy-paragraph" data-v-b27b4ae6><p class="text-xl md:text-2xl paragraph text-start mb-12" data-v-b27b4ae6> Moreover, storytelling in UI/UX design extends beyond mere content; it encompasses the entire journey of the user through the digital product. Storytelling can manifest through carefully crafted user flows that guide users seamlessly from one interaction to the next, creating a narrative-like progression that mirrors the structure of a traditional story. Consistency in design, such as maintaining uniform patterns, behaviors, and interface elements across the user journey, reinforces trust and familiarity, enabling users to focus on the narrative or interactive experience without being distracted by inconsistencies or unexpected deviations. </p></div><div class="philosophy-paragraph" data-v-b27b4ae6><p class="text-xl md:text-2xl paragraph text-start" data-v-b27b4ae6> In conclusion, the application of the suspension of disbelief in UI/UX design and development is integral to creating digital experiences that are engaging and memorable. By leveraging the principles of visual design, animation, storytelling, and consistency, designers can craft immersive digital environments that encourage users to momentarily transcend the limitations of their everyday experiences, fostering deeper engagement and sustained interaction with digital products. This approach not only enhances user satisfaction but also establishes a meaningful connection between the user and the digital experience, ultimately contributing to the overall effectiveness and success of the design. </p></div>',6)]),512),(0,s.Lk)("div",ct,[(0,s.bF)(l)])])}const pt={name:"Philosophy",components:{HeaderComponent:He,MenuComponent:z,SocialComponent:P},data(){return{pageTitle:"What I think"}},mounted(){const e=I.os.timeline();e.from(this.$refs.philosophyContent.querySelector(".philosophy-title"),{opacity:0,y:50,duration:.8},"+=0.8"),this.$refs.philosophyContent.querySelectorAll(".philosophy-paragraph").forEach(((t,o)=>{e.from(t,{opacity:0,y:50,duration:.6,ease:"power2.out"},"-=0.4")}))}},ut=(0,H.A)(pt,[["render",dt],["__scopeId","data-v-b27b4ae6"]]),ht=ut;var mt=o(576);let gt=Math.floor(360*Math.random());const ft=7;function vt(e){const t=parseInt(e.slice(1),16),o=t>>16&255,n=t>>8&255,s=255&t;return[o,n,s]}function xt(e,t,o){const[n,s,i]=[e,t,o].map((e=>{const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)})),a=.2126*n+.7152*s+.0722*i;return a}function wt(e,t){const o=e>t?(e+.05)/(t+.05):(t+.05)/(e+.05);return o}function bt(e,t,o,n){const[s,i,a]=vt(e),r=xt(s,i,a),[l,c,d]=vt(t),p=xt(l,c,d),[u,h,m]=vt(o),g=xt(u,h,m),f=wt(r,p),v=wt(r,g);let x;return x=f>=n&&f>=v?t:v>=n?o:f>=v?t:o,x}function yt(e,t,o){const n=e/4.5,s=t+(o-t)*Math.min(1,n);return s}function kt(){let e;do{e=Math.floor(360*Math.random())}while(Math.abs(e-gt)<30);gt=e;const t=Math.floor(66*Math.random())+35,o=Math.floor(41*Math.random())+35,n=new mt.h;n.hsluv_h=e,n.hsluv_s=t,n.hsluv_l=o,n.hsluvToHex();const s=n.hex;n.hsluv_s=yt(ft,60,80),n.hsluv_l=yt(ft,75,95),n.hsluvToHex();const i=n.hex;n.hsluv_s=yt(ft,80,100),n.hsluv_l=yt(ft,10,20),n.hsluvToHex();const a=n.hex,r=bt(s,i,a,ft),l=(e+180)%360;n.hsluv_h=l,n.hsluv_s=t,n.hsluv_l=o,n.hsluvToHex();const c=n.hex;n.hsluv_s=yt(ft,60,80),n.hsluv_l=yt(ft,85,95),n.hsluvToHex();const d=n.hex;n.hsluv_s=yt(ft,80,100),n.hsluv_l=yt(ft,10,30),n.hsluvToHex();const p=n.hex,u=bt(c,d,p,ft);document.body.style.backgroundColor=s,document.body.style.color=r;const h=document.createElement("style");return h.innerHTML=`\n    .text-color { color: ${r}; }\n    .fill { fill: ${r}; }\n    .border-color { border-color: ${r}; }\n    .border-black { border-color: ${a}; }\n    .bg-secondary-color { background-color: ${r}; }\n    .bg-white-color { background-color: ${i}; }\n    .main-text-color { color: ${s}; } \n    .bg-menu-color { background-color: ${c}; }\n    .text-menu-color { color: ${u}; }\n    .border-menu-color { border-color: ${u}; }\n    .bg-secondary-menu-color { background-color: ${u}; }\n    .fill-black { fill: ${a}; }\n    .color-black { color: ${a}; }\n    .color-white { color: ${i}; }\n    .bg-dark { background-color: ${a}; }\n    .fill-menu { fill: ${u}; }\n    .dropdown-menu a:hover { color: ${i}; }\n    .dropdown-menu a:hover svg { fill: ${i}; }\n    .dropdown-menu a:hover { background-color: ${a}; }\n  `,document.head.appendChild(h),s}let Lt=null;function Ct(){let e;do{e=Math.floor(12*Math.random())+1}while(e===Lt);Lt=e,document.body.classList.forEach((e=>{e.startsWith("style-")&&document.body.classList.remove(e)})),document.body.classList.add(`style-${e}`)}const $t=[{path:"/",name:"Home",component:he},{path:"/portfolio",name:"Portfolio",component:Xe},{path:"/resume",name:"Resume",component:it},{path:"/vision",name:"Vision",component:ht}],It=(0,U.aE)({history:(0,U.Bt)(),routes:$t,scrollBehavior(e,t,o){return o||{top:0}}});function Mt(){kt(),Ct()}It.beforeEach(((e,t,o)=>{kt();const n=Array.from(document.body.classList).some((e=>e.startsWith("style-")));n||Ct(),o()})),window.addEventListener("keydown",(e=>{"KeyC"===e.code&&(kt(),Ct())}));const Tt=It,_t={mounted(e){e.addEventListener("mouseenter",(()=>{e.classList.add("bg-secondary-color"),e.classList.add("main-text-color")})),e.addEventListener("mouseleave",(()=>{e.classList.remove("bg-secondary-color"),e.classList.remove("main-text-color")}))},unmounted(e){e.removeEventListener("mouseenter",(()=>{e.classList.add("bg-secondary-color"),e.classList.add("main-text-color")})),e.removeEventListener("mouseleave",(()=>{e.classList.remove("bg-secondary-color"),e.classList.remove("main-text-color")}))}};var St=o(136);(0,St.kz)();const At=(0,n.Ef)(B);let Et=0;const jt=300;document.addEventListener("touchstart",(function(){const e=(new Date).getTime(),t=e-Et;t<jt&&t>0&&Mt(),Et=e})),At.directive("hover-animate",_t),At.use(Tt),At.mount("#app")}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.m=e,(()=>{var e=[];o.O=(t,n,s,i)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){for(var[n,s,i]=e[d],r=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(r=!1,i<a&&(a=i));if(r){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,s,i]}})(),(()=>{o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={524:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var s,i,[a,r,l]=n,c=0;if(a.some((t=>0!==e[t]))){for(s in r)o.o(r,s)&&(o.m[s]=r[s]);if(l)var d=l(o)}for(t&&t(n);c<a.length;c++)i=a[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},n=self["webpackChunkpersonal_website_vue"]=self["webpackChunkpersonal_website_vue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=o.O(void 0,[504],(()=>o(450)));n=o.O(n)})();
//# sourceMappingURL=app.5761ee9c.js.map