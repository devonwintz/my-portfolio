(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],[,,,,,,,,,,,,function(A,e){var t=function(A,e,t){this.toRotate=e,this.el=A,this.loopNum=0,this.period=parseInt(t,8)||1500,this.txt="",this.tick(),this.isDeleting=!1};t.prototype.tick=function(){var A=this.loopNum%this.toRotate.length,e=this.toRotate[A];this.isDeleting?this.txt=e.substring(0,this.txt.length-1):this.txt=e.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var t=this,a=300-100*Math.random();this.isDeleting&&(a/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,a=500):(a=this.period,this.isDeleting=!0),setTimeout((function(){t.tick()}),a)},window.onload=function(){for(var A=document.getElementsByClassName("txt-rotate"),e=0;e<A.length;e++){var a=A[e].getAttribute("data-rotate"),n=A[e].getAttribute("data-period");a&&new t(A[e],JSON.parse(a),n)}var r=document.createElement("style");r.type="text/css",r.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #666 }",document.body.appendChild(r)}},,,function(A,e,t){A.exports=t.p+"static/media/rsz_esi-laptop.17d095ff.png"},function(A,e,t){A.exports=t.p+"static/media/North West Investments Security Inc.4add67de.png"},function(A,e,t){A.exports=t.p+"static/media/true-radiance.faeb4d14.png"},function(A,e,t){A.exports=t.p+"static/media/Nders.260fcd70.png"},function(A,e,t){A.exports=t.p+"static/media/Ollo's Barbershop.97d442f5.png"},function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAALuUlEQVR4nO3d26vlZR3H8c/TjGkjeRitsEAJC+xkEGp0EUHJIGUkdBPYEZQIFewi6KLDVUX9A10k0U1WUJBGVxHeGhRFB0roAGYimmXNmGk6TxczsNvtvYbG9lrPbz3f1wt+7Mv9Yebi917PWr+1EwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEZqowcAc+q9X5Lkiv+6Lk9yNMmRFdehJM8m+ddZ/HwmyZNJTiQ5fvrnqut4kieSPJ7k8dba0+v7F4BlEwDA/6X33pJcleS609e1SV6b5PyRu/5HT+Z0DJy+/pLkz0keSfKn/7xaa38dNRLWQQAAZ+X0Df/NSW5M8pYk1yS5YOiozbi+tfbD0SPgoBwePQBYvt77uUnenuSmJO9OctnYRUN4wcRUBACwUu/9HUluTfLOJC8ePAc4QAIA2KX3fn6SDyS5PcnrBs8B1kQAAEmS3vsrk9yR5CNJLho8B1gzAQDF9d4vTfLZJB9Ncs7gOcCGCAAoqvd+XpI7k3wyyYWD5wAbJgCgoN77zUk+n1NfzAMUJACgkN77y5J8Nac+1Q8U9oLRA4DN6L3fmOTncfMHIgBger33I733Lyf5XpKXjt4DLIO3AGBivfdXJbk3yWtGbwGWRQDApHrv1yb5fpKXjN4CLI+3AGBCvfd3Jbkvbv7ACgIAJtN7vyXJPdmOP8cLDCIAYCK9908k+UqSQ6O3AMsmAGASvfcPJfnS6B3AdhAAMIHe+w1J7hq9A9geAgC2XO/9miTfjqd6gLMgAGCL9d6vzKlH/XzgDzgrAgC2VO/93CTfiW/3A54HAQDb6wtJ3jh6BLCdBABsod77sSR3jt4BbC8BAFum935pkq8laYOnAFtMAMD2uSvJZaNHANtNAMAW6b2/N8l7Ru8Atp8AgC3Rez8nyRdH7wDmIABge9yW5MrRI4A5CADYAr33i5N8evQOYB4CALbDp5IcHT0CmIcAgIXrvV+e5PbRO4C5CABYvtuTvHD0CGAuAgAWrPd+JMkto3cA8xEAsGw3J7l49AhgPgIAlu2O0QOAOQkAWKje+9uSvGH0DmBOAgCW67bRA4B5CQBYoNMf/rtx9A5gXgIAlulYkheNHgHMSwDAMt00egAwNwEAC9N7PxTH/8CaCQBYnrcmuWT0CGBuAgCWx/E/sHYCAJbn2OgBwPwEACxI7/2CJFeN3gHM7/DoAcAu1yZpo0cs1MkkTyQ5nuSpJM8meW6Dv//4Bn8XrJ0AgGW5bvSABfh7kvuT/CTJL5P8NsmDSR5trZ0cOQxmIgBgWaoGwENJvpHku0l+1Frb5Ct7KEkAwLJUC4AfJ/lcknu9uofNEgCwEL33VyR5+egdG/Joko+31u4ePQSqEgCwHFePHrAh9yV5X2vt0dFDoDKPAcJyXDF6wAbcneSYmz+M5wQAlmP2ALgnyQd9wA+WwQkALMflowes0QNJ3u/mD8shAGA5Zg2AnuTDrbUTo4cAOwQALMesbwF8vbV2/+gRwG6+chQWoPd+OMk/kxwavWUNXt9a+9XoEcBuTgBgGS7LnDf/X7j5wzIJAFiGi0YPWJNvjR4A7E8AwDIcGT1gTb45egCwPwEAyzBjAPystfa70SOA/QkAWIYZA+CnowcAqwkAWIYZA+A3owcAqwkAWIYZA+DXowcAqwkAWIYZA8AJACyYAIBlOG/0gAN2MsnvR48AVhMAsAyzfQnQU/7wDyybAADW4cnRA4AzEwDAOvxj9ADgzAQAsA5OAGDhBACwDk4AYOEEALAOJ0cPAM5MAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoCABAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAUJAAAoSAAAQEECAAAKEgAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoKDDowfAQeq9H03yptE7nodXjx5wwC7svd8wesQBeaC19ofRI+CgtdED4CD13q9P8oPRO5jKra21u0aPgIPmLQCAM/vj6AGwDgIA4MwEAFMSAABnJgCYkgAAWO1vrbXjo0fAOggAgNUeHD0A1kUAAKzm+J9pCQCA1QQA0xIAAKsJAKYlAABWEwBMSwAArCYAmJYAAFjNUwBMSwAA7K8neWj0CFgXAQCwv8daa0+PHgHrIgAA9uf9f6YmAAD2JwCYmgAA2J8AYGoCAGB/ngBgagIAYH9OAJiaAADYnwBgagIAYH8CgKkJAIC9nkvy8OgRsE4CAGCvh1trz40eAeskAAD2cvzP9AQAwF4CgOkJAIC9BADTEwAAewkApicAAPYSAExPAADs5WuAmZ4AANjLCQDTEwAAuz2d5LHRI2DdBADAbg+11vroEbBuAgBgN8f/lCAAAHYTAJQgAAB28wQAJQgAgN2cAFCCAADYTQBQggAA2E0AUIIAANhNAFCCAADYcby19sToEbAJAgBgh1f/lCEAAHYIAMoQAAA7BABlCACAHQKAMgQAwA4BQBkCAGCHrwGmDAEAsMMJAGUIAIAdAoAyBADAKY+31p4aPQI2RQAAnOLVP6UIAIBTBAClCACAUzwBQClt9AA4SL33FyY5OnrH8/CxJJ8ZPeIAPZbk6tEjztKJ1tqJ0SNgUw6PHgAHqbX2TJJHRu84W73346M3HLCTrbWt+3+ASrwFAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAUJAAAoSAAAQEECAAAKEgAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoCABAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAUJAAAoSAAAQEECAAAKEgAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoCABAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAUJAAAoSAAAQEECAAAKEgAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoCABAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAUJAAAoSAAAQEECAAAKEgAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoCABAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAUJAAAoSAAAQEECAAAKEgAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoCABAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALBh/wZrWETWHrWd5AAAAABJRU5ErkJggg=="},function(A,e){A.exports="data:image/png;base64,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"},,,,function(A,e,t){A.exports=t(37)},,,,,function(A,e,t){},function(A,e,t){},,,,,,function(A,e,t){"use strict";t.r(e);var a=t(0),n=t.n(a),r=t(14),s=t.n(r),l=(t(30),t(22)),o=t(1),c=(t(12),function(){return n.a.createElement("div",{className:"container-fluid header"},n.a.createElement("div",{className:"row hero-text"},n.a.createElement("div",{className:"col-md-12 mt-5 intro"},"Hey, there"),n.a.createElement("div",{className:"col-md-12 intro"},"I'm"),n.a.createElement("div",{className:"col-md-12 my-name"},"DEVON WINTZ"),n.a.createElement("div",{className:"col-md-12 mb-5 intro"},"A Freelance",n.a.createElement("span",{class:"txt-rotate","data-period":"2000","data-rotate":'[ " Web Developer.", " Designer." ]'}))))}),i=t(24),g=t(15),m=t.n(g),w=t(16),B=t.n(w),E=t(17),d=t.n(E),Q=t(18),C=t.n(Q),u=t(19),J=t.n(u),v=function(){var A=Object(a.useState)(""),e=Object(i.a)(A,2),t=e[0],r=e[1];return n.a.createElement("div",{className:"container content"},n.a.createElement("div",{className:"row about-me-content",id:"about-me"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"heading"},"Some Words About Me",n.a.createElement("hr",{style:{backgroundColor:"#000000"}}))),n.a.createElement("div",{className:"col-md-6 mt-3 content"},"I am Devon Wintz, a Front-end Web Developer and UI/UX enthusiast from Georgetown, Guyana. I create custom websites to help businesses and individuals do better online. I primarily use JavaScript and its associated libriaries and frameworks such as Vue, React, jQuery, etc, but picking up a new framework or language is not a problem.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("span",{style:{fontWeight:"bold"}},"Goal: "),n.a.createElement("span",null,"To help start-ups, small businesses and individuals achieve high quality websites and expectional user experience."),n.a.createElement("br",null),n.a.createElement("button",{className:"btn mt-5",style:{borderColor:"#1c2331"}},n.a.createElement("a",{href:"https://drive.google.com/file/d/1R0YeP2WiEFDYXr96UqSCSQVrzQfQ6u5h/view?usp=sharing++",download:!0,rel:"noopener noreferrer",target:"_blank"},"Download CV"))),n.a.createElement("div",{className:"col-md-6 about-me-progress mt-3"},n.a.createElement("div",{className:"skills mt-4"},"Skills",n.a.createElement("hr",{style:{backgroundColor:"#000000"}})),n.a.createElement("span",null,"HTML"),n.a.createElement("div",{className:"progress mb-2",style:{textAlign:"center"}},n.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"90%",fontSize:"100%",backgroundColor:"#1c2331"},"aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100"},"90%")),n.a.createElement("span",null,"CSS"),n.a.createElement("div",{className:"progress mb-2",style:{textAlign:"center"}},n.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"85%",fontSize:"100%",backgroundColor:"#1c2331"},"aria-valuenow":"85","aria-valuemin":"0","aria-valuemax":"100"},"85%")),n.a.createElement("span",null,"JavaScript"),n.a.createElement("div",{className:"progress mb-2",style:{textAlign:"center"}},n.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"80%",fontSize:"100%",backgroundColor:"#1c2331"},"aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100"},"80%")),n.a.createElement("span",null,"CMS: WordPress, Drupal, Joomla"),n.a.createElement("div",{className:"progress mb-2",style:{textAlign:"center"}},n.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"70%",fontSize:"100%",backgroundColor:"#1c2331"},"aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100"},"85%")),n.a.createElement("span",null,"Photoshop"),n.a.createElement("div",{className:"progress mb-2",style:{textAlign:"center"}},n.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"50%",fontSize:"100%",backgroundColor:"#1c2331"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"},"50%")))),n.a.createElement("div",{className:"row latest-work",id:"my-work"},n.a.createElement("div",{className:"col-md-12 mt-4"},n.a.createElement("div",{className:"heading"},"My Work",n.a.createElement("hr",{style:{backgroundColor:"#000000"}})),n.a.createElement("div",{className:"mb-5",style:{textAlign:"center",fontStyle:"italic"}},"Click on the two options below to view some of my work.")),n.a.createElement("div",{className:"col-md-12 btn-group btn-toggle "},["Custom Websites & WordPress Themes","Flyers & Business Cards Designs"].map((function(A){return n.a.createElement("button",{type:"button",className:"btn btn-lg btn-default",key:A,onClick:function(){return r(A)}},"Custom Websites & WordPress Themes"===A&&n.a.createElement("div",null,n.a.createElement("span",{style:{fontWeight:"bold"}},"Web Design & Development"),n.a.createElement("br",null)," ",n.a.createElement("span",{style:{fontSize:"85%"}},"Custom-Built Websites & Custom-Built WordPress Themes")),"Flyers & Business Cards Designs"===A&&n.a.createElement("div",null,n.a.createElement("span",{style:{fontWeight:"bold"}},"Graphic Designs"),n.a.createElement("br",null)," ",n.a.createElement("span",{style:{fontSize:"85%"}},"Logo, Flyer/Poster & Business Card Designs")))}))),n.a.createElement("div",{className:"row latest-work-img mt-5"},"Custom Websites & WordPress Themes"===t&&n.a.createElement("div",{className:"websites"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 websites",style:{textAlign:"center"}},n.a.createElement("figure",null,n.a.createElement("a",{href:"https://ecosolutionsfurniture.com",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("img",{src:m.a,alt:"esi-screen-of-website",width:"80%"})),n.a.createElement("figcaption",null,"Eco-solutions Furniture Inc."))))),"Flyers & Business Cards Designs"===t&&n.a.createElement("div",{className:"flyers-business-cards"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6",style:{textAlign:"center"}},n.a.createElement("figure",null,n.a.createElement("a",{href:"https://drive.google.com/file/d/1nROYrcMp6J4cv4hogTMAPfbaitGabhju/preview",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("img",{src:B.a,alt:"nwisi-flyer",width:"80%"})),n.a.createElement("figcaption",null,"North West Investments Security Inc. (Flyer)"))),n.a.createElement("div",{className:"col-md-6",style:{textAlign:"center"}},n.a.createElement("figure",null,n.a.createElement("a",{href:"https://drive.google.com/file/d/1kydlM-wgCbssIak-3e9n2CnNWKNL43Y1/preview",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("img",{src:d.a,alt:"tr-business-card",width:"80%"})),n.a.createElement("figcaption",null,"True Radiance: Makeup Artist (Business Card)"))),n.a.createElement("div",{className:"col-md-6",style:{textAlign:"center"}},n.a.createElement("figure",null,n.a.createElement("a",{href:"https://drive.google.com/file/d/1PGMgAs2-VBaDVVBN5iX7r1hvyYQmlZdx/preview",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("img",{src:C.a,alt:"nders-logo",width:"80%"})),n.a.createElement("figcaption",null,"NDERS (Logo)"))),n.a.createElement("div",{className:"col-md-6",style:{textAlign:"center"}},n.a.createElement("figure",null,n.a.createElement("a",{href:"https://drive.google.com/file/d/1tezld61ucj4xgEtyUr8-syJAorIftXz-/preview",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("img",{src:J.a,alt:"ollo's-business-card",width:"80%"})),n.a.createElement("figcaption",null,"Ollo's Barbershop (Business Card)"))))))))},k=t(20),f=t.n(k),D=t(21),I=t.n(D),b=function(){return n.a.createElement("div",{className:"container-fluid footer"},n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"name"},"Devon Wintz"))),n.a.createElement("div",{className:"row quote"},n.a.createElement("div",{className:"col-md-12"},'"Simplicity is a precondition for reliability. While being able to control complexity is the prerequisite for arriving at simplicity."',n.a.createElement("hr",null))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},"\xa9 All Rights Reserved By Devon Wintz"),n.a.createElement("div",{className:"col-md-6 social-media-links"},n.a.createElement("a",{href:"/https://www.facebook.com/devon.winston.37"},n.a.createElement("img",{src:f.a,alt:"fb-icon",width:"4%"})),n.a.createElement("a",{href:"/https://www.linkedin.com/in/devon-wintz-719984104/",className:"ml-2"},n.a.createElement("img",{src:I.a,alt:"linkedin-icon",width:"3%"})))))};t(31);var h=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(l.a,null,n.a.createElement("div",{className:""},n.a.createElement(c,null),n.a.createElement(v,null),n.a.createElement(b,null)),n.a.createElement(o.c,null,n.a.createElement(o.a,{path:"/wp-templates",component:b}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(A){A.unregister()})).catch((function(A){console.error(A.message)}))}],[[25,1,2]]]);
//# sourceMappingURL=main.8d1e6675.chunk.js.map