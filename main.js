(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,s="millisecond",r="second",i="minute",a="hour",o="day",u="week",c="month",h="quarter",d="year",l="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},y={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+v(s,2,"0")+":"+v(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(s,c),i=n-r<0,a=e.clone().add(s+(i?-1:1),c);return+(-(s+(n-r)/(i?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:u,d:o,D:l,h:a,m:i,s:r,ms:s,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",M={};M[g]=p;var w=function(t){return t instanceof E},S=function t(e,n,s){var r;if(!e)return g;if("string"==typeof e){var i=e.toLowerCase();M[i]&&(r=i),n&&(M[i]=n,r=i);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var o=e.name;M[o]=e,r=o}return!s&&r&&(g=r),r||!s&&g},b=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new E(n)},D=y;D.l=S,D.i=w,D.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var E=function(){function p(t){this.$L=S(t.locale,null,!0),this.parse(t)}var v=p.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(m);if(s){var r=s[2]-1||0,i=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)):new Date(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return D},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return b(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<b(t)},v.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,s=!!D.u(e)||e,h=D.p(t),f=function(t,e){var r=D.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return s?r:r.endOf(o)},m=function(t,e){return D.w(n.toDate()[t].apply(n.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,p=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case d:return s?f(1,0):f(31,11);case c:return s?f(1,p):f(0,p+1);case u:var g=this.$locale().weekStart||0,M=($<g?$+7:$)-g;return f(s?v-M:v+(6-M),p);case o:case l:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case r:return m(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var n,u=D.p(t),h="set"+(this.$u?"UTC":""),f=(n={},n[o]=h+"Date",n[l]=h+"Date",n[c]=h+"Month",n[d]=h+"FullYear",n[a]=h+"Hours",n[i]=h+"Minutes",n[r]=h+"Seconds",n[s]=h+"Milliseconds",n)[u],m=u===o?this.$D+(e-this.$W):e;if(u===c||u===d){var $=this.clone().set(l,1);$.$d[f](m),$.init(),this.$d=$.set(l,Math.min(this.$D,$.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[D.p(t)]()},v.add=function(s,h){var l,f=this;s=Number(s);var m=D.p(h),$=function(t){var e=b(f);return D.w(e.date(e.date()+Math.round(t*s)),f)};if(m===c)return this.set(c,this.$M+s);if(m===d)return this.set(d,this.$y+s);if(m===o)return $(1);if(m===u)return $(7);var p=(l={},l[i]=e,l[a]=n,l[r]=t,l)[m]||1,v=this.$d.getTime()+s*p;return D.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var s=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,h=function(t,n,r,i){return t&&(t[n]||t(e,s))||r[n].slice(0,i)},d=function(t){return D.s(i%12||12,t,"0")},l=n.meridiem||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:h(n.monthsShort,o,c,3),MMMM:h(c,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,u,2),ddd:h(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(i),HH:D.s(i,2,"0"),h:d(1),hh:d(2),a:l(i,a,!0),A:l(i,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return s.replace($,(function(t,e){return e||m[t]||r.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(s,l,f){var m,$=D.p(l),p=b(s),v=(p.utcOffset()-this.utcOffset())*e,y=this-p,g=D.m(this,p);return g=(m={},m[d]=g/12,m[c]=g,m[h]=g/3,m[u]=(y-v)/6048e5,m[o]=(y-v)/864e5,m[a]=y/n,m[i]=y/e,m[r]=y/t,m)[$]||y,f?g:D.a(g)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return M[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=S(t,e,!0);return s&&(n.$L=s),n},v.clone=function(){return D.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},p}(),O=E.prototype;return b.prototype=O,[["$ms",s],["$s",r],["$m",i],["$H",a],["$W",o],["$M",c],["$y",d],["$D",l]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,E,b),t.$i=!0),b},b.locale=S,b.isDayjs=w,b.unix=function(t){return b(1e3*t)},b.en=M[g],b.Ls=M,b.p={},b}()}},e={};function n(s){var r=e[s];if(void 0!==r)return r.exports;var i=e[s]={exports:{}};return t[s].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(484),e=n.n(t);const s=async t=>{const{method:e,path:n,data:s,headers:r={"Content-Type":"application/json"}}=t,i=`https://ws-chat-r75q.onrender.com${n}`;return(await fetch(i,{method:e,headers:r,body:JSON.stringify(s)})).json()};class r{constructor(t){this.entityPath=t}list(){return s({method:"GET",path:`/${this.entityPath}`})}get(t){return s({method:"GET",path:`/${this.entityPath}/${t}`})}create(t){return s({method:"POST",path:`/${this.entityPath}`,data:t})}update(t,e){return s({method:"PUT",path:`/${this.entityPath}/${t}`,data:e})}delete(t){return s({method:"DELETE",path:`/${this.entityPath}/${t}`})}}class i extends r{createNewUser(t){return this.create({name:t})}}class a{constructor(t){if(!(t instanceof HTMLElement))throw new Error("container is not HTMLElement");this.container=t,this.api=new i("users"),this.websocket=null,this.user=null}async init(t){this.user=t,this.bindToDOM(),this.registerEvents(),this.onEnterChatHandler()}bindToDOM(){this.container.innerHTML='\n      <div class="user-list">\n        <ul></ul>\n      </div>\n      <div class="chat-window">\n        <div class="messages"></div>\n        <form class="message-form">\n          <input class="message-input" type="text" placeholder="Type your message here">\n        </form>\n      </div>\n    ',this.messages=this.container.querySelector(".messages")}registerEvents(){window.addEventListener("beforeunload",(()=>this.exitChat())),this.container.querySelector(".message-form").addEventListener("submit",(t=>this.onSubmit(t)))}onSubmit(t){t.preventDefault(),this.sendMessage()}onEnterChatHandler(){this.websocket=new WebSocket("wss://ws-chat-r75q.onrender.com"),this.subscribeOnEvents()}subscribeOnEvents(){this.websocket.addEventListener("open",(()=>a.handleOpen())),this.websocket.addEventListener("message",(t=>this.handleMessage(t))),this.websocket.addEventListener("close",(()=>a.handleClose())),this.websocket.addEventListener("error",(()=>a.handleError()))}sendMessage(){const t=this.getMessageInputValue();if(!t)return;const e={type:"send",message:{text:t,time:new Date},user:this.user};this.websocket.send(JSON.stringify(e)),this.clearMessageInput()}getMessageInputValue(){const t=this.container.querySelector(".message-input");return t?.value.trim()}clearMessageInput(){const t=this.container.querySelector(".message-input");t&&(t.value="")}renderMessage(t){let{user:n,message:s}=t;const{name:r}=n,{text:i,time:a}=s,o=r===this.user.name,u=document.createElement("div");u.classList.add("message",o&&"message-user");const c=e()(a).format("HH:mm DD.MM.YY"),h=o?"You":r;u.innerHTML=`\n      <div class="message-info">\n        <span>${h}</span>\n        <span class="timestamp">${c}</span>\n      </div>\n      <div class="text">${i}</div>\n    `,this.messages.append(u),this.scrollToBottom()}static handleOpen(){console.log("Connected to WebSocket server")}handleMessage(t){const e=JSON.parse(t.data);e.type||this.updateUserList(e),"send"===e.type&&this.renderMessage(e)}static handleClose(){console.log("Disconnected from WebSocket server")}static handleError(t){console.error(`Error: ${t}`)}exitChat(){const t={type:"exit",user:this.user};this.websocket.send(JSON.stringify(t))}updateUserList(t){this.container.querySelector(".user-list ul").innerHTML=t.map((t=>{const e=t.name===this.user.name;return`\n        <li class=${e?"you":""}>\n            <span class="label"></span>\n            <span class="user-nickname">${e?"You":t.name}</span>\n        </li>\n    `})).join("")}scrollToBottom(){this.messages.scrollTop=this.messages.scrollHeight}}class o{constructor(t){if(!(t instanceof HTMLElement))throw new Error("container is not HTMLElement");this.container=t,this.chatAPI=new i("new-user")}init(){this.render(),this.bindEvents()}render(){this.container.innerHTML='\n      <div id="modal" class="modal">\n        <div class="modal-content">\n            <h2>Choose a Nickname</h2>\n            <input type="text" id="nickname" class="nickname" placeholder="Nickname" />\n            <br />\n            <button id="submit">Продолжить</button>\n        </div>\n        <div class="error-container"></div>\n      </div>\n    '}bindEvents(){this.container.querySelector("#submit").addEventListener("click",this.handleSubmit.bind(this)),this.container.querySelector("#nickname").addEventListener("click",this.handleNicknameClick.bind(this))}async handleSubmit(){const t=this.container.querySelector("#nickname").value;if(t)try{const e=await this.chatAPI.createNewUser(t);"ok"===e.status?o.initializeChat(e.user):this.showError(e.message)}catch(t){this.showError("An error occurred")}else this.showError("Please enter a nickname")}handleNicknameClick(){this.hideError()}static async initializeChat(t){const e=new a(document.getElementById("root"));await e.init(t)}showError(t){const e=this.container.querySelector(".error-container");e.textContent=t,e.style.display="block"}hideError(){this.container.querySelector(".error-container").style.display="none"}}const u=document.querySelector(".chat-container");new o(u).init()})()})();
//# sourceMappingURL=main.js.map