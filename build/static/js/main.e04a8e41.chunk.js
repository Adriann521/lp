(this.webpackJsonplastplay=this.webpackJsonplastplay||[]).push([[0],{161:function(e,a,t){e.exports=t(213)},166:function(e,a,t){},186:function(e,a,t){},213:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(76),o=t.n(r),l=(t(166),t(20)),c=t(21),i=t(22),m=t(24),u=t(159),d=t(68),p=t(86),h=t(35),f=t(84),E=t.n(f),v=t(29),g=t.n(v),b=t(215),y=t(216),w=(t(186),h.a().shape({username:h.c().min(2,"Username is too Short!").max(50,"Username is Too Long!").required("Username is Required"),email:h.c().email("Invalid email").required("Email is Required"),password:h.c().required("Password is required"),confirm_password:h.c().oneOf([h.b("password"),null],"Passwords do not match")})),N=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).submitForm=function(e,a){e.username=e.username.toLowerCase(),E.a.post("./register",e).then((function(e){console.log(e.data.result),"success"===e.data.result?g()("Success!",e.data.message,"success").then((function(e){a.push("/login")})):"error"===e.data.result&&g()("Error!",e.data.message,"error")})).catch((function(e){console.log(e),g()("Error!","Unexpected error","error")}))},n.showForm=function(e){var a=e.values,t=e.errors,n=e.touched,r=e.handleChange,o=e.handleSubmit,l=(e.setFieldValue,e.isSubmitting);return s.a.createElement(b.a,null,s.a.createElement(y.a,{xs:1,lg:4,className:"justify-content-center"},s.a.createElement("form",{onSubmit:o},s.a.createElement("div",{className:"loginRegisterTitle"},s.a.createElement("a",{href:"/register",className:"row justify-content-center"},s.a.createElement("h1",null,s.a.createElement("b",null,"Last"),"Play"))),s.a.createElement("div",{className:"registerLogin"},s.a.createElement("input",Object(d.a)({type:"text",name:"username",onChange:r,value:a.username,className:"form-control",placeholder:"Username"},"className",t.username&&n.username?"form-control is-invalid":"form-control")),t.fullname&&n.fullname?s.a.createElement("small",{id:"passwordHelp",class:"text-danger"},t.username):null),s.a.createElement("div",{className:"registerLogin"},s.a.createElement("input",{type:"text",name:"email",onChange:r,value:a.email,className:t.email&&n.email?"form-control is-invalid":"form-control",placeholder:"Email",style:{marginTop:"25px"}}),t.email&&n.email?s.a.createElement("small",{id:"passwordHelp",class:"text-danger"},t.email):null),s.a.createElement("div",{className:"registerLogin"},s.a.createElement("input",Object(d.a)({type:"password",name:"password",onChange:r,value:a.password,className:"form-control",placeholder:"Password",style:{marginTop:"25px"}},"className",t.password&&n.password?"form-control is-invalid":"form-control")),t.password&&n.password?s.a.createElement("small",{id:"passwordHelp",class:"text-danger"},t.password):null),s.a.createElement("div",{className:"registerLogin"},s.a.createElement("input",{type:"password",name:"confirm_password",onChange:r,className:t.confirm_password&&n.confirm_password?"form-control is-invalid":"form-control",placeholder:"Confirm Password",style:{marginTop:"25px"}}),t.confirm_password&&n.confirm_password?s.a.createElement("small",{id:"passwordHelp",class:"text-danger"},t.confirm_password):null),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s8 offset-s2 center"},s.a.createElement("button",{type:"submit",disabled:l,class:"btn btn-primary btn-block",style:{marginTop:"25px"}},"Register"))))))},console.log(n.props),n.state={alert:null,loaded:!1},n}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"register-page"},s.a.createElement("div",null,s.a.createElement(p.a,{initialValues:{fullname:"",email:"",password:"",confirm_password:""},onSubmit:function(a,t){var n=t.setSubmitting;e.submitForm(a,e.props.history),n(!1)},validationSchema:w},(function(a){return e.showForm(a)}))))}}]),t}(n.Component),j=(t(92),h.a().shape({username:h.c().min(2,"username is Too Short!").max(50,"username is Too Long!").required("Username is Required"),password:h.c().required("Password is required")})),O=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).submitForm=function(e,a){e.username=e.username.toLowerCase(),E.a.post("./login",e,e).then((function(t){"success"===t.data.result?(localStorage.setItem("TOKEN_KEY",t.data.token),localStorage.setItem("userName",e.username),g()("Success!",t.data.message,"success").then((function(e){a.push("/dashboard")}))):"error"===t.data.result&&g()("Error!",t.data.message,"error")})).catch((function(e){return console.log(e),g()("Error!",e.message,"error")}))},n.showForm=function(e){var a=e.values,t=e.errors,n=e.touched,r=e.handleChange,o=e.handleSubmit,l=(e.setFieldValue,e.isSubmitting);return s.a.createElement(b.a,null,s.a.createElement(y.a,{xs:1,lg:4,className:"justify-content-center"},s.a.createElement("form",{onSubmit:o},s.a.createElement("div",{className:"loginRegisterTitle"},s.a.createElement("a",{href:"/login",style:{textAlign:"center"},className:"row justify-content-center"},s.a.createElement("h1",null,s.a.createElement("b",null,"Last"),"Play"))),s.a.createElement("div",{className:"registerLogin"},s.a.createElement("input",{type:"text",name:"username",onChange:r,value:a.username,placeholder:"Username",className:t.username&&n.username?"form-control is-invalid":"form-control"}),s.a.createElement("div",{className:""},s.a.createElement("div",{className:""},s.a.createElement("span",{className:"fas fa-user"}))),t.username&&n.username?s.a.createElement("small",{id:"passwordHelp",className:"text-danger"},t.username):null),s.a.createElement("div",{className:"registerLogin"},s.a.createElement("input",Object(d.a)({type:"password",name:"password",onChange:r,value:a.password,className:"form-control",placeholder:"Password",style:{marginTop:"25px"}},"className",t.password&&n.password?"form-control is-invalid":"form-control")),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("span",{className:"fas fa-lock"})),t.password&&n.password?s.a.createElement("small",{id:"passwordHelp",className:"text-danger"},t.password):null),s.a.createElement("div",{className:"row justify-content-md-center"},s.a.createElement("button",{type:"submit",disabled:l,className:"btn btn-primary btn-block",style:{marginTop:"25px"}},"Login")))))},n.state={alert:null},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){if(null!=localStorage.getItem("TOKEN_KEY"))return this.props.history.push("/dashboard");var e=this.props.match.params.notify;void 0!==e&&("error"===e?g()("Activation Fail please try again !","","error"):"success"===e&&g()("Activation Success your can login !","","success"))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"login-page"},s.a.createElement("div",{className:"register-box"},s.a.createElement("div",{className:"card-body register-card-body"},s.a.createElement(p.a,{initialValues:{username:"",password:""},onSubmit:function(a,t){var n=t.setSubmitting;e.submitForm(a,e.props.history),n(!1)},validationSchema:j},(function(a){return e.showForm(a)})))))}}]),t}(n.Component),k=t(54),x=t(217),S=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).state={shows:[]},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://149.56.17.225:2095/api/series?apikey=33af4f32a34140faa3b3119541c78e14").then((function(e){return e.json()})).then((function(a){e.setState({shows:a}),console.log(e.state.shows)})).catch(console.log)}},{key:"render",value:function(){return s.a.createElement(b.a,{fluid:!0},s.a.createElement(y.a,{xs:2,lg:6},this.state.shows.map((function(e){return s.a.createElement(x.a,{className:"shows",lg:2},s.a.createElement(k.b,{to:"tv/".concat(e.id)},s.a.createElement("a",{key:e.id},s.a.createElement("img",{src:"http://149.56.17.225:2095/MediaCover/".concat(e.id,"/poster-250.jpg")})," ",s.a.createElement("br",null),s.a.createElement("span",null,e.title))))}))))}}]),t}(n.Component),C=t(104),L=t(49),T=t(151),_=(t(210),function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={videoTitle:"",autostart:"viewable"},console.log(n.props),n.onReady=n.onReady.bind(Object(L.a)(n)),n.onVideoLoad=n.onVideoLoad.bind(Object(L.a)(n)),n.playerId=" ",n}return Object(c.a)(t,[{key:"onReady",value:function(e){}},{key:"onVideoLoad",value:function(e){this.setState({videoTitle:e.item.description})}},{key:"render",value:function(){return s.a.createElement("div",{className:"react-jw-player-container"},s.a.createElement("h1",null,this.state.videoTitle),s.a.createElement(T.Player,{playsInline:!0,poster:this.props.poster,src:this.props.source}))}}]),t}(s.a.Component)),I=t(153),F=t.n(I),K=t(218),P=t(219),q=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this)).appendData=function(e){var a="http://149.56.17.225"+e.path.replace("/media/disk1",""),t="http://149.56.17.225:8989/MediaCover/".concat(n.state.shows.id,"/fanart.jpg");n.setState({player:a,poster:t,not_visible:!1}),n.useEffect()},n.useEffect=function(){window.scrollTo(0,0)},n.displayData=[],n.state={showdata:n.displayData,shows:[],episodes:[],player:"",poster:"",not_visible:!0,loaded:!1},n.appendData=n.appendData.bind(Object(L.a)(n)),n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=[fetch("http://149.56.17.225:8989/api/episode?seriesId=".concat(this.props.match.params.id,"&apikey=33af4f32a34140faa3b3119541c78e14")),fetch("http://149.56.17.225:8989/api/series/id=".concat(this.props.match.params.id,"?apikey=33af4f32a34140faa3b3119541c78e14"))];Promise.all(a).then((function(e){var a=Object(C.a)(e,2),t=a[0],n=a[1];return Promise.all([t.json(),n.json()])})).then((function(a){var t=Object(C.a)(a,3),n=t[0],s=t[1],r=t[2];r=n.filter((function(e){return e.seasonNumber>0})),e.setState({shows:s,episodes:r,loaded:!0})})),F.a.Tabs.init(this.Tabs)}},{key:"render",value:function(){var e=this,a=this.state.not_visible?{display:"none"}:{},t=0;return!1===this.state.loaded?null:(console.log(this.state.shows),s.a.createElement(b.a,null,s.a.createElement(y.a,null,s.a.createElement(x.a,{xs:12,md:4},s.a.createElement("img",{src:"http://149.56.17.225:8989/MediaCover/".concat(this.state.shows.id,"/poster-250.jpg")})),s.a.createElement(x.a,{xs:12,md:8},s.a.createElement("h3",null,this.state.shows.title),s.a.createElement("ul",null,s.a.createElement("li",null,"Network: ",this.state.shows.network),s.a.createElement("li",null,"Runtime: ",this.state.shows.runtime," min."),s.a.createElement("li",null,"Genres: ",this.state.shows.genres.join(", "))))),s.a.createElement(y.a,{xs:12,style:{clear:"both"}},s.a.createElement("p",null,this.state.shows.overview)),s.a.createElement(y.a,{xs:8},s.a.createElement("div",{className:"display-data-Container col s10 offset-s3 center-align",style:a},s.a.createElement(_,{source:this.state.player,poster:this.state.poster}))),s.a.createElement(y.a,null,s.a.createElement(K.a.Container,{id:"season-tabs",defaultActiveKey:"first"},s.a.createElement(x.a,{sm:3},s.a.createElement(P.a,{variant:"pills",className:"flex-column"},this.state.episodes.map((function(a){if(e.state.shows.seasonCount>t)return t++,s.a.createElement(P.a.Item,null,s.a.createElement(P.a.Link,{eventKey:"season".concat(t)},"Season ",t))})))),s.a.createElement(x.a,{sm:9},s.a.createElement(K.a.Content,null,this.state.episodes.map((function(a){return!1===a.hasFile?s.a.createElement(K.a.Pane,{eventKey:"season".concat(a.seasonNumber)},s.a.createElement("a",{style:{color:"red",fontStyle:"italic"}},a.episodeNumber," - ",a.title)):s.a.createElement(K.a.Pane,{eventKey:"season".concat(a.seasonNumber)},s.a.createElement("a",{id:"season".concat(a.seasonNumber),style:{cursor:"pointer"},onClick:e.appendData.bind(e,a.episodeFile)},a.episodeNumber," - ",a.title))}))))))))}}]),t}(s.a.Component),R=t(48),D=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).Logout=function(){g()("Logout?",{buttons:{nope:{text:"Yes",value:"yes"},sure:{text:"Not yet",value:"no"}}}).then((function(a){switch(a){case"yes":g()("Logout successful","").then((function(a){return localStorage.removeItem("TOKEN_KEY"),e.props.history.push("/login")}))}}))},e}return Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"navigation"},s.a.createElement(P.a,{className:"navz"},s.a.createElement(P.a.Item,null,s.a.createElement(P.a.Link,{href:"/dashboard"},"Home"))),s.a.createElement(P.a,{className:"justify-content-end"},s.a.createElement(P.a.Link,{eventKey:"3",disabled:!0,style:{textTransform:"capitalize"}},"Welcome, ",localStorage.userName),s.a.createElement(P.a.Item,null,s.a.createElement(P.a.Link,{href:"#",onClick:this.Logout},"Logout"))))}}]),t}(n.Component),U=Object(R.g)(D),H=t(71),M=t(25),V=Object(M.a)();V.listen((function(e){H.a.set({page:e.pathname}),H.a.pageview(e.pathname)}));H.a.initialize("UA-162249992-1"),H.a.set({userId:{localStorage:localStorage}});var A=function(){return null!=localStorage.getItem("TOKEN_KEY")},Y=function(e){var a=e.component,t=Object(u.a)(e,["component"]);return s.a.createElement(R.b,Object.assign({},t,{render:function(e){return!0===A()?s.a.createElement(a,e):s.a.createElement(R.a,{to:"/login"})}}))},W=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"componentWillUpdate",value:function(e,a){console.log("update")}},{key:"render",value:function(){return s.a.createElement(k.a,{history:V},s.a.createElement(R.d,null,s.a.createElement("div",null,A()&&s.a.createElement(U,null),s.a.createElement(R.b,{path:"/register",component:N}),s.a.createElement(R.b,{path:"/login/:notify?",component:O}),s.a.createElement(Y,{path:"/dashboard",component:S}),s.a.createElement(Y,{path:"/",exact:!0,component:S}),s.a.createElement(Y,{path:"/tv/:id",component:q}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,a,t){}},[[161,1,2]]]);
//# sourceMappingURL=main.e04a8e41.chunk.js.map