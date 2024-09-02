(()=>{var e={362:(e,t,o)=>{"use strict";var n=o(3751),s=o(641);const i={class:"px-5"};function r(e,t,o,n,r,a){const l=(0,s.g2)("router-view"),c=(0,s.gN)("touch");return(0,s.bo)(((0,s.uX)(),(0,s.CE)("main",i,[(0,s.bF)(l)])),[[c,a.onSwipeUp,"swipe",{top:!0}]])}var a=o(5576);let l=Math.floor(360*Math.random());const c=4.5;function d(e){const t=parseInt(e.slice(1),16),o=t>>16&255,n=t>>8&255,s=255&t;return[o,n,s]}function u(e,t,o){const[n,s,i]=[e,t,o].map((e=>{const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}));return.2126*n+.7152*s+.0722*i}function p(e,t){return e>t?(e+.05)/(t+.05):(t+.05)/(e+.05)}function h(e,t,o,n){const[s,i,r]=d(e),a=u(s,i,r),[l,c,h]=d(t),m=u(l,c,h),[f,g,v]=d(o),b=u(f,g,v),x=p(a,m),y=p(a,b);return x>=n&&x>=y?t:y>=n?o:x>=y?t:o}function m(){let e;do{e=Math.floor(360*Math.random())}while(Math.abs(e-l)<30);l=e;const t=Math.floor(56*Math.random())+35,o=Math.floor(21*Math.random())+35,n=new a.h;n.hsluv_h=e,n.hsluv_s=t,n.hsluv_l=o,n.hsluvToHex();const s=n.hex;n.hsluv_s=.7*t,n.hsluv_l=85,n.hsluvToHex();const i=n.hex;n.hsluv_s=.9*t,n.hsluv_l=20,n.hsluvToHex();const r=n.hex,d=h(s,i,r,c),u=(e+180)%360;n.hsluv_h=u,n.hsluv_s=t,n.hsluv_l=o,n.hsluvToHex();const p=n.hex;n.hsluv_s=.7*t,n.hsluv_l=85,n.hsluvToHex();const m=n.hex;n.hsluv_s=.9*t,n.hsluv_l=20,n.hsluvToHex();const f=n.hex,g=h(p,m,f,c);document.body.style.backgroundColor=s,document.body.style.color=d;const v=document.createElement("style");return v.innerHTML=`\n    .text-color { color: ${d}; }\n    .border-color { border-color: ${d}; }\n    .bg-secondary-color { background-color: ${d}; }\n    .main-text-color { color: ${s}; } \n    .bg-menu-color { background-color: ${p}; }\n    .text-menu-color { color: ${g}; }\n    .border-menu-color { border-color: ${g}; }\n    .bg-secondary-menu-color { background-color: ${g}; }\n    .fill { fill: ${r}; }\n  `,document.head.appendChild(v),console.log("Generated CSS classes and their colors:",{primaryHexColor:s,foregroundColor:d,complementaryHexColor:p,foregroundMenuColor:g,blackForegroundHexColor:r}),console.log("Style element content:",v.innerHTML),s}const f={data(){return{fontFamily:null}},methods:{onSwipeUp(){console.log("Swipe up detected")}},async mounted(){try{const e=await o.e(5354).then(o.t.bind(o,5354,19)),t=await o(3717)(`./${e.chosenPair}`);this.fontFamily=t;const n=document.createElement("link");n.href=t.fontUrl,n.rel="stylesheet",document.head.appendChild(n),console.log("Font configuration loaded successfully.")}catch(e){console.error("Failed to load font configuration:",e)}}};var g=o(6262);const v=(0,g.A)(f,[["render",r]]),b=v;var x=o(5220),y=o(33);const w={class:"flex flex-col h-screen"},k={class:"flex-none"},L={id:"nav-back",class:"flex mt-6 w-full lg:w-5/6 mx-auto justify-center"},j={class:"flex justify-center w-12/12"},C={class:"title-page-container"},_={ref:"underline",class:"bg-secondary-color title-page-underline h-0.5 bg-slate-900"},T={class:"main home flex grow items-center w-full justify-center"},M={class:"container pb-12"},I={class:"hidden md:flex carousel justify-center items-center"},$={ref:"carouselContent",class:"text-color font-paragraph w-full lg:w-4/6 carousel text-center md:px-5 flex justify-center flex-wrap text-xl md:text-3xl"},E=["innerHTML"],S={ref:"swiperContainer",class:"opacity-0 block md:hidden carousel-swiper"},F={"slides-per-view":"1","space-between":"50",pagination:"true"},A=["innerHTML"],H={class:"flex justify-center mt-8 md:mt-12"},P={class:"flex-none"};function O(e,t,o,n,i,r){const a=(0,s.g2)("router-link"),l=(0,s.g2)("FooterComponent"),c=(0,s.gN)("hover-animate");return(0,s.uX)(),(0,s.CE)("div",w,[(0,s.Lk)("div",k,[(0,s.Lk)("header",null,[(0,s.Lk)("nav",L,[(0,s.Lk)("div",j,[(0,s.Lk)("div",C,[(0,s.Lk)("h2",{ref:"carouselTitle",class:"text-color title-page-text text-xl font-heading"},(0,y.v_)(r.currentItemData.title),513),(0,s.Lk)("div",_,null,512)])])])])]),(0,s.Lk)("div",T,[(0,s.Lk)("div",M,[(0,s.Lk)("div",I,[(0,s.Lk)("button",{ref:"prevArrow",onClick:t[0]||(t[0]=(...e)=>r.prevItem&&r.prevItem(...e)),class:"hidden border-color lg:block arrow prev border-t-2 border-l-2 h-4 w-4"},null,512),(0,s.Lk)("h1",$,[(0,s.Lk)("span",{innerHTML:r.currentItemData.text},null,8,E)],512),(0,s.Lk)("button",{ref:"nextArrow",onClick:t[1]||(t[1]=(...e)=>r.nextItem&&r.nextItem(...e)),class:"hidden border-color lg:block arrow next border-t-2 border-l-2 h-4 w-4"},null,512)]),(0,s.Lk)("div",S,[(0,s.Lk)("swiper-container",F,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.items,((e,t)=>((0,s.uX)(),(0,s.CE)("swiper-slide",{key:t},[(0,s.Lk)("div",{innerHTML:e.text,class:"swiper-content text-color font-paragraph w-full lg:w-4/6 text-center md:px-5 flex justify-center flex-wrap text-xl md:text-3xl"},null,8,A)])))),128))])],512),(0,s.Lk)("div",H,[(0,s.bo)(((0,s.uX)(),(0,s.Wv)(a,{to:"/portfolio",class:"text-color border-color bg-transparent button py-2 px-8 mr-4 font-heading text-lg border-2 rounded-full"},{default:(0,s.k6)((()=>[(0,s.eW)("Portfolio")])),_:1})),[[c]]),(0,s.bo)(((0,s.uX)(),(0,s.Wv)(a,{to:"/resume",class:"text-color border-color button py-2 px-8 mr-4 font-heading text-lg border-2 rounded-full"},{default:(0,s.k6)((()=>[(0,s.eW)("Resume")])),_:1})),[[c]])])])]),(0,s.Lk)("div",P,[(0,s.bF)(l,{ref:"footer"},null,512)])])}var X=o(7083);const z=e=>((0,s.Qi)("data-v-6a0e283b"),e=e(),(0,s.jt)(),e),U={class:"flex justify-center fixed bottom-0 w-full left-0 z-50"},W={class:"shadow-lg backdrop-blur-sm bg-white/50 container flex justify-center py-4 items-center relative rounded-full inline-block w-auto mb-4"},R={href:"mailto:hello@michelepaolino.me",class:"icon flex items-center px-8"},B={version:"1.1",id:"icon-mail",class:"fill",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 36.3 29",style:{"enable-background":"new 0 0 36.3 29"},"xml:space":"preserve"},D=z((()=>(0,s.Lk)("path",{class:"st0",d:"M28.7,29H7.6c-2.2,0-3.5,0-4.6-0.6c-1-0.5-1.9-1.3-2.4-2.4C0,24.9,0,23.7,0,21.4V7.6c0-0.1,0-0.2,0-0.3\n\tc0,0,0,0,0-0.1c0-2,0-3.2,0.6-4.3c0.5-1,1.3-1.9,2.4-2.4C4.1,0,5.4,0,7.6,0h21.1c2.2,0,3.5,0,4.6,0.6c1,0.5,1.9,1.3,2.4,2.4\n\tc0.6,1.1,0.6,2.3,0.6,4.2c0,0,0,0,0,0.1c0,0.1,0,0.2,0,0.3v13.8c0,2.2,0,3.5-0.6,4.6c-0.5,1-1.3,1.9-2.4,2.4\n\tC32.2,29,30.9,29,28.7,29z M3.6,10.7v10.8c0,1.6,0,2.6,0.2,3C4,24.8,4.3,25,4.6,25.2c0.4,0.2,1.4,0.2,3,0.2h21.1c1.6,0,2.6,0,3-0.2\n\tc0.3-0.2,0.6-0.4,0.8-0.8c0.2-0.4,0.2-1.4,0.2-3V10.7l-7.1,4.7c-2.4,1.6-3.8,2.5-5.3,2.9c-1.4,0.3-2.8,0.3-4.2,0\n\tc-1.6-0.4-2.9-1.3-5.3-2.9L3.6,10.7z M3.6,6.3l9.1,6.1c2.1,1.4,3.2,2.1,4.2,2.4c0.8,0.2,1.7,0.2,2.5,0c0.9-0.2,2-0.9,4.2-2.4\n\tl9.1-6.1c0-0.8-0.1-1.4-0.2-1.7C32.3,4.3,32,4,31.7,3.8c-0.4-0.2-1.4-0.2-3-0.2H7.6c-1.6,0-2.6,0-3,0.2C4.3,4,4,4.3,3.8,4.6\n\tC3.7,4.9,3.6,5.5,3.6,6.3z"},null,-1))),N=[D],V={href:"https://github.com/michelediss?tab=repositories",target:"_blank",class:"icon flex items-center px-8"},K={version:"1.1",id:"Livello_1",class:"fill",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 32.1 32.1",style:{"enable-background":"new 0 0 32.1 32.1"},"xml:space":"preserve"},q=z((()=>(0,s.Lk)("g",{class:"st0"},[(0,s.Lk)("path",{class:"st1",d:"M16,2.7C8.7,2.7,2.7,8.7,2.7,16s6,13.4,13.4,13.4s13.4-6,13.4-13.4S23.4,2.7,16,2.7z M0,16C0,7.2,7.2,0,16,0\n\t\ts16,7.2,16,16s-7.2,16-16,16S0,24.9,0,16z"}),(0,s.Lk)("path",{class:"st1",d:"M12.8,30.4c-0.1-0.2-0.1-1.7,0-4.5c-1.4,0-2.3,0-2.6-0.3c-0.5-0.4-1.1-1.5-1.6-2.3s-1.6-0.9-2-1.1\n\t\tc-0.4-0.2-0.5-0.9,1.2-0.3c1.7,0.5,1.8,2,2.4,2.4c0.6,0.3,1.9,0.2,2.5-0.1c0.6-0.3,0.6-1.3,0.7-1.7c0.1-0.4-0.3-0.5-0.4-0.5\n\t\tc-0.6,0-3.6-0.7-4.5-3.6c-0.8-3,0.2-4.9,0.8-5.7c0.4-0.6,0.4-1.7-0.1-3.6c1.6-0.2,2.9,0.3,3.8,1.6c0,0,1.2-0.7,3-0.7\n\t\tc1.9,0,2.5,0.6,3,0.7c0.5,0.1,0.9-2.2,4-1.6c-0.7,1.3-1.2,2.9-0.8,3.6c0.4,0.7,2.1,2.8,1.1,5.7c-0.7,2-2,3.2-4,3.6\n\t\tc-0.2,0.1-0.3,0.2-0.3,0.3c0,0.2,0.3,0.3,0.7,1.4c0.3,0.8,0.3,2.9,0.1,6.4c-0.6,0.2-1.1,0.3-1.5,0.3c-0.6,0.1-1.3,0.2-2,0.2\n\t\tc-0.7,0-0.9,0-1.8-0.1C14,30.6,13.4,30.5,12.8,30.4z"})],-1))),G=[q],Q=z((()=>(0,s.Lk)("a",{href:"https://www.linkedin.com/in/michele-paolino/",target:"_blank",class:"icon flex items-center px-8"},[(0,s.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-linkedin fill",viewBox:"0 0 16 16"},[(0,s.Lk)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"})])],-1))),J=z((()=>(0,s.Lk)("svg",{class:"hamburger-icon fill",width:"30px",height:"30px",viewBox:"2 0 12 12","enable-background":"new 0 0 12 12",id:"Слой_1",version:"1.1","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[(0,s.Lk)("g",null,[(0,s.Lk)("rect",{class:"line top",height:"1",width:"11",x:"0.5",y:"2.5"}),(0,s.Lk)("rect",{class:"line middle",height:"1",width:"11",x:"0.5",y:"5.5"}),(0,s.Lk)("rect",{class:"line bottom",height:"1",width:"11",x:"0.5",y:"8.5"})])],-1))),Y=[J],Z={ref:"modal",class:"menu-fullscreen fixed inset-0 bg-menu-color z-40"},ee={id:"nav-back",class:"flex pt-6 w-full lg:w-5/6 mx-auto"},te={class:"flex justify-center w-full"},oe={class:"title-page-container"},ne={ref:"title",class:"title-page-text text-xl font-heading text-menu-color opacity-0"},se={ref:"underline",class:"title-page-underline h-0.5 bg-secondary-menu-color w-0"},ie={class:"menu-content flex flex-col items-center justify-center h-full text-white pb-24"},re={class:"text-center",ref:"menuItems"},ae={class:"font-heading my-10 menu-item-li"},le={class:"inline-block w-auto menu-item-wrapper"},ce=z((()=>(0,s.Lk)("div",{class:"w-0 h-1 bg-secondary-menu-color menu-item-line"},null,-1))),de={class:"font-heading my-10 menu-item-li"},ue={class:"inline-block w-auto menu-item-wrapper"},pe=z((()=>(0,s.Lk)("div",{class:"w-0 h-1 bg-secondary-menu-color menu-item-line"},null,-1))),he={class:"font-heading my-10 menu-item-li"},me={class:"inline-block w-auto menu-item-wrapper"},fe=z((()=>(0,s.Lk)("div",{class:"w-0 h-1 bg-secondary-menu-color menu-item-line"},null,-1))),ge={class:"font-heading my-10 menu-item-li"},ve={class:"inline-block w-auto menu-item-wrapper"},be=z((()=>(0,s.Lk)("div",{class:"w-0 h-1 bg-secondary-menu-color menu-item-line"},null,-1)));function xe(e,t,o,n,i,r){const a=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("footer",U,[(0,s.Lk)("div",W,[(0,s.Lk)("a",R,[((0,s.uX)(),(0,s.CE)("svg",B,N))]),(0,s.Lk)("a",V,[((0,s.uX)(),(0,s.CE)("svg",K,G))]),Q,(0,s.Lk)("button",{class:"hamburger flex items-center px-7",onClick:t[0]||(t[0]=(...e)=>r.toggleMenu&&r.toggleMenu(...e))},Y)])]),(0,s.Lk)("div",Z,[(0,s.Lk)("header",null,[(0,s.Lk)("nav",ee,[(0,s.Lk)("div",te,[(0,s.Lk)("div",oe,[(0,s.Lk)("h2",ne,"Menu",512),(0,s.Lk)("div",se,null,512)])])])]),(0,s.Lk)("div",ie,[(0,s.Lk)("ul",re,[(0,s.Lk)("li",ae,[(0,s.Lk)("div",le,[(0,s.bF)(a,{to:"/",class:"text-4xl md:text-5xl text-menu-color my-0",onClick:r.toggleMenu},{default:(0,s.k6)((()=>[(0,s.eW)("Home")])),_:1},8,["onClick"]),ce])]),(0,s.Lk)("li",de,[(0,s.Lk)("div",ue,[(0,s.bF)(a,{to:"/portfolio",class:"text-4xl md:text-5xl text-menu-color my-0",onClick:r.toggleMenu},{default:(0,s.k6)((()=>[(0,s.eW)("Portfolio")])),_:1},8,["onClick"]),pe])]),(0,s.Lk)("li",he,[(0,s.Lk)("div",me,[(0,s.bF)(a,{to:"/resume",class:"text-4xl md:text-5xl text-menu-color my-0",onClick:r.toggleMenu},{default:(0,s.k6)((()=>[(0,s.eW)("Resume")])),_:1},8,["onClick"]),fe])]),(0,s.Lk)("li",ge,[(0,s.Lk)("div",ve,[(0,s.bF)(a,{to:"/vision",class:"text-4xl md:text-5xl text-menu-color my-0",onClick:r.toggleMenu},{default:(0,s.k6)((()=>[(0,s.eW)("Vision")])),_:1},8,["onClick"]),be])])],512)])],512)],64)}const ye={name:"FooterComponent",data(){return{isModalOpen:!1}},methods:{toggleMenu(){this.isModalOpen=!this.isModalOpen,this.isModalOpen?(document.querySelector(".hamburger-icon").classList.add("is-open"),document.body.classList.add("no-scroll"),X.os.fromTo(this.$refs.modal,{y:"-100%"},{y:"0%",duration:.5,ease:"power2.out",onComplete:()=>this.animateTitleAndUnderline()}),X.os.fromTo(this.$refs.menuItems.children,{x:-50,opacity:0},{x:0,opacity:1,duration:.5,delay:.5,stagger:.2,ease:"power2.out"})):(document.querySelector(".hamburger-icon").classList.remove("is-open"),document.body.classList.remove("no-scroll"),X.os.to(this.$refs.modal,{y:"-100%",duration:.5,ease:"power1.in",onComplete:()=>this.resetTitleAndUnderline()}))},animateTitleAndUnderline(){X.os.fromTo(this.$refs.title,{opacity:0},{opacity:1,duration:.5,ease:"power2.out"}),X.os.fromTo(this.$refs.underline,{width:0},{width:"100%",duration:.5,ease:"power2.out"})},resetTitleAndUnderline(){X.os.set(this.$refs.title,{opacity:0}),X.os.set(this.$refs.underline,{width:0})}}},we=(0,g.A)(ye,[["render",xe],["__scopeId","data-v-6a0e283b"]]),ke=we,Le={name:"Home",components:{FooterComponent:ke},data(){return{currentItem:0,items:[{title:"Hello",text:"My name is Michele Paolino, <br>I'm a Napoli based web designer <br>and front-end developer."},{title:"Skills",text:"Vue, WordPress, Bootstrap, Tailwind, <br>Figma, Adobe, UI design, Typography, <br> GSAP, Sass, Git, SEO."},{title:"Nerd Pr!de",text:'<p>I develop and maintain Nerd Pr!de, <br>a tool collection for web devs. <br>Take a look on my <span><a href="https://github.com/michelediss?tab=repositories" target="_blank"><strong>GitHub.</strong></a></span></p>'},{title:"Let's play!",text:"<p>Press 'c' on your keyboard<br> or swipe up on mobile to change<br> the color palette of the site!</p>"}]}},computed:{currentItemData(){return this.items[this.currentItem]}},methods:{nextItem(){this.transitionSlide((()=>{this.currentItem=(this.currentItem+1)%this.items.length}))},prevItem(){this.transitionSlide((()=>{this.currentItem=(this.currentItem-1+this.items.length)%this.items.length}))},goToItem(e){e!==this.currentItem&&this.transitionSlide((()=>{this.currentItem=e}))},handleKeydown(e){"ArrowRight"===e.key?this.nextItem():"ArrowLeft"===e.key&&this.prevItem()},transitionSlide(e){const t=this.$refs.carouselContent,o=this.$refs.carouselTitle,n=this.$refs.underline;t&&o&&X.os.to([t,o],{duration:.5,opacity:0,onComplete:()=>{e(),X.os.to([t,o],{duration:.5,opacity:1})}}),n&&X.os.to(n,{duration:.5,width:0,onComplete:()=>{X.os.to(n,{duration:.5,width:"100%"})}})}},mounted(){const e=X.os.timeline();this.$refs.carouselTitle&&this.$refs.underline&&this.$refs.carouselContent&&this.$refs.footer&&this.$refs.prevArrow&&this.$refs.nextArrow&&(e.to(this.$refs.carouselTitle,{opacity:1,y:0,duration:.5},"+=0.5"),e.to(this.$refs.underline,{opacity:1,width:"100%",duration:.5},"-=0.3"),e.to(this.$refs.carouselContent,{opacity:1,y:0,duration:.5},"-=0.3"),e.to(this.$refs.swiperContainer,{opacity:1,y:0,duration:.5},"-=0.3"),e.to(this.$el.querySelectorAll(".button"),{opacity:1,y:0,stagger:.2,duration:.5},"-=0.3"),X.os.set([this.$refs.prevArrow,this.$refs.nextArrow],{display:"block"}),e.to([this.$refs.prevArrow,this.$refs.nextArrow],{opacity:1,duration:.5},"-=0.3"),e.to(this.$refs.footer.$el,{opacity:1,y:0,duration:.5},"-=0.3")),window.addEventListener("keydown",this.handleKeydown)},beforeDestroy(){window.removeEventListener("keydown",this.handleKeydown)}},je=(0,g.A)(Le,[["render",O],["__scopeId","data-v-5ce93d44"]]),Ce=je,_e=e=>((0,s.Qi)("data-v-18f182d6"),e=e(),(0,s.jt)(),e),Te={class:"flex flex-col h-screen"},Me={class:"flex-none"},Ie={class:"main portfolio flex grow items-center justify-center mx-auto w-full md:w-5/6 mt-16 pb-24",ref:"mainContent"},$e={class:"container"},Ee={class:"row flex flex-col flex-wrap lg:flex-row items-center py-8 md:space-x-2 lg:space-x-0 w-full"},Se={class:"w-full lg:w-4/12"},Fe={class:"text-2xl lg:text-2xl font-heading"},Ae={class:"w-full lg:w-8/12 flex"},He={class:"w-1/2 justify-self-start lg:justify-self-center text-start lg:text-center flex justify-start lg:justify-center items-end lg:items-center mt-3 md:mt-0"},Pe={class:"uppercase text-base font-paragraph"},Oe={class:"w-1/2 text-end flex justify-end items-end"},Xe=["href"],ze=_e((()=>(0,s.Lk)("div",{class:"bg-secondary-color h-0.5 w-full opacity-50"},null,-1))),Ue={class:"flex-none"};function We(e,t,o,n,i,r){const a=(0,s.g2)("HeaderComponent"),l=(0,s.g2)("FooterComponent"),c=(0,s.gN)("hover-animate");return(0,s.uX)(),(0,s.CE)("div",Te,[(0,s.Lk)("div",Me,[(0,s.bF)(a,{pageTitle:i.pageTitle,ref:"header"},null,8,["pageTitle"])]),(0,s.Lk)("div",Ie,[(0,s.Lk)("div",$e,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.projects,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t,class:"row-container"},[(0,s.Lk)("div",Ee,[(0,s.Lk)("div",Se,[(0,s.Lk)("h1",Fe,(0,y.v_)(e.name),1)]),(0,s.Lk)("div",Ae,[(0,s.Lk)("div",He,[(0,s.Lk)("h5",Pe,(0,y.v_)(e.role),1)]),(0,s.Lk)("div",Oe,[(0,s.bo)(((0,s.uX)(),(0,s.CE)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",class:"button text-base font-paragraph border-2 border-color rounded-full px-8 py-1"},[(0,s.eW)(" Check it out! ")],8,Xe)),[[c]])])])]),ze])))),128))])],512),(0,s.Lk)("div",Ue,[(0,s.bF)(l)])])}const Re={id:"nav-back",class:"flex pt-6 w-full lg:w-5/6 mx-auto"},Be={class:"flex justify-center w-full"},De={class:"title-page-container"},Ne={ref:"underline",class:"title-page-underline bg-secondary-color h-0.5 bg-slate-900"};function Ve(e,t,o,n,i,r){return(0,s.uX)(),(0,s.CE)("header",null,[(0,s.Lk)("nav",Re,[(0,s.Lk)("div",Be,[(0,s.Lk)("div",De,[(0,s.Lk)("h2",{ref:"title",class:"title-page-text text-color transition-all duration-500 text-xl font-heading"},(0,y.v_)(o.pageTitle),513),(0,s.Lk)("div",Ne,null,512)])])])])}const Ke={name:"HeaderComponent",props:{pageTitle:{type:String,required:!0}},mounted(){X.os.fromTo(this.$refs.underline,{width:"0%"},{width:"100%",duration:1,ease:"power2.out"}),X.os.fromTo(this.$refs.title,{opacity:"0"},{opacity:"1",duration:1,ease:"power2.out"})}},qe=(0,g.A)(Ke,[["render",Ve],["__scopeId","data-v-aeb269a4"]]),Ge=qe,Qe={name:"Portfolio",components:{HeaderComponent:Ge,FooterComponent:ke},data(){return{pageTitle:"Portfolio",projects:[{name:"Hexenschuhe",role:"visual design / developing",url:"https://hexenschuhe.com"},{name:"Je So' Pazzo",role:"visual design / developing",url:"https://www.jesopazzo.org"},{name:"Dubstone",role:"visual design / developing",url:"https://www.dubstone.it"},{name:"L'angolo fiorito",role:"visual design / developing",url:"https://langolofioritobella.it"},{name:"Caffé Seddio",role:"developing",url:"https://caffeseddio.com/"},{name:"Buy and rent",role:"visual design / developing",url:"https://buyandrent.it/"},{name:"Becoming lab",role:"visual design / developing",url:"https://becominglab.it"}]}},mounted(){const e=X.os.timeline();e.from(this.$refs.header.$el,{opacity:0,duration:.8}),this.$refs.mainContent.querySelectorAll(".row-container").forEach(((t,o)=>{e.from(t,{opacity:0,y:50,duration:.4},"-=0.2")}))}},Je=(0,g.A)(Qe,[["render",We],["__scopeId","data-v-18f182d6"]]),Ye=Je,Ze=e=>((0,s.Qi)("data-v-0c207a79"),e=e(),(0,s.jt)(),e),et={class:"flex-none"},tt={class:"intro-resume container mt-24 mb-16 mx-auto w-full lg:w-5/6 flex justify-center flex-wrap",ref:"introResume"},ot=Ze((()=>(0,s.Lk)("p",{class:"text-color text-xl md:text-2xl font-paragraph text-center mb-12"}," My name is Michele Paolino, I'm a web designer and front-end developer. My job involves designing and developing modern, lightweight, and high-performance web solutions. I apply to my works the knowledge I have gained from studying the processes that govern visual communication in its formal and functional aspects. ",-1))),nt={href:"#",target:"_blank",class:"text-color border-color button rounded-full px-8 py-1 text-lg"},st={class:"work-history",ref:"workHistory"},it=Ze((()=>(0,s.Lk)("div",{class:"w-full lg:w-5/6 mx-auto"},[(0,s.Lk)("h2",{class:"text-color mt-20 mb-12 font-heading uppercase text-3xl"}," Work history "),(0,s.Lk)("div",{class:"bg-secondary-color h-0.5 w-full opacity-50"})],-1))),rt={class:"container mx-auto w-full lg:w-5/6 mb-12 flex flex-wrap"},at={class:"block md:flex py-4 my-4"},lt={class:"w-full md:w-1/3 lg:w-1/4 pt-2"},ct={class:"text-color text-xl font-heading mb-2"},dt={class:"w-full md:w-2/3 lg:w-3/4"},ut={class:"text-color text-lg mb-1 font-paragraph"},pt={class:"text-color text-base font-paragraph"},ht=Ze((()=>(0,s.Lk)("div",{class:"bg-secondary-color h-0.5 w-full opacity-50"},null,-1))),mt={class:"tech-stack",ref:"techStack"},ft=Ze((()=>(0,s.Lk)("div",{class:"w-full lg:w-5/6 mx-auto"},[(0,s.Lk)("h2",{class:"text-color mt-20 mb-12 font-heading uppercase technical-skills text-xl"}," Tech stack ")],-1))),gt={class:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full lg:w-5/6 mx-auto gap-8 pb-32"},vt={class:"text-color text-base font-heading mb-2"},bt={class:"text-color text-lg font-paragraph"};function xt(e,t,o,n,i,r){const a=(0,s.g2)("HeaderComponent"),l=(0,s.g2)("FooterComponent"),c=(0,s.gN)("hover-animate");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",et,[(0,s.bF)(a,{pageTitle:i.pageTitle,ref:"header"},null,8,["pageTitle"])]),(0,s.Lk)("div",tt,[ot,(0,s.bo)(((0,s.uX)(),(0,s.CE)("a",nt,[(0,s.eW)("Download CV")])),[[c]])],512),(0,s.Lk)("div",st,[it,(0,s.Lk)("div",rt,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.items,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t},[(0,s.Lk)("div",at,[(0,s.Lk)("div",lt,[(0,s.Lk)("h2",ct,(0,y.v_)(e.job),1)]),(0,s.Lk)("div",dt,[(0,s.Lk)("h3",ut,(0,y.v_)(e.position),1),(0,s.Lk)("p",pt,(0,y.v_)(e.description),1)])]),ht])))),128))])],512),(0,s.Lk)("div",mt,[ft,(0,s.Lk)("div",gt,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.skills,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t},[(0,s.Lk)("h3",vt,(0,y.v_)(e.scope),1),(0,s.Lk)("p",bt,(0,y.v_)(e.skill),1)])))),128))])],512),(0,s.bF)(l)],64)}const yt={name:"Resume",components:{HeaderComponent:Ge,FooterComponent:ke},data(){return{pageTitle:"Resume",items:[{job:"Dopolavoro ",position:"Web developer",description:"Specialized in creating websites that are both visually stunning and functionally robust, maintaining the firm’s reputation for design excellence. Continuously explored and implemented new web design trends, keeping the firm’s offerings innovative and competitive. Integrated technical and design expertise to achieve cohesive and engaging user experiences."},{job:"Sari Advertising",position:"Web designer & developer",description:"Integral member of a team dedicated to producing advanced web designs and strategic advertising solutions. Developed SEO-optimized websites to maximize client visibility and improve user engagement and conversion rates. Collaborated with cross-functional teams to ensure a unified and effective brand message."},{job:"Becoming Lab",position:"Web designer & developer",description:"Led a team in creating innovative web applications and marketing solutions, with a focus on elevating clients’ digital presence. Managed projects from concept to completion, emphasizing adherence to timelines without compromising quality. Built and maintained strong client relationships to ensure projects align with their business goals and brand identity."}],skills:[{scope:"Front-end Development",skill:"Vue.js, Bootstrap, Tailwind CSS, Sass, PHP, hsluv"},{scope:"CMS",skill:"WordPress, Prestashop"},{scope:"Design & Prototyping",skill:"Figma, Adobe Photoshop, Adobe Illustrator"},{scope:"UI design",skill:"User Interface design principles, typography, color theory"},{scope:"Animation & Effects",skill:"GreenSock Animation Platform (GSAP)"},{scope:"Version Control",skill:"Git, GitHub"}]}},mounted(){const e=X.os.timeline();e.from(this.$refs.header.$el,{opacity:0,duration:.8}).from(this.$refs.introResume,{opacity:0,y:50,duration:.8},"-=0.4").from(this.$refs.workHistory,{opacity:0,y:50,duration:.8},"-=0.4").from(this.$refs.techStack,{opacity:0,y:50,duration:.8},"-=0.4")}},wt=(0,g.A)(yt,[["render",xt],["__scopeId","data-v-0c207a79"]]),kt=wt,Lt={class:"flex flex-col h-screen"},jt={class:"flex-none"},Ct={class:"philosophy w-full lg:w-4/6 mx-auto pt-8 pb-16",ref:"philosophyContent"},_t=(0,s.Fv)('<div class="philosophy-title" data-v-a4d6ed8e><h1 class="mt-20 mb-12 font-heading uppercase text-4xl leading-10" data-v-a4d6ed8e> Suspension of disbelief in digital design: a narrative approach to Ui/Ux </h1></div><div class="philosophy-paragraph" data-v-a4d6ed8e><p class="text-xl md:text-2xl font-paragraph text-start mb-12" data-v-a4d6ed8e> The concept of <a class="underline" target="_blank" href="https://en.wikipedia.org/wiki/Suspension_of_disbelief" data-v-a4d6ed8e>suspension of disbelief</a>, originally articulated by the poet and literary critic <a class="underline" target="_blank" href="https://en.wikipedia.org/wiki/Samuel_Taylor_Coleridge" data-v-a4d6ed8e>Samuel Taylor Coleridge</a>, refers to the intentional act of setting aside one&#39;s skepticism to engage with and enjoy elements within a narrative that may not conform to the laws of reality or logic. This cognitive process enables the audience to immerse themselves in a narrative by willingly accepting fantastical or non-realistic aspects as plausible within the context of the story. In essence, suspension of disbelief is a mental state where the audience consents to overlook the implausibility of certain elements to fully engage with the narrative experience. </p></div><div class="philosophy-paragraph" data-v-a4d6ed8e><p class="text-xl md:text-2xl font-paragraph text-start mb-12" data-v-a4d6ed8e> When applied to the domain of UI/UX design and frontend web development, the principle of suspension of disbelief assumes a pivotal role in crafting digital experiences that captivate and retain user engagement. Digital interfaces, much like narratives, can benefit from designing elements that encourage users to transcend their everyday realities and immerse themselves in the digital environment presented to them. This immersion is achieved through a combination of visual design, animation, interactive storytelling, and consistency in user experience. By carefully orchestrating these elements, designers are able to construct digital environments that not only attract the user&#39;s attention but also sustain their engagement over time. </p></div><div class="philosophy-paragraph" data-v-a4d6ed8e><p class="text-xl md:text-2xl font-paragraph text-start mb-12" data-v-a4d6ed8e> Visual design in this context is more than just aesthetic appeal; it serves as a gateway to an immersive experience. Through the use of color schemes, typography, imagery, and spatial arrangements, designers create a visually cohesive environment that supports the narrative or thematic elements of the digital experience. This visual coherence helps users to suspend their disbelief and accept the digital environment as a coherent, navigable space. Furthermore, animation and micro-interactions contribute to a dynamic sense of realism, providing immediate feedback and enhancing the perceived interactivity of the digital interface, which further supports the user&#39;s suspension of disbelief. </p></div><div class="philosophy-paragraph" data-v-a4d6ed8e><p class="text-xl md:text-2xl font-paragraph text-start mb-12" data-v-a4d6ed8e> Moreover, storytelling in UI/UX design extends beyond mere content; it encompasses the entire journey of the user through the digital product. Storytelling can manifest through carefully crafted user flows that guide users seamlessly from one interaction to the next, creating a narrative-like progression that mirrors the structure of a traditional story. Consistency in design, such as maintaining uniform patterns, behaviors, and interface elements across the user journey, reinforces trust and familiarity, enabling users to focus on the narrative or interactive experience without being distracted by inconsistencies or unexpected deviations. </p></div><div class="philosophy-paragraph" data-v-a4d6ed8e><p class="text-xl md:text-2xl font-paragraph text-start pb-24" data-v-a4d6ed8e> In conclusion, the application of the suspension of disbelief in UI/UX design and development is integral to creating digital experiences that are engaging and memorable. By leveraging the principles of visual design, animation, storytelling, and consistency, designers can craft immersive digital environments that encourage users to momentarily transcend the limitations of their everyday experiences, fostering deeper engagement and sustained interaction with digital products. This approach not only enhances user satisfaction but also establishes a meaningful connection between the user and the digital experience, ultimately contributing to the overall effectiveness and success of the design. </p></div>',6),Tt=[_t],Mt={class:"flex-none"};function It(e,t,o,n,i,r){const a=(0,s.g2)("HeaderComponent"),l=(0,s.g2)("FooterComponent");return(0,s.uX)(),(0,s.CE)("div",Lt,[(0,s.Lk)("div",jt,[(0,s.bF)(a,{pageTitle:i.pageTitle,ref:"header"},null,8,["pageTitle"])]),(0,s.Lk)("div",Ct,Tt,512),(0,s.Lk)("div",Mt,[(0,s.bF)(l)])])}const $t={name:"Philosophy",components:{HeaderComponent:Ge,FooterComponent:ke},data(){return{pageTitle:"What I think"}},mounted(){const e=X.os.timeline();e.from(this.$refs.philosophyContent.querySelector(".philosophy-title"),{opacity:0,y:50,duration:.8},"+=0.8"),this.$refs.philosophyContent.querySelectorAll(".philosophy-paragraph").forEach(((t,o)=>{e.from(t,{opacity:0,y:50,duration:.8},"-=0.4")}))}},Et=(0,g.A)($t,[["render",It],["__scopeId","data-v-a4d6ed8e"]]),St=Et,Ft=[{path:"/",name:"Home",component:Ce},{path:"/portfolio",name:"Portfolio",component:Ye},{path:"/resume",name:"Resume",component:kt},{path:"/vision",name:"vision",component:St}],At=(0,x.aE)({history:(0,x.LA)(),routes:Ft});At.beforeEach(((e,t,o)=>{m(),o()})),window.addEventListener("keydown",(e=>{"KeyC"===e.code&&m()}));const Ht=At,Pt={mounted(e){e.addEventListener("mouseenter",(()=>{e.classList.add("bg-secondary-color"),e.classList.add("main-text-color")})),e.addEventListener("mouseleave",(()=>{e.classList.remove("bg-secondary-color"),e.classList.remove("main-text-color")}))},unmounted(e){e.removeEventListener("mouseenter",(()=>{e.classList.add("bg-secondary-color"),e.classList.add("main-text-color")})),e.removeEventListener("mouseleave",(()=>{e.classList.remove("bg-secondary-color"),e.classList.remove("main-text-color")}))}};var Ot=o(136),Xt=o(3678),zt=o.n(Xt);const Ut={beforeMount(e,t){const o=e=>{"swipe"===e.type&&"top"===t.arg&&t.value()};e.addEventListener("touchmove",o,{passive:!0})},unmounted(e){e.removeEventListener("touchmove")}};(0,Ot.kz)();const Wt=(0,n.Ef)(b);Wt.directive("hover-animate",Pt),Wt.directive("touch",Ut),Wt.use(Ht),Wt.mount("#app"),zt().init({mainElement:"body",onRefresh(){console.log("Pull to refresh detected, reloading the page..."),window.location.reload()},instructionsPullToRefresh:"",instructionsReleaseToRefresh:"",instructionsRefreshing:"",distThreshold:60,distMax:80,distReload:50,refreshTimeout:50})},3717:(e,t,o)=>{var n={"./1":[8263,8263],"./1.json":[8263,8263],"./10":[6673,6673],"./10.json":[6673,6673],"./11":[534,534],"./11.json":[534,534],"./12":[823,823],"./12.json":[823,823],"./13":[5876,5876],"./13.json":[5876,5876],"./14":[4533,4533],"./14.json":[4533,4533],"./15":[4554,4554],"./15.json":[4554,4554],"./16":[7419,7419],"./16.json":[7419,7419],"./17":[6008,6008],"./17.json":[6008,6008],"./18":[7817,7817],"./18.json":[7817,7817],"./19":[3630,3630],"./19.json":[3630,3630],"./2":[6070,6070],"./2.json":[6070,6070],"./20":[7066,7066],"./20.json":[7066,7066],"./21":[3797,3797],"./21.json":[3797,3797],"./22":[5784,5784],"./22.json":[5784,5784],"./23":[7179,7179],"./23.json":[7179,7179],"./24":[8566,8566],"./24.json":[8566,8566],"./25":[17,17],"./25.json":[17,17],"./26":[1972,1972],"./26.json":[1972,1972],"./27":[7,7],"./27.json":[7,7],"./28":[2,2],"./28.json":[2,2],"./29":[1453,1453],"./29.json":[1453,1453],"./3":[3873,3873],"./3.json":[3873,3873],"./30":[2335,2335],"./30.json":[2335,2335],"./31":[444,444],"./31.json":[444,444],"./32":[2345,2345],"./32.json":[2345,2345],"./33":[1262,1262],"./33.json":[1262,1262],"./34":[5075,5075],"./34.json":[5075,5075],"./35":[3216,3216],"./35.json":[3216,3216],"./36":[7997,7997],"./36.json":[7997,7997],"./37":[370,370],"./37.json":[370,370],"./38":[7527,7527],"./38.json":[7527,7527],"./39":[1796,1796],"./39.json":[1796,1796],"./4":[9640,9640],"./4.json":[9640,9640],"./40":[2832,2832],"./40.json":[2832,2832],"./41":[9123,9123],"./41.json":[9123,9123],"./42":[1170,1170],"./42.json":[1170,1170],"./43":[4525,4525],"./43.json":[4525,4525],"./44":[6092,6092],"./44.json":[6092,6092],"./45":[9935,9935],"./45.json":[9935,9935],"./46":[2078,2078],"./46.json":[2078,2078],"./47":[7017,7017],"./47.json":[7017,7017],"./48":[8280,8280],"./48.json":[8280,8280],"./49":[2219,2219],"./49.json":[2219,2219],"./5":[8987,8987],"./5.json":[8987,8987],"./50":[4301,4301],"./50.json":[4301,4301],"./6":[1274,1274],"./6.json":[1274,1274],"./7":[4501,4501],"./7.json":[4501,4501],"./8":[2844,2844],"./8.json":[2844,2844],"./9":[2735,2735],"./9.json":[2735,2735]};function s(e){if(!o.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],s=t[0];return o.e(t[1]).then((()=>o.t(s,19)))}s.keys=()=>Object.keys(n),s.id=3717,e.exports=s}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,o),i.exports}o.m=e,(()=>{var e=[];o.O=(t,n,s,i)=>{if(!n){var r=1/0;for(d=0;d<e.length;d++){for(var[n,s,i]=e[d],a=!0,l=0;l<n.length;l++)(!1&i||r>=i)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(a=!1,i<r&&(r=i));if(a){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,s,i]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;o.t=function(n,s){if(1&s&&(n=this(n)),8&s)return n;if("object"===typeof n&&n){if(4&s&&n.__esModule)return n;if(16&s&&"function"===typeof n.then)return n}var i=Object.create(null);o.r(i);var r={};e=e||[null,t({}),t([]),t(t)];for(var a=2&s&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>r[e]=()=>n[e]));return r["default"]=()=>n,o.d(i,r),i}})(),(()=>{o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{2:"36c93333",7:"b9b8d3a1",17:"80ab19fe",370:"a4b976ff",444:"1d965876",534:"3391bc44",823:"a9a933a9",1170:"473e077b",1262:"38ad72a5",1274:"2cc77edc",1453:"18d97e85",1796:"52d12029",1972:"1857824d",2078:"a9e809d4",2219:"c1adef62",2335:"a1f1a099",2345:"e7109462",2735:"13f8f0f0",2832:"ac9c2919",2844:"cd653d1e",3216:"27d36db0",3630:"1d491002",3797:"bcaddd6c",3873:"d662f567",4301:"8d5ca0e6",4501:"30698ce6",4525:"6a586e6e",4533:"1f25fab9",4554:"466e51ec",5075:"087b13a4",5354:"2eec803a",5784:"e90a2234",5876:"30c66bca",6008:"c581f91c",6070:"270a4902",6092:"4c24bbea",6673:"b311e806",7017:"78f29c7b",7066:"cfb46994",7179:"af56b12d",7419:"0725e2db",7527:"5b7228b2",7817:"f0555e63",7997:"21c8b355",8263:"ca5a0fff",8280:"50946136",8566:"a32d3eb9",8987:"ac3ee7ae",9123:"787b8a23",9640:"897c425b",9935:"ad358877"}[e]+".js"})(),(()=>{o.miniCssF=e=>{}})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="personal-website-vue:";o.l=(n,s,i,r)=>{if(e[n])e[n].push(s);else{var a,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+i){a=u;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+i),a.src=n),e[n]=[s];var p=(t,o)=>{a.onerror=a.onload=null,clearTimeout(h);var s=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),s&&s.forEach((e=>e(o))),t)return t(o)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p="/michelepaolino.github.io/"})(),(()=>{var e={3524:0};o.f.j=(t,n)=>{var s=o.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var i=new Promise(((o,n)=>s=e[t]=[o,n]));n.push(s[2]=i);var r=o.p+o.u(t),a=new Error,l=n=>{if(o.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var i=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",a.name="ChunkLoadError",a.type=i,a.request=r,s[1](a)}};o.l(r,l,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,n)=>{var s,i,[r,a,l]=n,c=0;if(r.some((t=>0!==e[t]))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(l)var d=l(o)}for(t&&t(n);c<r.length;c++)i=r[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},n=self["webpackChunkpersonal_website_vue"]=self["webpackChunkpersonal_website_vue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=o.O(void 0,[504],(()=>o(362)));n=o.O(n)})();
//# sourceMappingURL=app.929536f5.js.map