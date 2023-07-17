import{u as d,j as t,a as p,s as x,b as o,d as j,c as C,f as _}from"./index-4dd42b0f.js";import{q as N,W as f}from"./index.module-6f04d8ea.js";const b="_contactForm_187ot_1",g="_inputName_187ot_13",F="_input_187ot_13",L="_add_187ot_47",a={contactForm:b,inputName:g,input:F,add:L},y=()=>{const e=d(),c=s=>{s.preventDefault();const n=s.target,r=n.elements.name.value,l=n.elements.number.value;e(p({name:r,number:l})),n.reset()};return t.jsxs("form",{className:a.contactForm,onSubmit:c,children:[t.jsxs("label",{children:[t.jsx("p",{className:a.inputName,children:"Name"}),t.jsx("input",{className:a.input,type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),t.jsxs("label",{children:[t.jsx("p",{className:a.inputName,children:"Number"}),t.jsx("input",{className:a.input,type:"tel",name:"number",title:"Phone number must consist of digits and may include spaces, dashes and parentheses. It can start with a plus symbol (+)",required:!0})]}),t.jsx("button",{className:a.add,type:"submit",children:"Add contact"})]})},w="_inputName_k0tbq_1",E="_input_k0tbq_1",u={inputName:w,input:E},v=()=>{const e=d(),c=s=>{const n=s.target.value;e(x(n))};return t.jsxs("label",{children:[t.jsx("p",{className:u.inputName,children:"Find contacts by name"}),t.jsx("input",{className:u.input,onChange:c,type:"text",name:"filter"})]})},m=e=>e.contacts.items,h=e=>e.filter,k=e=>e.contacts.error,q=e=>e.contacts.isLoading,S=e=>{const c=m(e),s=h(e);return c.filter(n=>n.name.toLowerCase().includes(s.toLowerCase()))},A=e=>S(e).sort((s,n)=>s.name.localeCompare(n.name)),D=()=>{const e=o(m),c=o(h),s=e.filter(r=>r.name.toLowerCase().includes(c.toLowerCase())),n=e.length>0;return t.jsx(t.Fragment,{children:n&&c&&t.jsxs("div",{children:[t.jsxs("h3",{children:["Found ",s.length," of ",e.length," contacts"]}),t.jsx("progress",{value:s.length,max:e.length})]})})},$="_contactList_1hmw3_1",P="_contactElement_1hmw3_17",B="_noContacts_1hmw3_73",i={contactList:$,contactElement:P,delete:"_delete_1hmw3_45",noContacts:B},I=()=>{const e=o(A),c=d(),s=n=>c(j(n));return t.jsx(t.Fragment,{children:e.map(({id:n,name:r,number:l})=>t.jsxs("li",{className:i.contactElement,children:[t.jsxs("p",{children:[r,":"]}),t.jsx("a",{href:"tel:"+{number:l},children:l}),t.jsx("button",{className:i.delete,onClick:()=>s(n),id:n,type:"button",children:"Delete"})]},n))})},z=()=>{const e=o(m);return t.jsx(t.Fragment,{children:e.length>0?t.jsx("ul",{className:i.contactList,children:t.jsx(I,{})}):t.jsx("p",{className:i.noContacts,children:"No saved contacts"})})},R=()=>{const e=d(),c=o(q),s=o(k);return C.useEffect(()=>{e(_())},[e]),t.jsxs(t.Fragment,{children:[t.jsx(N,{children:t.jsx(f,{children:t.jsx("title",{children:"Phonebook"})})}),t.jsx("h1",{children:"Phonebook"}),t.jsx(y,{}),t.jsx("h2",{children:"Contacts"}),t.jsx(v,{}),t.jsx(D,{}),c&&!s?t.jsx("p",{children:"Loading contacts..."}):t.jsx(z,{})]})};export{R as default};