(this.webpackJsonpanimation=this.webpackJsonpanimation||[]).push([[0],{30:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=(c(30),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,60)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))}),i=c(4),r=c.p+"static/media/center.83921eb9.png",l=c.p+"static/media/left.f705cd99.jpg",o=c.p+"static/media/right.706fdb0e.jpg",j=c(28),d=c(0),m=c(3),b=c(2);var h=function(){var e=Object(m.f)(),t=Object(a.useRef)(null),c=Object(a.useRef)(null),n=Object(a.useRef)(null),s=Object(a.useRef)(null),h=new d.d;Object(a.useEffect)((function(){j.a.to(t,0,{css:{visibility:"visible"}}),console.log("yes"),h.from(c,1.2,{x:12e3,ease:d.b.easeInOut}).from(c,2,{scale:1.6,ease:d.b.easeOut},1).from(n,1.2,{x:2200,ease:d.b.easeInOut},3).from(n,2,{scale:1.6,ease:d.b.easeOut},1).from(s,1.2,{x:3200,ease:d.b.easeInOut},4).from(s,2,{scale:1.6,ease:d.b.easeOut},1)}),[]);var u=Object(a.useState)("3"),O=Object(i.a)(u,2),x=O[0],f=O[1],g=Object(a.useState)("6"),p=Object(i.a)(g,2),v=p[0],N=p[1],_=Object(a.useState)("3"),S=Object(i.a)(_,2),w=S[0],k=S[1];return Object(b.jsx)("div",{className:"row g-0 no-gutters h-100 w-100",ref:function(e){return t=e},children:Object(b.jsx)("div",{className:"col-12 images ",children:Object(b.jsxs)("div",{className:" row g-0 no-gutters",children:[Object(b.jsx)("img",{src:l,className:"img col-md-"+x+" col-sm-8",ref:function(e){return c=e},onMouseEnter:function(){f("4"),N("6"),k("2")},onMouseLeave:function(){f("3"),N("6"),k("3")}}),Object(b.jsx)("img",{src:r,className:"img col-md-"+v+" col-sm-8",ref:function(e){return n=e},onMouseEnter:function(){f("2"),N("8"),k("2")},onMouseLeave:function(){f("3"),N("6"),k("3")},onClick:function(){e("/chart")}}),Object(b.jsx)("img",{src:o,className:"img2 col-md-"+w+" col-sm-8",ref:function(e){return s=e},onMouseEnter:function(){f("2"),N("6"),k("4")},onMouseLeave:function(){f("3"),N("6"),k("3")}})]})})})},u=c(23),O=c.n(u),x=(c(35),c(7)),f=function(){return Object(b.jsxs)("div",{className:"h-100 w-100  ",children:[Object(b.jsx)("div",{className:"navbox text-center mt-5",children:Object(b.jsx)("i",{className:"fa fa-filter fa-3x","aria-hidden":"true"})}),Object(b.jsx)("div",{className:"navbox  text-center mt-5",children:Object(b.jsxs)(x.b,{className:" link",to:"/chart",children:[" ",Object(b.jsx)("i",{className:"fa fa-bar-chart fa-3x","aria-hidden":"true"})]})}),Object(b.jsx)("div",{className:"navbox  text-center mt-5",children:Object(b.jsx)("i",{className:"fa fa-rss fa-3x","aria-hidden":"true"})})]})},g=c(24),p=c(14),v=c.n(p),N=function(e){var t=e.data,c=Object(a.useState)(""),n=Object(i.a)(c,2),s=n[0],r=n[1],l=Object(a.useState)(""),o=Object(i.a)(l,2),j=o[0],d=o[1],m=Object(a.useState)(""),h=Object(i.a)(m,2),u=h[0],O=h[1],x=Object(a.useState)(""),f=Object(i.a)(x,2),g=f[0],p=f[1],v=Object(a.useState)(""),N=Object(i.a)(v,2),_=N[0],S=N[1],w=Object(a.useState)(""),k=Object(i.a)(w,2),F=k[0],D=k[1],y=Object(a.useState)(""),C=Object(i.a)(y,2),U=C[0],E=C[1];Object(a.useEffect)((function(){console.log(t),T()}),[t]);var T=function(){if(null!=t.image&&r(t.image.large),null!=t.market_data){var e=t.market_data.current_price.inr,c=t.market_data.high_24h.inr,a=t.market_data.low_24h.inr;d("\u20b9"+(e<100?parseFloat(e).toFixed(4):e)),O(parseFloat(t.market_data.price_change_percentage_24h).toFixed(2)+"%"),D("24 hour high : \u20b9"+(c<100?parseFloat(c).toFixed(4):c)),E("24 hour low : \u20b9"+(a<100?parseFloat(a).toFixed(4):a)),p("7 day change : "+parseFloat(t.market_data.price_change_percentage_7d).toFixed(2)+"%"),S("30 day change : "+parseFloat(t.market_data.price_change_percentage_30d).toFixed(2)+"%")}};return Object(b.jsxs)("div",{className:"detail mt-3 mb-3 mr-3 ml-2 row",children:[Object(b.jsxs)("div",{className:"col-lg-4 conatiner  mt-2 text-center col-md-2 col-sm-1 ",children:[Object(b.jsx)("h1",{className:"h-25 detail-name",children:t.name}),Object(b.jsx)("div",{className:"d-flex h-25 justify-content-center",children:Object(b.jsx)("img",{src:s,className:"img-detail"})})]}),Object(b.jsxs)("div",{className:"col-lg-7 conatiner ml-5 mt-3 text-center h-100 col-md-1 col-sm-3",children:[Object(b.jsxs)("div",{className:"h-25 d-flex justify-content-between align-items-center ",children:[Object(b.jsx)("p",{className:"price",children:j}),Object(b.jsxs)("h1",{className:"change "+(parseFloat(u)>0?"success":"danger"),children:[" ",u]})]}),Object(b.jsxs)("div",{className:"row h-75 ",children:[Object(b.jsxs)("div",{className:"d-flex justify-content-between align-items-end h-50 w-100",children:[Object(b.jsx)("h5",{className:"",children:F}),Object(b.jsx)("h5",{className:"",children:g})]}),Object(b.jsxs)("div",{className:"h-75 d-flex justify-content-between align-items-start h-25 w-100",children:[Object(b.jsx)("h5",{className:"",children:U}),Object(b.jsx)("h5",{className:"",children:_})]})]})]})]})},_=c(12),S=c.n(_),w=c(27),k=c(25),F=c(26),D=c.n(F),y=[],C=["bitcoin","litecoin","ethereum","shiba-inu","dogecoin","matic-network","binancecoin","tether","solana","decentraland"];function U(){return(U=Object(k.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y=[],e.t0=S.a.keys(C);case 2:if((e.t1=e.t0()).done){e.next=8;break}return t=e.t1.value,e.next=6,D.a.get("https://api.coingecko.com/api/v3/coins/"+C[t]).then((function(e){y=[].concat(Object(w.a)(y),[e.data])})).catch((function(e){console.log(e)}));case 6:e.next=2;break;case 8:return console.log(y.length),e.abrupt("return",y);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(){return U.apply(this,arguments)},T=function(e){return Object(b.jsxs)("div",{className:"card  row  mt-2  ",onClick:e.onClick,children:[Object(b.jsx)("div",{className:"card-name text-left  h-100  d-flex align-content-center mt-3 ml-2",children:Object(b.jsx)("h4",{className:"",children:e.name})}),Object(b.jsx)("div",{className:"text-center   h-100 card-price mt-3",children:Object(b.jsx)("h5",{children:"\u20b9"+(parseFloat(e.price)<100?parseFloat(e.price).toFixed(4):e.price)})}),Object(b.jsx)("div",{className:"card-change  text-center h-100 mt-3 "+(parseFloat(e.change)>0?"text-success":"text-danger"),children:Object(b.jsxs)("h6",{children:[" ",parseFloat(e.change).toFixed(2)+"%"," "]})})]})},B={Bitcoin:"BTCUSD",Litecoin:"LTCUSD",Ethereum:"ETHUSD","Shiba Inu":"SHIBUSD",Dogecoin:"DOGEUSD",Polygon:"MATICUSD","Binance Coin":"BNBUSD",Tether:"USDTUSD",Solana:"SOLUSD",Decentraland:"MANAUSD"},M=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)("BTCUSD"),r=Object(i.a)(s,2),l=r[0],o=r[1],j=Object(a.useState)({}),d=Object(i.a)(j,2),m=d[0],h=d[1];return Object(a.useEffect)((function(){E().then((function(e){n(e),h(e[0])}))}),[]),Object(b.jsxs)("div",{className:" row w-100 h-100",children:[Object(b.jsx)("div",{className:"col-3 ml-4  mt-2 mr-3 w-100",children:c.map((function(e){return Object(b.jsx)(T,{className:"w-100",name:e.name,price:e.market_data.current_price.inr,change:e.market_data.price_change_percentage_24h,onClick:function(){h(e),o(B[e.name]),console.log(e)}})}))}),Object(b.jsxs)("div",{className:"col-8 right h-100 ",children:[Object(b.jsx)("div",{className:"chart mt-3 ",children:Object(b.jsx)(v.a,Object(g.a)({symbol:l,theme:p.Themes.DARK,locale:"in",interval:"H",autosize:"true",timezone:"Asia/Kolkata",container_id:"tradingview_22ae3",hide_side_toolbar:!1,allow_symbol_change:!0},"container_id","tradingview_0a70a"))}),Object(b.jsx)(N,{data:m})]})]})};O.a.render(Object(b.jsx)(x.a,{children:Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsxs)("div",{className:"row g-0 no-gutters",children:[Object(b.jsx)("div",{className:"col-md-11 col-sm-8 no-gutters",children:Object(b.jsxs)(m.c,{children:[Object(b.jsx)(m.a,{path:"/chart",element:Object(b.jsx)(M,{})}),Object(b.jsx)(m.a,{path:"/",element:Object(b.jsx)(h,{})}),Object(b.jsx)(m.a,{path:"*",element:Object(b.jsx)(h,{})})]})}),Object(b.jsx)("div",{className:"col-md-1 navbar d-none d-md-block d-xl",children:Object(b.jsx)(f,{})})]})})}),document.getElementById("root")),s()}},[[59,1,2]]]);
//# sourceMappingURL=main.e1116a7f.chunk.js.map