(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/car.1cd47c54.svg"},29:function(e,t,a){e.exports=a.p+"static/media/location.068f8e63.svg"},30:function(e,t,a){e.exports=a.p+"static/media/logo.f4fbaedb.png"},31:function(e,t,a){e.exports=a(77)},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),s=a(2),l=a.n(s),i=a(4),u=a(6),m=a(7),d=a(8),h=a(9),p=a(27),v=a.n(p),E=a(5),f=a.n(E),g=(a(75),a(28)),y=a.n(g),S=a(29),b=a.n(S),C=a(30),q=a.n(C),k=(a(76),function(e){e.color;var t=e.name,a=(e.id,e.img),n=e.nome;return r.a.createElement("div",{className:"marker",style:{cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},title:t},r.a.createElement("img",{src:a,alt:"",srcset:""}),r.a.createElement("p",null,n))}),N=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={motoristas:[]},e.load=Object(i.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://maps-movvi.herokuapp.com/motorista");case 2:a=t.sent,n=a.data,e.setState({motoristas:n});case 5:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.load()}),2e4)}},{key:"render",value:function(){var e=this.props,t=e.center,a=e.zoom;return r.a.createElement("div",{style:{width:"100%",height:"100%"}},r.a.createElement(v.a,{bootstrapURLKeys:{key:["AIzaSyDVFCMmcXP0idBMRYaGW_2Lqq2Zo93QrFg"]},center:t,zoom:a},r.a.createElement("div",{lat:-23.5144905,lng:-46.5991377,style:{color:"black",fontWeight:"bold"}},r.a.createElement("div",null,r.a.createElement("img",{style:{width:35},src:b.a,alt:"",srcset:""})),"FILIAL"),this.state.motoristas.map((function(e){return r.a.createElement(k,{lat:Number(e.coords[0]),lng:Number(e.coords[1]),color:"orange",name:e.nome,img:y.a,nome:e.nome})}))))}}]),a}(r.a.Component);function w(){document.querySelector("aside").classList.contains("cad-hidden")?(document.querySelector("aside").classList.remove("cad-hidden"),document.querySelector("section.form").classList.remove("cad-hidden"),document.querySelector(".dispo-list").classList.add("cad-hidden")):(document.querySelector("aside").classList.add("cad-hidden"),document.querySelector("section.form").classList.add("cad-hidden"))}function L(){document.querySelector("aside").classList.add("cad-hidden"),document.querySelector(".cad-el").classList.add("cad-hidden")}function O(){document.querySelector("aside").classList.contains("cad-hidden")?(document.querySelector("aside").classList.remove("cad-hidden"),document.querySelector(".dispo-list").classList.remove("cad-hidden")):(document.querySelector("aside").classList.add("cad-hidden"),document.querySelector(".dispo-list").classList.add("cad-hidden"),document.querySelector("section.form").classList.add("cad-hidden"))}var j=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={center:{lat:-23.5144905,lng:-46.5991377},form:{lat:-23.5144905,lng:-46.5991377},nome:"",usuario:"",senha:"",coletor:"",cargo:"",motoristas:[]},e.load=Object(i.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://maps-movvi.herokuapp.com/motorista");case 2:a=t.sent,n=a.data,e.setState({motoristas:n});case 5:case"end":return t.stop()}}),t)}))),e.cadastroNome=function(t){e.setState({nome:t.target.value})},e.cadastroUsuario=function(t){e.setState({usuario:t.target.value})},e.cadastroSenha=function(t){e.setState({senha:t.target.value})},e.cadastroColetor=function(t){e.setState({coletor:t.target.value})},e.cadastroCargo=function(t){e.setState({cargo:t.target.value})},e.singup=function(){var t=Object(i.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,f.a.post("https://maps-movvi.herokuapp.com/motorista/new",{nome:e.state.name,usuario:e.state.usuario,senha:e.state.senha,coletor:e.state.coletor,cargo:e.state.cargo,coords:[]});case 3:t.sent,e.setState({nome:"",usuario:"",senha:"",coletor:"",cargo:""});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.load()}),2e4)}},{key:"render",value:function(){var e=this,t=this.state.center,a=this.state.motoristas;return r.a.createElement("div",{id:"app"},r.a.createElement("header",null,r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:q.a,alt:"",srcset:""})),r.a.createElement("div",{className:"title"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",{onClick:L},"RASTREAMENTO"),r.a.createElement("li",{onClick:O},"DISPOSITIVOS"),r.a.createElement("li",{onClick:w},"CADASTRAR")))),r.a.createElement("div",{className:"logout"},r.a.createElement("select",null,r.a.createElement("option",{value:""},"SAO")),r.a.createElement("img",{src:"/power.svg",alt:"",srcset:""}))),r.a.createElement("div",{className:"content"},r.a.createElement("aside",{className:"cad-hidden"},r.a.createElement("section",{className:"form cad-hidden"},r.a.createElement("form",null,r.a.createElement("h1",null,"Cadastrar Motorista"),r.a.createElement("input",{placeholder:"Nome",name:"nome",required:!0,value:this.state.nome,onChange:this.cadastroNome}),r.a.createElement("input",{placeholder:"Usuario",name:"usuario",required:!0,value:this.state.usuario,onChange:this.cadastroUsuario}),r.a.createElement("input",{placeholder:"Senha",name:"senha",type:"password",required:!0,value:this.state.senha,onChange:this.cadastroSenha}),r.a.createElement("input",{placeholder:"Coletor",name:"coletor",type:"number",required:!0,value:this.state.coletor,onChange:this.cadastroColetor}),r.a.createElement("input",{placeholder:"Cargo",name:"cargo",required:!0,value:this.state.cargo,onChange:this.cadastroCargo}),r.a.createElement("button",{onClick:this.singup,type:"submit"},"Cadastrar")),r.a.createElement("p",null,this.state.nome),r.a.createElement("p",null,this.state.usuario),r.a.createElement("p",null,this.state.senha),r.a.createElement("p",null,this.state.coletor),r.a.createElement("p",null,this.state.cargo)),r.a.createElement("section",{className:"dispo-list cad-hidden"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",{style:{marginBottom:30,fontWeight:"bold"},onClick:function(){e.setState({center:{lat:-23.5144905,lng:-46.5991377}})}},"Centralizar na Filial"),a.map((function(t){return r.a.createElement("li",{onClick:function(){e.setState({center:{lat:Number(t.coords[0]),lng:Number(t.coords[1])}})}},t.nome)})))))),r.a.createElement("main",null,r.a.createElement("div",{className:"map-el",style:{height:"100%",width:"100%"}},r.a.createElement(N,{center:t,zoom:11})),r.a.createElement("div",{className:"cad-el cad-hidden"},r.a.createElement("section",{className:"form"},r.a.createElement("form",null,r.a.createElement("h1",null,"Cadastrar Motorista"),r.a.createElement("input",{placeholder:"Nome",name:"nome"}),r.a.createElement("input",{placeholder:"Usuario",name:"usuario",required:!0}),r.a.createElement("input",{placeholder:"Senha",name:"senha",type:"password",required:!0}),r.a.createElement("input",{placeholder:"Coletor",name:"coletor",type:"number",required:!0}),r.a.createElement("input",{placeholder:"Cargo",name:"cargo",required:!0}),r.a.createElement("button",{type:"submit"},"Cadastrar")))))))}}]),a}(r.a.Component);c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.03d49c0c.chunk.js.map