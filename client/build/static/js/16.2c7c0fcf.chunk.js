(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[16],{301:function(e,t,a){"use strict";a.r(t);var n=a(31),l=a(34),r=a(33),o=a(32),s=a(1),i=a.n(s),c=a(71),m=a.n(c),d=a(20),u=a(36),p=a(4),h=function(e){var t=e.styles,a=e.email,n=e.step1,l=e.toggle,r=e.stepsUnlock,o=e.emailIsValid,s=e.handleEmailValidation,c=e.onChangeEmail,m=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(a).toLowerCase());return i.a.createElement(p.C,{disabled:!n,style:t.collapsePannel},i.a.createElement("h3",{style:t.collapasePannelTitle,onClick:function(){return l("step1")}},i.a.createElement(p.b,{color:"secondary",pill:!0,size:"sm"},"1"),"  Customer"),i.a.createElement(p.l,{isOpen:n},i.a.createElement("p",null,"Enter your email for express checkout, an email will be sent to you allowing account creation"),i.a.createElement(p.A,{for:"exampleEmail"},"Email"),i.a.createElement(p.Q,null,i.a.createElement(p.k,{md:"6"},i.a.createElement(p.v,{invalid:!o,type:"email",name:"email",id:"exampleEmail",placeholder:"example@gmail.com",value:a,onChange:c}),i.a.createElement(p.t,null,"Email is not valid")),i.a.createElement(p.k,{md:"6"},i.a.createElement(p.c,{disabled:!1,onClick:function(){m?(r("step2"),s(!0)):s(!1)}},"Continue")),i.a.createElement(p.k,{xs:"12"},i.a.createElement("div",{style:{margin:"20px"}},i.a.createElement(p.n,{type:"checkbox",id:"exampleCustomCheckbox",label:"Suscribe to our newsletter"}))))))};var E=a(38);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,l=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(i){l=!0,r=i}finally{try{n||null==s.return||s.return()}finally{if(l)throw r}}return a}}(e,t)||Object(E.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C=a(13),f=function(e){var t=e.styles,a=e.step2,n=e.step2Unlock,l=e.toggle,r=e.stepsUnlock,o=e.onChangeFirstName,s=e.onChangeLastName,c=e.onChangeCountry,m=e.onChangeCity,d=e.onChangeProvince,u=e.onChangePostalCode,h=e.onChangePhoneNumber,E=e.onChangeAdress1,f=e.onChangeAdress2,y=e.onChangeShipppingMethod,v=e.firstName,b=e.lastName,k=e.country,S=e.city,N=e.province,A=e.postalCode,x=e.phoneNumber,P=e.address1,U=e.address2,F=e.shippingMethod,O=e.formValidator,V=e.formIsValid,T=e.addUserAddress,I={firstName:v.length>2&&"string"===typeof v,lastName:b.length>2&&"string"===typeof b,country:"string"===typeof k,city:S.length>2&&"string"===typeof S,province:N.length>2&&"string"===typeof N,postalCode:"number"===typeof A,phoneNumber:"number"===typeof x,address1:P.length>2&&"string"===typeof P};return i.a.createElement("div",{style:t.collapsePannel},i.a.createElement(p.C,{disabled:!a},i.a.createElement("h3",{style:t.collapasePannelTitle,onClick:function(){return n&&l("step2")}},i.a.createElement(p.b,{color:"secondary",pill:!0,size:"sm"},"2"),"  Shipping "),i.a.createElement(p.l,{isOpen:a},i.a.createElement(p.Q,null,i.a.createElement(p.k,{md:6,style:t.formFieldsSpace},i.a.createElement(p.A,{for:"First name"},"First name"),i.a.createElement(p.v,{type:"text",onChange:o,value:v})),i.a.createElement(p.k,{md:6,style:t.formFieldsSpace},i.a.createElement(p.A,{for:"exampleEmail"},"last Name"),i.a.createElement(p.v,{type:"text",onChange:s,value:b})),i.a.createElement(p.k,{md:12,style:t.formFieldsSpace},i.a.createElement(p.A,{for:"exampleSelect"},"Country"),i.a.createElement(p.v,{type:"select",name:"select",onChange:c,value:k},i.a.createElement("option",{value:"USA"},"USA"),i.a.createElement("option",{value:"UK"},"UK"),i.a.createElement("option",{value:"FRANCE"},"FRANCE"),i.a.createElement("option",{value:"GERMANY"},"GERMANY"),i.a.createElement("option",{value:"AUSTRALIA"},"AUSTRALIA"))),i.a.createElement(p.k,{md:6,style:t.formFieldsSpace},i.a.createElement(p.A,null,"City"),i.a.createElement(p.v,{type:"text",onChange:m,value:S})),i.a.createElement(p.k,{md:6,style:t.formFieldsSpace},i.a.createElement(p.A,null,"State/Province"),i.a.createElement(p.v,{type:"text",onChange:d,value:N})),i.a.createElement(p.k,{md:6,style:t.formFieldsSpace},i.a.createElement(p.A,null,"Postal Code"),i.a.createElement(p.v,{type:"number",onChange:u,value:A})),i.a.createElement(p.k,{md:6,style:t.formFieldsSpace},i.a.createElement(p.A,null,"Phone Number"),i.a.createElement(p.v,{type:"number",onChange:h,value:x})),i.a.createElement(p.k,{md:12,style:t.formFieldsSpace},i.a.createElement(p.A,{for:"Address1"},"Address1"),i.a.createElement(p.v,{type:"text",onChange:E,value:P})),i.a.createElement(p.k,{md:12,style:t.formFieldsSpace},i.a.createElement(p.A,null,"Address2"),i.a.createElement(p.v,{type:"text",onChange:f,value:U})),i.a.createElement(p.k,{xs:6,style:t.formFieldsSpace},i.a.createElement(p.u,{style:t.formFieldsSpace},i.a.createElement(p.A,{for:"exampleCheckbox"},i.a.createElement("u",null,"Shipping Method")),i.a.createElement(p.u,{check:!0},i.a.createElement(p.A,{check:!0},i.a.createElement(p.v,{type:"radio",onChange:function(){return y(1)},checked:1===F})," ","express (2 days shipping)")),i.a.createElement(p.u,{check:!0,disabled:!0},i.a.createElement(p.A,{check:!0},i.a.createElement(p.v,{type:"radio",onChange:function(){return y(2)},checked:2===F})," ","1 week shipping")))),i.a.createElement("div",{className:"d-flex align-items-center"},i.a.createElement(p.c,{disabled:!1,onClick:function(){if(Object(C.a)(new Set(Object.entries(I).map((function(e){var t=g(e,2);t[0];return t[1]})))).sort()[0])return r("step3"),T({firstName:v,lastName:b,country:k,city:S,province:N,postalCode:A,phoneNumber:x,address1:P,address2:U});O(!0)}},"continue"))),function(e){if(e)return!1===Object(C.a)(new Set(Object.entries(I).map((function(e){var t=g(e,2);t[0];return t[1]})))).sort()[0]?i.a.createElement(p.Q,null,i.a.createElement(p.a,{color:"danger"},"Please fill these fields correctly:",!I.firstName&&i.a.createElement("div",null,"First Name"),!I.lastName&&i.a.createElement("div",null,"Last Name"),!I.country&&i.a.createElement("div",null,"Country"),!I.city&&i.a.createElement("div",null,"City"),!I.province&&i.a.createElement("div",null,"Province"),!I.postalCode&&i.a.createElement("div",null,"Postal Code"),!I.phoneNumber&&i.a.createElement("div",null,"Phone Number"),!I.address1&&i.a.createElement("div",null,"Address1 field"))):i.a.createElement(p.a,{color:"success"},"Thank you! Click 'continue'")}(V))))},y=function(e){var t=e.styles,a=e.step3,n=e.step3Unlock,l=e.toggle,r=e.getUserAddress,o=(e.onSubmitOrder,e.selectorTotalAmountCart,e.totalDelivery,r.address1),s=r.address2,c=r.city,m=r.country,d=r.firstName,u=r.lastName,h=r.phoneNumber,E=r.postalCode,g=r.province;return i.a.createElement("div",{style:t.collapsePannel},i.a.createElement(p.C,{disabled:!a},i.a.createElement("h3",{style:t.collapasePannelTitle,onClick:function(){return n&&l("step3")}},i.a.createElement(p.b,{color:"secondary",pill:!0,size:"sm"},"3"),"  Customer"),i.a.createElement(p.l,{isOpen:a},i.a.createElement(p.Q,null,i.a.createElement(p.k,{md:"6"},i.a.createElement("h4",null,"Delivery address:"),i.a.createElement("div",null,"First Name: ",i.a.createElement("b",null,d)),i.a.createElement("div",null,"Last Name: ",i.a.createElement("b",null,u)),i.a.createElement("div",null,"Tel: ",i.a.createElement("b",null,h)),i.a.createElement("div",null,"Country: ",i.a.createElement("b",null,m)),i.a.createElement("div",null,"City: ",i.a.createElement("b",null,c)),i.a.createElement("div",null,"State/Province: ",i.a.createElement("b",null,g)),i.a.createElement("div",null,"Postal Code: ",i.a.createElement("b",null,E)),i.a.createElement("div",null,"Address: ",i.a.createElement("b",null,o+" "+s))),i.a.createElement(p.k,{md:"6"},i.a.createElement("h4",null,"Payment: "))))))},v=function(e){var t=e.getCart,a=e.selectorTotalAmountCart,n=e.totalDelivery;return i.a.createElement(p.B,null,i.a.createElement(p.C,null,"Order Summary"),i.a.createElement(p.C,null,t.map((function(e){return i.a.createElement(p.Q,{key:e._id},i.a.createElement(p.k,{xs:"8"},i.a.createElement("p",null,"x",e.quantity," ",e.title)),i.a.createElement(p.k,{xs:"4"},i.a.createElement("p",null,e.price,"$")))}))),i.a.createElement(p.C,null,i.a.createElement(p.Q,null,i.a.createElement(p.k,{xs:"8"},i.a.createElement("p",null,"Subtotal")),i.a.createElement(p.k,{xs:"4"},i.a.createElement("p",null,a,"$"))),i.a.createElement(p.Q,null,i.a.createElement(p.k,{xs:"8"},i.a.createElement("p",null,"Shipping")),i.a.createElement(p.k,{xs:"4"},i.a.createElement("p",null,n,"$"))),i.a.createElement(p.Q,null,i.a.createElement(p.k,{xs:"8"},i.a.createElement("p",null,"Tax")),i.a.createElement(p.k,{xs:"4"},i.a.createElement("p",null,"0$")))),i.a.createElement(p.C,null,i.a.createElement(p.Q,null,i.a.createElement(p.k,{xs:"8"},i.a.createElement("p",null,"Total")),i.a.createElement(p.k,{xs:"4"},i.a.createElement("b",{style:{fontSize:"25px"}},a+n,"$")))))},b={container:{paddingTop:"120px",paddingBottom:"120px"},h1:{paddingBottom:"20px"},collapsePannel:{borderBottom:"1px solid grey"},collapasePannelTitle:{cursor:"pointer"},formFieldsSpace:{paddingTop:"10px"}},k=function(e){var t=e.getCart,a=e.addUserAddress,n=e.getUserAddress,l=e.step1,r=e.step2,o=e.step3,s=e.step2Unlock,c=e.step3Unlock,m=e.email,d=e.firstName,u=e.lastName,E=e.country,g=e.city,C=e.province,k=e.postalCode,S=e.phoneNumber,N=e.address1,A=e.address2,x=e.shippingMethod,P=e.formIsValid,U=e.onChangeFirstName,F=e.onChangeLastName,O=e.onChangeCountry,V=e.onChangeCity,T=e.onChangeProvince,I=e.onChangePostalCode,M=e.onChangePhoneNumber,j=e.onChangeAdress1,w=e.onChangeAdress2,L=e.onChangeShipppingMethod,D=e.onChangeEmail,Q=e.toggle,R=e.stepsUnlock,q=e.formValidator,z=e.emailIsValid,$=e.handleEmailValidation,B=e.onSubmitOrder,G=e.selectorTotalAmountCart,J=e.totalDelivery;return i.a.createElement("div",null,i.a.createElement(p.P,{value:c?100:s?66:33}),i.a.createElement(p.m,{style:b.container},i.a.createElement("h1",{style:b.h1},"Check out"),i.a.createElement(p.Q,null,i.a.createElement(p.k,{md:"8"},i.a.createElement(p.B,{flush:!0},i.a.createElement(h,{styles:b,email:m,emailIsValid:z,handleEmailValidation:$,onChangeEmail:D,stepsUnlock:R,step1:l,step2:r,step2Unlock:s,toggle:Q}),i.a.createElement(f,{styles:b,stepsUnlock:R,step2:r,step2Unlock:s,toggle:Q,onChangeFirstName:U,onChangeLastName:F,onChangeCountry:O,onChangeCity:V,onChangeProvince:T,onChangePostalCode:I,onChangePhoneNumber:M,onChangeAdress1:j,onChangeAdress2:w,onChangeShipppingMethod:L,email:m,firstName:d,lastName:u,country:E,city:g,province:C,postalCode:k,phoneNumber:S,address1:N,address2:A,shippingMethod:x,formValidator:q,formIsValid:P,addUserAddress:a}),i.a.createElement(y,{styles:b,step3:o,step3Unlock:c,toggle:Q,getUserAddress:n,onSubmitOrder:B,selectorTotalAmountCart:G,totalDelivery:J}))),i.a.createElement(p.k,{md:"4"},i.a.createElement(v,{getCart:t,selectorTotalAmountCart:G,totalDelivery:J})))))},S=a(5),N=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).onChangeEmail=function(e){return l.setState({email:e.target.value})},l.onChangeFirstName=function(e){return l.setState({firstName:e.target.value})},l.onChangeLastName=function(e){return l.setState({lastName:e.target.value})},l.onChangeCountry=function(e){return l.setState({country:e.target.value})},l.onChangeCity=function(e){return l.setState({city:e.target.value})},l.onChangeProvince=function(e){return l.setState({province:e.target.value})},l.onChangePostalCode=function(e){return l.setState({postalCode:Number(e.target.value)})},l.onChangePhoneNumber=function(e){return l.setState({phoneNumber:Number(e.target.value)})},l.onChangeAdress1=function(e){return l.setState({address1:e.target.value})},l.onChangeAdress2=function(e){return l.setState({address2:e.target.value})},l.onChangeShipppingMethod=function(e){return l.setState({shippingMethod:e})},l.handleEmailValidation=function(e){return l.setState({emailIsValid:e})},l.formValidator=function(e){return l.setState({formIsValid:e})},l.toggle=function(e){"step1"===e?l.setState({step1:!0,step2:!1,step3:!1}):"step2"===e?l.setState({step1:!1,step2:!0,step3:!1}):"step3"===e&&l.setState({step1:!1,step2:!1,step3:!0})},l.stepsUnlock=function(e){"step2"===e?l.setState({step2Unlock:!0,step1:!1,step2:!0,step3:!1}):"step3"===e&&l.setState({step3Unlock:!0,step1:!1,step2:!1,step3:!0})},l.onSubmitOrder=function(){var e=l.state,t=e.email,a=e.firstName,n=e.lastName,r=e.country,o=e.city,s=e.province,i=e.postalCode,c=e.phoneNumber,d=e.address1,u=e.address2,p=e.totalDelivery,h=l.props,E=h.getCart,g=h.selectorTotalAmountCart,C=Math.random().toString(36).substring(5)+Date.now();m.a.post("/api/add/orders",{ref:C,customerinfo:{email:t,firstName:a,lastName:n,country:r,city:o,province:s,postalCode:i,phoneNumber:c,address1:d,address2:u},order:E.map((function(e){return{idItem:e._id,titleItem:e.title,selectedSize:e.selectedSize,selectedColor:e.selectedColor,price:e.price,quantity:e.quantity}})),totalDelivery:p,totalAmount:g}).catch((function(e){console.log(e)}))},l.state={step1:!0,step2:!1,step2Unlock:!1,step3:!1,step3Unlock:!1,email:"",emailIsValid:!0,firstName:"fgsfdsf",lastName:"fsdfsd",country:"USA",city:"fdsfdsfdsf",province:"fdsfdsf",postalCode:8767671167,phoneNumber:17671651,address1:"qdfsqfdsqfcfdxsf",address2:"xsfdsxfsdfxsdf",shippingMethod:2,formIsValid:!1,totalDelivery:5},l}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(k,Object.assign({},this.state,this.props,{onChangeFirstName:this.onChangeFirstName,onChangeLastName:this.onChangeLastName,onChangeCountry:this.onChangeCountry,onChangeCity:this.onChangeCity,onChangeProvince:this.onChangeProvince,onChangePostalCode:this.onChangePostalCode,onChangePhoneNumber:this.onChangePhoneNumber,onChangeAdress1:this.onChangeAdress1,onChangeAdress2:this.onChangeAdress2,onChangeShipppingMethod:this.onChangeShipppingMethod,stepsUnlock:this.stepsUnlock,toggle:this.toggle,onChangeEmail:this.onChangeEmail,handleEmailValidation:this.handleEmailValidation,formValidator:this.formValidator,onSubmitOrder:this.onSubmitOrder})))}}]),a}(s.Component);t.default=Object(d.b)((function(e){return{getCart:e.cartReducer,getUserAddress:e.getUserAddress,selectorTotalAmountCart:Object(u.a)(e)}}),(function(e){return{addUserAddress:function(t){return e((a=t,{type:S.r,infoUser:a}));var a}}}))(N)}}]);
//# sourceMappingURL=16.2c7c0fcf.chunk.js.map