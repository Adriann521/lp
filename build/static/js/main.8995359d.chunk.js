(this.webpackJsonplastplay=this.webpackJsonplastplay||[]).push([[0],{147:function(e,t,a){},207:function(e,t,a){e.exports=a(276)},231:function(e,t,a){},276:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(72),o=a.n(s),l=(a(147),a(21)),c=a(22),i=a(24),m=a(25),u=a(205),p=a(50),d=a(11),h=a(48),f=a.n(h),E=a(20),v=a.n(E),g=a(281),b=a(282),y=a(43),w=(a(231),d.a().shape({username:d.c().min(2,"Username is too Short!").max(50,"Username is Too Long!").required("Username is Required"),email:d.c().email("Invalid email").required("Email is Required"),password:d.c().required("Password is required"),confirm_password:d.c().oneOf([d.b("password"),null],"Passwords do not match")})),j=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).submitForm=function(e,t){e.username=e.username.toLowerCase(),e.username=e.username.trim(),f.a.post("http://localhost:3000/register",e).then((function(e){console.log(e.data.result),"success"===e.data.result?v()("Success!",e.data.message,"success").then((function(e){t.push("/login")})):"error"===e.data.result&&v()("Error!",e.data.message,"error")})).catch((function(e){console.log(e),v()("Error!","Unexpected error","error")}))},n.showForm=function(e){var t=e.values,a=e.errors,n=e.touched,s=e.handleChange,o=e.handleSubmit,l=(e.setFieldValue,e.isSubmitting);return r.a.createElement("div",{className:"registerBox"},r.a.createElement(g.a,{className:"justify-content-center"},r.a.createElement("h1",null,r.a.createElement("b",null,"Last"),"Play",r.a.createElement("span",{style:{fontSize:"14px"}},".tv"))),r.a.createElement(g.a,{className:"justify-content-center"},r.a.createElement("img",{src:"/logo100.png",alt:"logo"})),r.a.createElement(b.a,{style:{backgroundColor:"#fff"}},r.a.createElement(g.a,{xs:1,lg:4,className:"justify-content-center"},r.a.createElement("form",{onSubmit:o},r.a.createElement("div",{className:"loginRegisterTitle"}),r.a.createElement("div",{className:"registerLogin"},r.a.createElement("input",{type:"text",name:"username",onChange:s,value:t.username,placeholder:"Username",className:a.username&&n.username?"form-control is-invalid":"form-control"}),a.fullname&&n.fullname?r.a.createElement("small",{id:"passwordHelp",class:"text-danger"},a.username):null),r.a.createElement("div",{className:"registerLogin"},r.a.createElement("input",{type:"text",name:"email",onChange:s,value:t.email,className:a.email&&n.email?"form-control is-invalid":"form-control",placeholder:"Email",style:{marginTop:"25px"}}),a.email&&n.email?r.a.createElement("small",{id:"passwordHelp",class:"text-danger"},a.email):null),r.a.createElement("div",{className:"registerLogin"},r.a.createElement("input",{type:"password",name:"password",onChange:s,value:t.password,placeholder:"Password",style:{marginTop:"25px"},className:a.password&&n.password?"form-control is-invalid":"form-control"}),a.password&&n.password?r.a.createElement("small",{id:"passwordHelp",class:"text-danger"},a.password):null),r.a.createElement("div",{className:"registerLogin"},r.a.createElement("input",{type:"password",name:"confirm_password",onChange:s,className:a.confirm_password&&n.confirm_password?"form-control is-invalid":"form-control",placeholder:"Confirm Password",style:{marginTop:"25px"}}),a.confirm_password&&n.confirm_password?r.a.createElement("small",{id:"passwordHelp",class:"text-danger"},a.confirm_password):null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s8 offset-s2 center"},r.a.createElement("button",{type:"submit",disabled:l,class:"btn btn-primary btn-block",style:{marginTop:"25px"}},"Register"),r.a.createElement(y.b,{to:"/login"}," ",r.a.createElement("span",{style:{fontSize:"12px"}},"Return to login"))))))))},console.log(n.props),n.state={alert:null,loaded:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"register-page"},r.a.createElement("div",null,r.a.createElement(p.a,{initialValues:{fullname:"",email:"",password:"",confirm_password:""},onSubmit:function(t,a){var n=a.setSubmitting;e.submitForm(t,e.props.history),n(!1)},validationSchema:w},(function(t){return e.showForm(t)}))))}}]),a}(n.Component),N=a(92),S=a.n(N),x=a(112),k=(a(93),a(283)),C=a(66),O=d.a().shape({username:d.c().min(2,"username is Too Short!").max(50,"username is Too Long!").required("Username is Required"),password:d.c().required("Password is required")}),T=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).submitForm=function(){var e=Object(x.a)(S.a.mark((function e(t,a){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.username=t.username.toLowerCase(),f.a.post("http://localhost:3000/login",t,t).then((function(e){"success"===e.data.result?(localStorage.setItem("TOKEN_KEY",e.data.token),localStorage.setItem("userName",t.username[0].toUpperCase()+t.username.slice(1)),n.props.history.push("/dashboard")):"error"===e.data.result&&v()("Error!",e.data.message,"error")})).catch((function(e){return console.log(e),v()("Error!",e.message,"error")}));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n.showForm=function(e){var t=e.values,a=e.errors,n=e.touched,s=e.handleChange,o=e.handleSubmit,l=(e.setFieldValue,e.isSubmitting);return r.a.createElement(b.a,null,r.a.createElement("div",{style:{width:"50%;"},className:"registerBox justify-content-md-center"},r.a.createElement(g.a,{md:6,className:"justify-content-center"},r.a.createElement("h1",null,r.a.createElement("b",null,"Last"),"Play",r.a.createElement("span",{style:{fontSize:"14px"}},".tv"))),r.a.createElement(g.a,{md:12,className:"justify-content-center"},r.a.createElement("img",{src:"/logo100.png",alt:"logo"})),r.a.createElement(g.a,{md:6,className:"justify-content-center"},r.a.createElement("form",{onSubmit:o},r.a.createElement("div",{className:"registerLogin"},r.a.createElement("input",{type:"text",name:"username",onChange:s,value:t.username,placeholder:"Username",className:a.username&&n.username?"form-control is-invalid":"form-control"}),a.username&&n.username?r.a.createElement("small",{id:"passwordHelp",class:"text-danger"},a.username):null),r.a.createElement("div",{className:"form-group input-group mb-3 has-feedback"},r.a.createElement("input",{type:"password",name:"password",onChange:s,value:t.password,placeholder:"Password",className:a.password&&n.password?"form-control is-invalid":"form-control"}),a.password&&n.password?r.a.createElement("small",{id:"passwordHelp",class:"text-danger"},a.password):null),r.a.createElement(k.a,{style:{textAlign:"center"}},r.a.createElement("button",{type:"submit",disabled:l,className:"btn btn-primary btn-block",style:{marginTop:"45px"}},"Login"),r.a.createElement(y.b,{to:"/password/forgot"},r.a.createElement("span",{style:{fontSize:"12px"}},"Forgot password?")))))))},n.state={alert:null},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){if(null!=localStorage.getItem("TOKEN_KEY"))return this.props.history.push("/dashboard")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(b.a,null,r.a.createElement(p.a,{initialValues:{username:"",password:""},onSubmit:function(t,a){var n=a.setSubmitting;e.submitForm(t,e.props.history),n(!1)},validationSchema:O},(function(t){return e.showForm(t)}))))}}]),a}(n.Component),L=Object(C.g)(T),F=a(53),_=a(286),I=a(288),P=a(129),q=a(285),R=a(141),V=a.n(R),U=localStorage.userName,H={borderRadius:"",boxShadow:"0 2px 12px rgba(0, 0, 0, 0.1)",background:"rgba(255, 255, 255, 0.9)",padding:"0 0",fontSize:"90%",position:"fixed",overflow:"auto",paddingBottom:"-5px",maxHeight:"50%"},M=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getFilteredItems=function(e){return V.a.prototype.getFilteredItems.call(Object(F.a)(n),e).slice(0,e.limitItemsLength)},n.Logout=function(e){v()("Logout?",{buttons:{nope:{text:"Yes",value:"yes"},sure:{text:"Not yet",value:"no"}}}).then((function(e){switch(e){case"yes":localStorage.removeItem("TOKEN_KEY"),n.props.history.push("/login")}}))},n.state={value:"",fetched:!1,shows:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.fetched||fetch("https://lp-server1.lastplay.tv/app/api/series?apikey=33af4f32a34140faa3b3119541c78e14",{headers:{Accept:"application/json","Content-Type":" application/json","X-API-SERVER":"85499f9f"}}).then((function(e){return e.json()})).then((function(t){e.setState({fetched:!0}),t.map((function(t){return e.state.shows.push(t)}))})),console.log(this.state.shows)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(_.a,{fixed:"top",bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(_.a.Brand,{href:"/dashboard"},r.a.createElement("img",{src:"/logo100.png",className:"headerimg",alt:"logo"}),r.a.createElement("b",null,"Last"),"Play"),r.a.createElement(_.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(_.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(I.a,{className:"mr-auto"},r.a.createElement(I.a.Link,{href:"/dashboard"},"Home"),r.a.createElement(I.a.Link,{href:"/dashboard"},"TV"),r.a.createElement(I.a.Link,{style:{marginRight:"5px"},href:"/movies",eventKey:"disabled",disabled:!0},"Movies"),r.a.createElement(I.a,{className:"searchbar"},r.a.createElement(P.a,{variant:"flush"},r.a.createElement(V.a,{items:this.state.shows,shouldItemRender:function(e,t){return e.title.toLowerCase().indexOf(t.toLowerCase())>-1&&t.slice(1,10)},getItemValue:function(e){return e.title},renderItem:function(e,t){return r.a.createElement(P.a.Item,{className:"searchbar"},r.a.createElement("a",{key:e.id,className:"stretched-link dropdowns",href:"/tv/".concat(e.id)}," ",r.a.createElement("img",{src:"https://lp-server1.lastplay.tv/app/MediaCover/".concat(e.id,"/poster-250.jpg"),style:{width:"42px",height:"75px"},alt:"".concat(e.title," poster")}),e.title))},value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})},onSelect:function(t){return e.setState({value:t})},onClick:function(t){return e.setState({value:t})},menuStyle:H,inputProps:{placeholder:"Search.."}})))),r.a.createElement(I.a,null,r.a.createElement(I.a.Link,{href:"/contact"},"Contact"),r.a.createElement(q.a,{title:"Welcome, ".concat(U),id:"collasible-nav-dropdown"},r.a.createElement(q.a.Item,{bg:"dark",href:"#",onClick:this.Logout},"Logout"))))))}}]),a}(n.Component),B=Object(C.g)(M),K=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={shows:[]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://lp-server1.lastplay.tv/app/api/series?apikey=33af4f32a34140faa3b3119541c78e14",{headers:{Accept:"application/json","Content-Type":" application/json","X-API-SERVER":"85499f9f"}}).then((function(e){return e.json()})).then((function(t){e.setState({shows:t.sort((function(e,t){return e.title.localeCompare(t.title)}))})})).catch(console.log)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement("div",null,r.a.createElement(g.a,{style:{marginTop:"5%"},className:"accordian justify-content-center"},this.state.shows.map((function(e){return r.a.createElement(k.a,{xs:6,sm:!0,className:"shows",key:"".concat(e.id)},r.a.createElement(y.b,{to:"tv/".concat(e.id)},r.a.createElement("img",{src:"https://lp-server1.lastplay.tv/app/MediaCover/".concat(e.id,"/poster-250.jpg"),alt:"".concat(e.title," poster")})," ",r.a.createElement("br",null),r.a.createElement("span",null,e.title)))})))))}}]),a}(n.Component),D=a(144),z=a(142),A=(a(262),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={videoTitle:"",autostart:"viewable"},n.onReady=n.onReady.bind(Object(F.a)(n)),n.onVideoLoad=n.onVideoLoad.bind(Object(F.a)(n)),n.playerId=" ",n}return Object(c.a)(a,[{key:"onReady",value:function(e){}},{key:"onVideoLoad",value:function(e){this.setState({videoTitle:e.item.description})}},{key:"render",value:function(){return r.a.createElement("div",{className:"video-react-big-play-button-center"},r.a.createElement("h1",null,this.state.videoTitle),r.a.createElement(z.Player,{playsInline:!1,poster:this.props.poster,src:this.props.source,className:"video-react-big-play-button-center"},r.a.createElement(z.BigPlayButton,{position:"center"})))}}]),a}(r.a.Component)),W=a(202),Y=a.n(W),G=a(287),J=a(203),X=a.n(J),$=(a(275),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).appendData=function(e){var t="https://lp-server1.lastplay.tv"+e.path.replace("/media/disk1",""),a="https://lp-server1.lastplay.tv/app/MediaCover/".concat(n.state.shows.id,"/fanart.jpg"),r=e;n.setState({player:t,poster:a,episodeTitle:r,not_visible:!1}),n.useEffect()},n.useEffect=function(){window.scrollTo({top:500,left:0,behavior:"smooth"})},n.useEffectBottom=function(){window.scrollTo({top:1500,left:0,behavior:"smooth"})},n.displayData=[],n.state={showdata:n.displayData,shows:[],episodes:[],player:"",poster:"",not_visible:!0,loaded:!1},n.appendData=n.appendData.bind(Object(F.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=[fetch("https://lp-server1.lastplay.tv/app/api/episode?seriesId=".concat(this.props.match.params.id,"&apikey=33af4f32a34140faa3b3119541c78e14")),fetch("https://lp-server1.lastplay.tv/app/api/series/id=".concat(this.props.match.params.id,"?apikey=33af4f32a34140faa3b3119541c78e14"))];Promise.all(t).then((function(e){var t=Object(D.a)(e,2),a=t[0],n=t[1];return Promise.all([a.json(),n.json()])})).then((function(t){var a=Object(D.a)(t,3),n=a[0],r=a[1],s=a[2];s=n.filter((function(e){return e.seasonNumber>0})),e.setState({shows:r,episodes:s,loaded:!0})})),Y.a.Tabs.init(this.Tabs)}},{key:"render",value:function(){var e=this,t=0,a=this.state.not_visible?{display:"none",padding:"10%"}:{};return!1===this.state.loaded?null:r.a.createElement("div",{style:{backgroundColor:"#f1f1f1"}},r.a.createElement(B,null),r.a.createElement("div",{className:"UpperHeader"},r.a.createElement("img",{src:"https://lp-server1.lastplay.tv/app/MediaCover/".concat(this.state.shows.id,"/fanart.jpg"),alt:"".concat(this.state.shows.title," poster"),style:{width:"100%"}})),r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement(k.a,{className:"postertab",md:3},r.a.createElement("img",{src:"https://lp-server1.lastplay.tv/app/MediaCover/".concat(this.state.shows.id,"/poster-250.jpg"),alt:"".concat(this.state.shows.title," poster")})," ",r.a.createElement("br",null),r.a.createElement("h2",null,this.state.shows.title),r.a.createElement("p",null,this.state.shows.network," | ",this.state.shows.runtime," min. | ",this.state.shows.certification),r.a.createElement("span",{style:{fontSize:"14px"}},this.state.shows.genres.join(" | "))),r.a.createElement(k.a,{md:9,style:{padding:"5%"}},r.a.createElement("p",null,this.state.shows.overview),r.a.createElement("div",{className:"display-data-Container",style:a,onContextMenu:function(e){e.preventDefault(),e.stopPropagation()}},r.a.createElement("h3",null,this.state.show),r.a.createElement(A,{source:this.state.player,poster:this.state.poster})),r.a.createElement("div",null,r.a.createElement(g.a,null,r.a.createElement(k.a,{xs:6})),r.a.createElement(G.a.Container,{defaultActiveKey:"season1"},r.a.createElement(X.a,{responsive:{desktop:{breakpoint:{max:3e3,min:600},items:3,partialVisibilityGutter:40,slidesToSlide:3},tablet:{breakpoint:{max:1024,min:464},items:2,partialVisibilityGutter:30,slidesToSlide:2},mobile:{breakpoint:{max:464,min:0},items:1,partialVisibilityGutter:30}},centerMode:!1,swipeable:!1,draggable:!1,ssr:!0,infinite:!0,keyBoardControl:!0,containerClass:"carousel-container",deviceType:this.props.deviceType,dotListClass:"custom-dot-list-style",itemClass:"carousel-item-padding-40-px",focusOnSelect:!0,renderButtonGroupOutside:!0},this.state.episodes.map((function(a){if(e.state.shows.seasonCount>t)return t++,r.a.createElement("div",{className:"card",key:"".concat(t)},r.a.createElement(I.a.Link,{eventKey:"season".concat(t)},r.a.createElement("img",{variant:"top",className:"card-img",src:"http://lp-server1.lastplay.tv/t/".concat(e.state.shows.imdbId,"/season0").concat(t,"-poster.jpg"),alt:"poster",style:{backgroundImage:"url(https://lp-server1.lastplay.tv/app/MediaCover/".concat(e.state.shows.id,"/poster-250.jpg)"),backgroundSize:"cover"},onError:function(t){t.target.src="https://lp-server1.lastplay.tv/app/MediaCover/".concat(e.state.shows.id,"/poster-250.jpg")}}),r.a.createElement("h2",{style:{maxHeight:"45px"}},"Season ",t,"  ")))}))),r.a.createElement(P.a,null,r.a.createElement(G.a.Content,{className:"seasonTabs"},this.state.episodes.map((function(a){return!1===a.hasFile?r.a.createElement(G.a.Pane,{eventKey:"season".concat(a.seasonNumber),key:a.id},r.a.createElement(P.a.Item,null,r.a.createElement("span",{style:{color:"red",fontStyle:"italic"},href:null},a.episodeNumber,". ",r.a.createElement("strong",null,a.title)))):r.a.createElement(G.a.Pane,{key:"tabs".concat(t++),eventKey:"season".concat(a.seasonNumber),style:{overflow:"hidden"},onClick:e.appendData.bind(e,a.episodeFile)},r.a.createElement("span",{id:"season".concat(a.seasonNumber),style:{cursor:"pointer"},href:null},r.a.createElement(P.a.Item,null,r.a.createElement("p",null,a.episodeNumber,". ",r.a.createElement("strong",null,a.title)," "),r.a.createElement("span",{style:{fontSize:"14px"}},a.overview))))}))))))))))}}]),a}(r.a.Component)),Q=d.a().shape({email:d.c().required("Email address is required"),body:d.c().required("Email description is required"),username:d.c().required("Username not found.")}),Z=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).submitForm=function(e,t){f.a.post("/contact",e).then((function(e){"success"===e.data.result?v()("Success!",e.data.message,"success").then((function(e){t.push("/contact")})):"error"===e.data.result&&v()("Error!",e.data.message,"error")})).catch((function(e){console.log(e),v()("Error!","Unexpected error","error")}))},n.showForm=function(e){var t=e.values,a=e.errors,n=e.handleChange,s=e.touched,o=e.handleSubmit,l=e.isSubmitting;return r.a.createElement("form",{onSubmit:o},r.a.createElement("div",{className:"loginRegisterTitle"}),r.a.createElement("div",{className:"emailfield"},r.a.createElement("input",{type:"email",name:"email",onChange:n,value:t.email,className:a.email&&s.email?"form-control is-invalid":"form-control",placeholder:"Email",style:{marginTop:"25px"}}),a.email&&s.email?r.a.createElement("small",{id:"passwordHelp",className:"text-danger"},a.email):null),r.a.createElement("div",{className:"contactfield"},r.a.createElement("textarea",{rows:"5",type:"text",name:"body",onChange:n,value:t.body,className:a.body&&s.body?"form-control is-invalid":"form-control",placeholder:"Send us a note here.",style:{marginTop:"25px"}}),a.body&&s.body?r.a.createElement("small",{id:"bodyHelp",className:"text-danger"},a.body):null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s8 offset-s2 center"},r.a.createElement("button",{type:"submit",disabled:l,className:"btn btn-primary",style:{marginTop:"25px"}},"Send"))))},n.state={alert:null,loaded:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"contactdiv"},r.a.createElement(B,null),r.a.createElement("img",{src:"https://i.redd.it/hi1bli2irmg41.jpg",alt:"poster",style:{width:"100%"}}),r.a.createElement(b.a,{style:{backgroundColor:"#eee",paddingBottom:"7%"}},r.a.createElement(g.a,{md:12,className:"justify-content-md-center"},r.a.createElement("h3",{style:{textAlign:"center"}},"Contact Us")),r.a.createElement(g.a,null,r.a.createElement(k.a,{md:6,className:"justify-content-center"},r.a.createElement("p",{style:{marginTop:"7%"}},"We value loyal fans like you and our team wants to ensure that we are providing you with the highest quality of LastPlay's shows and content. While simultaneously providing a high standard in customer service. No detail goes unnoticed at LastPlay and this is thanks to your help! If you have any questions or need assistance, please fill out the form and one of our customer support associates will be in touch with you soon.")),r.a.createElement(k.a,{md:6,className:"justify-content-center"},r.a.createElement(p.a,{initialValues:{email:"",body:"",username:localStorage.userName},onSubmit:function(t,a){var n=a.setSubmitting;e.submitForm(t,e.props.history),n(!1)},validationSchema:Q},(function(t){return e.showForm(t)})))),r.a.createElement(g.a,{style:{paddingTop:"10%"},className:"justify-content-md-center"},r.a.createElement("span",{style:{fontStyle:"italic",fontSize:"12px"}},"\u201cEverything in this world is magic, except for the magician.\u201d \u2014 Dr. Ford"))))}}]),a}(n.Component),ee=d.a().shape({password:d.c().required("New Password is required"),confirm_password:d.c().oneOf([d.b("password"),null],"Both password need to be the same")}),te=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).submitForm=function(){var e=Object(x.a)(S.a.mark((function e(t,a,n){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.put("http://localhost:8080/password/reset?token="+n,t).then((function(e){"success"===e.data.result?v()("Success!",e.data.message,"success").then((function(e){a.push("/login")})):"error"===e.data.result&&v()("Error!",e.data.message,"error")})).catch((function(e){console.log(e),v()("Error!","Unexpected error","error")}));case 2:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),n.showForm=function(e){var t=e.values,a=e.errors,n=e.touched,s=e.handleChange,o=e.handleSubmit,l=(e.onSubmit,e.isSubmitting);e.setFieldValue;return r.a.createElement("div",null,r.a.createElement(g.a,{className:"justify-content-center"},r.a.createElement("h1",null,r.a.createElement("b",null,"Last"),"Play",r.a.createElement("span",{style:{fontSize:"14px"}},".tv"))),r.a.createElement(g.a,{className:"justify-content-center"},r.a.createElement("img",{src:"/logo100.png",alt:"logo"})),r.a.createElement("form",{style:{marginTop:"5%"},onSubmit:o},r.a.createElement("span",{style:{textAlign:"Center"}},"You have requested to change your password. Please enter your new password below."),r.a.createElement(g.a,{className:"justify-content-center"},r.a.createElement("input",{name:"password",onChange:s,value:t.password,type:"password",className:a.password&&n.password?"form-control is-invalid":"form-controls2",id:"password",placeholder:"Enter new password"}),a.password&&n.password?r.a.createElement("small",{id:"passwordHelp",class:"text-danger"},a.password):null),r.a.createElement(g.a,{className:"justify-content-center"},r.a.createElement("input",{onChange:s,value:t.confirm_password,type:"password",className:a.confirm_password&&n.confirm_password?"form-control is-invalid":"form-controls2",id:"confirm_password",name:"confirm_password  ",placeholder:"Enter password again"}),a.confirm_password&&n.confirm_password?r.a.createElement("small",{id:"passwordHelp",class:"text-danger"},a.confirm_password):null)),r.a.createElement(g.a,{className:"justify-content-center"},r.a.createElement("button",{type:"submit",disabled:l,className:"btn btn-primary",style:{marginTop:"25px"}},"Send")))},n.state={response:{},error_message:null,avatar:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(b.a,null,r.a.createElement(p.a,{initialValues:{password:""},onSubmit:function(t,a){var n=a.setSubmitting;e.submitForm(t,e.props.history,e.props.match.params.token),n(!1)},validationSchema:ee},(function(t){return e.showForm(t)})))}}]),a}(n.Component),ae=d.a().shape({username:d.c().required("Username is Required")}),ne=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).submitForm=function(e,t){f.a.post("http://localhost:3000/password/reset",e).then((function(e){console.log(e),"success"===e.data.result?v()("Success!",e.data.message,"success").then((function(e){})):"error"===e.data.result&&v()("Error!",e.data.message,"error")})).catch((function(e){console.log(e),v()("Error!","Unexpected error","error")}))},n.showForm=function(e){var t=e.values,a=e.errors,n=e.touched,s=e.handleChange,o=e.handleSubmit,l=e.isSubmitting;return r.a.createElement("div",null,r.a.createElement(g.a,{className:"justify-content-center"},r.a.createElement("h1",null,r.a.createElement("b",null,"Last"),"Play",r.a.createElement("span",{style:{fontSize:"14px"}},".tv"))),r.a.createElement(g.a,{className:"justify-content-center"},r.a.createElement("img",{src:"/logo100.png",alt:"logo"})),r.a.createElement(g.a,{className:"justify-content-center",style:{marginTop:"5%"}},r.a.createElement("form",{onSubmit:o},r.a.createElement("label",{htmlFor:"username"},"Confirm your username and we will send you instructions to reset your password."),r.a.createElement("input",{style:{textAlign:"center"},onChange:s,value:t.username,type:"username",className:a.username&&n.username?"form-control is-invalid":"form-controls",id:"username",placeholder:"Username"}),a.username&&n.username?r.a.createElement("small",{id:"passwordHelp",class:"text-danger"},a.username):null,r.a.createElement(g.a,{className:"justify-content-center"},r.a.createElement("button",{type:"submit",disable:l,class:"btn btn-primary"},"Request new password")))))},n.state={response:{},error_message:null},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(b.a,null,r.a.createElement(p.a,{initialValues:{username:""},onSubmit:function(t,a){var n=a.setSubmitting;e.submitForm(t,e.props.history),n(!1)},validationSchema:ae},(function(t){return e.showForm(t)})))}}]),a}(n.Component),re=function(e){var t=e.component,a=Object(u.a)(e,["component"]);return r.a.createElement(C.b,Object.assign({},a,{render:function(e){return null!=localStorage.getItem("TOKEN_KEY")===!0?r.a.createElement(t,e):r.a.createElement(C.a,{to:"/login"})}}))},se=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentWillUpdate",value:function(e,t){console.log("update")}},{key:"render",value:function(){return r.a.createElement(y.a,null,r.a.createElement(C.d,null,r.a.createElement("div",null,r.a.createElement(C.b,{exact:!0,path:"/",component:L}),r.a.createElement(C.b,{path:"/register",component:j}),r.a.createElement(C.b,{path:"/login/:notify?",component:L}),r.a.createElement(C.b,{path:"/password/reset/:token",component:te}),r.a.createElement(C.b,{path:"/password/forgot",component:ne}),r.a.createElement(re,{path:"/dashboard",component:K}),r.a.createElement(re,{path:"/contact",component:Z}),r.a.createElement(re,{exact:!0,path:"/tv/:id",component:$}))))}}]),a}(n.Component),oe=a(34);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(oe.a)();o.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,t,a){}},[[207,1,2]]]);
//# sourceMappingURL=main.8995359d.chunk.js.map