(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{415:function(e,t,c){},418:function(e,t,c){},422:function(e,t,c){},423:function(e,t,c){},425:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),a=c(91),s=c.n(a),i=c(148),o=c(93),j=c(10),l=c(430),d=c(24),u=c(94),b=(c(229),c(426),c(427),c(31)),O=c(221),h=c(144);u.a.initializeApp({apiKey:"AIzaSyBYnpYXMg7q3rsTdFpF0VaeWKTCDA3YaQw",authDomain:"vocab-e7c56.firebaseapp.com",projectId:"vocab-e7c56",storageBucket:"vocab-e7c56.appspot.com",messagingSenderId:"397124374355",appId:"1:397124374355:web:0c5d27a73b98f86ecf1ba6",measurementId:"G-QVQ7RTYHKX"}),u.a.firestore();var f=Object(d.combineReducers)({firebase:b.firebaseReducer,firestore:h.firestoreReducer}),m=Object(d.createStore)(f,{},Object(d.compose)(Object(O.devToolsEnhancer)())),x=m,v={firebase:u.a,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:m.dispatch,createFirestoreInstance:h.createFirestoreInstance},p=c(35),g=c(21),N=c(433),C=c(428),y=c(431),w=(c(415),c(3)),S=Object(d.compose)(Object(b.firestoreConnect)([{collection:"client"},{collection:"details"}]),Object(p.b)((function(e,t){return{client:e.firestore.ordered.client,details:e.firestore.ordered.details}})))((function(e){var t=e.client,c=e.history,r=e.details,a=e.firestore,s=Object(n.useState)([0]),i=Object(g.a)(s,2),o=i[0],j=i[1],l=Object(n.useState)(""),d=Object(g.a)(l,2),u=d[0],b=d[1],O=Object(n.useState)(3),h=Object(g.a)(O,2),f=h[0],m=h[1],x=Object(n.useState)(0),v=Object(g.a)(x,2),p=v[0],S=v[1],k=Object(n.useState)(0),A=Object(g.a)(k,2),F=A[0],I=A[1],Q=Object(n.useState)(0),T=Object(g.a)(Q,2),R=T[0],L=T[1];Object(n.useEffect)((function(){t&&(Y(),setInterval((function(){L((function(e){return e+1}))}),1e3))}),[t]);var Y=function(){for(var e=[],c=0;c<t.length;c++)e.push(c);for(var n=e.length-1;n>0;n--){var r=Math.floor(Math.random()*n),a=e[n];e[n]=e[r],e[r]=a}j(e)},E=function(e,t){if(0!==u.length){if(e.toLowerCase()===u.trim().toLowerCase())S((function(e){return e+1}));else{var n="".concat(e," --- ").concat(t);if(alert(n),1===f)return a.update({collection:"details",doc:"details"},{score:p,time:R}),r[0].record<p?(c.push("/gameover"),void a.update({collection:"details",doc:"details"},{record:p})):void c.push("/gameover");m((function(e){return e-1}))}if(F>=o.length-1)return Y(),I(0),void b("");I((function(e){return e+1})),b("")}else alert("You should write your answer")};return t&&r?Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"contain",children:[Object(w.jsxs)("div",{className:"head",children:[Object(w.jsxs)("h3",{children:["Record : ",r[0].record]}),Object(w.jsxs)("h4",{children:["Score : ",p]}),Object(w.jsxs)("h5",{children:["Life : ",f]})]}),Object(w.jsx)("p",{children:t[o[F]].Q}),void 0!==t[o[F]].Notes?t[o[F]].Notes.map((function(e){return Object(w.jsxs)("p",{style:{color:"orange"},children:["(",e,")"]})})):"",Object(w.jsxs)(y.a,{onSubmit:function(e){e.preventDefault(),E(t[o[F]].A,t[o[F]].Q)},children:[Object(w.jsx)(y.a.Group,{controlId:"firstName",children:Object(w.jsx)(y.a.Control,{className:"answer-input",autoComplete:"off",type:"text",placeholder:"Enter answer",value:u,onChange:function(e){return b(e.target.value.trim())}})}),Object(w.jsx)(N.a,{onClick:function(){return E(t[o[F]].A)},children:" Submit "})]})]})}):Object(w.jsx)("div",{className:"contain",children:Object(w.jsx)(C.a,{animation:"border"})})})),k=(c(418),Object(d.compose)(Object(b.firestoreConnect)([{collection:"details"}]),Object(p.b)((function(e,t){return{details:e.firestore.ordered.details}})))((function(e){var t=e.history,c=e.details;return c?Object(w.jsxs)("div",{className:"game-over-container",children:[Object(w.jsx)(o.b,{to:"/words",children:Object(w.jsx)(N.a,{children:"Add or Change words"})}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{style:{color:"red"},children:"Game Over"}),Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:"stats",children:["Your score is ",Object(w.jsx)("span",{className:"statistics",children:c[0].score})]}),Object(w.jsxs)("div",{className:"stats",children:["Time per word ",Object(w.jsxs)("span",{className:"statistics",children:[0===c[0].score?c[0].time:(c[0].time/c[0].score).toFixed(2),"s"]})]}),Object(w.jsxs)("div",{className:"stats",children:["Record is ",Object(w.jsx)("span",{className:"statistics",children:c[0].record})]})]})]}),Object(w.jsx)(N.a,{className:"game-over-btn",onClick:function(){return t.push("/")},children:"Again"})]}):Object(w.jsx)("div",{className:"contain",children:Object(w.jsx)(C.a,{animation:"border"})})}))),A=(c(422),c(147)),F=c(429),I=c(432),Q=(c(423),Object(d.compose)(Object(b.firestoreConnect)([{collection:"client"}]),Object(p.b)((function(e,t){return{client:e.firestore.ordered.client}})))((function(e){var t=e.client,c=e.firestore,r=Object(n.useState)(!1),a=Object(g.a)(r,2),s=a[0],i=a[1],o=Object(n.useState)([]),j=Object(g.a)(o,2),l=j[0],d=j[1],u=Object(n.useState)("(n)"),b=Object(g.a)(u,2),O=b[0],h=b[1],f=Object(n.useState)(""),m=Object(g.a)(f,2),x=m[0],v=m[1],p=Object(n.useState)(""),y=Object(g.a)(p,2),S=y[0],k=y[1],Q=Object(n.useState)([]),T=Object(g.a)(Q,2),R=T[0],L=T[1];Object(n.useEffect)((function(){t&&d(t)}),t);return t?Object(w.jsxs)("div",{className:"words-container",children:[Object(w.jsx)("input",{className:"search",type:"text",autoComplete:"off",autoSave:"off",placeholder:"searching word...",onChange:function(e){return function(e){var c=t.filter((function(t){return e.trim().toLowerCase()===t.A.trim().toLowerCase()}));d(e.trim().length>0?c:t)}(e.target.value)}}),Object(w.jsx)("div",{className:"tableFixHead",children:Object(w.jsxs)(F.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Question"}),Object(w.jsx)("th",{children:"Answer"}),Object(w.jsx)("th",{children:"Notes"})]})}),Object(w.jsx)("tbody",{className:"table-body",children:l.map((function(e){return Object(w.jsxs)("tr",{onClick:function(){return function(e){i(e.id),h(""),v(e.Q),k(e.A),L(e.Notes?e.Notes.map((function(e,t){return{num:t,value:e}})):[])}(e)},children:[Object(w.jsx)("td",{children:e.Q}),Object(w.jsx)("td",{children:e.A}),Object(w.jsx)("td",{children:void 0!==e.Notes?e.Notes.map((function(e){return Object(w.jsxs)("div",{children:[e," ",Object(w.jsx)("br",{})]})})):""})]})}))})]})}),Object(w.jsxs)("h5",{children:["Total number of words is ",t.length]}),Object(w.jsx)("div",{className:"word-form",children:Object(w.jsxs)(I.a,{variant:"flush",children:[Object(w.jsxs)(I.a.Item,{variant:"success",children:[Object(w.jsx)("h4",{children:"Word Form"}),Object(w.jsx)(N.a,{onClick:function(){i(!1),v(""),k(""),L([])},variant:"success",children:"New Word"})]}),Object(w.jsxs)(I.a.Item,{variant:"primary",children:["Type ",Object(w.jsx)("hr",{}),Object(w.jsxs)("div",{className:"type-radio",children:[Object(w.jsx)("input",{type:"radio",value:"(n)",name:"gender",defaultChecked:!0,onClick:function(e){return h(e.target.value)}})," Noun"]}),Object(w.jsxs)("div",{className:"type-radio",children:[Object(w.jsx)("input",{type:"radio",value:"(adj)",name:"gender",onClick:function(e){return h(e.target.value)}})," Adj"]}),Object(w.jsxs)("div",{className:"type-radio",children:[Object(w.jsx)("input",{type:"radio",value:"(v)",name:"gender",onClick:function(e){return h(e.target.value)}})," Verb"]}),Object(w.jsxs)("div",{className:"type-radio",children:[Object(w.jsx)("input",{type:"radio",value:"(adv)",name:"gender",onClick:function(e){return h(e.target.value)}})," Adv"]}),Object(w.jsxs)("div",{className:"type-radio",children:[Object(w.jsx)("input",{type:"radio",value:"",name:"gender",onClick:function(e){return h(e.target.value)}})," None"]})]}),Object(w.jsxs)(I.a.Item,{variant:"danger",children:["Question ",Object(w.jsx)("br",{}),Object(w.jsx)("input",{className:"question",type:"text",autoComplete:"off",autoFocus:!0,value:x,onChange:function(e){return v(e.target.value)}})]}),Object(w.jsxs)(I.a.Item,{variant:"warning",children:["Answer ",Object(w.jsx)("br",{}),Object(w.jsx)("input",{className:"answer",type:"text",autoComplete:"off",value:S,onChange:function(e){return k(e.target.value)}})]}),Object(w.jsxs)(I.a.Item,{variant:"dark",children:["Notes ",Object(w.jsx)("br",{}),R.map((function(e){return Object(w.jsx)("div",{children:Object(w.jsx)("input",{className:"note",type:"text",autoComplete:"off",value:e.value,onChange:function(t){var c=Object(A.a)(R);c.splice(e.num,1,{num:e.num,value:t.target.value}),L(c)}})})})),Object(w.jsx)(N.a,{onClick:function(){L([].concat(Object(A.a)(R),[{num:R.length,value:""}]))},size:"sm",children:"Add note"})]}),Object(w.jsx)(N.a,{variant:"success",onClick:function(){if(0!==x.trim().length&&0!==S.trim().length){var e={Q:"".concat(x.trim()+" "+O),A:S,Notes:R.filter((function(e){return e.value.trim().length>0})).map((function(e){return e.value}))};if(!s)return c.add({collection:"client"},e),v(""),k(""),void L([]);s&&(c.update({collection:"client",doc:s},e),v(""),k(""),L([]),i(!1))}else alert("Write question and answer")},children:"Save"})]})})]}):Object(w.jsx)("div",{className:"contain",children:Object(w.jsx)(C.a,{animation:"border"})})}))),T=function(){return Object(w.jsx)(p.a,{store:x,children:Object(w.jsx)(b.ReactReduxFirebaseProvider,Object(i.a)(Object(i.a)({},v),{},{children:Object(w.jsx)(o.a,{children:Object(w.jsx)(l.a,{children:Object(w.jsxs)(j.c,{children:[Object(w.jsx)(j.a,{path:"/",exact:!0,component:S}),Object(w.jsx)(j.a,{path:"/gameover",exact:!0,component:k}),Object(w.jsx)(j.a,{path:"/words",exact:!0,component:Q})]})})})}))})},R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,434)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};c(424);s.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(T,{})}),document.getElementById("root")),R()}},[[425,1,2]]]);
//# sourceMappingURL=main.7dd71edc.chunk.js.map