(()=>{"use strict";var e,n,t,r={349:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(601),o=t.n(r),a=t(314),l=t.n(a)()(o());l.push([e.id,".horizontal-menu {\n    background-color: #ffffff;\n    border-bottom: 2px solid #d89400;\n    padding: 10px 20px;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n  }\n  \n  .menu-item {\n    text-decoration: none;\n    color: #d89400;\n    font-weight: bold;\n    padding: 10px;\n    background: none; /* Ensures no background on button */\n    border: none; /* Removes default button border */\n    cursor: pointer; /* Consistent clickable feel */\n    font-size: 16px; /* Explicit font size for consistency */\n    line-height: 1; /* Matches Link line height */\n    display: inline-block; /* Ensures consistent layout */\n    font-family: Arial, sans-serif; /* Matches typical Link font */\n  }\n  \n  .menu-item:hover {\n    background-color: #e0f2e9;\n    border-radius: 5px;\n  }\n  \n  /* Dropdown styles */\n  .dropdown {\n    position: relative;\n    display: inline-block;\n  }\n  \n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #ffffff;\n    min-width: 200px;\n    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);\n    z-index: 1;\n    border-radius: 5px;\n    border: 1px solid #006633;\n  }\n  \n  .dropdown-content .dropdown-item {\n    text-decoration: none;\n    color: #006633;\n    padding: 10px 15px;\n    display: block;\n    font-weight: bold;\n    font-size: 16px; /* Matches menu-item */\n    font-family: Arial, sans-serif; /* Consistent font */\n  }\n  \n  .dropdown-content .dropdown-item:hover {\n    background-color: #e0f2e9;\n  }\n  \n  /* Show dropdown on hover */\n  .dropdown:hover .dropdown-content {\n    display: block;\n  }",""]);const i=l},398:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(601),o=t.n(r),a=t(314),l=t.n(a)()(o());l.push([e.id,".navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #006633; /* Sonatrach green (approximation) */\n    color: white;\n    padding: 10px 20px;\n  }\n  \n  .logo h2 {\n    margin: 0;\n    font-size: 24px;\n  }\n  \n  .notifications {\n    font-size: 16px;\n  }",""]);const i=l},399:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(601),o=t.n(r),a=t(314),l=t.n(a)()(o());l.push([e.id,"/* .app-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.navigation-bar {\n  background-color: #2c3e50;\n  color: white;\n  padding: 1rem;\n}\n\n.horizontal-menu {\n  margin: 1rem 0;\n}\n\n.tool-palette-search {\n  margin: 1rem 0;\n}\n\n.tool-palette-map {\n  background-color: #f5f5f5;\n  padding: 1rem;\n  border-radius: 4px;\n} */\n\n\n.App {\n  font-family: Arial, sans-serif;\n  background-color: #f4f4f4;\n  min-height: 100vh;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}",""]);const i=l},762:(e,n,t)=>{var r=t(540),o=t(338),a=t(175),l=t(72),i=t.n(l),s=t(825),c=t.n(s),d=t(659),m=t.n(d),u=t(56),p=t.n(u),f=t(159),g=t.n(f),b=t(113),h=t.n(b),v=t(398),E={};E.styleTagTransform=h(),E.setAttributes=p(),E.insert=m().bind(null,"head"),E.domAPI=c(),E.insertStyleElement=g(),i()(v.A,E),v.A&&v.A.locals&&v.A.locals;const y=function(){return r.createElement("div",{className:"navbar"},r.createElement("div",{className:"logo"},r.createElement("h2",null,"Sonatrach")," "),r.createElement("div",{className:"notifications"},r.createElement("span",null,"🔔 Notifications (3)")," "))};var N=t(349),x={};x.styleTagTransform=h(),x.setAttributes=p(),x.insert=m().bind(null,"head"),x.domAPI=c(),x.insertStyleElement=g(),i()(N.A,x),N.A&&N.A.locals&&N.A.locals;const w=function(){return r.createElement("div",{className:"horizontal-menu"},r.createElement(a.N_,{to:"/",className:"menu-item"},"Accueil"),r.createElement("div",{className:"dropdown"},r.createElement("button",{className:"menu-item"},"Périmètres"),r.createElement("div",{className:"dropdown-content"},r.createElement(a.N_,{to:"/perimeters",className:"dropdown-item"},"Planing sismique mensuel"),r.createElement(a.N_,{to:"/perimeters/sismique",className:"dropdown-item"},"Planing Forage mensuel"),r.createElement(a.N_,{to:"/perimeters/geologique",className:"dropdown-item"},"PMT"))),r.createElement(a.N_,{to:"/planning",className:"menu-item"},"Planning"),r.createElement("div",{className:"dropdown"},r.createElement("button",{className:"menu-item"},"Programmes"),r.createElement("div",{className:"dropdown-content"},r.createElement(a.N_,{to:"/programs",className:"dropdown-item"},"Programmes sismiques"),r.createElement(a.N_,{to:"/programs",className:"dropdown-item"},"Programmes puits"),r.createElement(a.N_,{to:"/programs",className:"dropdown-item"},"Programmes Etude G&G"),r.createElement(a.N_,{to:"/programs",className:"dropdown-item"},"Programmes Facturation Hydraulique"))),r.createElement(a.N_,{to:"/surfaces",className:"menu-item"},"Surfaces"),r.createElement(a.N_,{to:"/requests",className:"menu-item"},"Avenants & Demandes"))},A=r.lazy((()=>Promise.all([t.e(274),t.e(481),t.e(104)]).then(t.bind(t,104)))),k=function(){return r.createElement("div",{className:"home-container"},r.createElement("div",{className:"home-header"},r.createElement("h1",{className:"text-4xl font-bold mb-4"},"Bienvenue sur le Système de Suivi des Opérations"),r.createElement("p",{className:"text-xl text-gray-600 mb-8"},"Visualisation des activités pétrolières en Algérie")),r.createElement(r.Suspense,{fallback:r.createElement("div",null,"Loading map...")},r.createElement(A,null)))};function P(){return r.createElement("div",{className:"p-4"},r.createElement("h2",{className:"text-2xl font-bold mb-4"},"Périmètres"),r.createElement("div",{className:"bg-white rounded-lg shadow p-6"},r.createElement("p",{className:"text-gray-600"},"Contenu de la section Périmètres")))}var S=t(399),O={};O.styleTagTransform=h(),O.setAttributes=p(),O.insert=m().bind(null,"head"),O.domAPI=c(),O.insertStyleElement=g(),i()(S.A,O),S.A&&S.A.locals&&S.A.locals;const _=function(){return r.createElement(a.Kd,null,r.createElement("div",{className:"App"},r.createElement(y,null),r.createElement(w,null),r.createElement(a.BV,null,r.createElement(a.qh,{path:"/",element:r.createElement(k,null)}),r.createElement(a.qh,{path:"/perimeters",element:r.createElement(P,null)}))))};o.createRoot(document.getElementById("root")).render(r.createElement(r.StrictMode,null,r.createElement(_,null)))}},o={};function a(e){var n=o[e];if(void 0!==n)return n.exports;var t=o[e]={id:e,exports:{}};return r[e].call(t.exports,t,t.exports,a),t.exports}a.m=r,e=[],a.O=(n,t,r,o)=>{if(!t){var l=1/0;for(d=0;d<e.length;d++){for(var[t,r,o]=e[d],i=!0,s=0;s<t.length;s++)(!1&o||l>=o)&&Object.keys(a.O).every((e=>a.O[e](t[s])))?t.splice(s--,1):(i=!1,o<l&&(l=o));if(i){e.splice(d--,1);var c=r();void 0!==c&&(n=c)}}return n}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[t,r,o]},a.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return a.d(n,{a:n}),n},a.d=(e,n)=>{for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((n,t)=>(a.f[t](e,n),n)),[])),a.u=e=>e+"."+{104:"efdf07c09178fbed6508",274:"8d0863c4bab67c3db1a0",481:"09f25c1a05b5fbdcaac3"}[e]+".js",a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),n={},t="frontend:",a.l=(e,r,o,l)=>{if(n[e])n[e].push(r);else{var i,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var m=c[d];if(m.getAttribute("src")==e||m.getAttribute("data-webpack")==t+o){i=m;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+o),i.src=e),n[e]=[r];var u=(t,r)=>{i.onerror=i.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),s&&document.head.appendChild(i)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="/static/frontend/",(()=>{a.b=document.baseURI||self.location.href;var e={792:0};a.f.j=(n,t)=>{var r=a.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(((t,o)=>r=e[n]=[t,o]));t.push(r[2]=o);var l=a.p+a.u(n),i=new Error;a.l(l,(t=>{if(a.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;i.message="Loading chunk "+n+" failed.\n("+o+": "+l+")",i.name="ChunkLoadError",i.type=o,i.request=l,r[1](i)}}),"chunk-"+n,n)}},a.O.j=n=>0===e[n];var n=(n,t)=>{var r,o,[l,i,s]=t,c=0;if(l.some((n=>0!==e[n]))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(s)var d=s(a)}for(n&&n(t);c<l.length;c++)o=l[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},t=self.webpackChunkfrontend=self.webpackChunkfrontend||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),a.nc=void 0;var l=a.O(void 0,[164,247,175],(()=>a(762)));l=a.O(l)})();