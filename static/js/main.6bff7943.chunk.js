(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(5),i=n.n(o),c=(n(12),n(6)),l=n(2),u={background:"lightblue",border:"2px solid pink",fontSize:"30px",fontWeight:"800",cursor:"pointer",outline:"none"},s=function(e){var t=e.value,n=e.onClick;return a.a.createElement("button",{style:u,onClick:n},t)},d={border:"4px solid pink",borderRadius:"10px",width:"250px",height:"250px",margin:"0 auto",display:"grid",gridTemplate:"repeat(3, 1fr) / repeat(3, 1fr)"},f=function(e){var t=e.squares,n=e.onClick;return a.a.createElement("div",{style:d},t.map((function(e,t){return a.a.createElement(s,{key:t,value:e,onClick:function(){return n(t)}})})))};var m={width:"200px",margin:"20px auto"},p=function(){var e=Object(r.useState)(Array(9).fill(null)),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(!0),u=Object(l.a)(i,2),s=u[0],d=u[1],p=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(l.a)(t[n],3),a=r[0],o=r[1],i=r[2];if(e[a]&&e[a]===e[o]&&e[a]===e[i])return e[a]}return null}(n);return a.a.createElement("div",{style:m},a.a.createElement(f,{squares:n,onClick:function(e){var t=Object(c.a)(n);p||t[e]||(t[e]=s?"X":"O",o(t),d(!s))}}),a.a.createElement("br",null),a.a.createElement("div",null," ",a.a.createElement("button",{onClick:function(){return o(Array(9).fill(null))}},"Restart Game")))},h=(n(13),function(){return a.a.createElement(p,null)});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.6bff7943.chunk.js.map