(this.webpackJsonplastplay=this.webpackJsonplastplay||[]).push([[0],{160:function(e,a,t){e.exports=t(212)},165:function(e,a,t){},185:function(e,a,t){},212:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(75),o=t.n(r),l=(t(165),t(20)),c=t(21),i=t(22),m=t(24),u=t(158),p=t(85),d=t(35),h=t(83),f=t.n(h),v=t(29),E=t.n(v),g=t(214),b=t(215),y=(t(185),d.a().shape({username:d.c().min(2,"Username is too Short!").max(50,"Username is Too Long!").required("Username is Required"),email:d.c().email("Invalid email").required("Email is Required"),password:d.c().required("Password is required"),confirm_password:d.c().oneOf([d.b("password"),null],"Passwords do not match")})),w=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).submitForm=function(e,a){e.username=e.username.toLowerCase(),e.username=e.username.trim(),f.a.post("./register",e).then((function(e){console.log(e.data.result),"success"===e.data.result?E()("Success!",e.data.message,"success").then((function(e){a.push("/login")})):"error"===e.data.result&&E()("Error!",e.data.message,"error")})).catch((function(e){console.log(e),E()("Error!","Unexpected error","error")}))},n.showForm=function(e){var a=e.values,t=e.errors,n=e.touched,r=e.handleChange,o=e.handleSubmit,l=(e.setFieldValue,e.isSubmitting);return s.a.createElement(g.a,null,s.a.createElement(b.a,{xs:1,lg:4,className:"justify-content-center"},s.a.createElement("form",{onSubmit:o},s.a.createElement("div",{className:"loginRegisterTitle"},s.a.createElement("a",{href:"/register",className:"row justify-content-center"},s.a.createElement("h1",null,s.a.createElement("b",null,"Last"),"Play"))),s.a.createElement("div",{className:"registerLogin"},s.a.createElement("input",{type:"text",name:"username",onChange:r,value:a.username,placeholder:"Username",className:t.username&&n.username?"form-control is-invalid":"form-control"}),t.fullname&&n.fullname?s.a.createElement("small",{id:"passwordHelp",class:"text-danger"},t.username):null),s.a.createElement("div",{className:"registerLogin"},s.a.createElement("input",{type:"text",name:"email",onChange:r,value:a.email,className:t.email&&n.email?"form-control is-invalid":"form-control",placeholder:"Email",style:{marginTop:"25px"}}),t.email&&n.email?s.a.createElement("small",{id:"passwordHelp",class:"text-danger"},t.email):null),s.a.createElement("div",{className:"registerLogin"},s.a.createElement("input",{type:"password",name:"password",onChange:r,value:a.password,placeholder:"Password",style:{marginTop:"25px"},className:t.password&&n.password?"form-control is-invalid":"form-control"}),t.password&&n.password?s.a.createElement("small",{id:"passwordHelp",class:"text-danger"},t.password):null),s.a.createElement("div",{className:"registerLogin"},s.a.createElement("input",{type:"password",name:"confirm_password",onChange:r,className:t.confirm_password&&n.confirm_password?"form-control is-invalid":"form-control",placeholder:"Confirm Password",style:{marginTop:"25px"}}),t.confirm_password&&n.confirm_password?s.a.createElement("small",{id:"passwordHelp",class:"text-danger"},t.confirm_password):null),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s8 offset-s2 center"},s.a.createElement("button",{type:"submit",disabled:l,class:"btn btn-primary btn-block",style:{marginTop:"25px"}},"Register"))))))},console.log(n.props),n.state={alert:null,loaded:!1},n}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"register-page"},s.a.createElement("div",null,s.a.createElement(p.a,{initialValues:{fullname:"",email:"",password:"",confirm_password:""},onSubmit:function(a,t){var n=t.setSubmitting;e.submitForm(a,e.props.history),n(!1)},validationSchema:y},(function(a){return e.showForm(a)}))))}}]),t}(n.Component),N=(t(91),d.a().shape({username:d.c().min(2,"username is Too Short!").max(50,"username is Too Long!").required("Username is Required"),password:d.c().required("Password is required")})),j=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).submitForm=function(e,a){e.username=e.username.toLowerCase(),f.a.post("./login",e,e).then((function(t){"success"===t.data.result?(localStorage.setItem("TOKEN_KEY",t.data.token),localStorage.setItem("userName",e.username),E()("Success!",t.data.message,"success").then((function(e){a.push("/dashboard")}))):"error"===t.data.result&&E()("Error!",t.data.message,"error")})).catch((function(e){return console.log(e),E()("Error!",e.message,"error")}))},n.showForm=function(e){var a=e.values,t=e.errors,n=e.touched,r=e.handleChange,o=e.handleSubmit,l=(e.setFieldValue,e.isSubmitting);return s.a.createElement(g.a,null,s.a.createElement(b.a,{xs:1,lg:4,className:"justify-content-center"},s.a.createElement("form",{onSubmit:o},s.a.createElement("div",{className:"loginRegisterTitle"},s.a.createElement("a",{href:"/login",style:{textAlign:"center"},className:"row justify-content-center"},s.a.createElement("h1",null,s.a.createElement("b",null,"Last"),"Play"))),s.a.createElement("div",{className:"registerLogin"},s.a.createElement("input",{type:"text",name:"username",onChange:r,value:a.username,placeholder:"Username",className:t.username&&n.username?"form-control is-invalid":"form-control"}),s.a.createElement("div",{className:""},s.a.createElement("div",{className:""},s.a.createElement("span",{className:"fas fa-user"}))),t.username&&n.username?s.a.createElement("small",{id:"passwordHelp",className:"text-danger"},t.username):null),s.a.createElement("div",{className:"registerLogin"},s.a.createElement("input",{type:"password",name:"password",onChange:r,value:a.password,placeholder:"Password",style:{marginTop:"25px"},className:t.password&&n.password?"form-control is-invalid":"form-control"}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("span",{className:"fas fa-lock"})),t.password&&n.password?s.a.createElement("small",{id:"passwordHelp",className:"text-danger"},t.password):null),s.a.createElement("div",{className:"row justify-content-md-center"},s.a.createElement("button",{type:"submit",disabled:l,className:"btn btn-primary btn-block",style:{marginTop:"25px"}},"Login")))))},n.state={alert:null},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){if(null!=localStorage.getItem("TOKEN_KEY"))return this.props.history.push("/dashboard");var e=this.props.match.params.notify;void 0!==e&&("error"===e?E()("Activation Fail please try again !","","error"):"success"===e&&E()("Activation Success your can login !","","success"))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"login-page"},s.a.createElement("div",{className:"register-box"},s.a.createElement("div",{className:"card-body register-card-body"},s.a.createElement(p.a,{initialValues:{username:"",password:""},onSubmit:function(a,t){var n=t.setSubmitting;e.submitForm(a,e.props.history),n(!1)},validationSchema:N},(function(a){return e.showForm(a)})))))}}]),t}(n.Component),O=t(74),k=t(216),S=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).state={shows:[]},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://lp-server1.lastplay.tv/app/api/series?apikey=33af4f32a34140faa3b3119541c78e14",{headers:{Accept:"application/json","Content-Type":" application/json","X-API-SERVER":"85499f9f"}}).then((function(e){return e.json()})).then((function(a){e.setState({shows:a}),console.log(e.state.shows)})).catch(console.log)}},{key:"render",value:function(){return s.a.createElement(g.a,{fluid:!0},s.a.createElement(b.a,null,this.state.shows.map((function(e){return s.a.createElement(k.a,{className:"shows"},s.a.createElement(O.a,{to:"tv/".concat(e.id)},s.a.createElement("a",{href:"!#",key:e.id},s.a.createElement("img",{src:"https://lp-server1.lastplay.tv/app/MediaCover/".concat(e.id,"/poster-250.jpg"),alt:"".concat(e.title," poster")})," ",s.a.createElement("br",null),s.a.createElement("span",null,e.title))))}))))}}]),t}(n.Component),C=t(103),x=t(49),L=t(150),T=(t(209),function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={videoTitle:"",autostart:"viewable"},console.log(n.props),n.onReady=n.onReady.bind(Object(x.a)(n)),n.onVideoLoad=n.onVideoLoad.bind(Object(x.a)(n)),n.playerId=" ",n}return Object(c.a)(t,[{key:"onReady",value:function(e){}},{key:"onVideoLoad",value:function(e){this.setState({videoTitle:e.item.description})}},{key:"render",value:function(){return s.a.createElement("div",{className:"react-jw-player-container"},s.a.createElement("h1",null,this.state.videoTitle),s.a.createElement(L.Player,{playsInline:!0,poster:this.props.poster,src:this.props.source}))}}]),t}(s.a.Component)),I=t(152),_=t.n(I),P=t(217),F=t(218),K=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this)).appendData=function(e){var a="https://lp-server1.lastplay.tv"+e.path.replace("/media/disk1",""),t="https://lp-server1.lastplay.tv/app/MediaCover/".concat(n.state.shows.id,"/fanart.jpg"),s=e;console.log(s),n.setState({player:a,poster:t,episodeTitle:s,not_visible:!1}),n.useEffect()},n.useEffect=function(){window.scrollTo({top:500,left:0,behavior:"smooth"})},n.displayData=[],n.state={showdata:n.displayData,shows:[],episodes:[],player:"https://www.youtube.com/watch?v=IuS5huqOND4&t=1s",poster:"",not_visible:!0,loaded:!1},n.appendData=n.appendData.bind(Object(x.a)(n)),n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=[fetch("https://lp-server1.lastplay.tv/app/api/episode?seriesId=".concat(this.props.match.params.id,"&apikey=33af4f32a34140faa3b3119541c78e14")),fetch("https://lp-server1.lastplay.tv/app/api/series/id=".concat(this.props.match.params.id,"?apikey=33af4f32a34140faa3b3119541c78e14"))];Promise.all(a).then((function(e){var a=Object(C.a)(e,2),t=a[0],n=a[1];return Promise.all([t.json(),n.json()])})).then((function(a){var t=Object(C.a)(a,3),n=t[0],s=t[1],r=t[2];r=n.filter((function(e){return e.seasonNumber>0})),e.setState({shows:s,episodes:r,loaded:!0})})),_.a.Tabs.init(this.Tabs)}},{key:"render",value:function(){var e=this,a=this.state.not_visible?{display:"none",padding:"10%"}:{},t=0;return!1===this.state.loaded?null:(console.log(this.state.episodes),s.a.createElement("div",{style:{backgroundColor:"#f1f1f1"}},s.a.createElement("div",{className:"UpperHeader"},s.a.createElement("img",{src:"https://lp-server1.lastplay.tv/app/MediaCover/".concat(this.state.shows.id,"/fanart.jpg"),alt:"".concat(this.state.shows.title," poster"),style:{width:"100%"}})),s.a.createElement(g.a,null,s.a.createElement(b.a,null,s.a.createElement(k.a,{md:3,style:{textAlign:"center"}},s.a.createElement("img",{src:"https://lp-server1.lastplay.tv/app/MediaCover/".concat(this.state.shows.id,"/poster-250.jpg"),alt:"".concat(this.state.shows.title," poster")})," ",s.a.createElement("br",null),s.a.createElement("h2",null,this.state.shows.title),s.a.createElement("p",null,this.state.shows.network," | ",this.state.shows.runtime," min. | ",this.state.shows.certification),s.a.createElement("span",{style:{fontSize:"14px"}},this.state.shows.genres.join(" | "))),s.a.createElement(k.a,{md:9,style:{padding:"5%"}},s.a.createElement("p",null,this.state.shows.overview),s.a.createElement("div",{className:"display-data-Container",style:a},s.a.createElement("h3",null,this.state.show),s.a.createElement(T,{source:this.state.player,poster:this.state.poster})),s.a.createElement("div",{className:"seasonTabs"},s.a.createElement(P.a.Container,{defaultActiveKey:"first"},s.a.createElement(F.a,{variant:"pills"},s.a.createElement("div",{classname:"cardDeck"},this.state.episodes.map((function(a){if(e.state.shows.seasonCount>t)return t++,s.a.createElement("div",{className:"card"},s.a.createElement("img",{variant:"top",className:"card-img",src:"http://lp-server1.lastplay.tv/t/".concat(e.state.shows.imdbId,"/season0").concat(t,"-poster.jpg"),alt:"poster",style:{backgroundImage:"url(https://lp-server1.lastplay.tv/app/MediaCover/".concat(e.state.shows.id,"/poster-250.jpg)"),backgroundSize:"fill"}}),s.a.createElement(F.a.Link,{eventKey:"season".concat(t)},"Season ",t))})),"                    ")),s.a.createElement(P.a.Content,null,this.state.episodes.map((function(a){return!1===a.hasFile?s.a.createElement(P.a.Pane,{eventKey:"season".concat(a.seasonNumber),key:a.id},s.a.createElement("a",{style:{color:"red",fontStyle:"italic"}},a.episodeNumber," - ",a.title)):s.a.createElement(P.a.Pane,{eventKey:"season".concat(a.seasonNumber)},s.a.createElement("a",{id:"season".concat(a.seasonNumber),style:{cursor:"pointer"},onClick:e.appendData.bind(e,a.episodeFile)},a.episodeNumber," - ",a.title))}))))))))))}}]),t}(s.a.Component),q=t(48),D=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).Logout=function(){E()("Logout?",{buttons:{nope:{text:"Yes",value:"yes"},sure:{text:"Not yet",value:"no"}}}).then((function(a){switch(a){case"yes":E()("Logout successful","").then((function(a){return localStorage.removeItem("TOKEN_KEY"),e.props.history.push("/login")}))}}))},e}return Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"navigation"},s.a.createElement(F.a,{className:"navz"},s.a.createElement(F.a.Item,null,s.a.createElement(F.a.Link,{href:"/dashboard"},"Home"))),s.a.createElement(F.a,{className:"justify-content-end"},s.a.createElement(F.a.Link,{eventKey:"3",disabled:!0,style:{textTransform:"capitalize"}},"Welcome, ",localStorage.userName),s.a.createElement(F.a.Item,null,s.a.createElement(F.a.Link,{href:"#",onClick:this.Logout},"Logout"))))}}]),t}(n.Component),R=Object(q.g)(D),U=t(69),A=t(25),M=Object(A.a)();M.listen((function(e){U.a.set({page:e.pathname}),U.a.pageview(e.pathname)}));U.a.initialize("UA-162249992-1"),U.a.set({userId:{localStorage:localStorage}});var H=function(){return null!=localStorage.getItem("TOKEN_KEY")},V=function(e){var a=e.component,t=Object(u.a)(e,["component"]);return s.a.createElement(q.b,Object.assign({},t,{render:function(e){return!0===H()?s.a.createElement(a,e):s.a.createElement(q.a,{to:"/login"})}}))},z=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"componentWillUpdate",value:function(e,a){console.log("update")}},{key:"render",value:function(){return s.a.createElement(q.c,{history:M},s.a.createElement(q.d,null,s.a.createElement("div",null,H()&&s.a.createElement(R,null),s.a.createElement(q.b,{path:"/register",component:w}),s.a.createElement(q.b,{path:"/login/:notify?",component:j}),s.a.createElement(V,{path:"/dashboard",component:S}),s.a.createElement(V,{path:"/",exact:!0,component:S}),s.a.createElement(V,{path:"/tv/:id",component:K}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e,a,t){}},[[160,1,2]]]);
//# sourceMappingURL=main.b72f366a.chunk.js.map