(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{116:function(e,a){},118:function(e,a){},127:function(e,a,t){},128:function(e,a,t){},130:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(47),i=t.n(c),o=(t(67),t(2)),l=t(48),s=t.n(l),m=t(21),u=t.n(m),d=t(49),p=t(51),g=t(52),f=t.n(g),v=(t(127),function(){return r.a.createElement("header",{className:"dropShadow"},r.a.createElement("div",{className:"headerWrapper"},r.a.createElement("div",{className:"headerContainer flex"},r.a.createElement("div",{className:"headerLogoLinkWrapper"},r.a.createElement("div",{className:"headerLogoLink"},r.a.createElement("a",{href:"/"},r.a.createElement("div",{className:"headerLogo flex flex-row"},r.a.createElement("div",{className:"logoImg"},r.a.createElement("img",{src:f.a,alt:"Desucalls Logo"})))))),r.a.createElement("div",{className:"logout"},r.a.createElement("button",null,"Logout")))))});t(128);var b=function(){return r.a.createElement("footer",{className:"footerWrapper"},r.a.createElement("div",{className:"footerContainer"},r.a.createElement("div",{className:"disclaimer"},"Debes permitir el acceso a video y audio para realizar llamadas.",r.a.createElement("br",null),"Desucalls no almacena ning\xfan dato en sus servidores."),r.a.createElement("div",{className:"self"},"Made with ",r.a.createElement("span",{role:"img","aria-label":"heart-emoji"},"\u2764\ufe0f")," by ",r.a.createElement("a",{href:"https://www.instagram.com/crk667/",target:"_blank",rel:"noopener noreferrer"},"Desu"),".")))},E=t(53),h=t.n(E),w=t(54),k=t.n(w),j=t(55),N=t.n(j),x=t(56),y=t.n(x),O=t(57),C=t.n(O),S=t(58),z=t.n(S),D=t(59),T=t.n(D),V=t(60),q=t.n(V),I=t(61),L=t.n(I),B=new p.Howl({src:[L.a],loop:!0,preload:!0}),F=r.a.lazy((function(){return t.e(3).then(t.bind(null,133))}));var M=function(){var e,a,t,c,i,l=Object(n.useState)(""),m=Object(o.a)(l,2),p=m[0],g=m[1],f=Object(n.useState)({}),E=Object(o.a)(f,2),w=E[0],j=E[1],x=Object(n.useState)(),O=Object(o.a)(x,2),S=O[0],D=O[1],V=Object(n.useState)(!1),I=Object(o.a)(V,2),L=I[0],M=I[1],R=Object(n.useState)(""),A=Object(o.a)(R,2),P=A[0],U=A[1],W=Object(n.useState)(!1),_=Object(o.a)(W,2),J=_[0],H=_[1],$=Object(n.useState)(),G=Object(o.a)($,2),K=G[0],Q=G[1],X=Object(n.useState)(!1),Y=Object(o.a)(X,2),Z=Y[0],ee=Y[1],ae=Object(n.useState)(!1),te=Object(o.a)(ae,2),ne=te[0],re=te[1],ce=Object(n.useState)(""),ie=Object(o.a)(ce,2),oe=ie[0],le=ie[1],se=Object(n.useState)(!1),me=Object(o.a)(se,2),ue=me[0],de=me[1],pe=Object(n.useState)(""),ge=Object(o.a)(pe,2),fe=ge[0],ve=ge[1],be=Object(n.useState)(!1),Ee=Object(o.a)(be,2),he=Ee[0],we=Ee[1],ke=Object(n.useState)(!1),je=Object(o.a)(ke,2),Ne=je[0],xe=je[1],ye=Object(n.useState)(!1),Oe=Object(o.a)(ye,2),Ce=Oe[0],Se=Oe[1],ze=Object(n.useState)(!1),De=Object(o.a)(ze,2),Te=De[0],Ve=De[1],qe=Object(n.useRef)(),Ie=Object(n.useRef)(),Le=Object(n.useRef)(),Be=Object(n.useRef)(),Fe=r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement("main",null,r.a.createElement("div",{className:"u-margin-top-xxlarge u-margin-bottom-xxlarge"},r.a.createElement("div",{className:"o-wrapper-l"},r.a.createElement("div",{className:"hero flex flex-column"},r.a.createElement("div",null,r.a.createElement("div",{className:"welcomeText"},"Bienvenido"),r.a.createElement("div",{className:"descriptionText"})),r.a.createElement("div",null,r.a.createElement("div",{className:"actionText"},"\xbfA quien quieres llamar, ",r.a.createElement("span",{className:Te?"username highlight copied":"username highlight",onClick:function(){navigator.clipboard.writeText(p),Ve(!0),setInterval((function(){Ve(!1)}),1e3)}},p),"?")),r.a.createElement("div",{className:"callBox flex"},r.a.createElement("input",{type:"text",placeholder:"Friend ID",value:oe,onChange:function(e){return le(e.target.value)},className:"form-input"}),r.a.createElement("button",{onClick:function(){return function(e){if(""===e||!w[e]||e===p)return ve("Creemos que el nombre de usuario ingresado es incorrecto. Vuelve a comprobarlo y vuelve a intentarlo."),void de(!0);navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(a){D(a),H(!0),U(e),qe.current&&(qe.current.srcObject=a);var t=new u.a({initiator:!0,trickle:!1,config:{iceServers:[{urls:"stun:numb.viagenie.ca",username:"sultan1640@gmail.com",credential:"98376683"},{urls:"turn:numb.viagenie.ca",username:"sultan1640@gmail.com",credential:"98376683"}]},stream:a});Be.current=t,t.on("signal",(function(a){Le.current.emit("callUser",{userToCall:e,signalData:a,from:p})})),t.on("stream",(function(e){Ie.current&&(Ie.current.srcObject=e)})),t.on("error",(function(e){Me()})),Le.current.on("callAccepted",(function(e){ee(!0),t.signal(e)})),Le.current.on("close",(function(){window.location.reload()})),Le.current.on("rejected",(function(){window.location.reload()}))})).catch((function(){ve("\xa1No puede realizar / recibir una llamada sin otorgar permisos de video y audio! Cambie su configuraci\xf3n para usar Desucalls."),de(!0)}))}(oe.toLowerCase().trim())},className:"primaryButton"},"Call")),r.a.createElement("div",null,"Para llamar a tu amigo, p\xeddele que abra desucalls en su navegador. ",r.a.createElement("br",null),"Env\xeda tu nombre de usuario (",r.a.createElement("span",{className:"username"},p),") y espere su llamada o ingrese el nombre de usuario al que desea contactar y presione llamar!"))))),r.a.createElement(b,null));function Me(){Be.current.destroy(),Le.current.emit("close",{to:P}),window.location.reload()}function Re(){S&&(we(!he),S.getAudioTracks()[0].enabled=he)}function Ae(){S&&(xe(!Ne),S.getVideoTracks()[0].enabled=Ne)}Object(n.useEffect)((function(){Le.current=s.a.connect("/"),Le.current.on("yourID",(function(e){g(e)})),Le.current.on("allUsers",(function(e){j(e)})),Le.current.on("hey",(function(e){M(!0),B.play(),U(e.from),Q(e.signal)}))}),[]),S&&(e=r.a.createElement(r.a.Fragment,null,r.a.createElement("video",{id:"userVideo",className:"userVideo",playsInline:!0,muted:!0,ref:qe,autoPlay:!0}))),Z&&Ce?a=r.a.createElement("video",{className:"partnerVideo cover",playsInline:!0,ref:Ie,autoPlay:!0}):Z&&!Ce&&(a=r.a.createElement(r.a.Fragment,null,r.a.createElement("video",{className:"partnerVideo",playsInline:!0,ref:Ie,autoPlay:!0}))),!L||Z||ne||(t=r.a.createElement("div",{className:"incomingCallContainer"},r.a.createElement("div",{className:"incomingCall flex flex-column"},r.a.createElement("div",null,r.a.createElement("span",{className:"callerID"},P)," is calling you!"),r.a.createElement("div",{className:"incomingCallButtons flex"},r.a.createElement("button",{name:"accept",className:"alertButtonPrimary",onClick:function(){return B.unload(),void navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){D(e),qe.current&&(qe.current.srcObject=e),ee(!0);var a=new u.a({initiator:!1,trickle:!1,stream:e});Be.current=a,a.on("signal",(function(e){Le.current.emit("acceptCall",{signal:e,to:P})})),a.on("stream",(function(e){Ie.current.srcObject=e})),a.on("error",(function(e){Me()})),a.signal(K),Le.current.on("close",(function(){window.location.reload()}))})).catch((function(){ve("\xa1No puede realizar / recibir una llamada sin otorgar permisos de video y audio! Cambie su configuraci\xf3n para usar Desucalls."),de(!0)}))}},"Accept"),r.a.createElement("button",{name:"reject",className:"alertButtonSecondary",onClick:function(){return B.unload(),re(!0),Le.current.emit("rejected",{to:P}),void window.location.reload()}},"Reject"))))),c=he?r.a.createElement("span",{className:"iconContainer",onClick:function(){return Re()}},r.a.createElement("img",{src:y.a,alt:"Unmute audio"})):r.a.createElement("span",{className:"iconContainer",onClick:function(){return Re()}},r.a.createElement("img",{src:N.a,alt:"Mute audio"})),i=Ne?r.a.createElement("span",{className:"iconContainer",onClick:function(){return Ae()}},r.a.createElement("img",{src:k.a,alt:"Resume video"})):r.a.createElement("span",{className:"iconContainer",onClick:function(){return Ae()}},r.a.createElement("img",{src:h.a,alt:"Stop audio"}));var Pe=r.a.createElement("span",{className:"iconContainer",onClick:function(){navigator.mediaDevices.getDisplayMedia({cursor:!0}).then((function(e){Be.current.replaceTrack(S.getVideoTracks()[0],e.getVideoTracks()[0],S),qe.current.srcObject=e,e.getTracks()[0].onended=function(){Be.current.replaceTrack(e.getVideoTracks()[0],S.getVideoTracks()[0],S),qe.current.srcObject=S}}))}},r.a.createElement("img",{src:C.a,alt:"Share screen"}));(function(){var e,a=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(a=!0),a})()&&(Pe=r.a.createElement(r.a.Fragment,null));var Ue,We=r.a.createElement("span",{className:"iconContainer",onClick:function(){return Me()}},r.a.createElement("img",{src:z.a,alt:"End call"}));return Ue=Ce?r.a.createElement("span",{className:"iconContainer",onClick:function(){Se(!1)}},r.a.createElement("img",{src:q.a,alt:"fullscreen"})):r.a.createElement("span",{className:"iconContainer",onClick:function(){Se(!0)}},r.a.createElement("img",{src:T.a,alt:"fullscreen"})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:ne||Z||J?"none":"block"}},Fe,r.a.createElement(d.a,{visible:ue,onClose:function(){return de(!1)},width:20,height:5,measure:"em",closeOnEsc:!0},r.a.createElement("div",null,fe)),t),r.a.createElement("div",{className:"callContainer",style:{display:ne||Z||J?"block":"none"}},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(F,null)),r.a.createElement("div",{className:"partnerVideoContainer"},a),r.a.createElement("div",{className:"userVideoContainer"},e),r.a.createElement("div",{className:"controlsContainer flex"},c,i,Pe,Ue,We)))};t(129);var R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,a,t){e.exports=t.p+"static/media/hanna-logo.png.9b9927d5.svg"},53:function(e,a,t){e.exports=t.p+"static/media/camera.299a8f67.svg"},54:function(e,a,t){e.exports=t.p+"static/media/camera-stop.85f8745d.svg"},55:function(e,a,t){e.exports=t.p+"static/media/microphone.a2374838.svg"},56:function(e,a,t){e.exports=t.p+"static/media/microphone-stop.09d0b6c2.svg"},57:function(e,a,t){e.exports=t.p+"static/media/share.e7b143c0.svg"},58:function(e,a,t){e.exports=t.p+"static/media/hang-up.1b1f0dc8.svg"},59:function(e,a,t){e.exports=t.p+"static/media/fullscreen.8f5e7921.svg"},60:function(e,a,t){e.exports=t.p+"static/media/minimize.fff27c21.svg"},61:function(e,a,t){e.exports=t.p+"static/media/ringtone.0be3c651.mp3"},62:function(e,a,t){e.exports=t(130)},67:function(e,a,t){},98:function(e,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.6a1bfd11.chunk.js.map