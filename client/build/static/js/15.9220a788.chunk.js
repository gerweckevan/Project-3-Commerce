(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[15],{300:function(e,a,t){"use strict";t.r(a);var n=t(74),s=t.n(n),r=t(75),o=t(31),l=t(34),i=t(33),c=t(32),p=t(1),m=t.n(p),u=t(71),d=t.n(u),h=t(306),g=t(30),f=t(4),w=function(e){Object(i.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).onChangeEmail=function(e){n.setState({email:e.target.value})},n.onChangePassword=function(e){n.setState({password:e.target.value})},n.onLogin=Object(r.a)(s.a.mark((function e(){var a,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=d.a.post("/api/signin",{email:n.state.email,password:n.state.password}),e.next=4,a;case 4:t=e.sent,localStorage.setItem("token",t.data.token),n.setState({apiResponse:"success"}),console.log(t),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),n.setState({apiResponse:e.t0.response.statusText}),console.log(e.t0.response);case 14:case"end":return e.stop()}}),e,null,[[0,10]])}))),n.onSignup=function(){d.a.post("/api/signup",{email:n.state.email,password:n.state.password}).then((function(e){console.log(e)})).catch((function(e){console.log(e.response.data.error)}))},n.redirectLoginSuccessListener=function(){if("success"===n.state.apiResponse)return m.a.createElement(h.a,{to:{pathname:"/dashboard",state:{referrer:"test"}}})},n.state={email:"admin",password:"admin",apiResponse:""},n}return Object(l.a)(t,[{key:"render",value:function(){var e="Bad Request"===this.state.apiResponse?"Please fill the email and password fields":"Unauthorized"===this.state.apiResponse&&"Email or password incorrect";return m.a.createElement("div",null,this.redirectLoginSuccessListener(),m.a.createElement(f.m,{className:"App",style:{paddingTop:"150px",paddingBottom:"200px"}},m.a.createElement("h2",null,"Admin Dashboard"),m.a.createElement(f.s,{className:"form"},m.a.createElement(f.k,null,m.a.createElement(f.u,null,m.a.createElement(f.A,null,"Admin"),m.a.createElement(f.v,{type:"email",name:"email",id:"exampleEmail",placeholder:"Admin",value:this.state.email,onChange:this.onChangeEmail}))),m.a.createElement(f.k,null,m.a.createElement(f.u,null,m.a.createElement(f.A,{for:"examplePassword"},"Password"),m.a.createElement(f.v,{type:"password",name:"password",id:"examplePassword",placeholder:"********",value:this.state.password,onChange:this.onChangePassword}))),m.a.createElement(f.c,{onClick:this.onLogin},"Login"),m.a.createElement(g.a,{to:"/dashboard"},"secret page"),m.a.createElement("p",null,e))))}}]),t}(p.Component);a.default=w}}]);
//# sourceMappingURL=15.9220a788.chunk.js.map