(()=>{"use strict";var e={22:(e,t,o)=>{var n=o(751),i=o(641);const s={class:"px-5"};function a(e,t,o,n,a,l){const r=(0,i.g2)("router-view"),c=(0,i.g2)("MenuComponent");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("main",s,[(0,i.bF)(r)]),(0,i.bF)(c)],64)}const l={class:"hamburger-container z-50 fixed bottom-5 right-3.5 container inline-block w-auto"},r={ref:"modal",class:"px-4 menu-fullscreen flex flex-col justify-between min-h-screen fixed inset-0 bg-menu-color z-40"},c={id:"nav-back",class:"flex pt-6 w-full lg:w-5/6 mx-auto"},d={class:"flex justify-start md:justify-center w-full"},u={class:"title-page-container"},p={ref:"title",class:"title-page-text text-2xl 2xl:text-3xl heading text-menu-color opacity-0"},m={ref:"underline",class:"title-page-underline h-0.5 bg-secondary-menu-color w-0"},h={class:"menu-content flex flex-col items-start md:items-center text-white"},f={class:"text-start md:text-center",ref:"menuItems"},g={class:"paragraph my-8 md:my-10 lg:my-8 xl:my-12 menu-item-li"},v={class:"inline-block w-auto menu-item-wrapper"},x={class:"paragraph my-8 md:my-10 lg:my-8 xl:my-12 menu-item-li"},b={class:"inline-block w-auto menu-item-wrapper"},w={class:"paragraph my-8 md:my-10 lg:my-8 xl:my-12 menu-item-li"},y={class:"inline-block w-auto menu-item-wrapper"},k={class:"paragraph my-8 md:my-10 lg:my-8 xl:my-12 menu-item-li"},L={class:"inline-block w-auto menu-item-wrapper"},C={class:"flex-none footer",ref:"footerIcons"};function $(e,t,o,n,s,a){const $=(0,i.g2)("router-link"),M=(0,i.g2)("SocialComponent");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("div",l,[(0,i.Lk)("button",{ref:"menuButton",id:"hamburger-menu","aria-label":"Hamburger menu",class:"hamburger p-4 shadow-lg backdrop-blur-sm rounded-full bg-white/50 flex items-center",onClick:t[0]||(t[0]=(...e)=>a.toggleMenu&&a.toggleMenu(...e))},t[1]||(t[1]=[(0,i.Lk)("svg",{class:"hamburger-icon fill-black",width:"20px",height:"20px",viewBox:"0 0 12 12","enable-background":"new 0 0 12 12",id:"hamburger",version:"1.1","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[(0,i.Lk)("g",null,[(0,i.Lk)("rect",{class:"line top",height:"1",width:"11",x:"0.5",y:"2.5"}),(0,i.Lk)("rect",{class:"line middle",height:"1",width:"11",x:"0.5",y:"5.5"}),(0,i.Lk)("rect",{class:"line bottom",height:"1",width:"11",x:"0.5",y:"8.5"})])],-1)]),512)]),(0,i.Lk)("div",r,[(0,i.Lk)("header",null,[(0,i.Lk)("nav",c,[(0,i.Lk)("div",d,[(0,i.Lk)("div",u,[(0,i.Lk)("h1",p,"Menu",512),(0,i.Lk)("div",m,null,512)])])])]),(0,i.Lk)("div",h,[(0,i.Lk)("ul",f,[(0,i.Lk)("li",g,[(0,i.Lk)("div",v,[(0,i.bF)($,{to:"/",class:"text-4xl md:text-5xl xl:text-4xl 2xl:text-5xl text-menu-color my-0",onClick:a.toggleMenu},{default:(0,i.k6)((()=>t[2]||(t[2]=[(0,i.Lk)("span",{class:"inline md:hidden text-2xl relative bottom-1"},"•",-1),(0,i.eW)(" Home")]))),_:1},8,["onClick"]),t[3]||(t[3]=(0,i.Lk)("div",{class:"w-0 h-1 bg-secondary-menu-color menu-item-line"},null,-1))])]),(0,i.Lk)("li",x,[(0,i.Lk)("div",b,[(0,i.bF)($,{to:"/portfolio",class:"text-4xl md:text-5xl xl:text-4xl 2xl:text-5xl text-menu-color my-0",onClick:a.toggleMenu},{default:(0,i.k6)((()=>t[4]||(t[4]=[(0,i.Lk)("span",{class:"inline md:hidden text-2xl relative bottom-1"},"•",-1),(0,i.eW)(" Portfolio")]))),_:1},8,["onClick"]),t[5]||(t[5]=(0,i.Lk)("div",{class:"w-0 h-1 bg-secondary-menu-color menu-item-line"},null,-1))])]),(0,i.Lk)("li",w,[(0,i.Lk)("div",y,[(0,i.bF)($,{to:"/resume",class:"text-4xl md:text-5xl xl:text-4xl 2xl:text-5xl text-menu-color my-0",onClick:a.toggleMenu},{default:(0,i.k6)((()=>t[6]||(t[6]=[(0,i.Lk)("span",{class:"inline md:hidden text-2xl relative bottom-1"},"•",-1),(0,i.eW)(" Resume")]))),_:1},8,["onClick"]),t[7]||(t[7]=(0,i.Lk)("div",{class:"w-0 h-1 bg-secondary-menu-color menu-item-line"},null,-1))])]),(0,i.Lk)("li",k,[(0,i.Lk)("div",L,[(0,i.bF)($,{to:"/vision",class:"text-4xl md:text-5xl xl:text-4xl 2xl:text-5xl text-menu-color my-0",onClick:a.toggleMenu},{default:(0,i.k6)((()=>t[8]||(t[8]=[(0,i.Lk)("span",{class:"inline md:hidden text-2xl relative bottom-1"},"•",-1),(0,i.eW)(" Vision")]))),_:1},8,["onClick"]),t[9]||(t[9]=(0,i.Lk)("div",{class:"w-0 h-1 bg-secondary-menu-color menu-item-line"},null,-1))])])],512)]),(0,i.Lk)("div",C,[(0,i.bF)(M,{svgClass:"fill-menu"})],512)],512)],64)}var M=o(738),_=o(33);const I={class:"flex justify-start md:justify-center w-full left-0 z-50 flex-wrap"},T={class:"container flex items-center relative inline-block w-auto mt-16 2xl:scale-125 2xl:mt-32 mb-8"},S={id:"email","aria-label":"email",href:"mailto:mail@michelepaolino.me",target:"_blank",class:"icon flex items-center pr-8 md:px-8"},E={id:"linkedin","aria-label":"linkedin",href:"https://www.linkedin.com/in/michele-paolino/",target:"_blank",class:"icon flex items-center px-8"},j={id:"github","aria-label":"github",href:"https://github.com/michelediss?tab=repositories",target:"_blank",class:"icon flex items-center px-8"};function H(e,t,o,n,s,a){return(0,i.uX)(),(0,i.CE)("footer",I,[(0,i.Lk)("div",T,[(0,i.Lk)("a",S,[((0,i.uX)(),(0,i.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",class:(0,_.C4)(o.svgClass),viewBox:"0 0 15.6 16",preserveAspectRatio:"xMidYMid meet"},t[0]||(t[0]=[(0,i.Lk)("path",{d:"M15.6,7.1c0-4.2-3.2-7.1-7.7-7.1C3.2,0,0,3.3,0,8c0,4.9,3.1,8,8.1,8c1.2,0,2.4-0.2,3.2-0.5v-1.2c-0.6,0.3-1.9,0.5-3.2,0.5\n\tc-4.1,0-6.7-2.6-6.7-6.7c0-4,2.7-6.8,6.4-6.8c3.8,0,6.5,2.4,6.5,5.8c0,2.4-0.8,3.9-2,3.9c-0.7,0-1.1-0.4-1.1-1.1V4.2H9.7v1.2H9.6\n\tC9.2,4.6,8.3,4,7.3,4C5.4,4,4,5.7,4,8c0,2.4,1.3,4.1,3.3,4.1c1.1,0,2-0.5,2.4-1.5h0.2c0.1,0.9,1,1.6,2.1,1.6\n\tC14.2,12.2,15.6,10.2,15.6,7.1L15.6,7.1z M5.5,8c0-1.7,0.8-2.7,2-2.7c1.3,0,2.1,1,2.1,2.7s-0.8,2.7-2.2,2.7C6.3,10.7,5.5,9.7,5.5,8"},null,-1)]),2))]),(0,i.Lk)("a",E,[((0,i.uX)(),(0,i.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",class:(0,_.C4)(o.svgClass),viewBox:"0 0 16 16"},t[1]||(t[1]=[(0,i.Lk)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"},null,-1)]),2))]),(0,i.Lk)("a",j,[((0,i.uX)(),(0,i.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",class:(0,_.C4)(o.svgClass),viewBox:"0 0 32 32"},t[2]||(t[2]=[(0,i.Lk)("g",{class:"st0"},[(0,i.Lk)("path",{class:"st1",d:"M16,2.7C8.7,2.7,2.7,8.7,2.7,16s6,13.4,13.4,13.4s13.4-6,13.4-13.4S23.4,2.7,16,2.7z M0,16C0,7.2,7.2,0,16,0\n\t\ts16,7.2,16,16s-7.2,16-16,16S0,24.9,0,16z"}),(0,i.Lk)("path",{class:"st1",d:"M12.8,30.4c-0.1-0.2-0.1-1.7,0-4.5c-1.4,0-2.3,0-2.6-0.3c-0.5-0.4-1.1-1.5-1.6-2.3s-1.6-0.9-2-1.1\n\t\tc-0.4-0.2-0.5-0.9,1.2-0.3c1.7,0.5,1.8,2,2.4,2.4c0.6,0.3,1.9,0.2,2.5-0.1c0.6-0.3,0.6-1.3,0.7-1.7c0.1-0.4-0.3-0.5-0.4-0.5\n\t\tc-0.6,0-3.6-0.7-4.5-3.6c-0.8-3,0.2-4.9,0.8-5.7c0.4-0.6,0.4-1.7-0.1-3.6c1.6-0.2,2.9,0.3,3.8,1.6c0,0,1.2-0.7,3-0.7\n\t\tc1.9,0,2.5,0.6,3,0.7c0.5,0.1,0.9-2.2,4-1.6c-0.7,1.3-1.2,2.9-0.8,3.6c0.4,0.7,2.1,2.8,1.1,5.7c-0.7,2-2,3.2-4,3.6\n\t\tc-0.2,0.1-0.3,0.2-0.3,0.3c0,0.2,0.3,0.3,0.7,1.4c0.3,0.8,0.3,2.9,0.1,6.4c-0.6,0.2-1.1,0.3-1.5,0.3c-0.6,0.1-1.3,0.2-2,0.2\n\t\tc-0.7,0-0.9,0-1.8-0.1C14,30.6,13.4,30.5,12.8,30.4z"})],-1)]),2))])])])}const A={name:"SocialComponent",props:{svgClass:{type:String,default:"fill"}}};var P=o(262);const D=(0,P.A)(A,[["render",H],["__scopeId","data-v-46c958a8"]]),F=D,X={components:{SocialComponent:F},name:"MenuComponent",data(){return{isModalOpen:!1}},methods:{toggleMenu(){this.isModalOpen=!this.isModalOpen,this.isModalOpen?(document.querySelector(".hamburger-icon").classList.add("is-open"),document.body.classList.add("no-scroll"),this.$nextTick((()=>{this.$refs.modal&&M.os.fromTo(this.$refs.modal,{y:"-100%"},{y:"0%",duration:.4,ease:"power2.out",onComplete:()=>this.animateTitleAndUnderline()}),this.$refs.menuItems&&this.$refs.menuItems.children.length>0&&M.os.fromTo(this.$refs.menuItems.children,{x:-50,opacity:0},{x:0,opacity:1,duration:.5,delay:.5,stagger:.1,ease:"power2.out"}),this.$refs.footerIcons&&M.os.fromTo(this.$refs.footerIcons,{opacity:0},{opacity:1,duration:.5,ease:"power2.out",delay:.9})}))):(document.querySelector(".hamburger-icon").classList.remove("is-open"),document.body.classList.remove("no-scroll"),this.$refs.modal&&M.os.to(this.$refs.modal,{y:"-100%",duration:.4,ease:"power2.in",onComplete:()=>this.resetTitleAndUnderline()}),this.$refs.footerIcons&&M.os.to(this.$refs.footerIcons,{opacity:0,duration:.5,ease:"power1.in"}))},animateTitleAndUnderline(){this.$nextTick((()=>{this.$refs.title&&this.$refs.underline&&(M.os.fromTo(this.$refs.title,{opacity:0},{opacity:1,duration:.5,ease:"power2.out"}),M.os.fromTo(this.$refs.underline,{width:0,opacity:0},{width:"100%",opacity:1,duration:.5,ease:"power2.out"}))}))},resetTitleAndUnderline(){this.$nextTick((()=>{this.$refs.title&&this.$refs.underline&&(M.os.set(this.$refs.title,{opacity:0}),M.os.set(this.$refs.underline,{width:0}))}))}},beforeRouteLeave(e,t,o){this.$refs.title&&this.$refs.underline&&M.os.killTweensOf([this.$refs.title,this.$refs.underline]),o()}},V=(0,P.A)(X,[["render",$],["__scopeId","data-v-2715e721"]]),z=V,O={name:"App",components:{MenuComponent:z}},W=(0,P.A)(O,[["render",a]]),B=W;var U=o(220);const R={class:"flex flex-col home-screen"},G={class:"flex-none"},K={id:"nav-back",class:"flex my-6 w-full lg:w-5/6 mx-auto justify-start md:justify-center"},q={class:"flex w-auto"},N={class:"title-page-container"},Y={ref:"underline",class:"bg-secondary-color title-page-underline h-0.5 bg-slate-900 opacity-0"},J={class:"main home flex grow items-center w-full justify-center"},Q={class:"container"},Z={class:"hidden md:flex carousel justify-center items-center"},ee={ref:"carouselContent",class:"text-color paragraph w-full lg:w-5/6 carousel text-center md:px-5 flex justify-center flex-wrap text-xl md:text-3xl xl:text-4xl 2xl:text-5xl"},te=["innerHTML"],oe={ref:"swiperContainer",class:"w-full block md:invisible md:h-0 carousel-swiper opacity-0"},ne={ref:"swiper","slides-per-view":"1","space-between":"50",loop:"true"},ie=["innerHTML"],se={class:"block md:hidden mt-8"},ae={xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",ref:"swipeArrow",class:"swipe-arrow inline fill opacity-0",viewBox:"0 0 16 16"},le={class:"flex justify-start md:justify-center mt-8 md:mt-12"},re={class:"flex-none footer",ref:"footerIcons"};function ce(e,t,o,n,s,a){const l=(0,i.g2)("router-link"),r=(0,i.g2)("SocialComponent"),c=(0,i.gN)("hover-animate");return(0,i.uX)(),(0,i.CE)("div",R,[(0,i.Lk)("div",G,[(0,i.Lk)("header",null,[(0,i.Lk)("nav",K,[(0,i.Lk)("div",q,[(0,i.Lk)("div",N,[(0,i.Lk)("h1",{ref:"carouselTitle",class:"text-color title-page-text text-2xl 2xl:text-3xl heading opacity-0"},(0,_.v_)(a.currentItemData.title),513),(0,i.Lk)("div",Y,null,512)])])])])]),(0,i.Lk)("div",J,[(0,i.Lk)("div",Q,[(0,i.Lk)("div",Z,[(0,i.Lk)("button",{ref:"prevArrow","aria-label":"Previous slide",onClick:t[0]||(t[0]=(...e)=>a.prevItem&&a.prevItem(...e)),class:"hidden border-color lg:block arrow prev border-t-2 border-l-2 h-4 w-4"},null,512),(0,i.Lk)("p",ee,[(0,i.Lk)("span",{innerHTML:a.currentItemData.text},null,8,te)],512),(0,i.Lk)("button",{ref:"nextArrow","aria-label":"Next slide",onClick:t[1]||(t[1]=(...e)=>a.nextItem&&a.nextItem(...e)),class:"hidden border-color lg:block arrow next border-t-2 border-l-2 h-4 w-4"},null,512)]),(0,i.Lk)("div",oe,[(0,i.Lk)("swiper-container",ne,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.items,((e,t)=>((0,i.uX)(),(0,i.CE)("swiper-slide",{key:t},[(0,i.Lk)("div",{innerHTML:e.text,class:"swiper-content text-color paragraph w-full text-start flex justify-center flex-wrap text-2xl"},null,8,ie)])))),128))],512)],512),(0,i.Lk)("div",se,[(0,i.Lk)("p",{ref:"swipe",class:"swipe swipe-forward heading uppercase text-lg text-color inline opacity-100",onClick:t[2]||(t[2]=(...t)=>e.nextSlide&&e.nextSlide(...t))}," swipe ",512),((0,i.uX)(),(0,i.CE)("svg",ae,t[3]||(t[3]=[(0,i.Lk)("path",{"fill-rule":"evenodd",d:"M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"},null,-1)]),512))]),(0,i.Lk)("div",le,[(0,i.bo)(((0,i.uX)(),(0,i.Wv)(l,{to:"/portfolio",ref:"buttonPortfolio",class:"text-color border-color button py-2 px-8 mr-4 paragraph uppercase text-base xl:text-lg 2xl:text-xl border-2 rounded-full"},{default:(0,i.k6)((()=>t[4]||(t[4]=[(0,i.eW)("Portfolio")]))),_:1})),[[c]]),(0,i.bo)(((0,i.uX)(),(0,i.Wv)(l,{to:"/resume",ref:"buttonResume",class:"text-color border-color button py-2 px-8 mr-4 paragraph uppercase text-base xl:text-lg 2xl:text-xl border-2 rounded-full"},{default:(0,i.k6)((()=>t[5]||(t[5]=[(0,i.eW)("Resume")]))),_:1})),[[c]])])])]),(0,i.Lk)("div",re,[(0,i.bF)(r,{svgClass:"fill"})],512)])}var de=o(650);M.os.registerPlugin(de.H0);const ue={name:"Home",components:{MenuComponent:z,SocialComponent:F},data(){return{currentItem:0,animationCompleted:!1,items:[{title:"Hello",text:"My name is Michele Paolino, <br>I'm a Napoli based web designer <br>and front-end developer."},{title:"Skills",text:"Vue, WordPress, Sass, Tailwind, <br>Figma, Adobe, UI design, Typography, <br>Bootstrap, GSAP, Git"},{title:"Swell Scales",text:'<p>I\'m author of Swell Scales, <br>a design system for web devs. <br>Take a look on my <span><a class="underline underline-offset-8" href="https://github.com/michelediss?tab=repositories" target="_blank"><strong>GitHub.</strong></a></span></p>'},{title:"Let's play!",text:'<p>Press <kbd class="c-key text-color">c</kbd> on your keyboard<br> or double tap on mobile to generate<br> a new website skin!</p>'}],disableGlobalAnimations:!1}},computed:{currentItemData(){return this.items[this.currentItem]}},methods:{nextItem(){this.transitionSlide((()=>{this.currentItem=(this.currentItem+1)%this.items.length}))},prevItem(){this.transitionSlide((()=>{this.currentItem=(this.currentItem-1+this.items.length)%this.items.length}))},transitionSlide(e){const t=this.$refs.carouselTitle,o=this.$refs.underline,n=this.$refs.carouselContent;this.disableGlobalAnimations?(M.os.to([n,t],{duration:.5,opacity:0,onComplete:()=>{e(),M.os.to([n,t],{duration:.5,opacity:1})}}),o&&M.os.to(o,{duration:.5,width:0,opacity:0,onComplete:()=>{M.os.to(o,{duration:.5,width:"100%",opacity:1})}})):e()},animateInitialLoad(){const e=this.$refs.carouselTitle,t=this.$refs.underline,o=this.$refs.carouselContent,n=this.$refs.swiperContainer,i=this.$refs.prevArrow,s=this.$refs.nextArrow,a=(this.$refs.buttonContainer,this.$refs.buttonPortfolio.$el),l=this.$refs.buttonResume.$el,r=this.$refs.footerIcons,c=this.$refs.swipe,d=this.$refs.swipeArrow;this.animationCompleted||(M.os.set([e,t,o],{opacity:0}),M.os.timeline().to(e,{opacity:1,y:0,duration:.9,ease:"power2.out"}).to(t,{opacity:1,width:"100%",duration:.9,ease:"power2.out"},"-=0.5").to([o,n],{opacity:1,y:0,duration:.9,ease:"power2.out"},"-=0.5").to([i,s,l,a,r,c,d],{opacity:1,y:0,duration:.9,ease:"power2.out"},"-=0.5").eventCallback("onComplete",(()=>{this.animationCompleted=!0,this.disableGlobalAnimations=!0})))},setVH(){let e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)}},mounted(){this.animateInitialLoad(),this.setVH(),window.addEventListener("resize",this.setVH),window.addEventListener("keydown",this.handleKeydown)},beforeDestroy(){window.removeEventListener("resize",this.setVH),window.removeEventListener("keydown",this.handleKeydown)}},pe=(0,P.A)(ue,[["render",ce],["__scopeId","data-v-2cb5f228"]]),me=pe,he={class:"container w-full mx-auto min-h-screen flex flex-col space-between"},fe={class:"flex-none mb-16"},ge={class:"main portfolio flex grow items-center justify-center mx-auto w-full md:w-5/6",ref:"mainContent"},ve={class:"container"},xe={class:"row flex flex-col flex-wrap lg:flex-row items-center py-8 md:space-x-2 lg:space-x-0 w-full"},be={class:"w-full lg:w-4/12"},we={class:"text-2xl lg:text-2xl heading"},ye={class:"w-full lg:w-8/12 flex"},ke={class:"w-5/12 justify-self-start lg:justify-self-center text-start lg:text-center flex justify-start lg:justify-center items-end lg:items-center mt-3 md:mt-0"},Le={class:"uppercase text-base paragraph"},Ce={class:"w-7/12 text-end flex justify-end items-end"},$e=["href"],Me={class:"flex-none"};function _e(e,t,o,n,s,a){const l=(0,i.g2)("HeaderComponent"),r=(0,i.g2)("SocialComponent"),c=(0,i.gN)("hover-animate");return(0,i.uX)(),(0,i.CE)("section",he,[(0,i.Lk)("div",fe,[(0,i.bF)(l,{pageTitle:s.pageTitle,ref:"header"},null,8,["pageTitle"])]),(0,i.Lk)("div",ge,[(0,i.Lk)("div",ve,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.projects,((e,o)=>((0,i.uX)(),(0,i.CE)("div",{key:o,class:"row-container"},[(0,i.Lk)("div",xe,[(0,i.Lk)("div",be,[(0,i.Lk)("h1",we,(0,_.v_)(e.name),1)]),(0,i.Lk)("div",ye,[(0,i.Lk)("div",ke,[(0,i.Lk)("h5",Le,(0,_.v_)(e.role),1)]),(0,i.Lk)("div",Ce,[(0,i.bo)(((0,i.uX)(),(0,i.CE)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",class:"button text-base paragraph border-2 border-color rounded-full px-8 py-1"},t[0]||(t[0]=[(0,i.eW)(" Check it out! ")]),8,$e)),[[c]])])])]),t[1]||(t[1]=(0,i.Lk)("div",{class:"bg-secondary-color h-0.5 w-full opacity-50"},null,-1))])))),128))])],512),(0,i.Lk)("div",Me,[(0,i.bF)(r,{svgClass:"fill"})])])}const Ie={id:"nav-back",class:"flex pt-6 w-full lg:w-5/6 mx-auto"},Te={class:"flex justify-start md:justify-center w-full"},Se={class:"title-page-container"},Ee={ref:"underline",class:"title-page-underline bg-secondary-color h-0.5 bg-slate-900"};function je(e,t,o,n,s,a){return(0,i.uX)(),(0,i.CE)("header",null,[(0,i.Lk)("nav",Ie,[(0,i.Lk)("div",Te,[(0,i.Lk)("div",Se,[(0,i.Lk)("h1",{ref:"title",class:"title-page-text text-color text-2xl 2xl:text-3xl heading"},(0,_.v_)(o.pageTitle),513),(0,i.Lk)("div",Ee,null,512)])])])])}const He={name:"HeaderComponent",props:{pageTitle:{type:String,required:!0}},mounted(){this.$nextTick((()=>{this.$refs.underline&&this.$refs.title?(M.os.fromTo(this.$refs.underline,{opacity:0,width:"0%"},{opacity:1,width:"100%",duration:1,delay:.6,ease:"power2.out"}),M.os.fromTo(this.$refs.title,{opacity:0},{opacity:1,duration:1,delay:.6,ease:"power2.out"})):console.warn("GSAP target elements 'underline' or 'title' are null.")}))}},Ae=(0,P.A)(He,[["render",je]]),Pe=Ae,De={name:"Portfolio",components:{HeaderComponent:Pe,MenuComponent:z,SocialComponent:F},data(){return{pageTitle:"Portfolio",projects:[{name:"Hexenschuhe",role:"visual design / developing",url:"https://hexenschuhe.com"},{name:"Je So' Pazzo",role:"visual design / developing",url:"https://www.jesopazzo.org"},{name:"Dubstone",role:"visual design / developing",url:"https://www.dubstone.it"},{name:"Caffé Seddio",role:"developing",url:"https://caffeseddio.com/"},{name:"Buy and rent",role:"visual design / developing",url:"https://buyandrent.it/"},{name:"Becoming lab",role:"visual design / developing",url:"https://becominglab.it"}]}},mounted(){const e=M.os.timeline();this.$refs.mainContent.querySelectorAll(".row-container").forEach(((t,o)=>{e.from(t,{opacity:0,y:50,duration:.4},"-=0.2")})),e.delay(1)}},Fe=(0,P.A)(De,[["render",_e],["__scopeId","data-v-0b81eca5"]]),Xe=Fe,Ve={class:"container w-full lg:w-5/6 xl:4/6 mx-0 md:mx-auto"},ze={class:"flex-none"},Oe={class:"intro-resume container mt-24 mb-16 w-full flex justify-start md:justify-center flex-wrap",ref:"introResume"},We={class:"dropdown-container relative inline-block"},Be={class:"work-history",ref:"workHistory"},Ue={class:"mb-12 flex flex-wrap"},Re={class:"block md:flex py-4 my-4"},Ge={class:"w-full md:w-1/3 lg:w-1/4 pt-2"},Ke={class:"text-color text-xl heading mb-2"},qe={class:"w-full md:w-2/3 lg:w-3/4"},Ne={class:"text-color text-lg mb-1 paragraph uppercase"},Ye={class:"text-color text-base paragraph"},Je={class:"mx-auto tech-stack w-full",ref:"techStack"},Qe={class:"w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"},Ze={class:"text-color text-base heading mb-2 uppercase opacity-75"},et={class:"text-color text-lg paragraph"},tt={class:"flex-none"};function ot(e,t,o,n,s,a){const l=(0,i.g2)("HeaderComponent"),r=(0,i.g2)("SocialComponent"),c=(0,i.g2)("MenuComponent"),d=(0,i.gN)("hover-animate");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("section",Ve,[(0,i.Lk)("div",ze,[(0,i.bF)(l,{pageTitle:s.pageTitle,ref:"header"},null,8,["pageTitle"])]),(0,i.Lk)("div",Oe,[t[3]||(t[3]=(0,i.Lk)("p",{class:"text-color text-xl md:text-2xl paragraph text-start md:text-center mb-12"}," My name is Michele Paolino, I'm a web designer and front-end developer. My job involves designing and developing modern, lightweight, and high-performance web solutions. I apply to my works the knowledge I have gained from studying the processes that govern visual communication in its formal and functional aspects. ",-1)),(0,i.Lk)("div",We,[(0,i.bo)(((0,i.uX)(),(0,i.CE)("button",{onClick:t[0]||(t[0]=(...e)=>a.toggleDropdown&&a.toggleDropdown(...e)),class:"paragraph text-color border-color button rounded-full px-8 py-1 text-lg"},t[1]||(t[1]=[(0,i.eW)(" Download CV ")]))),[[d]]),(0,i.Lk)("div",{ref:"dropdownMenu",class:(0,_.C4)(["dropdown-menu w-full mt-2 shadow-lg backdrop-blur-sm bg-white/50 overflow-hidden",{show:s.isDropdownVisible}])},t[2]||(t[2]=[(0,i.Fv)('<ul data-v-43fd4e27><li data-v-43fd4e27><a href="./download/Michele_Paolino_CV_ENG.pdf" target="_blank" class="block px-4 pt-2 pb-1 text-md color-black hover:bg-dark hover:color-white" data-v-43fd4e27><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="inline fill-black mr-1 -mt-1 bi bi-download" viewBox="0 0 16 16" data-v-43fd4e27><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" data-v-43fd4e27></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" data-v-43fd4e27></path></svg> PDF English</a></li><li data-v-43fd4e27><a href="./download/Michele_Paolino_CV_ITA.pdf" target="_blank" class="block px-4 pt-1 pb-2 text-md color-black hover:bg-dark hover:color-white" data-v-43fd4e27><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="inline fill-black mr-1 -mt-1 bi bi-download" viewBox="0 0 16 16" data-v-43fd4e27><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" data-v-43fd4e27></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" data-v-43fd4e27></path></svg> PDF Italiano</a></li></ul>',1)]),2)])],512),(0,i.Lk)("div",Be,[t[5]||(t[5]=(0,i.Lk)("div",{class:""},[(0,i.Lk)("h2",{class:"text-color mt-20 mb-12 heading uppercase text-3xl"},"Work history"),(0,i.Lk)("div",{class:"bg-secondary-color h-0.5 w-full opacity-50"})],-1)),(0,i.Lk)("div",Ue,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.items,((e,o)=>((0,i.uX)(),(0,i.CE)("div",{key:o},[(0,i.Lk)("div",Re,[(0,i.Lk)("div",Ge,[(0,i.Lk)("h2",Ke,(0,_.v_)(e.job),1)]),(0,i.Lk)("div",qe,[(0,i.Lk)("h3",Ne,(0,_.v_)(e.position),1),(0,i.Lk)("p",Ye,(0,_.v_)(e.description),1)])]),t[4]||(t[4]=(0,i.Lk)("div",{class:"bg-secondary-color h-0.5 w-full opacity-50"},null,-1))])))),128))])],512),(0,i.Lk)("div",Je,[t[6]||(t[6]=(0,i.Lk)("div",{class:""},[(0,i.Lk)("h2",{class:"text-color mt-20 mb-12 heading uppercase technical-skills text-xl"},"Expertise Areas")],-1)),(0,i.Lk)("div",Qe,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.skills,((e,t)=>((0,i.uX)(),(0,i.CE)("div",{key:t},[(0,i.Lk)("h3",Ze,(0,_.v_)(e.scope),1),(0,i.Lk)("p",et,(0,_.v_)(e.skill),1)])))),128))])],512),(0,i.Lk)("div",tt,[(0,i.bF)(r,{svgClass:"fill"})])]),(0,i.bF)(c)],64)}const nt={name:"Resume",components:{HeaderComponent:Pe,MenuComponent:z,SocialComponent:F},data(){return{pageTitle:"Resume",items:[{job:"Dopolavoro ",position:"Web developer",description:"Specialized in creating websites that are both visually stunning and functionally robust, maintaining the firm’s reputation for design excellence. Continuously explored and implemented new web design trends, keeping the firm’s offerings innovative and competitive. Integrated technical and design expertise to achieve cohesive and engaging user experiences."},{job:"Sari Advertising",position:"Web designer & developer",description:"Integral member of a team dedicated to producing advanced web designs and strategic advertising solutions. Developed SEO-optimized websites to maximize client visibility and improve user engagement and conversion rates. Collaborated with cross-functional teams to ensure a unified and effective brand message."},{job:"Becoming Lab",position:"Web designer & developer",description:"Led a team in creating innovative web applications and marketing solutions, with a focus on elevating clients’ digital presence. Managed projects from concept to completion, emphasizing adherence to timelines without compromising quality. Built and maintained strong client relationships to ensure projects align with their business goals and brand identity."}],skills:[{scope:"Front-end Development",skill:"Vue.js, Bootstrap, Tailwind, Sass, PHP"},{scope:"CMS",skill:"WordPress, PrestaShop"},{scope:"Design & Prototyping",skill:"Figma, Adobe Photoshop, Adobe Illustrator"},{scope:"UI design",skill:"UI design principles, typography, color theory"},{scope:"Animation & Effects",skill:"GreenSock Animation Platform (GSAP)"},{scope:"Version Control",skill:"Git"}],isDropdownVisible:!1}},methods:{toggleDropdown(){this.isDropdownVisible=!this.isDropdownVisible,this.isDropdownVisible?this.fadeInDropdown():this.fadeOutDropdown()},fadeInDropdown(){this.$refs.dropdownMenu?M.os.to(this.$refs.dropdownMenu,{opacity:1,y:0,display:"block",duration:.5,ease:"power2.out"}):console.warn("Riferimento dropdownMenu non trovato per fadeIn.")},fadeOutDropdown(){this.$refs.dropdownMenu?M.os.to(this.$refs.dropdownMenu,{opacity:0,y:0,display:"none",duration:.25,ease:"linear.in"}):console.warn("Riferimento dropdownMenu non trovato per fadeOut.")},closeDropdown(e){e.target.closest(".dropdown-container")||(this.isDropdownVisible=!1,this.$refs.dropdownMenu&&this.fadeOutDropdown())}},mounted(){window.addEventListener("click",this.closeDropdown),(0,i.dY)((()=>{const e=M.os.timeline();this.$refs.introResume&&this.$refs.workHistory&&this.$refs.techStack?(e.from(this.$refs.introResume,{opacity:0,y:50,duration:.8,ease:"power2.out"},"-=0.2").from(this.$refs.workHistory,{opacity:0,y:50,duration:.8,ease:"power2.out"},"-=0.6").from(this.$refs.techStack,{opacity:0,y:50,duration:.8,ease:"power2.out"},"-=0.2"),e.delay(1)):console.warn("Uno o più riferimenti non sono stati trovati per la timeline GSAP.")}))},beforeDestroy(){window.removeEventListener("click",this.closeDropdown)}},it=(0,P.A)(nt,[["render",ot],["__scopeId","data-v-43fd4e27"]]),st=it,at={class:"flex flex-col h-screen"},lt={class:"flex-none"},rt={class:"philosophy w-full lg:w-4/6 mx-auto mt-10 md:mt-20 2xl:mt-40",ref:"philosophyContent"},ct={class:"flex-none"};function dt(e,t,o,n,s,a){const l=(0,i.g2)("HeaderComponent"),r=(0,i.g2)("SocialComponent");return(0,i.uX)(),(0,i.CE)("div",at,[(0,i.Lk)("div",lt,[(0,i.bF)(l,{pageTitle:s.pageTitle,ref:"header"},null,8,["pageTitle"])]),(0,i.Lk)("div",rt,t[0]||(t[0]=[(0,i.Fv)('<div class="philosophy-title" data-v-b27b4ae6><h1 class="mb-12 heading text-4xl leading-tight" data-v-b27b4ae6> Suspension of disbelief in digital design: a narrative approach to Ui/Ux </h1></div><div class="philosophy-paragraph" data-v-b27b4ae6><p class="text-xl md:text-2xl paragraph text-start mb-12" data-v-b27b4ae6> The concept of <a class="underline" target="_blank" href="https://en.wikipedia.org/wiki/Suspension_of_disbelief" data-v-b27b4ae6>suspension of disbelief</a>, originally articulated by the poet and literary critic <a class="underline" target="_blank" href="https://en.wikipedia.org/wiki/Samuel_Taylor_Coleridge" data-v-b27b4ae6>Samuel Taylor Coleridge</a>, refers to the intentional act of setting aside one&#39;s skepticism to engage with and enjoy elements within a narrative that may not conform to the laws of reality or logic. This cognitive process enables the audience to immerse themselves in a narrative by willingly accepting fantastical or non-realistic aspects as plausible within the context of the story. In essence, suspension of disbelief is a mental state where the audience consents to overlook the implausibility of certain elements to fully engage with the narrative experience. </p></div><div class="philosophy-paragraph" data-v-b27b4ae6><p class="text-xl md:text-2xl paragraph text-start mb-12" data-v-b27b4ae6> When applied to the domain of UI/UX design and frontend web development, the principle of suspension of disbelief assumes a pivotal role in crafting digital experiences that captivate and retain user engagement. Digital interfaces, much like narratives, can benefit from designing elements that encourage users to transcend their everyday realities and immerse themselves in the digital environment presented to them. This immersion is achieved through a combination of visual design, animation, interactive storytelling, and consistency in user experience. By carefully orchestrating these elements, designers are able to construct digital environments that not only attract the user&#39;s attention but also sustain their engagement over time. </p></div><div class="philosophy-paragraph" data-v-b27b4ae6><p class="text-xl md:text-2xl paragraph text-start mb-12" data-v-b27b4ae6> Visual design in this context is more than just aesthetic appeal; it serves as a gateway to an immersive experience. Through the use of color schemes, typography, imagery, and spatial arrangements, designers create a visually cohesive environment that supports the narrative or thematic elements of the digital experience. This visual coherence helps users to suspend their disbelief and accept the digital environment as a coherent, navigable space. Furthermore, animation and micro-interactions contribute to a dynamic sense of realism, providing immediate feedback and enhancing the perceived interactivity of the digital interface, which further supports the user&#39;s suspension of disbelief. </p></div><div class="philosophy-paragraph" data-v-b27b4ae6><p class="text-xl md:text-2xl paragraph text-start mb-12" data-v-b27b4ae6> Moreover, storytelling in UI/UX design extends beyond mere content; it encompasses the entire journey of the user through the digital product. Storytelling can manifest through carefully crafted user flows that guide users seamlessly from one interaction to the next, creating a narrative-like progression that mirrors the structure of a traditional story. Consistency in design, such as maintaining uniform patterns, behaviors, and interface elements across the user journey, reinforces trust and familiarity, enabling users to focus on the narrative or interactive experience without being distracted by inconsistencies or unexpected deviations. </p></div><div class="philosophy-paragraph" data-v-b27b4ae6><p class="text-xl md:text-2xl paragraph text-start" data-v-b27b4ae6> In conclusion, the application of the suspension of disbelief in UI/UX design and development is integral to creating digital experiences that are engaging and memorable. By leveraging the principles of visual design, animation, storytelling, and consistency, designers can craft immersive digital environments that encourage users to momentarily transcend the limitations of their everyday experiences, fostering deeper engagement and sustained interaction with digital products. This approach not only enhances user satisfaction but also establishes a meaningful connection between the user and the digital experience, ultimately contributing to the overall effectiveness and success of the design. </p></div>',6)]),512),(0,i.Lk)("div",ct,[(0,i.bF)(r)])])}const ut={name:"Philosophy",components:{HeaderComponent:Pe,MenuComponent:z,SocialComponent:F},data(){return{pageTitle:"What I think"}},mounted(){const e=M.os.timeline();e.from(this.$refs.philosophyContent.querySelector(".philosophy-title"),{opacity:0,y:50,duration:.8},"+=0.8"),this.$refs.philosophyContent.querySelectorAll(".philosophy-paragraph").forEach(((t,o)=>{e.from(t,{opacity:0,y:50,duration:.6,ease:"power2.out"},"-=0.4")}))}},pt=(0,P.A)(ut,[["render",dt],["__scopeId","data-v-b27b4ae6"]]),mt=pt;var ht=o(576);let ft=Math.floor(360*Math.random());const gt=7;function vt(e){const t=parseInt(e.slice(1),16),o=t>>16&255,n=t>>8&255,i=255&t;return[o,n,i]}function xt(e,t,o){const[n,i,s]=[e,t,o].map((e=>{const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)})),a=.2126*n+.7152*i+.0722*s;return a}function bt(e,t){const o=e>t?(e+.05)/(t+.05):(t+.05)/(e+.05);return o}function wt(e,t,o,n){const[i,s,a]=vt(e),l=xt(i,s,a),[r,c,d]=vt(t),u=xt(r,c,d),[p,m,h]=vt(o),f=xt(p,m,h),g=bt(l,u),v=bt(l,f);let x;return x=g>=n&&g>=v?t:v>=n?o:g>=v?t:o,x}function yt(e,t,o){const n=e/4.5,i=t+(o-t)*Math.min(1,n);return i}function kt(){let e;do{e=Math.floor(360*Math.random())}while(Math.abs(e-ft)<30);ft=e;const t=Math.floor(56*Math.random())+35,o=Math.floor(31*Math.random())+35,n=new ht.h;n.hsluv_h=e,n.hsluv_s=t,n.hsluv_l=o,n.hsluvToHex();const i=n.hex;n.hsluv_s=yt(gt,60,80),n.hsluv_l=yt(gt,75,95),n.hsluvToHex();const s=n.hex;n.hsluv_s=yt(gt,80,100),n.hsluv_l=yt(gt,10,25),n.hsluvToHex();const a=n.hex,l=wt(i,s,a,gt),r=(e+180)%360;n.hsluv_h=r,n.hsluv_s=t,n.hsluv_l=o,n.hsluvToHex();const c=n.hex;n.hsluv_s=yt(gt,60,80),n.hsluv_l=yt(gt,85,95),n.hsluvToHex();const d=n.hex;n.hsluv_s=yt(gt,80,100),n.hsluv_l=yt(gt,10,30),n.hsluvToHex();const u=n.hex,p=wt(c,d,u,gt);document.body.style.backgroundColor=i,document.body.style.color=l;const m=document.createElement("style");return m.innerHTML=`\n    .text-color { color: ${l}; }\n    .fill { fill: ${l}; }\n    .border-color { border-color: ${l}; }\n    .border-black { border-color: ${a}; }\n    .bg-secondary-color { background-color: ${l}; }\n    .bg-white-color { background-color: ${s}; }\n    .main-text-color { color: ${i}; } \n    .bg-menu-color { background-color: ${c}; }\n    .text-menu-color { color: ${p}; }\n    .border-menu-color { border-color: ${p}; }\n    .bg-secondary-menu-color { background-color: ${p}; }\n    .fill-black { fill: ${a}; }\n    .color-black { color: ${a}; }\n    .color-white { color: ${s}; }\n    .bg-dark { background-color: ${a}; }\n    .fill-menu { fill: ${p}; }\n    .dropdown-menu a:hover { color: ${s}; }\n    .dropdown-menu a:hover svg { fill: ${s}; }\n    .dropdown-menu a:hover { background-color: ${a}; }\n  `,document.head.appendChild(m),i}let Lt=null;function Ct(){let e;do{e=Math.floor(12*Math.random())+1}while(e===Lt);Lt=e,document.body.classList.forEach((e=>{e.startsWith("style-")&&document.body.classList.remove(e)})),document.body.classList.add(`style-${e}`)}const $t=[{path:"/",name:"Home",component:me},{path:"/portfolio",name:"Portfolio",component:Xe},{path:"/resume",name:"Resume",component:st},{path:"/vision",name:"Vision",component:mt}],Mt=(0,U.aE)({history:(0,U.Bt)(),routes:$t,scrollBehavior(e,t,o){return o||{top:0}}});function _t(){kt(),Ct()}Mt.beforeEach(((e,t,o)=>{kt();const n=Array.from(document.body.classList).some((e=>e.startsWith("style-")));n||Ct(),o()})),window.addEventListener("keydown",(e=>{"KeyC"===e.code&&(kt(),Ct())}));const It=Mt,Tt={mounted(e){e.addEventListener("mouseenter",(()=>{e.classList.add("bg-secondary-color"),e.classList.add("main-text-color")})),e.addEventListener("mouseleave",(()=>{e.classList.remove("bg-secondary-color"),e.classList.remove("main-text-color")}))},unmounted(e){e.removeEventListener("mouseenter",(()=>{e.classList.add("bg-secondary-color"),e.classList.add("main-text-color")})),e.removeEventListener("mouseleave",(()=>{e.classList.remove("bg-secondary-color"),e.classList.remove("main-text-color")}))}};var St=o(136);(0,St.kz)();const Et=(0,n.Ef)(B);let jt=0;const Ht=300;document.addEventListener("touchstart",(function(){const e=(new Date).getTime(),t=e-jt;t<Ht&&t>0&&_t(),jt=e})),Et.directive("hover-animate",Tt),Et.use(It),Et.mount("#app")}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,o),s.exports}o.m=e,(()=>{var e=[];o.O=(t,n,i,s)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){for(var[n,i,s]=e[d],l=!0,r=0;r<n.length;r++)(!1&s||a>=s)&&Object.keys(o.O).every((e=>o.O[e](n[r])))?n.splice(r--,1):(l=!1,s<a&&(a=s));if(l){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,i,s]}})(),(()=>{o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={524:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var i,s,[a,l,r]=n,c=0;if(a.some((t=>0!==e[t]))){for(i in l)o.o(l,i)&&(o.m[i]=l[i]);if(r)var d=r(o)}for(t&&t(n);c<a.length;c++)s=a[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},n=self["webpackChunkpersonal_website_vue"]=self["webpackChunkpersonal_website_vue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=o.O(void 0,[504],(()=>o(22)));n=o.O(n)})();
//# sourceMappingURL=app.fd4cb6a8.js.map