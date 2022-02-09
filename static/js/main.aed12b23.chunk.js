(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{32:function(n,e,t){n.exports={App:"App_App__5SLWW"}},38:function(n,e,t){},80:function(n,e,t){"use strict";t.r(e);var a,i,r,o,c,p,d,s,b,l,u,x=t(0),g=t.n(x),j=t(11),f=t.n(j),h=(t(38),t(39),t(40),t(7)),m=t(6),O=t(14),v=t(33),w=t(3),y=t(4),k=y.a.form(a||(a=Object(w.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),S=y.a.button(i||(i=Object(w.a)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),L=y.a.input(r||(r=Object(w.a)(["\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n"]))),U=(y.a.label(o||(o=Object(w.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),t(1)),z=function(n){var e=n.onSubmit,t=Object(x.useState)(""),a=Object(m.a)(t,2),i=a[0],r=a[1];return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(k,{onSubmit:function(n){if(n.preventDefault(),""===i.trim())return O.b.warn("\ud83e\udd84 Enter valid query!");e(i),r("")},children:[Object(U.jsx)(S,{type:"submit",children:Object(U.jsx)(v.a,{style:{marginTop:4,width:25,height:25}})}),Object(U.jsx)(L,{type:"text",name:"searchQuery",autocomplete:"off",placeholder:"Search images and photos",value:i,onChange:function(n){r(n.currentTarget.value)}})]})})},C=y.a.div(c||(c=Object(w.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),R=function(n){var e=n.onSubmit;return Object(U.jsx)(C,{children:Object(U.jsx)(z,{onSubmit:e})})},I=y.a.img(p||(p=Object(w.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),E=function(n){var e=n.imageSrc,t=n.onModalOpen,a=n.largeImageUrl,i=n.description;return Object(U.jsx)(I,{src:e,alt:i,onClick:function(){return t(a,i)}})},M=y.a.ul(d||(d=Object(w.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 24;\n  margin-bottom: 24;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),_=y.a.li(s||(s=Object(w.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),A=function(n){var e=n.data,t=n.onModalOpen;return Object(U.jsx)(M,{children:e.map((function(n){return Object(U.jsx)(_,{children:Object(U.jsx)(E,{description:n.tags,imageSrc:n.webformatURL,onModalOpen:t,largeImageUrl:n.largeImageURL})},n.id)}))})},T=t(31),q=t.n(T),F=function(){return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(q.a,{className:"loader",type:"Bars",color:"orange",height:100,width:100})})},B=t(2),J=t.n(B),N=y.a.button(b||(b=Object(w.a)(["\n  display: block;\n  min-width: 180px;\n  padding: 8px 16px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 10px;\n\n  font-family: inherit;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  border: 0;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  &:focus,\n  &:hover {\n    background-color: #303f9f;\n  }\n"]))),W=function(n){var e=n.onClick;return Object(U.jsx)(N,{type:"button",onClick:e,children:"Load more"})};N.propTypes={onClick:J.a.func.isRequired};var D=y.a.div(l||(l=Object(w.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),P=y.a.div(u||(u=Object(w.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),Q=function(n){var e=n.description,t=n.largeImageUrl,a=n.onModalClose;Object(x.useEffect)((function(){var n=function(n){"Escape"===n.code&&a()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[a]);return Object(U.jsx)(D,{onClick:function(n){n.target===n.currentTarget&&a()},children:Object(U.jsx)(P,{children:Object(U.jsx)("img",{src:t,alt:e})})})},G=t(17),H=t.n(G);H.a.defaults.baseURL="https://pixabay.com/api/";var K=function(n,e){var t=new URLSearchParams({key:"23677415-8b63517f25821789cc6d2523e",q:n,page:e,per_page:12,orientation:"horizontal",image_type:"photo"});return H.a.get("?".concat(t)).then((function(n){return n.data.hits.map((function(n){return{id:n.id,webformatURL:n.webformatURL,largeImageURL:n.largeImageURL,tags:n.tags}}))}))},V=t(32),X=t.n(V),Y=function(){var n=Object(x.useState)(""),e=Object(m.a)(n,2),t=e[0],a=e[1],i=Object(x.useState)([]),r=Object(m.a)(i,2),o=r[0],c=r[1],p=Object(x.useState)(1),d=Object(m.a)(p,2),s=d[0],b=d[1],l=Object(x.useState)(!1),u=Object(m.a)(l,2),g=u[0],j=u[1],f=Object(x.useState)(""),v=Object(m.a)(f,2),w=v[0],y=v[1],k=Object(x.useState)(""),S=Object(m.a)(k,2),L=S[0],z=S[1],C=Object(x.useState)("idle"),I=Object(m.a)(C,2),E=I[0],M=I[1];Object(x.useEffect)((function(){t&&(M("pending"),K(t,s).then((function(n){return n.length<12?(c((function(e){return[].concat(Object(h.a)(e),Object(h.a)(n))})),void M("rejected")):s>1?(c((function(e){return[].concat(Object(h.a)(e),Object(h.a)(n))})),void M("resolved")):(c(Object(h.a)(n)),void M("resolved"))})).catch((function(n){console.log(n),M("rejected")})))}),[s,t]);return Object(U.jsxs)("div",{className:X.a.App,children:[Object(U.jsx)(R,{onSubmit:function(n){a(n),b(1)}}),o.length>0&&Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(A,{data:o,onModalOpen:function(n,e){j(!0),y(n),z(e)}}),"pending"!==E&&"rejected"!==E&&Object(U.jsx)(W,{onClick:function(){b((function(n){return n+1}))}})]}),"pending"===E&&Object(U.jsx)(F,{}),g&&Object(U.jsx)(Q,{largeImageUrl:w,description:L,onModalClose:function(){return j(!1)}}),Object(U.jsx)(O.a,{position:"top-center"})]})};f.a.render(Object(U.jsx)(g.a.StrictMode,{children:Object(U.jsx)(Y,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.aed12b23.chunk.js.map