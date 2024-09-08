(()=>{"use strict";var e={162:(e,t,o)=>{var n=o(751),i=o(641);const s={class:"px-5"};function a(e,t,o,n,a,r){const l=(0,i.g2)("router-view"),c=(0,i.gN)("touch");return(0,i.bo)(((0,i.uX)(),(0,i.CE)("main",s,[(0,i.bF)(l)])),[[c,r.onSwipeUp,"swipe",{top:!0}]])}const r={data(){return{}},methods:{onSwipeUp(){}},mounted(){}};var l=o(262);const c=(0,l.A)(r,[["render",a]]),d=c;var u=o(220),p=o(33);const h={class:"flex flex-col home-screen"},m={class:"flex-none"},g={id:"nav-back",class:"flex mt-6 w-full lg:w-5/6 mx-auto justify-start md:justify-center"},f={class:"flex w-auto"},v={class:"title-page-container"},x={ref:"underline",class:"bg-secondary-color title-page-underline h-0.5 bg-slate-900"},b={class:"main home flex grow items-center w-full justify-center"},w={class:"container"},y={class:"hidden md:flex carousel justify-center items-center"},k={ref:"carouselContent",class:"text-color paragraph w-full lg:w-5/6 carousel text-center md:px-5 flex justify-center flex-wrap text-xl md:text-3xl xl:text-4xl 2xl:text-5xl"},L=["innerHTML"],C={ref:"swiperContainer",class:"opacity-0 block md:hidden carousel-swiper"},$={ref:"swiper","slides-per-view":"1","space-between":"50"},M=["innerHTML"],I={class:"block md:hidden mt-8"},_={ref:"swipe",class:"swipe swipe-forward heading uppercase text-lg text-color inline opacity-100"},S={xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",ref:"swipeArrow",class:"swipe-arrow inline fill opacity-0",viewBox:"0 0 16 16"},T={ref:"buttonContainer",class:"flex justify-start md:justify-center mt-12 md:mt-12"},E={class:"flex-none footer",ref:"footerIcons"};function j(e,t,o,n,s,a){const r=(0,i.g2)("router-link"),l=(0,i.g2)("SocialComponent"),c=(0,i.g2)("MenuComponent"),d=(0,i.gN)("hover-animate");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("div",h,[(0,i.Lk)("div",m,[(0,i.Lk)("header",null,[(0,i.Lk)("nav",g,[(0,i.Lk)("div",f,[(0,i.Lk)("div",v,[(0,i.Lk)("h1",{ref:"carouselTitle",class:"text-color title-page-text text-2xl 2xl:text-3xl heading"},(0,p.v_)(a.currentItemData.title),513),(0,i.Lk)("div",x,null,512)])])])])]),(0,i.Lk)("div",b,[(0,i.Lk)("div",w,[(0,i.Lk)("div",y,[(0,i.Lk)("button",{ref:"prevArrow","aria-label":"Previous slide",onClick:t[0]||(t[0]=(...e)=>a.prevItem&&a.prevItem(...e)),class:"hidden border-color lg:block arrow prev border-t-2 border-l-2 h-4 w-4"},null,512),(0,i.Lk)("p",k,[(0,i.Lk)("span",{innerHTML:a.currentItemData.text},null,8,L)],512),(0,i.Lk)("button",{ref:"nextArrow","aria-label":"Next slide",onClick:t[1]||(t[1]=(...e)=>a.nextItem&&a.nextItem(...e)),class:"hidden border-color lg:block arrow next border-t-2 border-l-2 h-4 w-4"},null,512)]),(0,i.Lk)("div",C,[(0,i.Lk)("swiper-container",$,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.items,((e,t)=>((0,i.uX)(),(0,i.CE)("swiper-slide",{key:t},[(0,i.Lk)("div",{innerHTML:e.text,class:"swiper-content text-color paragraph w-full text-start flex justify-center flex-wrap text-3xl"},null,8,M)])))),128))],512)],512),(0,i.Lk)("div",I,[(0,i.Lk)("p",_,"swipe ",512),((0,i.uX)(),(0,i.CE)("svg",S,t[2]||(t[2]=[(0,i.Lk)("path",{"fill-rule":"evenodd",d:"M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"},null,-1)]),512))]),(0,i.Lk)("div",T,[(0,i.bo)(((0,i.uX)(),(0,i.Wv)(r,{to:"/portfolio",class:"text-color border-color button py-2 px-8 mr-4 paragraph uppercase text-base xl:text-lg 2xl:text-xl border-2 rounded-full"},{default:(0,i.k6)((()=>t[3]||(t[3]=[(0,i.eW)("Portfolio")]))),_:1})),[[d]]),(0,i.bo)(((0,i.uX)(),(0,i.Wv)(r,{to:"/resume",class:"text-color border-color button py-2 px-8 mr-4 paragraph uppercase text-base xl:text-lg 2xl:text-xl border-2 rounded-full"},{default:(0,i.k6)((()=>t[4]||(t[4]=[(0,i.eW)("Resume")]))),_:1})),[[d]])],512)])]),(0,i.Lk)("div",E,[(0,i.bF)(l,{svgClass:"fill"})],512)]),(0,i.bF)(c)],64)}var H=o(738),A=o(650);const F={class:"hamburger-container z-50 fixed bottom-3.5 right-3.5 container flex justify-center items-center inline-block w-auto"},D={ref:"modal",class:"px-4 menu-fullscreen flex flex-col justify-between min-h-screen fixed inset-0 bg-menu-color z-40"},P={id:"nav-back",class:"flex pt-6 w-full lg:w-5/6 mx-auto"},X={class:"flex justify-start md:justify-center w-full"},V={class:"title-page-container"},z={ref:"title",class:"title-page-text text-2xl 2xl:text-3xl heading text-menu-color opacity-0"},O={ref:"underline",class:"title-page-underline h-0.5 bg-secondary-menu-color w-0"},W={class:"menu-content flex flex-col items-start md:items-center text-white"},U={class:"text-start md:text-center",ref:"menuItems"},B={class:"paragraph my-8 md:my-10 lg:my-8 xl:my-12 menu-item-li"},R={class:"inline-block w-auto menu-item-wrapper"},K={class:"paragraph my-8 md:my-10 lg:my-8 xl:my-12 menu-item-li"},q={class:"inline-block w-auto menu-item-wrapper"},G={class:"paragraph my-8 md:my-10 lg:my-8 xl:my-12 menu-item-li"},N={class:"inline-block w-auto menu-item-wrapper"},Y={class:"paragraph my-8 md:my-10 lg:my-8 xl:my-12 menu-item-li"},J={class:"inline-block w-auto menu-item-wrapper"},Q={class:"flex-none footer",ref:"footerIcons"};function Z(e,t,o,n,s,a){const r=(0,i.g2)("router-link"),l=(0,i.g2)("SocialComponent");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("div",F,[(0,i.Lk)("button",{id:"hamburger-menu","aria-label":"Hamburger menu",class:"hamburger p-4 shadow-lg backdrop-blur-sm rounded-full bg-white/50 flex items-center",onClick:t[0]||(t[0]=(...e)=>a.toggleMenu&&a.toggleMenu(...e))},t[1]||(t[1]=[(0,i.Lk)("svg",{class:"hamburger-icon fill-black",width:"30px",height:"30px",viewBox:"0 0 12 12","enable-background":"new 0 0 12 12",id:"hamburger",version:"1.1","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[(0,i.Lk)("g",null,[(0,i.Lk)("rect",{class:"line top",height:"1",width:"11",x:"0.5",y:"2.5"}),(0,i.Lk)("rect",{class:"line middle",height:"1",width:"11",x:"0.5",y:"5.5"}),(0,i.Lk)("rect",{class:"line bottom",height:"1",width:"11",x:"0.5",y:"8.5"})])],-1)]))]),(0,i.Lk)("div",D,[(0,i.Lk)("header",null,[(0,i.Lk)("nav",P,[(0,i.Lk)("div",X,[(0,i.Lk)("div",V,[(0,i.Lk)("h1",z,"Menu",512),(0,i.Lk)("div",O,null,512)])])])]),(0,i.Lk)("div",W,[(0,i.Lk)("ul",U,[(0,i.Lk)("li",B,[(0,i.Lk)("div",R,[(0,i.bF)(r,{to:"/",class:"text-4xl md:text-5xl xl:text-4xl 2xl:text-5xl text-menu-color my-0",onClick:a.toggleMenu},{default:(0,i.k6)((()=>t[2]||(t[2]=[(0,i.Lk)("span",{class:"inline md:hidden text-2xl relative bottom-1"},"•",-1),(0,i.eW)(" Home")]))),_:1},8,["onClick"]),t[3]||(t[3]=(0,i.Lk)("div",{class:"w-0 h-1 bg-secondary-menu-color menu-item-line"},null,-1))])]),(0,i.Lk)("li",K,[(0,i.Lk)("div",q,[(0,i.bF)(r,{to:"/portfolio",class:"text-4xl md:text-5xl xl:text-4xl 2xl:text-5xl text-menu-color my-0",onClick:a.toggleMenu},{default:(0,i.k6)((()=>t[4]||(t[4]=[(0,i.Lk)("span",{class:"inline md:hidden text-2xl relative bottom-1"},"•",-1),(0,i.eW)(" Portfolio")]))),_:1},8,["onClick"]),t[5]||(t[5]=(0,i.Lk)("div",{class:"w-0 h-1 bg-secondary-menu-color menu-item-line"},null,-1))])]),(0,i.Lk)("li",G,[(0,i.Lk)("div",N,[(0,i.bF)(r,{to:"/resume",class:"text-4xl md:text-5xl xl:text-4xl 2xl:text-5xl text-menu-color my-0",onClick:a.toggleMenu},{default:(0,i.k6)((()=>t[6]||(t[6]=[(0,i.Lk)("span",{class:"inline md:hidden text-2xl relative bottom-1"},"•",-1),(0,i.eW)(" Resume")]))),_:1},8,["onClick"]),t[7]||(t[7]=(0,i.Lk)("div",{class:"w-0 h-1 bg-secondary-menu-color menu-item-line"},null,-1))])]),(0,i.Lk)("li",Y,[(0,i.Lk)("div",J,[(0,i.bF)(r,{to:"/vision",class:"text-4xl md:text-5xl xl:text-4xl 2xl:text-5xl text-menu-color my-0",onClick:a.toggleMenu},{default:(0,i.k6)((()=>t[8]||(t[8]=[(0,i.Lk)("span",{class:"inline md:hidden text-2xl relative bottom-1"},"•",-1),(0,i.eW)(" Vision")]))),_:1},8,["onClick"]),t[9]||(t[9]=(0,i.Lk)("div",{class:"w-0 h-1 bg-secondary-menu-color menu-item-line"},null,-1))])])],512)]),(0,i.Lk)("div",Q,[(0,i.bF)(l,{svgClass:"fill-menu"})],512)],512)],64)}const ee={class:"flex justify-start md:justify-center w-full left-0 z-50 flex-wrap"},te={class:"container flex items-center relative inline-block w-auto mt-16 2xl:scale-125 2xl:mt-32 mb-8"},oe={id:"email","aria-label":"email",href:"mailto:mail@michelepaolino.me",target:"_blank",class:"icon flex items-center pr-8 md:px-8"},ne={id:"linkedin","aria-label":"linkedin",href:"https://www.linkedin.com/in/michele-paolino/",target:"_blank",class:"icon flex items-center px-8"},ie={id:"github","aria-label":"github",href:"https://github.com/michelediss?tab=repositories",target:"_blank",class:"icon flex items-center px-8"};function se(e,t,o,n,s,a){return(0,i.uX)(),(0,i.CE)("footer",ee,[(0,i.Lk)("div",te,[(0,i.Lk)("a",oe,[((0,i.uX)(),(0,i.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",class:(0,p.C4)(o.svgClass),viewBox:"0 0 15.6 16",preserveAspectRatio:"xMidYMid meet"},t[0]||(t[0]=[(0,i.Lk)("path",{d:"M15.6,7.1c0-4.2-3.2-7.1-7.7-7.1C3.2,0,0,3.3,0,8c0,4.9,3.1,8,8.1,8c1.2,0,2.4-0.2,3.2-0.5v-1.2c-0.6,0.3-1.9,0.5-3.2,0.5\n\tc-4.1,0-6.7-2.6-6.7-6.7c0-4,2.7-6.8,6.4-6.8c3.8,0,6.5,2.4,6.5,5.8c0,2.4-0.8,3.9-2,3.9c-0.7,0-1.1-0.4-1.1-1.1V4.2H9.7v1.2H9.6\n\tC9.2,4.6,8.3,4,7.3,4C5.4,4,4,5.7,4,8c0,2.4,1.3,4.1,3.3,4.1c1.1,0,2-0.5,2.4-1.5h0.2c0.1,0.9,1,1.6,2.1,1.6\n\tC14.2,12.2,15.6,10.2,15.6,7.1L15.6,7.1z M5.5,8c0-1.7,0.8-2.7,2-2.7c1.3,0,2.1,1,2.1,2.7s-0.8,2.7-2.2,2.7C6.3,10.7,5.5,9.7,5.5,8"},null,-1)]),2))]),(0,i.Lk)("a",ne,[((0,i.uX)(),(0,i.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",class:(0,p.C4)(o.svgClass),viewBox:"0 0 16 16"},t[1]||(t[1]=[(0,i.Lk)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"},null,-1)]),2))]),(0,i.Lk)("a",ie,[((0,i.uX)(),(0,i.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",class:(0,p.C4)(o.svgClass),viewBox:"0 0 32 32"},t[2]||(t[2]=[(0,i.Lk)("g",{class:"st0"},[(0,i.Lk)("path",{class:"st1",d:"M16,2.7C8.7,2.7,2.7,8.7,2.7,16s6,13.4,13.4,13.4s13.4-6,13.4-13.4S23.4,2.7,16,2.7z M0,16C0,7.2,7.2,0,16,0\n\t\ts16,7.2,16,16s-7.2,16-16,16S0,24.9,0,16z"}),(0,i.Lk)("path",{class:"st1",d:"M12.8,30.4c-0.1-0.2-0.1-1.7,0-4.5c-1.4,0-2.3,0-2.6-0.3c-0.5-0.4-1.1-1.5-1.6-2.3s-1.6-0.9-2-1.1\n\t\tc-0.4-0.2-0.5-0.9,1.2-0.3c1.7,0.5,1.8,2,2.4,2.4c0.6,0.3,1.9,0.2,2.5-0.1c0.6-0.3,0.6-1.3,0.7-1.7c0.1-0.4-0.3-0.5-0.4-0.5\n\t\tc-0.6,0-3.6-0.7-4.5-3.6c-0.8-3,0.2-4.9,0.8-5.7c0.4-0.6,0.4-1.7-0.1-3.6c1.6-0.2,2.9,0.3,3.8,1.6c0,0,1.2-0.7,3-0.7\n\t\tc1.9,0,2.5,0.6,3,0.7c0.5,0.1,0.9-2.2,4-1.6c-0.7,1.3-1.2,2.9-0.8,3.6c0.4,0.7,2.1,2.8,1.1,5.7c-0.7,2-2,3.2-4,3.6\n\t\tc-0.2,0.1-0.3,0.2-0.3,0.3c0,0.2,0.3,0.3,0.7,1.4c0.3,0.8,0.3,2.9,0.1,6.4c-0.6,0.2-1.1,0.3-1.5,0.3c-0.6,0.1-1.3,0.2-2,0.2\n\t\tc-0.7,0-0.9,0-1.8-0.1C14,30.6,13.4,30.5,12.8,30.4z"})],-1)]),2))])])])}const ae={name:"SocialComponent",props:{svgClass:{type:String,default:"fill"}}},re=(0,l.A)(ae,[["render",se],["__scopeId","data-v-46c958a8"]]),le=re,ce={components:{SocialComponent:le},name:"MenuComponent",data(){return{isModalOpen:!1}},methods:{toggleMenu(){this.isModalOpen=!this.isModalOpen,this.isModalOpen?(document.querySelector(".hamburger-icon").classList.add("is-open"),document.body.classList.add("no-scroll"),this.$nextTick((()=>{this.$refs.modal&&H.os.fromTo(this.$refs.modal,{y:"-100%"},{y:"0%",duration:.5,ease:"power2.out",onComplete:()=>this.animateTitleAndUnderline()}),this.$refs.menuItems&&this.$refs.menuItems.children.length>0&&H.os.fromTo(this.$refs.menuItems.children,{x:-50,opacity:0},{x:0,opacity:1,duration:.5,delay:.5,stagger:.1,ease:"power2.out"}),this.$refs.footerIcons&&H.os.fromTo(this.$refs.footerIcons,{opacity:0},{opacity:1,duration:.5,ease:"power2.out",delay:.9})}))):(document.querySelector(".hamburger-icon").classList.remove("is-open"),document.body.classList.remove("no-scroll"),this.$refs.modal&&H.os.to(this.$refs.modal,{y:"-100%",duration:.5,ease:"power1.in",onComplete:()=>this.resetTitleAndUnderline()}),this.$refs.footerIcons&&H.os.to(this.$refs.footerIcons,{opacity:0,duration:.5,ease:"power1.in"}))},animateTitleAndUnderline(){this.$nextTick((()=>{this.$refs.title&&this.$refs.underline&&(H.os.fromTo(this.$refs.title,{opacity:0},{opacity:1,duration:.5,ease:"power2.out"}),H.os.fromTo(this.$refs.underline,{width:0},{width:"100%",duration:.5,ease:"power2.out"}))}))},resetTitleAndUnderline(){this.$nextTick((()=>{this.$refs.title&&this.$refs.underline&&(H.os.set(this.$refs.title,{opacity:0}),H.os.set(this.$refs.underline,{width:0}))}))}},beforeRouteLeave(e,t,o){this.$refs.title&&this.$refs.underline&&H.os.killTweensOf([this.$refs.title,this.$refs.underline]),o()}},de=(0,l.A)(ce,[["render",Z],["__scopeId","data-v-11530c68"]]),ue=de;H.os.registerPlugin(A.H0);const pe={name:"Home",components:{MenuComponent:ue,SocialComponent:le},data(){return{currentItem:0,items:[{title:"Hello",text:"My name is Michele Paolino, <br>I'm a Napoli based web designer <br>and front-end developer."},{title:"Skills",text:"Vue, WordPress, Bootstrap, Tailwind, <br>Figma, Adobe, UI design, Typography, <br> GSAP, Sass, Git, SEO."},{title:"Swell Scales",text:'<p>I\'m author of Swell Scales, <br>a design system for web devs. <br>Take a look on my <span><a class="underline underline-offset-8" href="https://github.com/michelediss?tab=repositories" target="_blank"><strong>GitHub.</strong></a></span></p>'},{title:"Let's play!",text:'<p>Press <kbd class="c-key text-color">c</kbd> on your keyboard<br> or double tap on mobile to generate<br> a new website skin!</p>'}]}},computed:{currentItemData(){return this.items[this.currentItem]}},methods:{nextItem(){this.transitionSlide((()=>{this.currentItem=(this.currentItem+1)%this.items.length}))},prevItem(){this.transitionSlide((()=>{this.currentItem=(this.currentItem-1+this.items.length)%this.items.length}))},goToItem(e){e!==this.currentItem&&this.transitionSlide((()=>{this.currentItem=e}))},handleKeydown(e){"ArrowRight"===e.key?this.nextItem():"ArrowLeft"===e.key&&this.prevItem()},transitionSlide(e){const t=this.$refs.carouselContent,o=this.$refs.carouselTitle,n=this.$refs.underline;t&&o&&H.os.to([t,o],{duration:.5,opacity:0,onComplete:()=>{e(),H.os.to([t,o],{duration:.5,opacity:1})}}),n&&H.os.to(n,{duration:.5,width:0,opacity:0,onComplete:()=>{H.os.to(n,{duration:.5,width:"100%",opacity:1})}})},handleSlideChange(){const e=this.$refs.swiper.swiper;this.transitionSlide((()=>{this.currentItem=e.activeIndex}))},setVH(){let e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)}},mounted(){const e=H.os.timeline(),t=this.$refs.carouselTitle,o=this.$refs.underline,n=this.$refs.carouselContent,i=this.$refs.prevArrow,s=this.$refs.nextArrow,a=this.$refs.buttonContainer,r=this.$refs.footerIcons;this.$refs.swipe;if(t&&o&&n&&i&&s&&a&&r){e.to(t,{opacity:1,y:0,duration:.5},"+=0.5"),e.to(o,{opacity:1,width:"100%",duration:.5},"-=0.3"),e.to(n,{opacity:1,y:0,duration:.5},"-=0.3"),e.to(this.$refs.swiperContainer,{opacity:1,y:0,duration:.5},"-=0.3"),e.to(this.$refs.swipe,{opacity:1,y:0,duration:.5},"-=0.3"),e.to(this.$refs.swipeArrow,{opacity:1,y:0,duration:.5},"-=0.3");const l=a.querySelectorAll(".button");l.length>0&&e.to([...l],{opacity:1,y:0,stagger:.2,duration:.5},"-=0.6"),H.os.set([i,s],{display:"block"}),e.to([i,s],{opacity:1,duration:.5},"-=0.6"),e.to(r,{opacity:1,y:0,duration:.5},"-=0.6")}this.$refs.swiper.swiper.on("slideChange",this.handleSlideChange),window.addEventListener("keydown",this.handleKeydown),this.setVH(),window.addEventListener("resize",this.setVH)},beforeDestroy(){window.removeEventListener("resize",this.setVH)}},he=(0,l.A)(pe,[["render",j],["__scopeId","data-v-22179e07"]]),me=he,ge={class:"container w-full mx-auto min-h-screen flex flex-col space-between"},fe={class:"flex-none mb-16"},ve={class:"main portfolio flex grow items-center justify-center mx-auto w-full md:w-5/6",ref:"mainContent"},xe={class:"container"},be={class:"row flex flex-col flex-wrap lg:flex-row items-center py-8 md:space-x-2 lg:space-x-0 w-full"},we={class:"w-full lg:w-4/12"},ye={class:"text-2xl lg:text-2xl heading"},ke={class:"w-full lg:w-8/12 flex"},Le={class:"w-1/2 justify-self-start lg:justify-self-center text-start lg:text-center flex justify-start lg:justify-center items-end lg:items-center mt-3 md:mt-0"},Ce={class:"uppercase text-base paragraph"},$e={class:"w-1/2 text-end flex justify-end items-end"},Me=["href"],Ie={class:"flex-none"};function _e(e,t,o,n,s,a){const r=(0,i.g2)("HeaderComponent"),l=(0,i.g2)("SocialComponent"),c=(0,i.g2)("MenuComponent"),d=(0,i.gN)("hover-animate");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("section",ge,[(0,i.Lk)("div",fe,[(0,i.bF)(r,{pageTitle:s.pageTitle,ref:"header"},null,8,["pageTitle"])]),(0,i.Lk)("div",ve,[(0,i.Lk)("div",xe,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.projects,((e,o)=>((0,i.uX)(),(0,i.CE)("div",{key:o,class:"row-container"},[(0,i.Lk)("div",be,[(0,i.Lk)("div",we,[(0,i.Lk)("h1",ye,(0,p.v_)(e.name),1)]),(0,i.Lk)("div",ke,[(0,i.Lk)("div",Le,[(0,i.Lk)("h5",Ce,(0,p.v_)(e.role),1)]),(0,i.Lk)("div",$e,[(0,i.bo)(((0,i.uX)(),(0,i.CE)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",class:"button text-base paragraph border-2 border-color rounded-full px-8 py-1"},t[0]||(t[0]=[(0,i.eW)(" Check it out! ")]),8,Me)),[[d]])])])]),t[1]||(t[1]=(0,i.Lk)("div",{class:"bg-secondary-color h-0.5 w-full opacity-50"},null,-1))])))),128))])],512),(0,i.Lk)("div",Ie,[(0,i.bF)(l,{svgClass:"fill"})])]),(0,i.bF)(c)],64)}const Se={id:"nav-back",class:"flex pt-6 w-full lg:w-5/6 mx-auto"},Te={class:"flex justify-start md:justify-center w-full"},Ee={class:"title-page-container"},je={ref:"underline",class:"title-page-underline bg-secondary-color h-0.5 bg-slate-900"};function He(e,t,o,n,s,a){return(0,i.uX)(),(0,i.CE)("header",null,[(0,i.Lk)("nav",Se,[(0,i.Lk)("div",Te,[(0,i.Lk)("div",Ee,[(0,i.Lk)("h1",{ref:"title",class:"title-page-text text-color transition-all text-2xl 2xl:text-3xl heading"},(0,p.v_)(o.pageTitle),513),(0,i.Lk)("div",je,null,512)])])])])}const Ae={name:"HeaderComponent",props:{pageTitle:{type:String,required:!0}},mounted(){this.$nextTick((()=>{this.$refs.underline&&this.$refs.title?(H.os.fromTo(this.$refs.underline,{opacity:0,width:"0%"},{opacity:1,width:"100%",duration:1,delay:.6,ease:"power2.out"}),H.os.fromTo(this.$refs.title,{opacity:0},{opacity:1,duration:1,delay:.6,ease:"power2.out"})):console.warn("GSAP target elements 'underline' or 'title' are null.")}))}},Fe=(0,l.A)(Ae,[["render",He],["__scopeId","data-v-3eb59f0e"]]),De=Fe,Pe={name:"Portfolio",components:{HeaderComponent:De,MenuComponent:ue,SocialComponent:le},data(){return{pageTitle:"Portfolio",projects:[{name:"Hexenschuhe",role:"visual design / developing",url:"https://hexenschuhe.com"},{name:"Je So' Pazzo",role:"visual design / developing",url:"https://www.jesopazzo.org"},{name:"Dubstone",role:"visual design / developing",url:"https://www.dubstone.it"},{name:"Caffé Seddio",role:"developing",url:"https://caffeseddio.com/"},{name:"Buy and rent",role:"visual design / developing",url:"https://buyandrent.it/"},{name:"Becoming lab",role:"visual design / developing",url:"https://becominglab.it"}]}},mounted(){const e=H.os.timeline();this.$refs.mainContent.querySelectorAll(".row-container").forEach(((t,o)=>{e.from(t,{opacity:0,y:50,duration:.4},"-=0.2")})),e.delay(1)}},Xe=(0,l.A)(Pe,[["render",_e],["__scopeId","data-v-37a73f86"]]),Ve=Xe,ze={class:"container w-full lg:w-5/6 xl:4/6 mx-0 md:mx-auto"},Oe={class:"flex-none"},We={class:"intro-resume container mt-24 mb-16 w-full flex justify-start md:justify-center flex-wrap",ref:"introResume"},Ue={class:"dropdown-container relative inline-block"},Be={class:"work-history",ref:"workHistory"},Re={class:"mb-12 flex flex-wrap"},Ke={class:"block md:flex py-4 my-4"},qe={class:"w-full md:w-1/3 lg:w-1/4 pt-2"},Ge={class:"text-color text-xl heading mb-2"},Ne={class:"w-full md:w-2/3 lg:w-3/4"},Ye={class:"text-color text-lg mb-1 paragraph"},Je={class:"text-color text-base paragraph"},Qe={class:"mx-auto tech-stack w-full",ref:"techStack"},Ze={class:"w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"},et={class:"text-color text-base heading mb-2 uppercase opacity-75"},tt={class:"text-color text-lg paragraph"},ot={class:"flex-none"};function nt(e,t,o,n,s,a){const r=(0,i.g2)("HeaderComponent"),l=(0,i.g2)("SocialComponent"),c=(0,i.g2)("MenuComponent"),d=(0,i.gN)("hover-animate");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("section",ze,[(0,i.Lk)("div",Oe,[(0,i.bF)(r,{pageTitle:s.pageTitle,ref:"header"},null,8,["pageTitle"])]),(0,i.Lk)("div",We,[t[3]||(t[3]=(0,i.Lk)("p",{class:"text-color text-xl md:text-2xl paragraph text-start md:text-center mb-12"}," My name is Michele Paolino, I'm a web designer and front-end developer. My job involves designing and developing modern, lightweight, and high-performance web solutions. I apply to my works the knowledge I have gained from studying the processes that govern visual communication in its formal and functional aspects. ",-1)),(0,i.Lk)("div",Ue,[(0,i.bo)(((0,i.uX)(),(0,i.CE)("button",{onClick:t[0]||(t[0]=(...e)=>a.toggleDropdown&&a.toggleDropdown(...e)),class:"paragraph text-color border-color button rounded-full px-8 py-1 text-lg"},t[1]||(t[1]=[(0,i.eW)(" Download CV ")]))),[[d]]),(0,i.Lk)("div",{ref:"dropdownMenu",class:(0,p.C4)(["dropdown-menu w-full mt-2 shadow-lg backdrop-blur-sm bg-white/50 overflow-hidden",{show:s.isDropdownVisible}])},t[2]||(t[2]=[(0,i.Fv)('<ul data-v-7a026e10><li data-v-7a026e10><a href="./download/Michele_Paolino_CV_ENG.pdf" target="_blank" class="block px-4 pt-2 pb-1 text-md color-black hover:bg-dark hover:color-white" data-v-7a026e10><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="inline fill-black mr-1 -mt-1 bi bi-download" viewBox="0 0 16 16" data-v-7a026e10><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" data-v-7a026e10></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" data-v-7a026e10></path></svg> PDF English</a></li><li data-v-7a026e10><a href="./download/Michele_Paolino_CV_ITA.pdf" target="_blank" class="block px-4 pt-1 pb-2 text-md color-black hover:bg-dark hover:color-white" data-v-7a026e10><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="inline fill-black mr-1 -mt-1 bi bi-download" viewBox="0 0 16 16" data-v-7a026e10><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" data-v-7a026e10></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" data-v-7a026e10></path></svg> PDF Italiano</a></li></ul>',1)]),2)])],512),(0,i.Lk)("div",Be,[t[5]||(t[5]=(0,i.Lk)("div",{class:""},[(0,i.Lk)("h2",{class:"text-color mt-20 mb-12 heading uppercase text-3xl"},"Work history"),(0,i.Lk)("div",{class:"bg-secondary-color h-0.5 w-full opacity-50"})],-1)),(0,i.Lk)("div",Re,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.items,((e,o)=>((0,i.uX)(),(0,i.CE)("div",{key:o},[(0,i.Lk)("div",Ke,[(0,i.Lk)("div",qe,[(0,i.Lk)("h2",Ge,(0,p.v_)(e.job),1)]),(0,i.Lk)("div",Ne,[(0,i.Lk)("h3",Ye,(0,p.v_)(e.position),1),(0,i.Lk)("p",Je,(0,p.v_)(e.description),1)])]),t[4]||(t[4]=(0,i.Lk)("div",{class:"bg-secondary-color h-0.5 w-full opacity-50"},null,-1))])))),128))])],512),(0,i.Lk)("div",Qe,[t[6]||(t[6]=(0,i.Lk)("div",{class:""},[(0,i.Lk)("h2",{class:"text-color mt-20 mb-12 heading uppercase technical-skills text-xl"},"Expertise Areas")],-1)),(0,i.Lk)("div",Ze,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.skills,((e,t)=>((0,i.uX)(),(0,i.CE)("div",{key:t},[(0,i.Lk)("h3",et,(0,p.v_)(e.scope),1),(0,i.Lk)("p",tt,(0,p.v_)(e.skill),1)])))),128))])],512),(0,i.Lk)("div",ot,[(0,i.bF)(l,{svgClass:"fill"})])]),(0,i.bF)(c)],64)}const it={name:"Resume",components:{HeaderComponent:De,MenuComponent:ue,SocialComponent:le},data(){return{pageTitle:"Resume",items:[{job:"Dopolavoro ",position:"Web developer",description:"Specialized in creating websites that are both visually stunning and functionally robust, maintaining the firm’s reputation for design excellence. Continuously explored and implemented new web design trends, keeping the firm’s offerings innovative and competitive. Integrated technical and design expertise to achieve cohesive and engaging user experiences."},{job:"Sari Advertising",position:"Web designer & developer",description:"Integral member of a team dedicated to producing advanced web designs and strategic advertising solutions. Developed SEO-optimized websites to maximize client visibility and improve user engagement and conversion rates. Collaborated with cross-functional teams to ensure a unified and effective brand message."},{job:"Becoming Lab",position:"Web designer & developer",description:"Led a team in creating innovative web applications and marketing solutions, with a focus on elevating clients’ digital presence. Managed projects from concept to completion, emphasizing adherence to timelines without compromising quality. Built and maintained strong client relationships to ensure projects align with their business goals and brand identity."}],skills:[{scope:"Front-end Development",skill:"Vue.js, Bootstrap, Tailwind, Sass, PHP"},{scope:"CMS",skill:"WordPress, PrestaShop"},{scope:"Design & Prototyping",skill:"Figma, Adobe Photoshop, Adobe Illustrator"},{scope:"UI design",skill:"UI design principles, typography, color theory"},{scope:"Animation & Effects",skill:"GreenSock Animation Platform (GSAP)"},{scope:"Version Control",skill:"Git"}],isDropdownVisible:!1}},methods:{toggleDropdown(){this.isDropdownVisible=!this.isDropdownVisible,this.isDropdownVisible?this.fadeInDropdown():this.fadeOutDropdown()},fadeInDropdown(){this.$refs.dropdownMenu?H.os.to(this.$refs.dropdownMenu,{opacity:1,y:0,display:"block",duration:.5,ease:"power2.out"}):console.warn("Riferimento dropdownMenu non trovato per fadeIn.")},fadeOutDropdown(){this.$refs.dropdownMenu?H.os.to(this.$refs.dropdownMenu,{opacity:0,y:0,display:"none",duration:.25,ease:"linear.in"}):console.warn("Riferimento dropdownMenu non trovato per fadeOut.")},closeDropdown(e){e.target.closest(".dropdown-container")||(this.isDropdownVisible=!1,this.$refs.dropdownMenu&&this.fadeOutDropdown())}},mounted(){window.addEventListener("click",this.closeDropdown),(0,i.dY)((()=>{const e=H.os.timeline();this.$refs.introResume&&this.$refs.workHistory&&this.$refs.techStack?(e.from(this.$refs.introResume,{opacity:0,y:50,duration:.8},"-=0").from(this.$refs.workHistory,{opacity:0,y:50,duration:.8},"-=0.4").from(this.$refs.techStack,{opacity:0,y:50,duration:.8},"-=0.4"),e.delay(1)):console.warn("Uno o più riferimenti non sono stati trovati per la timeline GSAP.")}))},beforeDestroy(){window.removeEventListener("click",this.closeDropdown)}},st=(0,l.A)(it,[["render",nt],["__scopeId","data-v-7a026e10"]]),at=st,rt={class:"flex flex-col h-screen"},lt={class:"flex-none"},ct={class:"philosophy w-full lg:w-4/6 mx-auto mt-10 md:mt-20 2xl:mt-40",ref:"philosophyContent"},dt={class:"flex-none"};function ut(e,t,o,n,s,a){const r=(0,i.g2)("HeaderComponent"),l=(0,i.g2)("SocialComponent"),c=(0,i.g2)("MenuComponent");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("div",rt,[(0,i.Lk)("div",lt,[(0,i.bF)(r,{pageTitle:s.pageTitle,ref:"header"},null,8,["pageTitle"])]),(0,i.Lk)("div",ct,t[0]||(t[0]=[(0,i.Fv)('<div class="philosophy-title" data-v-030bb8b5><h1 class="mb-12 heading text-4xl leading-tight" data-v-030bb8b5> Suspension of disbelief in digital design: a narrative approach to Ui/Ux </h1></div><div class="philosophy-paragraph" data-v-030bb8b5><p class="text-xl md:text-2xl paragraph text-start mb-12" data-v-030bb8b5> The concept of <a class="underline" target="_blank" href="https://en.wikipedia.org/wiki/Suspension_of_disbelief" data-v-030bb8b5>suspension of disbelief</a>, originally articulated by the poet and literary critic <a class="underline" target="_blank" href="https://en.wikipedia.org/wiki/Samuel_Taylor_Coleridge" data-v-030bb8b5>Samuel Taylor Coleridge</a>, refers to the intentional act of setting aside one&#39;s skepticism to engage with and enjoy elements within a narrative that may not conform to the laws of reality or logic. This cognitive process enables the audience to immerse themselves in a narrative by willingly accepting fantastical or non-realistic aspects as plausible within the context of the story. In essence, suspension of disbelief is a mental state where the audience consents to overlook the implausibility of certain elements to fully engage with the narrative experience. </p></div><div class="philosophy-paragraph" data-v-030bb8b5><p class="text-xl md:text-2xl paragraph text-start mb-12" data-v-030bb8b5> When applied to the domain of UI/UX design and frontend web development, the principle of suspension of disbelief assumes a pivotal role in crafting digital experiences that captivate and retain user engagement. Digital interfaces, much like narratives, can benefit from designing elements that encourage users to transcend their everyday realities and immerse themselves in the digital environment presented to them. This immersion is achieved through a combination of visual design, animation, interactive storytelling, and consistency in user experience. By carefully orchestrating these elements, designers are able to construct digital environments that not only attract the user&#39;s attention but also sustain their engagement over time. </p></div><div class="philosophy-paragraph" data-v-030bb8b5><p class="text-xl md:text-2xl paragraph text-start mb-12" data-v-030bb8b5> Visual design in this context is more than just aesthetic appeal; it serves as a gateway to an immersive experience. Through the use of color schemes, typography, imagery, and spatial arrangements, designers create a visually cohesive environment that supports the narrative or thematic elements of the digital experience. This visual coherence helps users to suspend their disbelief and accept the digital environment as a coherent, navigable space. Furthermore, animation and micro-interactions contribute to a dynamic sense of realism, providing immediate feedback and enhancing the perceived interactivity of the digital interface, which further supports the user&#39;s suspension of disbelief. </p></div><div class="philosophy-paragraph" data-v-030bb8b5><p class="text-xl md:text-2xl paragraph text-start mb-12" data-v-030bb8b5> Moreover, storytelling in UI/UX design extends beyond mere content; it encompasses the entire journey of the user through the digital product. Storytelling can manifest through carefully crafted user flows that guide users seamlessly from one interaction to the next, creating a narrative-like progression that mirrors the structure of a traditional story. Consistency in design, such as maintaining uniform patterns, behaviors, and interface elements across the user journey, reinforces trust and familiarity, enabling users to focus on the narrative or interactive experience without being distracted by inconsistencies or unexpected deviations. </p></div><div class="philosophy-paragraph" data-v-030bb8b5><p class="text-xl md:text-2xl paragraph text-start" data-v-030bb8b5> In conclusion, the application of the suspension of disbelief in UI/UX design and development is integral to creating digital experiences that are engaging and memorable. By leveraging the principles of visual design, animation, storytelling, and consistency, designers can craft immersive digital environments that encourage users to momentarily transcend the limitations of their everyday experiences, fostering deeper engagement and sustained interaction with digital products. This approach not only enhances user satisfaction but also establishes a meaningful connection between the user and the digital experience, ultimately contributing to the overall effectiveness and success of the design. </p></div>',6)]),512),(0,i.Lk)("div",dt,[(0,i.bF)(l)])]),(0,i.bF)(c)],64)}const pt={name:"Philosophy",components:{HeaderComponent:De,MenuComponent:ue,SocialComponent:le},data(){return{pageTitle:"What I think"}},mounted(){const e=H.os.timeline();e.from(this.$refs.philosophyContent.querySelector(".philosophy-title"),{opacity:0,y:50,duration:.8},"+=0.8"),this.$refs.philosophyContent.querySelectorAll(".philosophy-paragraph").forEach(((t,o)=>{e.from(t,{opacity:0,y:50,duration:.6},"-=0.4")}))}},ht=(0,l.A)(pt,[["render",ut],["__scopeId","data-v-030bb8b5"]]),mt=ht;var gt=o(576);let ft=Math.floor(360*Math.random());const vt=7;function xt(e){const t=parseInt(e.slice(1),16),o=t>>16&255,n=t>>8&255,i=255&t;return[o,n,i]}function bt(e,t,o){const[n,i,s]=[e,t,o].map((e=>{const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)})),a=.2126*n+.7152*i+.0722*s;return a}function wt(e,t){const o=e>t?(e+.05)/(t+.05):(t+.05)/(e+.05);return o}function yt(e,t,o,n){const[i,s,a]=xt(e),r=bt(i,s,a),[l,c,d]=xt(t),u=bt(l,c,d),[p,h,m]=xt(o),g=bt(p,h,m),f=wt(r,u),v=wt(r,g);let x;return x=f>=n&&f>=v?t:v>=n?o:f>=v?t:o,x}function kt(e,t,o){const n=e/4.5,i=t+(o-t)*Math.min(1,n);return i}function Lt(){let e;do{e=Math.floor(360*Math.random())}while(Math.abs(e-ft)<30);ft=e;const t=Math.floor(56*Math.random())+35,o=Math.floor(31*Math.random())+35,n=new gt.h;n.hsluv_h=e,n.hsluv_s=t,n.hsluv_l=o,n.hsluvToHex();const i=n.hex;n.hsluv_s=kt(vt,60,80),n.hsluv_l=kt(vt,75,95),n.hsluvToHex();const s=n.hex;n.hsluv_s=kt(vt,80,100),n.hsluv_l=kt(vt,10,25),n.hsluvToHex();const a=n.hex,r=yt(i,s,a,vt),l=(e+180)%360;n.hsluv_h=l,n.hsluv_s=t,n.hsluv_l=o,n.hsluvToHex();const c=n.hex;n.hsluv_s=kt(vt,60,80),n.hsluv_l=kt(vt,85,95),n.hsluvToHex();const d=n.hex;n.hsluv_s=kt(vt,80,100),n.hsluv_l=kt(vt,10,30),n.hsluvToHex();const u=n.hex,p=yt(c,d,u,vt);document.body.style.backgroundColor=i,document.body.style.color=r;const h=document.createElement("style");return h.innerHTML=`\n    .text-color { color: ${r}; }\n    .fill { fill: ${r}; }\n    .border-color { border-color: ${r}; }\n    .border-black { border-color: ${a}; }\n    .bg-secondary-color { background-color: ${r}; }\n    .bg-white-color { background-color: ${s}; }\n    .main-text-color { color: ${i}; } \n    .bg-menu-color { background-color: ${c}; }\n    .text-menu-color { color: ${p}; }\n    .border-menu-color { border-color: ${p}; }\n    .bg-secondary-menu-color { background-color: ${p}; }\n    .fill-black { fill: ${a}; }\n    .color-black { color: ${a}; }\n    .color-white { color: ${s}; }\n    .bg-dark { background-color: ${a}; }\n    .fill-menu { fill: ${p}; }\n    .dropdown-menu a:hover { color: ${s}; }\n    .dropdown-menu a:hover svg { fill: ${s}; }\n    .dropdown-menu a:hover { background-color: ${a}; }\n  `,document.head.appendChild(h),i}let Ct=null;function $t(){let e;const t=document.querySelectorAll("body *");H.os.to(t,{opacity:0,duration:.3,onComplete:()=>{do{e=Math.floor(13*Math.random())+1}while(e===Ct);Ct=e,document.body.classList.forEach((e=>{e.startsWith("style-")&&document.body.classList.remove(e)})),document.body.classList.add(`style-${e}`),H.os.to(t,{opacity:1,duration:.3})}})}const Mt=[{path:"/",name:"Home",component:me},{path:"/portfolio",name:"Portfolio",component:Ve},{path:"/resume",name:"Resume",component:at},{path:"/vision",name:"Vision",component:mt}],It=(0,u.aE)({history:(0,u.Bt)(),routes:Mt,scrollBehavior(e,t,o){return o||{top:0}}});function _t(){Lt(),$t(),console.log("Doppio tap eseguito su tutto il sito!")}It.beforeEach(((e,t,o)=>{if(Lt(),"Home"===e.name){const e=localStorage.getItem("homeLoaded"),t=Array.from(document.body.classList).some((e=>e.startsWith("style-")));e&&t||($t(),localStorage.setItem("homeLoaded","true"))}else{const e=Array.from(document.body.classList).some((e=>e.startsWith("style-")));e||$t()}o()})),window.addEventListener("keydown",(e=>{"KeyC"===e.code&&(Lt(),$t())}));const St=It,Tt={mounted(e){e.addEventListener("mouseenter",(()=>{e.classList.add("bg-secondary-color"),e.classList.add("main-text-color")})),e.addEventListener("mouseleave",(()=>{e.classList.remove("bg-secondary-color"),e.classList.remove("main-text-color")}))},unmounted(e){e.removeEventListener("mouseenter",(()=>{e.classList.add("bg-secondary-color"),e.classList.add("main-text-color")})),e.removeEventListener("mouseleave",(()=>{e.classList.remove("bg-secondary-color"),e.classList.remove("main-text-color")}))}};var Et=o(136);(0,Et.kz)();const jt=(0,n.Ef)(d);let Ht=0;const At=300;document.addEventListener("touchstart",(function(){const e=(new Date).getTime(),t=e-Ht;t<At&&t>0&&_t(),Ht=e})),jt.directive("hover-animate",Tt),jt.use(St),jt.mount("#app")}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,o),s.exports}o.m=e,(()=>{var e=[];o.O=(t,n,i,s)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){for(var[n,i,s]=e[d],r=!0,l=0;l<n.length;l++)(!1&s||a>=s)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(r=!1,s<a&&(a=s));if(r){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,i,s]}})(),(()=>{o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={524:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var i,s,[a,r,l]=n,c=0;if(a.some((t=>0!==e[t]))){for(i in r)o.o(r,i)&&(o.m[i]=r[i]);if(l)var d=l(o)}for(t&&t(n);c<a.length;c++)s=a[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},n=self["webpackChunkpersonal_website_vue"]=self["webpackChunkpersonal_website_vue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=o.O(void 0,[504],(()=>o(162)));n=o.O(n)})();
//# sourceMappingURL=app.b18162de.js.map