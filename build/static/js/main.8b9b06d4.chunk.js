(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),o=t(15),a=t.n(o),u=t(6),i=t(3),d=t(16),s=t(0),l=function(e){var n=e.inputVal,t=e.handler;return Object(s.jsxs)(s.Fragment,{children:["filter results containing: ",Object(s.jsx)("input",{value:n,onChange:t})]})},b=function(e){var n=e.name,t=e.number,r=e.submitHandler;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("form",{children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{value:n.value,onChange:n.handler})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{value:t.value,onChange:t.handler})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",onClick:r,children:"add"})})]})})},j=function(e){var n=e.name,t=e.number,r=e.handler;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("p",{children:[n," ",t]}),Object(s.jsx)("button",{onClick:r,children:"delete"})]})},h=function(e){var n=e.show,t=e.delHandler;return Object(s.jsx)(s.Fragment,{children:n.map((function(e){var n=e.name,r=e.number,c=e.id;return Object(s.jsx)(j,{name:n,number:r,handler:function(){return t(c)}},n)}))})},f=function(e){var n=e.message,t=e.error;return n?Object(s.jsx)("div",{style:t?{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:n}):null},m=t(4),O=t.n(m),p="/api/persons",g={getAll:function(){return O.a.get(p).then((function(e){return e.data}))},addPerson:function(e){return O.a.post(p,e).then((function(e){return e.data}))},deletePerson:function(e){return O.a.delete("".concat(p,"/").concat(e)).then((function(e){return e}))},updateNumber:function(e,n){return O.a.put("".concat(p,"/").concat(e),n).then((function(e){return e.data}))}},v=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(""),a=Object(i.a)(o,2),j=a[0],m=a[1],O=Object(r.useState)(""),p=Object(i.a)(O,2),v=p[0],x=p[1],w=Object(r.useState)(""),k=Object(i.a)(w,2),S=k[0],y=k[1],C=Object(r.useState)(""),P=Object(i.a)(C,2),A=P[0],F=P[1],H=Object(r.useState)(!1),N=Object(i.a)(H,2),B=N[0],E=N[1],R=""===S?t:t.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())}));return Object(r.useEffect)((function(){g.getAll().then((function(e){console.log("connected to server"),c(e)}))}),[]),Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Phonebook"}),Object(s.jsx)(f,{message:A,error:B}),Object(s.jsx)("h2",{children:"Search"}),Object(s.jsx)(l,{inputVal:S,handler:function(e){y(e.target.value)}}),Object(s.jsx)("h2",{children:"Add New"}),Object(s.jsx)(b,{name:{value:j,handler:function(e){m(e.target.value)}},number:{value:v,handler:function(e){x(e.target.value)}},submitHandler:function(e){if(e.preventDefault(),t.find((function(e){return e.name===j}))){if(window.confirm("".concat(j," is already in the phonebook. Replace the old number with the new one?"))){var n=t.find((function(e){return e.name===j})),r=Object(u.a)(Object(u.a)({},n),{},{number:v});g.updateNumber(r.id,r).then((function(e){c(t.map((function(n){return n.id!==r.id?n:e}))),F("".concat(e.name,"'s number has been updated.")),setTimeout((function(){F("")}),3e3)})).catch((function(e){E(!0),F("Error: ".concat(r.name,"'s information has been deleted from server.'")),setTimeout((function(){F(""),E(!1)}),3e3)}))}}else g.addPerson({name:j,number:v,id:Object(d.a)()}).then((function(e){c(t.concat(e)),F("".concat(e.name," has been added to the phonebook.")),setTimeout((function(){F("")}),3e3)}));m(""),x("")}}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)(h,{show:R,delHandler:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Are you sure you want to delete ".concat(n.name," from the phonebook?"))&&g.deletePerson(e).then((function(n){c(t.filter((function(n){return n.id!==e})))}))}})]})};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8b9b06d4.chunk.js.map