(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},2:function(t,e,n){t.exports={label:"contact-form_label__BgkrB",label__text:"contact-form_label__text__1Ho_d"}},20:function(t,e,n){"use strict";n.r(e);var a=n(10),c=n.n(a),s=n(12),r=n(3),i=n(4),o=n(6),l=n(5),u=n(1),b=n(22),m=n(9),d=n.n(m),_=n(0),j=function(t){var e=t.value,n=t.onChange;return Object(_.jsxs)("label",{className:d.a.filter__label,children:[Object(_.jsx)("span",{className:d.a.filter__text,children:"Find contacts by name"}),Object(_.jsx)("input",{type:"text",value:e,onChange:n})]})},h=(n(18),n(11)),f=n(2),x=n.n(f),p=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.value,c=n.name;t.setState(Object(h.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(_.jsxs)("label",{className:x.a.label,children:[Object(_.jsx)("span",{className:x.a.label__text,children:"Name"}),Object(_.jsx)("input",{type:"text",onChange:this.handleChange,value:this.state.name,name:"name",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f."})]}),Object(_.jsxs)("label",{className:x.a.label,children:[Object(_.jsx)("span",{className:x.a.label__text,children:"Number"}),Object(_.jsx)("input",{type:"text",onChange:this.handleChange,value:this.state.number,name:"number",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"})]}),Object(_.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(u.Component),C=p,O=n(7),v=n.n(O),g=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(_.jsx)("ul",{className:"ContactList",children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(_.jsxs)("li",{className:v.a.ContactList__item,children:[Object(_.jsxs)("p",{className:v.a.ContactList__text,children:[Object(_.jsxs)("span",{className:v.a.text__name,children:[a,":"]}),c]}),Object(_.jsx)("button",{type:"button",className:"ContactList__btn",onClick:function(){return n(e)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e)}))})},y=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.addContact=function(e){var n=e.name.toLowerCase();if(t.state.contacts.some((function(t){return t.name.toLowerCase().includes(n)})))alert("".concat(e.name," is already in contacts."));else{var a={id:Object(b.a)(),name:e.name,number:e.number};t.setState((function(t){return{contacts:[a].concat(Object(s.a)(t.contacts))}}))}},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{children:"Phonebook"}),Object(_.jsx)(C,{onSubmit:this.addContact}),Object(_.jsx)("h2",{children:"Contacts"}),Object(_.jsx)(j,{value:t,onChange:this.changeFilter}),Object(_.jsx)(g,{contacts:e,onDeleteContact:this.deleteContact})]})})}}]),n}(u.Component),L=y;n(19);c.a.render(Object(_.jsx)(L,{}),document.querySelector("#root"))},7:function(t,e,n){t.exports={ContactList__item:"contact-list_ContactList__item__30XAs",text__name:"contact-list_text__name__2HU4d",ContactList__text:"contact-list_ContactList__text__2XL0D"}},9:function(t,e,n){t.exports={filter__label:"filter_filter__label__3JTTJ",filter__text:"filter_filter__text__3r4fA"}}},[[20,1,2]]]);
//# sourceMappingURL=main.01ad4944.chunk.js.map