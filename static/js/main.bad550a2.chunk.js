(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n.n(c),s=n(6),r=n(7),i=n(8),o=n(10),l=n(9),b=n(1),j=n(3),d=n.n(j),u=n(0),h=function(e){var t=e.title,n=e.children;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("section",{className:d.a.section,children:[Object(u.jsx)("h2",{className:d.a.section__title,children:t}),n]})})},O=n(4),_=n.n(O),x=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:_.a.btns__container,children:t.map((function(e){return Object(u.jsx)("button",{name:e,onClick:n,className:_.a.feedback__btn,children:e},e)}))})})},f=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,s=e.positivePercentage;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Good"}),": ",t]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Neutral"}),": ",n]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Bad"}),": ",c]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Total"}),": ",a]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Positive feedback"}),": ",s,"%"]})]})},p=f;f.defaultProps={total:0};var g=function(e){var t=e.message;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("p",{children:t})})},v=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.calculateTotal=function(){return e.state.good+e.state.neutral+e.state.bad},e.calculatePositivePercentage=function(){return Math.round(e.state.good/e.calculateTotal()*100)},e.handleBtnClick=function(t){var n=t.target.name;e.setState((function(e){return Object(s.a)({},n,e[n]+1)}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.calculateTotal();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h,{title:"Please leave feedback",children:Object(u.jsx)(x,{options:["good","neutral","bad"],onLeaveFeedback:this.handleBtnClick})}),Object(u.jsx)(h,{title:"Statistics",children:e?Object(u.jsx)(p,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:e,positivePercentage:this.calculatePositivePercentage()}):Object(u.jsx)(g,{message:"No feedback given"})})]})}}]),n}(b.Component),k=v;n(16);a.a.render(Object(u.jsx)(k,{}),document.querySelector("#root"))},3:function(e,t,n){e.exports={section:"section_section__1NOUK",section__title:"section_section__title__R03ex"}},4:function(e,t,n){e.exports={btns__container:"feedback-options_btns__container__3UnUg",feedback__btn:"feedback-options_feedback__btn__djOJV"}}},[[17,1,2]]]);
//# sourceMappingURL=main.bad550a2.chunk.js.map