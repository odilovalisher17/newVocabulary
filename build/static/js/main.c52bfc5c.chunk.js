(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{410:function(e,t,c){},413:function(e,t,c){},418:function(e,t,c){"use strict";c.r(t);var r=c(2),s=c.n(r),n=c(88),a=c.n(n),i=c(142),o=c(219),d=c(10),l=c(422),j=c(26),b=c(89),u=(c(224),c(419),c(420),c(33)),O=c(216),h=c(139);b.a.initializeApp({apiKey:"AIzaSyBYnpYXMg7q3rsTdFpF0VaeWKTCDA3YaQw",authDomain:"vocab-e7c56.firebaseapp.com",projectId:"vocab-e7c56",storageBucket:"vocab-e7c56.appspot.com",messagingSenderId:"397124374355",appId:"1:397124374355:web:0c5d27a73b98f86ecf1ba6",measurementId:"G-QVQ7RTYHKX"}),b.a.firestore();var f=Object(j.combineReducers)({firebase:u.firebaseReducer,firestore:h.firestoreReducer}),p=Object(j.createStore)(f,{},Object(j.compose)(Object(O.devToolsEnhancer)())),m=p,x={firebase:b.a,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:p.dispatch,createFirestoreInstance:h.createFirestoreInstance},v=c(51),g=c(41),N=c(424),S=c(421),F=c(423),C=(c(410),c(3)),w=Object(j.compose)(Object(u.firestoreConnect)([{collection:"client"},{collection:"details"}]),Object(v.b)((function(e,t){return{client:e.firestore.ordered.client,details:e.firestore.ordered.details}})))((function(e){var t=e.client,c=e.history,s=e.details,n=e.firestore,a=Object(r.useState)([0]),i=Object(g.a)(a,2),o=i[0],d=i[1],l=Object(r.useState)(""),j=Object(g.a)(l,2),b=j[0],u=j[1],O=Object(r.useState)(3),h=Object(g.a)(O,2),f=h[0],p=h[1],m=Object(r.useState)(0),x=Object(g.a)(m,2),v=x[0],w=x[1],I=Object(r.useState)(0),y=Object(g.a)(I,2),R=y[0],T=y[1],A=Object(r.useState)(0),Y=Object(g.a)(A,2),k=Y[0],L=Y[1];Object(r.useEffect)((function(){t&&(P(),setInterval((function(){L((function(e){return e+1}))}),1e3))}),[t]),console.log(k);var P=function(){for(var e=[],c=0;c<t.length;c++)e.push(c);for(var r=e.length-1;r>0;r--){var s=Math.floor(Math.random()*r),n=e[r];e[r]=e[s],e[s]=n}d(e)},Q=function(e,t){if(0!==b.length){if(e.toLowerCase()===b.trim().toLowerCase())w((function(e){return e+1}));else{var r="".concat(e," --- ").concat(t);if(alert(r),1===f)return n.update({collection:"details",doc:"details"},{score:v,time:k}),s[0].record<v?(c.push("/gameover"),void n.update({collection:"details",doc:"details"},{record:v})):void c.push("/gameover");p((function(e){return e-1}))}if(R>=o.length-1)return P(),T(0),void u("");T((function(e){return e+1})),u("")}else alert("You should write your answer")};return t&&s?Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"contain",children:[Object(C.jsxs)("div",{className:"head",children:[Object(C.jsxs)("h3",{children:["Record : ",s[0].record]}),Object(C.jsxs)("h4",{children:["Score : ",v]}),Object(C.jsxs)("h5",{children:["Life : ",f]})]}),Object(C.jsx)("p",{children:t[o[R]].Q}),void 0!==t[o[R]].Notes?t[o[R]].Notes.map((function(e){return Object(C.jsxs)("p",{style:{color:"orange"},children:["(",e,")"]})})):"",Object(C.jsxs)(F.a,{onSubmit:function(e){e.preventDefault(),Q(t[o[R]].A,t[o[R]].Q)},children:[Object(C.jsx)(F.a.Group,{controlId:"firstName",children:Object(C.jsx)(F.a.Control,{className:"answer-input",type:"text",placeholder:"Enter answer",value:b,onChange:function(e){return u(e.target.value.trim())}})}),Object(C.jsx)(N.a,{onClick:function(){return Q(t[o[R]].A)},children:" Submit "})]})]})}):Object(C.jsx)("div",{className:"contain",children:Object(C.jsx)(S.a,{animation:"border"})})})),I=(c(413),Object(j.compose)(Object(u.firestoreConnect)([{collection:"details"}]),Object(v.b)((function(e,t){return{details:e.firestore.ordered.details}})))((function(e){var t=e.history,c=e.details;return c?Object(C.jsxs)("div",{className:"game-over-container",children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("h2",{style:{color:"red"},children:"Game Over"}),Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{className:"stats",children:["Your score is ",Object(C.jsx)("span",{className:"statistics",children:c[0].score})]}),Object(C.jsxs)("div",{className:"stats",children:["Time per word ",Object(C.jsxs)("span",{className:"statistics",children:[0===c[0].score?c[0].time:(c[0].time/c[0].score).toFixed(2),"s"]})]}),Object(C.jsxs)("div",{className:"stats",children:["Record is ",Object(C.jsx)("span",{className:"statistics",children:c[0].record})]})]})]}),Object(C.jsx)(N.a,{className:"game-over-btn",onClick:function(){return t.push("/")},children:"Again"})]}):Object(C.jsx)("div",{className:"contain",children:Object(C.jsx)(S.a,{animation:"border"})})}))),y=function(){return Object(C.jsx)(v.a,{store:m,children:Object(C.jsx)(u.ReactReduxFirebaseProvider,Object(i.a)(Object(i.a)({},x),{},{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(l.a,{children:Object(C.jsxs)(d.c,{children:[Object(C.jsx)(d.a,{path:"/",exact:!0,component:w}),Object(C.jsx)(d.a,{path:"/gameover",exact:!0,component:I})]})})})}))})},R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,425)).then((function(t){var c=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),r(e),s(e),n(e),a(e)}))};c(417);a.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(y,{})}),document.getElementById("root")),R()}},[[418,1,2]]]);
//# sourceMappingURL=main.c52bfc5c.chunk.js.map