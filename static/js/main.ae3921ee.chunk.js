(this["webpackJsonprecipe-finder"]=this["webpackJsonprecipe-finder"]||[]).push([[0],{53:function(e,n,t){},72:function(e,n,t){},79:function(e,n,t){"use strict";t.r(n);var c,i,r,a,s,o,d,j,l,p,x,b,h,O,u=t(0),f=t.n(u),g=t(11),m=t.n(g),w=(t(53),t(28)),v=t.n(w),y=t(42),F=t(26),k=t(4),z=t(5),C=t(43),S=t.n(C),I=(t(72),z.a.div(c||(c=Object(k.a)(["\ncolor: white;\nbackground-color: #2C3539;\ndisplay: flex;\nflex-direction: row;\njustify-content: space-between;\nalign-items: center;\npadding: 20px;\nfont-size: 25px;\nfont-weight: bold;\nbox-shadow: 0 3px 6px 0 grey;\n"])))),E=z.a.div(i||(i=Object(k.a)(["\nalign-items: center;\ndisplay: flex;\n"]))),R=z.a.img(r||(r=Object(k.a)(["\nheight: 44px;\nwidth: 44px;\nmargin: 15px;\n"]))),T=z.a.img(a||(a=Object(k.a)(["\nheight: 34px;\nwidth: 34px;\n"]))),J=z.a.div(s||(s=Object(k.a)(["\ndisplay: flex;\nflex-direction: row;\nbackground-color: white;\npadding: 10px;\nborder-radius: 6px;\nwidth: 40%;\n"]))),N=z.a.input(o||(o=Object(k.a)(["\nborder: none;\noutline: none;\nmargin-left: 15px;\nfont-size: 16px;\nfont-weight: bold;\n"]))),_=z.a.div(d||(d=Object(k.a)(["\ndisplay: flex;\ngap: 20px;\nflex-direction: row;\njustify-content: space-evenly;\npadding: 30px;\nflex-wrap: wrap;\n"]))),q=z.a.div(j||(j=Object(k.a)(["\ndisplay: flex;\nflex-direction: column;\npadding: 10px;\nwidth: 300px;\nbox-shadow: 0 3px 10px 0 #aaa;\n\n"]))),B=z.a.img(l||(l=Object(k.a)(["\nheight: 220px;\nobject-fit: cover;\n"]))),D=z.a.span(p||(p=Object(k.a)(["\nfont-size: 18px;\nfont-weight: bold;\n\nmargin: 10px 0;\n"]))),G=z.a.span(x||(x=Object(k.a)(["\nfont-size: 18px;\nborder: solid 1px #1589FF;\nmargin: 10px 0;\ncolor: #1589FF;\npadding: 10px 15px;\ncursor: pointer;\nborder-radius: 4px;\ntext-align: center;\nmargin-bottom: 10px;\n"]))),M=Object(z.a)(G)(b||(b=Object(k.a)(["\ncolor: #FF6347;\nborder: solid 1px #FF6347;\n"]))),A=t(107),H=t(106),K=t(104),L=t(105),P=t(3),Q=z.a.div(h||(h=Object(k.a)(["\ndisplay: flex;\nflex-direction: column;\n"]))),U=z.a.img(O||(O=Object(k.a)(["\nopacity: 50%;\nwidth: 500px;\nheight:500px;\nmargin: 180px;\n"]))),V=function(e){var n=Object(u.useState)(!1),t=Object(F.a)(n,2),c=t[0],i=t[1],r=e.recipeObj;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(H.a,{open:c,children:[Object(P.jsx)(A.a,{id:"alert-dialog-slide-title",children:"INGREDIENTS"}),Object(P.jsx)(K.a,{children:Object(P.jsxs)("table",{children:[Object(P.jsxs)("thead",{children:[Object(P.jsx)("th",{children:"Ingredients"}),Object(P.jsx)("th",{children:"weight"})]}),Object(P.jsx)("tbody",{children:r.ingredients.map((function(e){return Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{children:e.text}),Object(P.jsx)("td",{children:e.weight})]})}))})]})}),Object(P.jsxs)(L.a,{children:[Object(P.jsx)(M,{onClick:function(){return window.open(r.url)},children:"See Full Recipe"}),Object(P.jsx)(G,{onClick:function(){return i(!1)},children:"Close"})]})]}),Object(P.jsxs)(q,{children:[Object(P.jsx)(B,{src:r.image}),Object(P.jsx)(D,{children:r.label}),Object(P.jsx)(G,{onClick:function(){return i(!0)},children:"ingredients"}),Object(P.jsx)(M,{onClick:function(){return window.open(r.url)},children:"see more"})]})]})};var W=function(){var e=Object(u.useState)(),n=Object(F.a)(e,2),t=n[0],c=n[1],i=Object(u.useState)([]),r=Object(F.a)(i,2),a=r[0],s=r[1],o=function(){var e=Object(y.a)(v.a.mark((function e(n){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("https://api.edamam.com/search?q=".concat(n,"&app_id=").concat("d34f62ab","&app_key=").concat("1b721e3454c604ad3f9e7754161f680f"));case 2:t=e.sent,s(t.data.hits);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(P.jsxs)(Q,{children:[Object(P.jsxs)(I,{children:[Object(P.jsxs)(E,{children:[Object(P.jsx)(R,{src:"/pizza.svg",alt:"img1"}),"Recipe Finder"]}),Object(P.jsxs)(J,{children:[Object(P.jsx)(T,{src:"/search-icon.svg",alt:" img"}),Object(P.jsx)(N,{placeholder:"search recipe",onChange:function(e){clearTimeout(t);var n=setTimeout((function(){return o(e.target.value)}),1e3);c(n)}})]})]}),Object(P.jsx)(_,{children:a.length?a.map((function(e){return Object(P.jsx)(V,{recipeObj:e.recipe})})):Object(P.jsx)(U,{src:"/pizza.svg"})})]})};m.a.render(Object(P.jsx)(f.a.StrictMode,{children:Object(P.jsx)(W,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.ae3921ee.chunk.js.map