import{b as e,r as s,A as p,j as t,L as h,F as c}from"./index.1bf1d8be.js";const d=()=>e("div",{children:e("svg",{className:"h-6 w-6 shrink-0",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})}),u=()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"420",height:"376",children:e("path",{fill:"none",stroke:"#474741",d:"m370 238-41 59h82l-41-59zM42 238 1 297h82l-41-59zM206 1l-41 59h82L206 1zM165 60l-41 59h82l-41-59zM247 60l-41 59h82l-41-59zM124 119l-41 59h82l-41-59zM206 119l-41 59h82l-41-59zM288 119l-41 59h82l-41-59zM329 178l-41 59h82l-41-59zM288 238l-41 59h82l-41-59zM83 178l-41 59h82l-41-59zM165 178l-41 59h82l-41-59zM247 178l-41 59h82l-41-59zM124 238l-41 59h82l-41-59zM206 238l-41 59h82l-41-59z"})});var g="/assets/diamond.39f32435.png";const f=()=>{const r=s.exports.useRef(null);s.exports.useEffect(()=>{p.init()},[]);const a=()=>{document.getElementById("getStarted").scrollIntoView({behavior:"smooth",block:"end"})};function l(n){r.current.querySelectorAll(".plx").forEach(o=>{const i=o.getAttribute("value"),m=(window.innerWidth-n.pageX*i)/90,x=(window.innerHeight-n.pageY*i)/90;o.style.transform=`translate3d(${m}px, ${x}px, 0)`})}return e("section",{children:e("div",{className:"bg-mainBg select-none",onMouseMove:l,ref:r,style:{willChange:"transform"},children:t("div",{className:"container relative flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32",children:[e("h1",{className:"text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl z-10 text-textBg font-rubik leading-none xl:max-w-3xl","data-aos":"fade-up","data-aos-duration":"500",children:"Explore the World of Cryptocurrencies"}),e("p",{className:"mt-6 mb-8 z-10 font-raj text-slate-300 text-lg  sm:mb-12 xl:max-w-3xl","data-aos":"fade-up","data-aos-duration":"1000",children:"View cryptocurrency statuses, add them to your cart, proceed to checkout, and sign in or register to get started."}),e("div",{className:"flex flex-wrap justify-center",children:e("button",{type:"button",onClick:a,className:"flex mx-auto z-10 mt-12 py-1 px-4 font-raj  mb-10 font-semibold text-lg text-slate-300 border-2 border-btnBorder rounded-xl hover:border-btnHover shadow-btnHover shadow-3xl focus:outline-btnHover ","data-aos":"fade-up","data-aos-duration":"1000",children:"Get started"})}),e("div",{className:"absolute top-16 plx -left-80 md:-left-24 lg:left-20  bg-blend-color-burn",value:"1",children:e(u,{})}),e("div",{className:"absolute w-[500px] -right-80 md:-right-24 lg:right-40 top-40",children:e("img",{src:g,value:"-1",className:"plx",alt:""})}),e("div",{className:"absolute w-[500px] h-[500px] -left-[450px] sm:-left-96 top-10 gradient-bg-ball rounded-full blur-3xl animate-blob animation-delay-2000 opacity-30"}),e("div",{className:"absolute w-[200px] h-[200px] -left-[500px] sm:-left-48 top-48 gradient-bg-ball rounded-full blur-3xl animation-delay-2000 animate-blob"}),e("div",{className:"absolute w-[500px] h-[500px] -right-[450px] sm:-right-96 top-72 gradient-bg-ball1 rounded-full blur-3xl opacity-30 animate-blob"}),e("div",{className:"absolute w-[200px] h-[200px] -right-[500px] sm:-right-56 top-[450px] gradient-bg-ball1 rounded-full blur-3xl animate-blob"})]})})})};function b(){return e("section",{children:t("div",{className:"relative py-16 bg-mainBg",children:[t("h2",{className:"mx-auto max-w-md pt-6 mb-6 font-rubik text-center font-extrabold tracking-wide text-3xl text-gray-300 sm:text-4xl sm:leading-none xl:max-w-lg","data-aos":"fade-in",children:["Crypto",e("span",{className:"inline-block text-logo-gradient",children:"Services."})]}),t("div",{className:"relative container m-auto pt-2 lg:pt-10 px-6 text-slate-400 md:px-12",children:[e("div",{className:"grid lg:grid-cols-3 gap-6 md:w-8/12 md:mx-auto lg:w-full","data-aos":"fade-up","data-aos-duration":"1000",children:[{title:"View Cryptocurrency Status",img:"bg-buytoken",link:"/crypto",description:"Check the status of various cryptocurrencies offered by Cryptoace. Stay updated with the latest market information."},{title:"Buy NFT",img:"bg-lottery",link:"/nfts",description:"Discover and purchase unique NFTs from Cryptoace's collection. Own digital assets like never before."},{title:"View Portfolio",img:"bg-sendEther",link:"/portfolio",description:"Complete your cryptocurrency transactions seamlessly with our secure and user-friendly checkout process."}].map((a,l)=>e(s.exports.Fragment,{children:t("div",{className:`group ${a.img} relative z-10 bg-slateBg bg-opacity-50 rounded-xl shadow-xl px-4 sm:px-8 py-6 sm:py-12 space-y-6 text-center bg-blend-color`,children:[e("h3",{className:"text-2xl font-semibold text-textBg",children:a.title}),e("p",{children:a.description}),e(h,{to:a.link,className:"relative isolate flex justify-center items-center h-10 w-10 mx-auto \r before:absolute before:border-btnHover before:inset-0 before:border before:rounded-full before:transition before:duration-300 group-hover:before:scale-125 group-hover:before:border-btnBorder",style:{pointerEvents:"auto"},children:e("span",{className:"text-slate-300 text-lg",children:"\u2192"})})]})},l))}),e("div",{className:"absolute w-[250px] h-[250px] -right-[1px] sm:-right-1 lg:top-1 md:top-[500px] sm:top-96  gradient-bg-ball rounded-full blur-3xl animate-blob animation-delay-2000 opacity-20 sm:opacity-30"}),e("div",{className:"absolute w-[250px] h-[250px] -left-[1px] sm:-left-[40px] top-16 gradient-bg-ball1 rounded-full blur-3xl opacity-20 sm:opacity-30 animate-blob"})]})]})})}var w="/assets/wallet.d3772d43.png",y="/assets/secure.08c87e34.png",v="/assets/wifi.4a9d95c4.png",N="/assets/link.3e27ad97.png",k="/assets/nft.d2c90dbb.png";function M(){return t("section",{className:"bg-mainBg text-gray-300",id:"getStarted",children:[e("div",{className:"px-4 py-10 mx-auto font-rubik sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20",children:t("div",{className:"w-full grid grid-cols-1 sm:grid-cols-2  mb-4",children:[t("div",{className:"pt-2 lg:pt-7","data-aos":"fade-right","data-aos-duration":"1000",children:[t("h2",{className:"font-rubik text-center sm:inline-block pb-3 font-extrabold tracking-wide text-3xl sm:text-4xl mt-4 sm:mt-7 text-gray-300 sm:leading-none",children:["Safe ",e("span",{className:"text-logo-gradient",children:"& "}),"Secured"]}),t("p",{className:"font-raj text-center lg:text-left tracking-wider pt-2",children:["Every transaction made from CoinInfo is safe and secured. You can also track any of your transactions on the metamask wallet and also on ehterscan.",e("span",{className:"hidden lg:block",children:"All the transactions on CoinInfo works transparently and hence follows the web3 rules."})]})]}),e("div",{className:"flex justify-center lg:justify-end","data-aos":"fade-left","data-aos-duration":"1000",children:e("div",{children:e("img",{src:y,className:"w-28 h-28 sm:w-60 sm:h-60 secure-shadow",alt:"Security"})})})]})}),t("h2",{className:"mx-auto max-w-md pt-10 lg:mb-10 font-rubik text-center font-extrabold tracking-wide text-3xl text-gray-300 sm:text-4xl sm:leading-none xl:max-w-lg","data-aos":"fade-in",children:["Get"," ",e("span",{className:"inline-block text-logo-gradient","data-aos":"fade-in",children:"Started."})]}),e("div",{className:"container px-5 py-10 mx-auto",children:[{title:"Connect your metamask wallet.",description:"Login to your metamask wallet connect to Cryptoace.",url:"https://metamask.io/faqs/",img:w},{title:"Switch to ropsten test network.",description:"Not a commercial web3 project hence contracts are deployed on ropsten test network.",url:"http://www.herongyang.com/Ethereum/MetaMask-Extension-Add-Ropsten-Test-Network.html",img:v},{title:"Buy NFT",description:"Explore and purchase unique NFTs from Cryptoace's collection. Own digital assets like never before.",url:"https://opensea.io/",img:k},{title:"Connect your account.",description:"Connect any of your account by clicking on connect button on metamask wallet.",url:"https://archenetwork.medium.com/how-to-use-ropsten-with-metamask-and-connect-with-arche-v1-1-eros-48be365b4e04/",img:N}].map((a,l)=>e(s.exports.Fragment,{children:t("div",{className:l%2===0?"flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col":"flex items-center lg:w-3/5 mx-auto border-b pb-5 mb-5 sm:pb-10 sm:mb-10 border-gray-700 sm:flex-row flex-col",children:[" ",l%2===0?t(c,{children:[e("div",{className:"sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0",children:e("img",{src:a.img,alt:"","data-aos":"fade-right","data-aos-duration":"1000"})}),t("div",{className:"flex-grow sm:text-left text-center mt-1 sm:mt-0","data-aos":"fade-right","data-aos-duration":"1000",children:[e("h2",{className:"text-slate-200 text-lg font-semibold sm:mb-2",children:a.title}),e("p",{className:"hidden sm:block text-base",children:a.description}),t("a",{target:"_blank",href:a.url,className:"sm:mt-3 inline-flex items-center font-medium group text-[#a75bff] select-none cursor-pointer",children:["Learn More"," ",e("div",{className:"-rotate-90 text-btnBorder transition ease-in delay-75 group-hover:translate-x-1 group-hover:scale-110",children:e(d,{})})]})]})]}):t(c,{children:[t("div",{className:"flex-grow sm:text-left text-center mt-1 sm:mt-0","data-aos":"fade-left","data-aos-duration":"1000",children:[e("h2",{className:"text-slate-200 text-lg font-semibold sm:mb-2",children:a.title}),e("p",{className:"hidden sm:block text-base",children:a.description}),t("a",{target:"_blank",href:a.url,className:"sm:mt-3 inline-flex items-center font-medium group text-[#a75bff] select-none cursor-pointer",children:["Learn More"," ",e("div",{className:"-rotate-90 text-btnBorder transition ease-in delay-75 group-hover:translate-x-1 group-hover:scale-110",children:e(d,{})})]})]}),e("div",{className:"sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center flex-shrink-0",children:e("img",{src:a.img,alt:"","data-aos":"fade-left","data-aos-duration":"1000"})})]})]})},l))})]})}const B=()=>t("div",{className:"",children:[e(f,{}),e(M,{}),e(b,{})]});export{B as default};
