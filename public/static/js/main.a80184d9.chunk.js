(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,a){e.exports=a(66)},41:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),o=a.n(l),c=(a(41),a(12)),s=a(11),m=function(){return r.a.createElement("footer",{className:"bg-white p-4 border-t border-gray-500 flex flex-col text-center"},r.a.createElement("h2",{className:"text-xl p-2"},"FinnApp"),r.a.createElement("a",{href:"/",className:"p-2 "},"Ir a Inicio"),r.a.createElement("a",{href:"/savings-info",className:"p-2 "},"Accesar a nuestro simulador"),r.a.createElement("p",{className:"text-gray-800 p-4 "},"Desarrollado por Jorge Miguel Mendoza"),r.a.createElement("p",{className:"text-gray-800 p-4 "},"\xa9 2020 Todos los derechos reservados"))},i=a(2),u=Object(n.createContext)(),d=function(){var e=Object(n.useContext)(u),t=e.authenticatedUser,a=e.logout,l=Object(n.useState)("hidden"),o=Object(i.a)(l,2),c=o[0],s=o[1];return Object(n.useEffect)((function(){t()}),[]),r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"fixed w-full"},r.a.createElement("div",{className:"flex items-center justify-between flex-wrap bg-black p-6"},r.a.createElement("div",{className:"flex items-center flex-shrink-0 text-white mr-6"},r.a.createElement("p",null),r.a.createElement("img",{src:"./logo8.png",alt:"Logo"})),r.a.createElement("div",{onClick:function(){s("hidden"===c?"block":"hidden")},className:"block lg:hidden  "},r.a.createElement("button",{className:"flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white transition duration-800 "},r.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Menu")," ",r.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})," "))),r.a.createElement("div",{id:"div_navbar",className:"w-full flex-grow lg:flex lg:items-center lg:w-auto ".concat(c)},r.a.createElement("div",{className:"text-sm lg:flex-grow"}),r.a.createElement("div",null,r.a.createElement("a",{href:"/login",className:"block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"},"Login"),r.a.createElement("a",{href:"/sign-up",className:"block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"},"Signup"),r.a.createElement("a",{href:"/",className:"block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 btn btn-blank cerrar-sesion",onClick:function(){return a()}},"Cerrar Sesi\xf3n"))))))},p=function(){return r.a.createElement("div",{className:""},r.a.createElement(d,null),r.a.createElement(m,null))},f=a(5),g=a(1),b=Object(n.createContext)(),x=function(e){var t=Object(n.useContext)(b),a=t.alert,l=t.showAlert,o=Object(n.useContext)(u),s=o.msg,p=o.authenticated,x=o.login;Object(n.useEffect)((function(){p&&e.history.push("/savings-info"),s&&l(s.msg,s.cat)}),[s,p,e.history]);var h=Object(n.useState)({email:"",password:""}),E=Object(i.a)(h,2),v=E[0],w=E[1],y=v.email,N=v.password,O=function(e){w(Object(g.a)({},v,Object(f.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("div",{className:"container mx-auto bg-white px-6 pt-20"},r.a.createElement("h1",{className:"text-4xl text-center py-10 text-black"},r.a.createElement("strong",null,"Nos da gusto que regreses")),r.a.createElement("p",{className:"py-4 px-2 text-center text-gray-700"}," Ingresa tu correo y contrase\xf1a para accesar al simulador"),r.a.createElement("div",{className:"bg-white rounded-t-lg overflow-hidden p-4 flex justify-center "},r.a.createElement("form",{className:"w-full max-w-xl lg:items-center text-center",onSubmit:function(e){e.preventDefault(),""!==y.trim()&&""!==N.trim()?x({email:y,password:N}):l("Todos los campos son obligatorios","alerta-error")}},r.a.createElement("div",{className:"xl:flex lg:items-center my-6 "},r.a.createElement("div",{className:""},r.a.createElement("input",{className:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500",id:"email",name:"email",type:"email",placeholder:"Ingresa tu correo",value:y,onChange:O}))),r.a.createElement("div",{className:"xl:flex lg:items-center my-6"},r.a.createElement("div",{className:"xl:w-3/3"},r.a.createElement("input",{className:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500",id:"password",name:"password",type:"password",placeholder:"Ingresa tu password",value:N,onChange:O}))),r.a.createElement("div",{className:"xl:flex md:items-center py-8 "},r.a.createElement("div",{className:"xl:w-1/3 text-center"},r.a.createElement("button",{className:"shadow bg-black hover:bg-teal-500 hover:border-black focus:shadow-outline focus:outline-none text-white font-bold py-4 px-12 rounded-full",type:"submit"},"Iniciar Sesi\xf3n")),r.a.createElement("div",{className:"xl:w-1/3"})),a?r.a.createElement("div",{className:"alert ".concat(a.cat," text-red-500")},a.msg):null,r.a.createElement("p",{className:"py-6"},"No tienes una cuenta? ",r.a.createElement(c.b,{to:"/sign-up",className:"text-teal-500"}," Reg\xedstrate"))))),r.a.createElement(m,null))},h=function(e){var t=Object(n.useContext)(b),a=t.alert,l=t.showAlert,o=Object(n.useContext)(u),s=o.msg,p=o.authenticated,x=o.registerUser;Object(n.useEffect)((function(){p&&e.history.push("/savings-info"),s&&l(s.msg,s.cat)}),[s,p,e.history]);var h=Object(n.useState)({name:"",email:"",password:"",confirm:""}),E=Object(i.a)(h,2),v=E[0],w=E[1],y=v.email,N=v.password,O=v.name,j=v.confirm,k=function(e){w(Object(g.a)({},v,Object(f.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("div",{className:"container mx-auto bg-white px-6 pt-20"},r.a.createElement("h1",{className:"text-4xl text-center py-10 text-black"},r.a.createElement("strong",null,"\xa1Bienvenido!")),r.a.createElement("p",{className:" text-center text-gray-700"}," Ingresa tus datos de contacto"),r.a.createElement("div",{className:"bg-white rounded-t-lg overflow-hidden p-4 flex justify-center "},r.a.createElement("form",{className:"w-full max-w-sm",onSubmit:function(e){e.preventDefault(),""!==O.trim()&&""!==y.trim()&&""!==N.trim()&&""!==j.trim()?N.length<6?l("El password debe ser m\xednimo de 6 caracteres","alerta-error"):N===j?x({email:y,password:N,name:O}):l("Los passwords no son iguales","alerta-error"):l("Todos los campos son obligatorios","alerta-error")}},r.a.createElement("div",{className:"xl:flex md:items-center my-6 xl:flex xl:items-center"},r.a.createElement("div",{className:"md:w-3/3"},r.a.createElement("input",{className:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500",type:"text",id:"name",name:"name",placeholder:"Ingresa tu nombre",value:O,onChange:k}))),r.a.createElement("div",{className:"xl:flex md:items-center my-6 xl:flex xl:items-center"},r.a.createElement("div",{className:"md:w-3/3"},r.a.createElement("input",{className:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500",type:"email",id:"email",name:"email",placeholder:"Ingresa tu correo",value:y,onChange:k}))),r.a.createElement("div",{className:"xl:flex md:items-center my-6"},r.a.createElement("div",{className:"md:w-3/3"},r.a.createElement("input",{className:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500",type:"password",id:"password",name:"password",placeholder:"Ingresa tu password",value:N,onChange:k}))),r.a.createElement("div",{className:"xl:flex md:items-center my-6"},r.a.createElement("div",{className:"md:w-3/3"},r.a.createElement("input",{className:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500",type:"password",id:"confirm",name:"confirm",placeholder:"Repite tu password",value:j,onChange:k}))),r.a.createElement("div",{className:"xl:flex md:items-center py-8 "},r.a.createElement("div",{className:"xl:w-1/3 text-center"},r.a.createElement("button",{className:"shadow bg-black hover:bg-teal-500 hover:border-black focus:shadow-outline focus:outline-none text-white font-bold py-4 px-12 rounded-full",type:"submit"},"Enviar")),r.a.createElement("div",{className:"xl:w-1/3"})),a?r.a.createElement("div",{className:"alert ".concat(a.cat," text-red-500")},a.msg):null,r.a.createElement("p",{className:"py-6"}," Ya tienes una cuenta?",r.a.createElement(c.b,{to:"/login",className:"text-teal-500"}," Inicia sesi\xf3n"))))),r.a.createElement(m,null))},E=Object(n.createContext)(),v=function(e){var t=Object(n.useContext)(u),a=t.user,l=t.authenticatedUser,o=Object(n.useContext)(E),c=o.addForm,s=o.showError;Object(n.useEffect)((function(){l()}),[]);var p=Object(n.useState)({info:""}),b=Object(i.a)(p,2),x=b[0],h=b[1],v=x.info;return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("div",{className:"flex justify-center bg-white pt-20"},r.a.createElement("div",{className:"bg-white max-w-2xl m-4 p-8 rounded-t-lg overflow-hidden border-l border-r border-gray-400 lg:pt-64 flex justify-center overflow-hidden shadow-xl"},r.a.createElement("form",{className:"w-full items-center",onSubmit:function(t){(t.preventDefault(),""!==v)?(c(x)?e.history.push("/savings-percentage"):console.log("Could not redirect"),h({info:""})):s()}},r.a.createElement("p",{className:"text-center text-teal-500"},"Paso 1 de 6"),a?r.a.createElement("p",{className:"text-2xl my-8"},"Hola ",r.a.createElement("span",null,a.name)):null,r.a.createElement("p",{className:"text-center text-gray-700 px-1"},"A partir de aqu\xed comenzaremos a evaluar tu informaci\xf3n actual"),r.a.createElement("h2",{className:"text-center text-2xl py-4 mt-10 lg:min-w-8xl lg:my-20"},"\xbfDe cu\xe1nto es tu ahorro (ingresos - gastos) mensual? "),r.a.createElement("div",{className:" border-b border-b-2 border-teal-500 my-12 lg:my-40"},r.a.createElement("input",{className:"appearance-none bg-transparent border-none text-gray-700 mr-3 px-2 leading-tight focus:outline-none",type:"number",placeholder:"Eg. 10,000",name:"info",id:"info",value:v,onChange:function(e){h(Object(g.a)({},x,Object(f.a)({},e.target.name,e.target.value)))}})),r.a.createElement("div",{className:"text-center lg:my-48 py-10"},r.a.createElement("button",{className:" shadow bg-black focus:shadow-outline focus:outline-none text-white font-bold py-4  px-12 rounded-full",type:"submit"},"Siguiente"))))),r.a.createElement(m,null))},w=function(e){var t=Object(n.useContext)(u).authenticatedUser,a=Object(n.useContext)(E),l=a.updateForm,o=a.showError;Object(n.useEffect)((function(){t()}),[]);var c=Object(n.useState)({percentage:""}),s=Object(i.a)(c,2),p=s[0],b=s[1],x=p.percentage;return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("div",{className:"flex justify-center bg-white pt-20"},r.a.createElement("div",{className:"bg-white rounded-t-lg overflow-hidden border-l border-r border-gray-400 lg:pt-64 flex justify-center m-4 p-10 shadow-xl"},r.a.createElement("form",{className:"w-full max-w-5xl items-center",onSubmit:function(t){if(t.preventDefault(),""!==x){var a=localStorage.getItem("formId");l(a,p)&&e.history.push("/term"),b({percentage:""})}else o()}},r.a.createElement("p",{className:"text-center text-teal-500"},"Paso 2 de 6"),r.a.createElement("h2",{className:"text-center text-3xl py-10 lg:min-w-8xl lg:my-20"},"\xbfCu\xe1nto porcentaje de ese ahorro vas a invertir mensualmente? "),r.a.createElement("div",{className:" border-b border-b-2 border-teal-500 my-12 lg:my-40"},r.a.createElement("input",{className:"appearance-none bg-transparent border-none text-gray-700 mr-3 px-2 leading-tight focus:outline-none",type:"text",placeholder:"Eg. 50 %",name:"percentage",id:"percentage",value:x,onChange:function(e){b(Object(g.a)({},p,Object(f.a)({},e.target.name,e.target.value)))}})),r.a.createElement("div",{className:"text-center lg:my-48 pt-2"},r.a.createElement("button",{className:" shadow bg-black focus:shadow-outline focus:outline-none text-white font-bold py-4 my-10 px-12 rounded-full",type:"submit"},"Siguiente"))))),r.a.createElement(m,null))},y=function(e){var t=Object(n.useContext)(u).authenticatedUser,a=Object(n.useContext)(E),l=a.updateForm,o=a.showError;Object(n.useEffect)((function(){t()}),[]);var c=Object(n.useState)({term:""}),s=Object(i.a)(c,2),p=s[0],b=s[1],x=p.term;return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("div",{className:"flex justify-center bg-white pt-20"},r.a.createElement("div",{className:"bg-white rounded-t-lg overflow-hidden border-l border-r border-gray-400 lg:pt-64 flex justify-center m-4 p-10 shadow-xl"},r.a.createElement("form",{className:"w-full max-w-5xl items-center",onSubmit:function(t){if(t.preventDefault(),""!==x){var a=localStorage.getItem("formId");l(a,p)&&e.history.push("/invest-options"),b({term:""})}else o()}},r.a.createElement("p",{className:"text-center text-teal-500"},"Paso 3 de 6"),r.a.createElement("h2",{className:"text-center text-3xl py-4 mt-8 lg:min-w-8xl lg:my-20"},"\xbfInvertir\xe1s a corto, mediano o largo plazo?  "),r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"inline-block relative w-64 my-12 pt-2 text-center"},r.a.createElement("select",{className:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-6 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",type:"text",name:"term",id:"term",value:x,onChange:function(e){b(Object(g.a)({},p,Object(f.a)({},e.target.name,e.target.value)))}},r.a.createElement("option",null,"Corto plazo"),r.a.createElement("option",null,"Mediano plazo"),r.a.createElement("option",null,"Largo plazo")),r.a.createElement("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},r.a.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))))),r.a.createElement("div",{className:"text-center lg:my-48 py-2"},r.a.createElement("button",{className:" shadow bg-black focus:shadow-outline focus:outline-none text-white font-bold py-4 my-10 px-12 rounded-full",type:"submit"},"Siguiente"))))),r.a.createElement(m,null))},N=function(e){var t=Object(n.useContext)(u).authenticatedUser,a=Object(n.useContext)(E),l=a.updateForm,o=a.showError;Object(n.useEffect)((function(){t()}),[]);var c=Object(n.useState)({options:""}),s=Object(i.a)(c,2),p=s[0],b=s[1],x=p.options;return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("div",{className:"flex justify-center bg-white pt-20"},r.a.createElement("div",{className:"bg-white rounded-t-lg overflow-hidden border-l border-r border-gray-400 lg:pt-64 flex justify-center m-4 p-10 shadow-xl"},r.a.createElement("form",{className:"w-full max-w-5xl items-center",onSubmit:function(t){if(t.preventDefault(),""!==x){var a=localStorage.getItem("formId");l(a,p)&&e.history.push("/invest-value"),b({options:""})}else o()}},r.a.createElement("p",{className:"text-center text-teal-500"},"Paso 4 de 6"),r.a.createElement("h2",{className:"text-center text-3xl py-4 mt-8 lg:min-w-8xl lg:my-20"},"\xbfPara que te gustar\xeda invertir? "),r.a.createElement("div",{className:"text-center py-8"},r.a.createElement("div",{className:"inline-block relative w-64 my-10 text-center"},r.a.createElement("select",{className:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-6 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",type:"text",name:"options",id:"options",value:x,onChange:function(e){b(Object(g.a)({},p,Object(f.a)({},e.target.name,e.target.value)))}},r.a.createElement("option",null,"Enganche de un casa"),r.a.createElement("option",null,"Enganche de un coche"),r.a.createElement("option",null,"Viaje"),r.a.createElement("option",null,"Estudios"),r.a.createElement("option",null,"Otro")),r.a.createElement("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},r.a.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))))),r.a.createElement("div",{className:"text-center lg:my-48 py-2"},r.a.createElement("button",{className:" shadow bg-black focus:shadow-outline focus:outline-none text-white font-bold py-4 my-10 px-12 rounded-full",type:"submit"},"Siguiente"))))),r.a.createElement(m,null))},O=function(e){var t=Object(n.useContext)(u).authenticatedUser,a=Object(n.useContext)(E),l=a.updateForm,o=a.showError;Object(n.useEffect)((function(){t()}),[]);var c=Object(n.useState)({value:""}),s=Object(i.a)(c,2),p=s[0],b=s[1],x=p.value;return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("div",{className:"flex justify-center bg-white pt-20"},r.a.createElement("div",{className:"bg-white rounded-t-lg overflow-hidden border-l border-r border-gray-400 lg:pt-64 flex justify-center m-4 p-10 shadow-xl"},r.a.createElement("form",{className:"w-full max-w-5xl items-center",onSubmit:function(t){if(t.preventDefault(),""!==x){var a=localStorage.getItem("formId");l(a,p)&&e.history.push("/risk-level"),b({value:""})}else o()}},r.a.createElement("p",{className:"text-center text-teal-500"},"Paso 5 de 6"),r.a.createElement("h2",{className:"text-center text-3xl py-4 mt-8 lg:min-w-8xl lg:my-20"},"\xbfCu\xe1l es su valor aproximado? "),r.a.createElement("div",{className:" border-b border-b-2 border-teal-500 my-20 lg:my-40"},r.a.createElement("input",{className:"appearance-none bg-transparent border-none text-gray-700 mr-3 px-2 leading-tight focus:outline-none",type:"text",placeholder:"Eg. 100,000",name:"value",id:"value",value:x,onChange:function(e){b(Object(g.a)({},p,Object(f.a)({},e.target.name,e.target.value)))}})),r.a.createElement("div",{className:"text-center lg:my-48  pt-8"},r.a.createElement("button",{className:" shadow bg-black focus:shadow-outline focus:outline-none text-white font-bold py-4 my-10 px-12 rounded-full",type:"submit"},"Siguiente"))))),r.a.createElement(m,null))},j=function(e){var t=Object(n.useContext)(u).authenticatedUser,a=Object(n.useContext)(E),l=a.updateForm,o=a.showError;Object(n.useEffect)((function(){t()}),[]);var c=Object(n.useState)({risk:""}),s=Object(i.a)(c,2),p=s[0],b=s[1],x=p.risk;return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("div",{className:"flex justify-center bg-white pt-20"},r.a.createElement("div",{className:"bg-white rounded-t-lg overflow-hidden border-l border-r border-gray-400 lg:pt-64 flex justify-center m-4 p-10 shadow-xl"},r.a.createElement("form",{className:"w-full max-w-5xl items-center",onSubmit:function(t){if(t.preventDefault(),""!==x){var a=localStorage.getItem("formId");l(a,p)&&e.history.push("/loading-analysis"),b({risk:""})}else o()}},r.a.createElement("p",{className:"text-center text-teal-500"},"Paso 6 de 6"),r.a.createElement("h2",{className:"text-center text-3xl mt-8 py-2 lg:min-w-8xl lg:my-20"},"\xbfQu\xe9 tipo de rentabilidad te gustar\xeda obtener? "),r.a.createElement("p",{className:"text-gray-700 mt-10 text-md"},"Toma en cuenta que instrumentos con mayor rentabilidad son tambi\xe9n los que enfrentan mayor nivel de riesgo."),r.a.createElement("div",{className:"text-center mt-16"},r.a.createElement("div",{className:"inline-block relative w-64 text-center"},r.a.createElement("select",{className:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-6 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",type:"text",name:"risk",id:"risk",value:x,onChange:function(e){b(Object(g.a)({},p,Object(f.a)({},e.target.name,e.target.value)))}},r.a.createElement("option",null,"Rendimientos altos -  Riesgo alto"),r.a.createElement("option",null,"Rendimientos moderados - Riesgo moderado"),r.a.createElement("option",null,"Rendimientos bajos - Riesgo bajo")),r.a.createElement("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},r.a.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))))),r.a.createElement("div",{className:"text-center lg:my-48 pt-4 "},r.a.createElement("button",{className:" shadow bg-black focus:shadow-outline focus:outline-none text-white font-bold py-4 my-16 px-12 rounded-full",type:"submit"},"Enviar"))))),r.a.createElement(m,null))},k=function(e){e.project;return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("section",null,r.a.createElement("div",{className:"bg-white rounded-t-lg overflow-hidden border-l border-r border-gray-400 pt-24 mx-2 flex justify-center"},r.a.createElement("div",{className:"max-w-lg overflow-hidden shadow-lg"},r.a.createElement("div",{className:"svg-wrapper m-4 text-center"},r.a.createElement("svg",{className:"text-center",height:100,width:300,xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("rect",{className:"shape",height:100,width:300})),r.a.createElement("div",{className:"text-rec text-3xl font-bold duration-500 ease-in-out pl-4 pt-1 transform hover:-translate-y-1 hover:scale-110"},"Tu resultado financiero")),r.a.createElement("div",{className:"px-6 pt-4"},r.a.createElement("div",{className:"font-bold text-3xl text-teal-600 text-center mb-2"}),r.a.createElement("p",{className:"text-gray-800 text-xl mt-16 mb-10 text-base"},"Dado tu perfil y tu sentimiento de inversi\xf3n te sugerimos darle una hojeada a los siguientes instrumentos financieros: ")),r.a.createElement("div",{className:"px-6 "},r.a.createElement("p",{className:"inline-block bg-gray-200 rounded-m px-3 my-2 py-2 text-2xl font-semibold mr-2 transition duration-500 ease-in-out hover:bg-black hover:text-white transform hover:-translate-y-1 hover:scale-110"},"Acciones "),r.a.createElement("p",{className:"inline-block bg-gray-200 rounded-m px-3 my-2 py-2 text-2xl font-semibold mr-2 transition duration-500 ease-in-out hover:bg-black hover:text-white transform hover:-translate-y-1 hover:scale-110"},"Fondos de inversi\xf3n"),r.a.createElement("p",{className:"inline-block bg-gray-200 rounded-m px-3 my-2 py-2 text-2xl font-semibold mr-2 transition duration-500 ease-in-out hover:bg-black hover:text-white transform hover:-translate-y-1 hover:scale-110"},"Instrumentos de deuda"))))),r.a.createElement(m,null))},R=a(4),S=a.n(R),C=a(9),I=a(33),F=a.n(I).a.create({baseURL:"https://aqueous-forest-63575.herokuapp.com/"}),L=function(e){var t=Object(n.useContext)(E).getForms,a=Object(n.useState)({info:"",percentage:"",term:"",options:"",value:"",risk:""}),l=Object(i.a)(a,2),o=l[0],c=(l[1],function(){var a=Object(C.a)(S.a.mark((function a(n){var r,l,o;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=localStorage.getItem("formId"),l=localStorage.getItem("Info"),o=t(r,n),console.log("\xecnfoid",l),setTimeout((function(){o?e.history.push("/recommender-results"):console.log("Could not redirect")}),5e3);case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}());return Object(n.useEffect)((function(){c(o)}),[]),r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("div",{className:"p-20"}),r.a.createElement("div",{className:"max-w-sm rounded overflow-hidden shadow-lg px-24 pt-20 pb-48"},r.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 81 45",enableBackground:"new 0 0 81 45",xmlSpace:"preserve"},r.a.createElement("circle",{className:"circle1",fill:"#1ac3b3",cx:"13.5",cy:"22.5",r:"4.5"}),r.a.createElement("circle",{className:"circle2",fill:"#1ac3b3",cx:"31.5",cy:"22.5",r:"4.5"}),r.a.createElement("circle",{className:"circle3",fill:"#1ac3b3",cx:"49.5",cy:"22.5",r:"4.5"}),r.a.createElement("circle",{className:"circle4",fill:"#1ac3b3",cx:"67.5",cy:"22.5",r:"4.5"})),r.a.createElement("p",{className:"pt-16 pb-16"},"Cargando tu an\xe1lisis financiero..."),r.a.createElement("p",null," ")),r.a.createElement(m,null))},_=a(34),T=function(e,t){switch(t.type){case"SHOW_FORM":return Object(g.a)({},e,{formulary:!0});case"GET_FORM":return Object(g.a)({},e,{form:t.payload});case"ADD_FORM":return Object(g.a)({},e,{forms:[].concat(Object(_.a)(e.forms),[t.payload]),formulary:!1,formerr:!1});case"VALIDATE_FORM":return Object(g.a)({},e,{formerr:!0});case"ACTUAL_FORM":return Object(g.a)({},e,{form:e.form.filter((function(e){return e._id===t.payload}))});case"DELETE_FORM":return Object(g.a)({},e,{forms:e.forms.filter((function(e){return e._id!==t.payload})),form:null});case"FORM_ERROR":return Object(g.a)({},e,{msg:t.payload});default:return e}},U=function(e){var t=Object(n.useReducer)(T,{forms:{info:null,percentage:null,term:null,options:null,value:null,risk:null},formulary:!1,formerr:!1,form:null,msg:null}),a=Object(i.a)(t,2),l=a[0],o=a[1],c=function(){var e=Object(C.a)(S.a.mark((function e(t){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.post("/api/forms",t);case 3:return a=e.sent,console.log(a,"addForm"),n=a.data._id,localStorage.setItem("formId",n),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(0),{msg:"Hubo un error",cat:"alerta-error"},e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(C.a)(S.a.mark((function e(t,a){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.put("/api/forms/".concat(t),a);case 3:return e.sent,e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),m=function(){var e=Object(C.a)(S.a.mark((function e(t,a){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.get("/api/forms/".concat(t),a);case 3:n=e.sent,console.log(n,"getForms"),o({type:"GET_FORM",payload:n.data.form}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),u=function(){var e=Object(C.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.delete("/api/forms/".concat(t));case 3:o({type:"DELETE_FORM",payload:t}),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),o({type:"FORM_ERROR",payload:{msg:"Hubo un error",cat:"alerta-error"}});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(E.Provider,{value:{forms:l.forms,formulary:l.formulary,formerr:l.formerr,form:l.form,msg:l.msg,showForm:function(){o({type:"SHOW_FORM"})},getForms:m,addForm:c,showError:function(){o({type:"VALIDATE_FORM"})},actualForm:function(e){o({type:"ACTUAL_FORM",payload:e})},deleteForm:u,updateForm:s}},e.children)},M=function(e,t){switch(t.type){case"SHOW_ALERT":return{alert:t.payload};case"HIDE_ALERT":return{alert:null};default:return e}},A=function(e){var t=Object(n.useReducer)(M,{alert:null}),a=Object(i.a)(t,2),l=a[0],o=a[1];return r.a.createElement(b.Provider,{value:{alert:l.alert,showAlert:function(e,t){o({type:"SHOW_ALERT",payload:{msg:e,cat:t}}),setTimeout((function(){o({type:"HIDE_ALERT"})}),5e3)}}},e.children)},D=function(e,t){switch(t.type){case"SUCCESFUL_REGISTER":case"SUCCESFUL_LOGIN":return localStorage.setItem("token",t.payload.token),Object(g.a)({},e,{authenticated:!0,msg:null,loading:!1});case"GET_USER":return Object(g.a)({},e,{authenticated:!0,user:t.payload,loading:!1});case"LOGOUT":case"ERROR_LOGIN":case"ERROR_REGISTER":return localStorage.removeItem("token"),Object(g.a)({},e,{token:null,user:null,authenticated:null,msg:t.payload,loading:!1});default:return e}},G=function(e){e?F.defaults.headers.common["x-auth-token"]=e:delete F.defaults.headers.common["x-auth-token"]},z=function(e){var t={token:localStorage.getItem("token"),authenticated:null,user:null,msg:null,loading:!0},a=Object(n.useReducer)(D,t),l=Object(i.a)(a,2),o=l[0],c=l[1],s=function(){var e=Object(C.a)(S.a.mark((function e(t){var a,n,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.post("/api/users",t);case 3:if(a=e.sent,console.log(a.data),!a.data.token){e.next=10;break}return e.next=8,F.post("/api/forms");case 8:n=e.sent,console.log(n,"New form created");case 10:c({type:"SUCCESFUL_REGISTER",payload:a.data}),m(),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),r={msg:e.t0.response.data.msg,cat:"alerta-error"},c({type:"ERROR_REGISTER",payload:r});case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(C.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=localStorage.getItem("token"))&&G(t),e.prev=2,e.next=5,F.get("/api/auth");case 5:a=e.sent,c({type:"GET_USER",payload:a.data.user}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0.response),c({type:"ERROR_LOGIN"});case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(C.a)(S.a.mark((function e(t){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.post("/api/auth",t);case 3:a=e.sent,c({type:"SUCCESFUL_LOGIN",payload:a.data}),m(),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data.msg),n={msg:e.t0.response.data.msg,cat:"alerta-error"},c({type:"ERROR_LOGIN",payload:n});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(u.Provider,{value:{token:o.token,authenticated:o.authenticated,user:o.user,msg:o.msg,loading:o.loading,registerUser:s,authenticatedUser:m,login:d,logout:function(){c({type:"LOGOUT"})}}},e.children)},H=a(35),P=function(e){var t=e.component,a=Object(H.a)(e,["component"]),l=Object(n.useContext)(u),o=l.authenticated,c=l.loading,m=l.authenticatedUser;return Object(n.useEffect)((function(){m()}),[]),r.a.createElement(s.b,Object.assign({},a,{render:function(e){return o||c?r.a.createElement(t,e):r.a.createElement(s.a,{to:"/login"})}}))},B=localStorage.getItem("token");B&&G(B);var q=function(){return r.a.createElement(U,null,r.a.createElement(A,null,r.a.createElement(z,null,r.a.createElement(c.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:p}),r.a.createElement(s.b,{exact:!0,path:"/login",component:x}),r.a.createElement(s.b,{exact:!0,path:"/sign-up",component:h}),r.a.createElement(P,{exact:!0,path:"/savings-info",component:v}),r.a.createElement(P,{exact:!0,path:"/savings-percentage",component:w}),r.a.createElement(P,{exact:!0,path:"/term",component:y}),r.a.createElement(P,{exact:!0,path:"/invest-options",component:N}),r.a.createElement(P,{exact:!0,path:"/invest-value",component:O}),r.a.createElement(P,{exact:!0,path:"/risk-level",component:j}),r.a.createElement(P,{exact:!0,path:"/loading-analysis",component:L}),r.a.createElement(P,{exact:!0,path:"/recommender-results",component:k}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(65);o.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.a80184d9.chunk.js.map