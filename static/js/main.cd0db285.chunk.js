(this.webpackJsonpproject5=this.webpackJsonpproject5||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},21:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),l=(n(21),n(9)),i=n(10),u=n(15),E=n(13),s=n(4),m=n(12),d=n.n(m),b=function(e){Object(u.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={text:"",date:new Date},e.remindermap=function(){return e.props.y.map((function(t){return r.a.createElement("div",{key:t.id,className:"bigkey"},r.a.createElement("h3",null,"reminder name : ",t.text),r.a.createElement("h3",null,"reminder time : ",d()(new Date(t.date)).fromNow()),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.props.REMOVEREMINDER(t.id)}},"DELETE REMINDER ",t.text))}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"bigparent"},r.a.createElement("h1",{className:"title"},"REMINDER APP"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"enter the reminder",onChange:function(t){return e.setState({text:t.target.value})},value:this.state.text}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"datetime-local",onChange:function(t){return e.setState({date:t.target.value})},value:this.state.date}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"brn btn-primary",onClick:function(){e.props.ADDREMINDER(e.state.text,e.state.date),e.setState({text:"",date:""})}},"ADD REMINDER"),r.a.createElement("br",null),r.a.createElement("br",null),this.remindermap(),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.props.CLEARREMINDER()}},"CLEAR REMINDERS"))))}}]),n}(a.Component);var p=Object(s.b)((function(e){return{y:e}}),{ADDREMINDER:function(e,t){var n={type:"ADD",text:e,date:t};return console.log("action",n),n},REMOVEREMINDER:function(e){var t={type:"REMOVE",id:e};return console.log("action",t),t},CLEARREMINDER:function(){return{type:"CLEAR"}}})(b);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=n(3),h=n(14),v=n(1),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;e=Object(v.read_cookie)("xcookie");var n=[];return"ADD"===t.type?(n=[].concat(Object(h.a)(e),[{text:t.text,date:t.date,id:Math.random()}]),Object(v.bake_cookie)("xcookie",n),n):"REMOVE"===t.type?(n=e.filter((function(e){return e.id!==t.id})),Object(v.bake_cookie)("xcookie",n),n):"CLEAR"===t.type?(n=[],Object(v.bake_cookie)("xcookie",n),n):e},D=(n(29),Object(R.b)(f));o.a.render(r.a.createElement(s.a,{store:D},r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.cd0db285.chunk.js.map