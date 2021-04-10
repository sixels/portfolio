(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2027:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return C}});var o=r(5893),i=r(9008),s=r(1664),n=r(6893),a=r(7735);function l(t){var e=t.position,r=t.width,i=t.children;return(0,o.jsx)("span",{className:"tooltip tooltip-".concat(e," tw-text-xs tw-font-bold"),style:{width:r},children:i})}a.edn;var w={name:"js",icon:(0,o.jsx)(a.vl3,{size:".8em"}),tooltip:(0,o.jsx)(l,{position:"left",children:"Javascript"})},c={name:"react",icon:(0,o.jsx)(a.pNp,{size:".8em"}),tooltip:(0,o.jsx)(l,{position:"left",children:"React"})},d={name:"rust",icon:(0,o.jsx)(a.OQu,{size:".8em"}),tooltip:(0,o.jsx)(l,{position:"left",children:"Rust"})},p={name:"wasm",icon:(0,o.jsx)(a.aNo,{size:".8em"}),tooltip:(0,o.jsx)(l,{width:"8.9em",position:"left",children:"Web Assembly"})},m={name:"wip",icon:(0,o.jsx)(n.BJv,{size:".8em"}),tooltip:(0,o.jsx)(l,{width:"6em",position:"left",children:"Work In Progress"})},h=function(t){return{name:"github",icon:(0,o.jsx)(n.uOf,{size:"1.1em"}),tooltip:(0,o.jsx)(l,{width:"8em",position:"left",children:"GitHub page"}),link:"https://github.com/".concat(t)}};function x(t){var e=t.badges,r=t.title,i=t.description,s=t.footer_badges,n=t.wip;return(0,o.jsxs)("div",{id:"card",className:"tw-relative tw-pb-8  tw-bg-gray-900  tw-flex tw-flex-col  tw-rounded-lg tw-shadow-md",children:[(0,o.jsx)("div",{className:"projectInitial tw-overflow-hidden tw-opacity-40 tw-select-none tw-absolute tw-w-full tw-h-full tw-bg-gradient-to-br tw-from-gray-500 tw-to-gray-800 tw-grid tw-bg-clip-text",children:(0,o.jsx)("h1",{className:"tw-text-gray-700 tw-uppercase tw-ml-20 tw-text-opacity-60 tw-whitespace-nowrap tw-place-self-end tw-mb-12",style:{fontSize:"12rem"},children:r})}),(0,o.jsxs)("section",{className:"card-description tw-px-4 tw-pt-8 tw-z-10",children:[(0,o.jsxs)("div",{className:"project-name tw-flex tw-flex-row tw-justify-between tw-items-center",children:[(0,o.jsx)("h3",{children:r}),(0,o.jsxs)("div",{className:"badges tw-text-gray-200 tw-flex",children:[n&&(0,o.jsxs)("div",{className:"badge has-tooltip tw-rounded-full tw-bg-opacity-40 tw-bg-primary-500 tw-p-2 tw-mx-1 tw-text-primary-400",children:[m.icon,m.tooltip]}),e&&e.map((function(t){return(0,o.jsxs)("div",{className:"badge has-tooltip tw-rounded-full tw-bg-opacity-40 tw-bg-gray-500 tw-p-2 tw-mx-1",children:[t.icon,t.tooltip]},t.name)}))]})]}),(0,o.jsx)("p",{className:"card-description-text tw-py-3 tw-text-gray-200",children:i}),(0,o.jsx)("div",{className:"card-footer tw-absolute tw-bottom-0 tw-right-0 tw-flex tw-flex-row tw-pb-2 tw-pr-5",children:s&&(0,o.jsx)("div",{className:"badges tw-flex",children:s.map((function(t){return(0,o.jsxs)("a",{target:"_blank",rel:"noopener",href:t.link,className:"badge has-tooltip tw-rounded-full tw-text-gray-200 tw-bg-gray-700 tw-p-2 tw-mx-1",children:[t.icon,t.tooltip]},t.name)}))})})]})]})}var f=r(6610),u=r(5991),g=r(3349),j=r(5255),y=r(6089),b=r(7608),v=r(7294),N=r(1163),k=function(t,e,r,o){return r>o?e:t+(e-t)*((i=r/o)<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1);var i};function I(t){return new Promise((function(e,r){var o=/^(\/#.+)|(.+(\/#.+))$/;if(o.test(t)){var i=o.exec(t).filter((function(t){return t})).pop().replace(/\/?#/,""),s=document.getElementById(i);if(s)return void function(t,e,r,o){e=e||500;var i,s=(o=o||window).scrollTop||window.pageYOffset;i="number"===typeof t?parseInt(t)-60:function(t,e){return"HTML"===t.nodeName?-e:t.getBoundingClientRect().top+e}(t,s)-60;var n=Date.now(),a=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,15)};!function l(){var w=Date.now()-n;o!==window?o.scrollTop=k(s,i,w,e):window.scroll(0,k(s,i,w,e)),w>e?"function"===typeof r&&r(t):a(l)}()}(s,600,e)}r(new Error("Error: hash in URL is invalid or element not found!"))}))}function P(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=(0,b.Z)(t);if(e){var i=(0,b.Z)(this).constructor;r=Reflect.construct(o,arguments,i)}else r=o.apply(this,arguments);return(0,y.Z)(this,r)}}var z=function(t){(0,j.Z)(r,t);var e=P(r);function r(t){var o;return(0,f.Z)(this,r),(o=e.call(this,t)).linkClicked=o.linkClicked.bind((0,g.Z)(o)),o}return(0,u.Z)(r,[{key:"linkClicked",value:function(t){var e=this;t.preventDefault();var r=window.pageXOffset,o=window.pageYOffset,i=window.location,s=this.props.href;if(i.pathname===s.split("#")[0])return N.default.push(this.props.href),window.scrollTo(r,o),I(this.props.href);N.default.push(this.props.href).then((function(){return window.scrollTo(r,o),I(e.props.href)})).then((function(){e.props.done&&e.props.done()})).catch((function(t){e.props.onError&&e.props.onError(t),console.error(t)}))}},{key:"render",value:function(){var t=this.props.children;"string"===typeof t&&(t=(0,o.jsx)("a",{children:t}));var e=v.Children.only(t),r={onClick:this.linkClicked};return"a"!==e.type||"href"in e.props||(r.href=this.props.href),v.cloneElement(e,r)}}]),r}(v.Component);function C(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.default,{children:[(0,o.jsx)("title",{children:" Portfolio - Protoshark "}),(0,o.jsx)("link",{rel:"preload",href:"/portfolio/fonts/Epilogue/Epilogue.woff2",as:"font",crossOrigin:""}),(0,o.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width, user-scalable=no"}),(0,o.jsx)("meta",{property:"og:title",content:"Portfolio - Protoshark"},"title"),(0,o.jsx)("meta",{name:"description",content:"My personal portfolio webpage"}),(0,o.jsx)("meta",{property:"og:description",content:"My personal portfolio webpage"})]}),(0,o.jsxs)("main",{className:"content tw-text-gray-100",children:[(0,o.jsxs)("div",{className:"hero tw-relative tw-flex tw-flex-col tw-justify-center tw-bg-gradient-to-b tw-from-gray-900 tw-to-gray-800",children:[(0,o.jsx)("div",{className:"social tw-absolute tw-right-0 tw-top-0 tw-mt-8 tw-mr-6",children:(0,o.jsxs)("div",{className:"social-list tw-grid tw-gap-y-6 tw-grid-rows-2 tw-grid-cols-1",children:[(0,o.jsx)(s.default,{href:"https://github.com/protoshark",children:(0,o.jsxs)("div",{className:"has-tooltip tw-text-gray-400 tw-text-opacity-80 hover:tw-text-primary-400 tw-transition-colors",children:[(0,o.jsx)(n.uOf,{size:"1.4em"}),(0,o.jsx)(l,{position:"left",width:"4.4rem",children:"Github"})]})}),(0,o.jsx)(s.default,{href:"https://linkedin.com/in/vin%C3%ADcius-teles-b157b9171",children:(0,o.jsxs)("div",{className:"has-tooltip tw-text-gray-400 tw-text-opacity-80 hover:tw-text-primary-400 tw-transition-colors",children:[(0,o.jsx)(a.n7M,{size:"1.4em"}),(0,o.jsx)(l,{position:"left",width:"4.4rem",children:"LinkedIn"})]})}),(0,o.jsx)(s.default,{href:"https://protoshark.github.io/blog",children:(0,o.jsxs)("div",{className:"has-tooltip tw-text-gray-400 tw-text-opacity-80 hover:tw-text-primary-400 tw-transition-colors",children:[(0,o.jsx)(n.Nte,{size:"1.4em"}),(0,o.jsx)(l,{position:"left",width:"4.4rem",children:"My blog"})]})})]})}),(0,o.jsx)("div",{className:"streamline tw-absolute tw-border-primary-400 tw-border-r-2 tw-border-b-2 tw-right-0 tw-bottom-0 tw-mb-2 tw-mr-8"}),(0,o.jsx)("div",{className:"anchors tw-absolute tw-right-0 tw-bottom-0 tw-mr-80",children:(0,o.jsxs)("div",{className:"anchor-list tw-grid-flow-col tw-grid tw-gap-x-6",children:[(0,o.jsx)(z,{href:"/#about",children:(0,o.jsxs)("div",{className:"has-tooltip tw-text-gray-400 tw-text-opacity-80 hover:tw-text-primary-400 tw-transition-colors",children:[(0,o.jsx)(n.fzv,{size:"1.4em"}),(0,o.jsx)(l,{position:"left",width:"3.5rem",children:"About"})]})}),(0,o.jsx)(z,{href:"/#projects",children:(0,o.jsxs)("div",{className:"has-tooltip tw-text-gray-400 tw-text-opacity-80 hover:tw-text-primary-400 tw-transition-colors ",children:[(0,o.jsx)(n.xqv,{size:"1.4em"}),(0,o.jsx)(l,{position:"left",children:"Projects"})]})}),(0,o.jsx)(z,{href:"/#contact",children:(0,o.jsxs)("div",{className:"has-tooltip tw-text-gray-400 tw-text-opacity-80 hover:tw-text-primary-400 tw-transition-colors",children:[(0,o.jsx)(n.Imn,{size:"1.4em"}),(0,o.jsx)(l,{position:"left",children:"Contact"})]})})]})}),(0,o.jsxs)("section",{className:"hero-text tw-container md:tw-mx-auto tw-mb-18 tw-px-6 tw-pt-28 md:tw-px-12",children:[(0,o.jsxs)("h1",{className:"tw-text-4xl tw-mb-1 tw-font-extrabold",children:["Hey, I'm"," ",(0,o.jsx)("span",{className:" tw-text-primary-400",children:"Protoshark"})]}),(0,o.jsx)("p",{className:"tw-max-w-sm md:tw-max-w-xl tw-font-medium tw-text-lg tw-text-gray-200",children:"I love to create things to learn something new. I'm always trying my best to put the effective and the pleasant together in each of my projects!"})]})]}),(0,o.jsx)("div",{id:"about",className:"wrapper tw-my-16 tw-pt-10 tw-grid tw-place-items-start tw-mb-20",children:(0,o.jsxs)("div",{className:"about tw-w-4/5 md:tw-w-3/5 tw-flex tw-flex-col tw-py-11 tw-bg-gray-900 tw-px-10 tw-rounded-r-2xl tw-shadow-md",children:[(0,o.jsx)("h3",{className:"tw-font-extrabold tw-self-center tw-text-3xl tw-mb-4 tw-text-gray-100",children:"About me"}),(0,o.jsxs)("div",{className:"about-text tw-flex tw-flex-col tw-items-center md:tw-block",children:[(0,o.jsx)("div",{className:"about-pic tw-ring-1 tw-ring-gray-400 tw-relative tw-p-0 tw-w-32 tw-float-none md:tw-float-right tw-mx-4 tw-mb-6 md:tw-my-0 tw-rounded-2xl tw-overflow-hidden tw-shadow-lg",children:(0,o.jsx)("img",{className:"tw-scale-105 tw-transform",src:"https://avatars.githubusercontent.com/u/68879242?v=4",alt:"Profile picture"})}),(0,o.jsx)("p",{className:"lg:tw-mx-20 tw-text-base tw-text-gray-200",children:"Hello! I'm an in-progress self-taught CS student who loves to create things. I'm looking for a job experience as a web or backend developer, any invite is welcome! I love to learn new things such as compilers, emulators and improving my web development stack (currently focusing on React/Next and Node.js)."})]})]})}),(0,o.jsxs)("div",{className:"wrapper tw-w-full tw-flex tw-flex-col tw-items-center tw-min-h-full tw-mb-16 md:tw-mb-20",children:[(0,o.jsxs)("div",{id:"projects",className:"tw-bg-primary-500 tw-group projects tw-container md:tw-max-w-3xl lg:tw-max-w-6xl tw-py-4 tw-px-4 tw-pb-6 tw-rounded-xl tw-shadow-lg",children:[(0,o.jsx)("h2",{className:"section-title tw-ml-2 tw-mb-2 tw-font-extrabold tw-text-gray-900",children:"My Favorite Projects"}),(0,o.jsxs)("div",{className:"main-projects tw-grid tw-grid-flow-row tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-x-7 tw-gap-y-4",children:[(0,o.jsx)(x,{title:"PWDeck",description:"PWDeck (Password Deck) is a password manager with a CLI interface. You can create a deck (just a cool name for password vault) and manage your passwords in there.",badges:[d],footer_badges:[h("protoshark/pwdeck")]}),(0,o.jsx)(x,{title:"CHIP-8",description:"CHIP-8 is a emulator (formerly an interpreter) for the CHIP-8 language. It runs on web powered by rust's webassembly compilation. It can also run some games ported to CHIP-8, like Pong and Space Invaders.",badges:[c,d,p],footer_badges:[(t="https://protoshark.github.io/chip-8",{name:"website",icon:(0,o.jsx)(n.RsK,{size:"1.1em"}),tooltip:(0,o.jsx)(l,{width:"10em",position:"left",children:"Visit the website"}),link:t}),h("protoshark/chip8_old")]}),(0,o.jsx)(x,{title:"Rustyboy",description:"Rustyboy is a gameboy emulator written in rust that runs on your browser.",badges:[d,p,w],footer_badges:[h("protoshark/rustyboy")],wip:!0})]})]}),(0,o.jsx)("div",{className:"tw-relative  tw-flex tw-items-center tw-justify-center lg:tw-justify-start tw-col-span-1 md:tw-col-span-2 tw-py-8 md:tw-opacity-60  group-hover:tw-opacity-100 tw-transition-opacity",children:(0,o.jsx)(s.default,{href:"https://github.com/protoshark?tab=repositories",children:(0,o.jsx)("div",{className:"tw-rounded-md tw-ring-2  tw-px-3 tw-py-2 tw-ring-gray-100 tw-cursor-pointer tw-text-gray-100 tw-opacity-40 md:tw-opacity-40 hover:tw-opacity-90 tw-transition-opacity tw-flex tw-items-center card-description  tw-z-10",children:(0,o.jsx)("span",{className:" tw-font-medium tw-text-xl tw-text-center tw-mt-1",children:"other projects"})})})})]})]}),(0,o.jsx)("footer",{id:"footer",className:"tw-bg-gradient-to-bl tw-border-gray-700 tw-border-l-2 tw-border-r-2 tw-border-t-2 tw-border-solid tw-from-gray-900 tw-to-gray-800 tw-h-1/3 tw-rounded-t-3xl",children:(0,o.jsxs)("div",{className:"footer-content tw-relative tw-h-full tw-pt-10 tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-items-center  tw-text-gray-300",children:[(0,o.jsx)("div",{className:"center-footer tw-flex tw-items-center tw-justify-center md:tw-w-1/3",children:"Made with \u2764\ufe0f in Brazil"}),(0,o.jsx)("div",{className:"right-footer md:tw-w-1/3 contact-email tw-flex tw-flex-row tw-items-center tw-justify-center tw-transition-colors ",children:(0,o.jsxs)("div",{className:"footer-item tw-flex tw-flex-row tw-items-center tw-px-2 hover:tw-text-primary-300",children:[(0,o.jsx)("div",{className:"email-icon ",children:(0,o.jsx)(n.Imn,{})}),(0,o.jsx)("a",{id:"contact",href:"mailto:protoshark@protonmail.com",className:"email tw-ml-2",children:"protoshark@protonmail.com"})]})})]})})]});var t}},3685:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2027)}])}},function(t){t.O(0,[774,415,351,343],(function(){return e=3685,t(t.s=e);var e}));var e=t.O();_N_E=e}]);