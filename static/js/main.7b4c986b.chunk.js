(this.webpackJsonpcomicsstore=this.webpackJsonpcomicsstore||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(14),r=n.n(c),o=(n(95),n(96),n(150)),s=n(151),l=n(144),d=n(11),j=n(148),b=n(149),u=n(6),m=n(79),x=n(22),O=n(17),p=n(3),h=Object(a.createContext)(),f=function(e){var t=Object(a.useState)(0),n=Object(O.a)(t,2),i=n[0],c=n[1],r=Object(a.useState)([]),o=Object(O.a)(r,2),s=o[0],l=o[1],d=Object(a.useState)(0),j=Object(O.a)(d,2),b=j[0],u=j[1],f=Object(a.useState)(""),g=Object(O.a)(f,2),C=g[0],y=g[1];return Object(a.useEffect)((function(){console.log("Carrito Actualizado:",s)}),[s]),Object(p.jsx)(h.Provider,{value:{itemsCart:s,addItem:function(e){if(u(b+e.item.price*e.quantity),c(i+e.quantity),n=e.item.id,void s.find((function(e){return e.item.id===n}))){var t=s.map((function(t){var n=t.quantity+e.quantity;return t.item.id===e.item.id?Object(x.a)(Object(x.a)({},t),{},{quantity:n}):{itemCart:t}}));l(t)}else l((function(t){return[].concat(Object(m.a)(t),[e])}));var n},clear:function(){l([]),c(0),u(0),y("")},removeItem:function(e){var t=s.find((function(t){return t.item.id===e}));c(i-t.quantity),l(s.filter((function(t){return t.item.id!==e}))),u(b-t.item.price*t.quantity)},updateOrderId:function(e){y(e)},orderId:C,itemsQuantity:i,subTotal:b},children:e.children})},g=n(15),C=Object(l.a)((function(e){return function(e){return{imagen:Object(d.a)({},e.breakpoints.between("xs","md"),{width:"30px",height:"30px"})}}(e)})),y=Object(u.a)((function(e){return{badge:{right:-2,backgroundColor:"orange",color:"black",position:"absolute"}}}))(j.a),v=function(e){var t=e.img,n=e.alt,i=Object(a.useContext)(h).itemsQuantity,c=C();return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(g.b,{to:"/cart",children:Object(p.jsx)(b.a,{"aria-label":"cart",children:Object(p.jsx)(y,{badgeContent:i,children:Object(p.jsx)("img",{className:c.imagen,src:t,alt:n})})})})})},k=Object(l.a)((function(e){return function(e){var t,n;return{containerNav:{backgroundColor:"#e38a6f",position:"relative"},toolbar:Object(d.a)({padding:"3px 20px 2px 20px"},e.breakpoints.between("xs","md"),{display:"flex",position:"relative",alignItems:"center",flexWrap:"wrap",flexDirection:"column",justifyContent:"start"}),logo:Object(d.a)({marginRight:"60px"},e.breakpoints.between("xs","md"),{width:"90px",height:"60px",marginRight:"0"}),links:(t={marginRight:"50px",color:"#125D98",fontSize:"2em",fontFamily:"Josefin Sans",textDecoration:"none",position:"relative",backgroundImage:"linear-gradient(currentColor, currentColor)",backgroundPosition:"50% 100%",backgroundRepeat:"no-repeat",backgroundSize:"0% 2px",transition:"background-size .5s"},Object(d.a)(t,e.breakpoints.between("xs","md"),{marginRight:"0",fontSize:"1.2em"}),Object(d.a)(t,"&:hover",{backgroundSize:"100% 2px",color:"#D44000"}),t),link:(n={marginRight:"540px",color:"#125D98",fontSize:"2em",fontFamily:"Josefin Sans",textDecoration:"none",position:"relative",backgroundImage:"linear-gradient(currentColor, currentColor)",backgroundPosition:"50% 100%",backgroundRepeat:"no-repeat",backgroundSize:"0% 2px",transition:"background-size .5s"},Object(d.a)(n,e.breakpoints.between("xs","md"),{marginRight:"0",fontSize:"1.2em"}),Object(d.a)(n,"&:hover",{backgroundSize:"100% 2px",color:"#D44000"}),n)}}(e)})),N=function(e){var t=e.img,n=e.alt,i=Object(a.useContext)(h).itemsCart,c=k();return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(o.a,{className:c.containerNav,children:Object(p.jsxs)(s.a,{className:c.toolbar,children:[Object(p.jsx)(g.b,{to:"/",children:Object(p.jsx)("img",{className:c.logo,src:"../img/logo.png",alt:"imagen del logo"})}),Object(p.jsx)(g.b,{to:"/category/".concat("Marvel"),className:c.links,children:"MARVEL"}),Object(p.jsx)(g.b,{to:"/category/".concat("DC"),className:c.links,children:"DC"}),Object(p.jsx)(g.b,{to:"/category/".concat("Independiente"),className:c.link,children:"INDEPENDIENTE"}),i.length>0?Object(p.jsx)(v,{img:t,alt:n}):""]})})})},S=n(16),z=n(109),w=n(152),I=n(153),D=n(154),F=n(155),T=n(156),q=Object(l.a)((function(e){return{cardPadre:{margin:"10px",maxWidth:"300px"},titulo:{fontSize:"30px",marginBottom:"5px"},precio:{fontSize:"40px"},contador:{display:"flex",justifyContent:"center"}}})),B=function(e){var t=q();return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(w.a,{className:t.cardPadre,children:Object(p.jsxs)(I.a,{children:[Object(p.jsx)(g.b,{to:"/item/".concat(e.id),children:Object(p.jsx)(D.a,{component:"img",alt:e.data.alt,image:e.data.imagenUrl})}),Object(p.jsxs)(F.a,{children:[Object(p.jsx)(T.a,{component:"h2",className:t.titulo,children:e.data.title}),Object(p.jsx)(T.a,{color:"textSecondary",component:"p",children:e.data.description}),Object(p.jsxs)(T.a,{className:t.precio,children:["$",e.data.price]})]})]})})})},R=n(158),A=n(157),P=n(59),E=(n(72),P.a.initializeApp({apiKey:"AIzaSyC2lKAgx-HnFjQSm5J7M7n85CN4ozcT9hk",authDomain:"coderhouse-ecommerce-78692.firebaseapp.com",projectId:"coderhouse-ecommerce-78692",storageBucket:"coderhouse-ecommerce-78692.appspot.com",messagingSenderId:"386818185419",appId:"1:386818185419:web:ccdf8dfd42db447919634e"}).firestore()),M=Object(z.a)((function(e){return{linearPro:{width:"100%"}}})),$=function(){var e=M(),t=Object(a.useState)([]),n=Object(O.a)(t,2),i=n[0],c=n[1],r=Object(S.g)().comicID;return Object(a.useEffect)((function(){var e=E.collection("items");(void 0===r?e.get():e.where("comic","==",r).get()).then((function(e){c(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[r]),Object(p.jsx)(p.Fragment,{children:0===i.length?Object(p.jsx)("div",{className:e.linearPro,children:Object(p.jsx)(A.a,{})}):Object(p.jsx)(R.a,{container:!0,children:Object(p.jsx)(R.a,{item:!0,xs:12,children:Object(p.jsx)(R.a,{container:!0,justify:"center",children:i.map((function(e,t){return Object(p.jsx)(B,Object(x.a)({},e),t)}))})})})})},J=Object(z.a)((function(e){return{container:{backgroundColor:"#a6b7d7"}}})),V=function(e){var t=J();return Object(p.jsx)("div",{className:t.container,children:Object(p.jsx)($,{})})},K=n(159),Q=Object(l.a)((function(e){return function(e){var t,n;return{container:{display:"flex",flexDirection:"column",justifyContent:"center",marginTop:"10px","& > h5":{display:"flex",justifyContent:"center",fontSize:"0.8em"},"& > div":{display:"flex",justifyContent:"center",alignItems:"center","& > button":(t={alignSelf:"center",fontSize:"1.2em",borderRadius:"20px",backgroundColor:"#44af79",color:"white",marginBottom:"10px",border:"none",fontFamily:"",fontweight:"bold",cursor:"pointer",transition:"opacity 0.2s ease"},Object(d.a)(t,e.breakpoints.between("xs","md"),{fontSize:"0.9em"}),Object(d.a)(t,"&:hover",{opacity:"0.8",backgroundColor:"#44af79"}),t),"& > h4":{paddingBottom:"8px",margin:"10px",fontSize:"1.1em"}},"& > button":(n={alignSelf:"center",fontSize:"1.2em",borderRadius:"20px",backgroundColor:"#44af79",color:"white",padding:"0.5em 1em",marginBottom:"10px",border:"none",fontFamily:"",fontweight:"bold",cursor:"pointer",transition:"opacity 0.2s ease"},Object(d.a)(n,e.breakpoints.between("xs","md"),{fontSize:"0.9em"}),Object(d.a)(n,"& > span",{textTransform:"capitalize"}),Object(d.a)(n,"&:hover",{opacity:"0.8",backgroundColor:"#44af79"}),n)}}}(e)})),U=function(e){var t=Q(),n=Object(a.useState)(e.initial),i=Object(O.a)(n,2),c=i[0],r=i[1];return Object(p.jsxs)("div",{className:t.container,children:[Object(p.jsxs)("h5",{children:["Cantidad disponilbe: ",e.stock-c," unidades"]}),Object(p.jsxs)("div",{children:[Object(p.jsx)(K.a,{onClick:function(e){r(c-1)},disabled:c===e.initial,children:"-"}),Object(p.jsx)("h4",{children:c}),Object(p.jsx)(K.a,{onClick:function(e){r(c+1)},disabled:!(c<e.stock),children:"+"})]}),Object(p.jsx)(K.a,{onClick:function(){return e.onAdd(c)},children:"Agregar al carrito"})]})},W=Object(z.a)((function(e){return{container:{display:"flex",flexDirection:"column",justifyContent:"center"},link:{textDecoration:"none",alignSelf:"center",fontSize:"1.2em",borderRadius:"20px",backgroundColor:"#44af79",color:"white",padding:"0.5em 1em",marginTop:"20px",border:"none",fontFamily:"",fontweight:"bold",cursor:"pointer",transition:"opacity 0.2s ease","& > span":{textTransform:"capitalize"},"&:hover":{opacity:"0.8",backgroundColor:"#44af79"}}}})),H=function(e){var t=W(),n=Object(S.f)();return Object(p.jsxs)("div",{className:t.container,children:[Object(p.jsx)(g.b,{className:t.link,onClick:function(){return n.push("/cart")},children:"Finalizar compra"}),Object(p.jsx)(g.b,{className:t.link,onClick:function(){return e.cancelarCart(!1)},children:"Cancelar"})]})},L=Object(z.a)((function(e){return{container:{height:"100vh"},titulo:{display:"flex",justifyContent:"center",fontSize:"30px",marginBottom:"5px"},description:{display:"flex",justifyContent:"center"},precio:{display:"flex",justifyContent:"center",fontSize:"40px"}}})),G=function(e){var t=L(),n=Object(a.useState)(!1),i=Object(O.a)(n,2),c=i[0],r=i[1],o=Object(a.useState)(0),s=Object(O.a)(o,2),l=s[0],d=s[1],j=Object(a.useContext)(h),b=j.addItem,u=j.removeItem;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(R.a,{xs:12,container:!0,justify:"center",alignItems:"center",direction:"row",spacing:2,className:"container",children:[Object(p.jsx)(R.a,{item:!0,xs:3,children:Object(p.jsx)(w.a,{children:Object(p.jsx)(D.a,{component:"img",image:e.imagenUrl,alt:e.alt})})}),Object(p.jsxs)(R.a,{item:!0,xs:3,children:[Object(p.jsx)(T.a,{component:"h2",className:t.titulo,children:e.title}),Object(p.jsx)(T.a,{className:t.description,color:"textSecondary",component:"p",children:e.description}),Object(p.jsxs)(T.a,{className:t.precio,children:["$",e.price]}),c?Object(p.jsx)(H,{cancelarCart:function(){r(!1),u(e.id)}}):Object(p.jsx)(U,{stock:e.stock,initial:1,cantidadComics:l,onAdd:function(t){d(t),r(!0),b({item:e,quantity:t})}})]})]})})},X=Object(z.a)((function(e){return{linearPro:{width:"100%"},container:{marginTop:"8px",height:"100vh",backgroundColor:"#a6b7d7"}}})),Y=function(){var e=X(),t=Object(a.useState)([]),n=Object(O.a)(t,2),i=n[0],c=n[1],r=Object(S.g)().productId;return Object(a.useEffect)((function(){E.collection("items").doc(r).get().then((function(e){c([Object(x.a)({id:e.id},e.data())])}))}),[]),Object(p.jsx)(p.Fragment,{children:0===i.length?Object(p.jsx)("div",{className:e.linearPro,children:Object(p.jsx)(A.a,{})}):Object(p.jsx)("div",{className:e.container,children:i.map((function(e,t){return Object(p.jsx)(G,Object(x.a)({},e),t)}))})})},Z=n(161),_=n(165),ee=n(164),te=n(160),ne=n(162),ae=n(163),ie=n(77),ce=n.n(ie),re=n(81),oe=Object(l.a)((function(e){return{container:{display:"flex",flexDirection:"column",justifyContent:"center"},headerTable:{backgroundColor:"#e6e6e6"},tableContainer:{width:"90%",margin:"2% auto 6% auto"},imgProducto:{maxWidth:"8rem"},delete:{"&:hover":{color:"#ff0000"}},root:{display:"flex",alignItems:"center",flexDirection:"column",marginBottom:"5%"}}})),se=function(){var e=Object(a.useContext)(h),t=e.itemsCart,n=e.removeItem,i=e.subTotal,c=oe();return Object(p.jsx)("div",{className:c.container,children:Object(p.jsx)(te.a,{component:re.a,className:c.tableContainer,children:Object(p.jsxs)(Z.a,{children:[Object(p.jsx)(ne.a,{className:c.headerTable,children:Object(p.jsxs)(ae.a,{children:[Object(p.jsx)(ee.a,{align:"center",children:"Imagen"}),Object(p.jsx)(ee.a,{align:"center",children:"Producto"}),Object(p.jsx)(ee.a,{align:"center",children:"Cantidad"}),Object(p.jsx)(ee.a,{align:"center",children:"Precio"}),Object(p.jsx)(ee.a,{align:"center"})]})}),Object(p.jsxs)(_.a,{children:[t.map((function(e){return Object(p.jsxs)(ae.a,{children:[Object(p.jsx)(ee.a,{component:"th",scope:"row",align:"center",children:Object(p.jsx)("img",{src:e.item.imagenUrl,alt:e.item.alt,className:c.imgProducto})}),Object(p.jsx)(ee.a,{align:"center",children:e.item.title}),Object(p.jsx)(ee.a,{align:"center",children:e.quantity}),Object(p.jsxs)(ee.a,{align:"center",children:["$ ",e.item.price]}),Object(p.jsx)(ee.a,{children:Object(p.jsx)(b.a,{"aria-label":"delete",className:c.delete,onClick:function(){return n(e.item.id)},children:Object(p.jsx)(ce.a,{fontSize:"small"})})})]},e.item.id)})),Object(p.jsx)(ee.a,{}),Object(p.jsx)(ee.a,{}),Object(p.jsx)(ee.a,{align:"center",children:"Total:"}),Object(p.jsxs)(ee.a,{align:"center",children:["$ ",i]}),Object(p.jsx)(ee.a,{})]})]})})})},le=Object(l.a)((function(e){return{messageOrder:{textAlign:"center",margin:"40px 0 30px 0","& > h3":{marginBottom:"25px"},"& > p":{marginTop:"25px",fontSize:"1.2em"}},container:{display:"flex",justifyContent:"center"},button:{alignSelf:"center",textDecoration:"none",fontSize:"1.2em",borderRadius:"20px",backgroundColor:"#44af79",color:"white",padding:"0.5em 1em",marginBottom:"10px",border:"none",fontFamily:"",fontweight:"bold",cursor:"pointer",transition:"opacity 0.2s ease","& > span":{textTransform:"capitalize"},"&:hover":{opacity:"0.8",backgroundColor:"#44af79"}}}})),de=function(){var e=Object(a.useContext)(h),t=e.orderId,n=e.clear,i=Object(S.f)(),c=le();return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:c.messageOrder,children:[Object(p.jsx)(T.a,{variant:"h3",children:"\xa1Gracias por tu compra!"}),Object(p.jsx)("img",{src:"https://i.ibb.co/1TFqK54/Los-h-roes-de-Marvel-comienzan-su-nueva-etapa-Fresh-Start-en-SMASH-2-min.jpg",alt:"Imagen de agradecimiento por la compra"}),Object(p.jsxs)(T.a,{children:["Con este c\xf3digo puedes seguir tu pedido: ",t]})]}),Object(p.jsx)("div",{className:c.container,children:Object(p.jsx)(g.b,{className:c.button,onClick:function(){n(),i.push("/")},children:"Volver a comprar"})})]})},je=n(166),be=Object(l.a)((function(e){return function(e){var t;return{root:{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"lightblue"},text:Object(d.a)({textAlign:"center",marginBottom:"2%"},e.breakpoints.between("xs","md"),{fontSize:"1.2em"}),inputs:{width:"30%",marginBottom:"2%"},submmitButton:(t={alignSelf:"center",fontSize:"1.2em",borderRadius:"20px",backgroundColor:"#44af79",color:"white",padding:"0.5em 1em",marginBottom:"10px",border:"none",fontFamily:"",fontweight:"bold",cursor:"pointer",transition:"opacity 0.2s ease"},Object(d.a)(t,e.breakpoints.between("xs","md"),{fontSize:"0.9em"}),Object(d.a)(t,"& > span",{textTransform:"capitalize"}),Object(d.a)(t,"&:hover",{opacity:"0.8",backgroundColor:"#44af79"}),t),actionsContainer:{flexDirection:"column",alignItems:"center"},totalContainer:Object(d.a)({fontSize:"1.3em"},e.breakpoints.between("xs","md"),{fontSize:"0.9em"})}}(e)})),ue=function(e){var t=Object(a.useContext)(h),n=t.itemsCart,i=t.subTotal,c=t.updateOrderId,r=be(),o=Object(a.useState)({}),s=Object(O.a)(o,2),l=s[0],j=s[1],b=Object(a.useState)([]),u=Object(O.a)(b,2)[1],m=Object(a.useState)(!1),f=Object(O.a)(m,2)[1],g=function(e){var t=e.target,n=t.name,a=t.value;j(Object(x.a)(Object(x.a)({},l),{},Object(d.a)({},n,a)))},C=E.collection("productos").where(P.a.firestore.FieldPath.documentId(),"in",n.map((function(e){return e.item.id}))),y=function(e){var t=function(e){return{buyer:e,items:n,date:new Date,total:i}}(e),a=E.collection("orders");try{a.add(t).then((function(e){c(e.id)}))}catch(r){f(!0)}},v=function(e){C.get().then((function(t){var a=E.batch(),i=[];t.docs.forEach((function(e,t){e.data().stock>=n[t].quantity?a.update(e.ref,{stock:e.data().stock-n[t].quantity}):i.push(Object(x.a)(Object(x.a)({},e.data()),{},{id:e.id}))})),0===i.length?a.commit().then((function(){y(e)})):u(i)}))};return Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v(l)},className:r.root,noValidate:!0,autoComplete:"off",children:[Object(p.jsx)(T.a,{className:r.text,variant:"h4",children:"Datos para la compra"}),Object(p.jsx)(je.a,{className:r.inputs,id:"outlined-secondary",label:"Nombre",variant:"outlined",color:"secondary",name:"nombre",required:!0,onChange:g}),Object(p.jsx)(je.a,{className:r.inputs,id:"outlined-secondary",label:"Apellido",variant:"outlined",color:"secondary",name:"apellido",required:!0,onChange:g}),Object(p.jsx)(je.a,{className:r.inputs,id:"outlined-secondary",label:"Celular",variant:"outlined",color:"secondary",name:"celular",required:!0,onChange:g}),Object(p.jsx)(je.a,{className:r.inputs,id:"outlined-secondary",label:"Email",variant:"outlined",color:"secondary",name:"email",required:!0,onChange:g}),Object(p.jsxs)(R.a,{className:r.actionsContainer,container:!0,direction:"row",alignItems:"stretch",children:[Object(p.jsx)(R.a,{className:r.totalContainer,item:!0,xs:6,children:Object(p.jsxs)("h5",{className:r.total,children:[" Total a pagar: $",i]})}),Object(p.jsx)(R.a,{className:r.submitContainer,item:!0,xs:6,children:Object(p.jsx)(K.a,{type:"submit",className:r.submmitButton,children:"Finalizar pago"})})]})]})},me=Object(l.a)((function(e){return{container:{marginTop:"150px"},buttons:{marginTop:"20px",alignSelf:"center",textDecoration:"none",marginRight:"1em",fontSize:"1.2em",borderRadius:"20px",backgroundColor:"#44af79",color:"white",padding:"0.5em 1em",marginBottom:"10px",border:"none",fontFamily:"",fontweight:"bold",cursor:"pointer",transition:"opacity 0.2s ease","&:hover":{opacity:"0.8",backgroundColor:"#44af79"}},text:{textAlign:"center"},buttonContainer:{display:"flex",justifyContent:"center"}}})),xe=function(){var e=me(),t=Object(S.f)(),n=Object(a.useContext)(h),i=n.itemsCart,c=n.orderId;return Object(p.jsx)(p.Fragment,{children:0===i.length?Object(p.jsxs)("div",{className:e.container,children:[Object(p.jsx)(T.a,{className:e.text,variant:"h3",children:"El carrito est\xe1 vac\xedo."}),Object(p.jsx)("div",{className:e.buttonContainer,children:Object(p.jsx)(g.b,{className:e.buttons,onClick:function(){return t.push("/")},children:"Volver a la tienda"})})]}):Object(p.jsx)(p.Fragment,{children:c?Object(p.jsx)(de,{}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(se,{}),Object(p.jsx)(ue,{})]})})})},Oe=n(78),pe=Object(l.a)((function(e){return{text:{textAlign:"center",marginBottom:"2%"},inputs:{width:"30%",marginBottom:"2%"},buttons:{marginTop:"20px",alignSelf:"center",textDecoration:"none",marginRight:"1em",fontSize:"1.2em",borderRadius:"20px",backgroundColor:"#44af79",color:"white",padding:"0.5em 1em",marginBottom:"10px",border:"none",fontFamily:"",fontweight:"bold",cursor:"pointer",transition:"opacity 0.2s ease","&:hover":{opacity:"0.8",backgroundColor:"#44af79"}}}})),he=new function e(t,n,a,i){Object(Oe.a)(this,e),this.nombre=t,this.apellido=n,this.celular=a,this.email=i}("","","",""),fe=function(e){var t=pe(),n=Object(a.useState)(he),i=Object(O.a)(n,2),c=i[0],r=i[1],o=Object(a.useContext)(h).subTotal,s=function(e){var t=e.target,n=t.name,a=t.value;r(Object(x.a)(Object(x.a)({},c),{},Object(d.a)({},n,a)))};return Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.addOrder(c)},className:t.root,noValidate:!0,autoComplete:"off",children:[Object(p.jsx)(T.a,{className:t.text,variant:"h4",children:"Formulario de registro"}),Object(p.jsx)(je.a,{className:t.inputs,id:"outlined-secondary",label:"Nombre",variant:"outlined",color:"secondary",name:"nombre",required:!0,onChange:s}),Object(p.jsx)(je.a,{className:t.inputs,id:"outlined-secondary",label:"Apellido",variant:"outlined",color:"secondary",name:"apellido",required:!0,onChange:s}),Object(p.jsx)(je.a,{className:t.inputs,id:"outlined-secondary",label:"Celular",variant:"outlined",color:"secondary",name:"celular",required:!0,onChange:s}),Object(p.jsx)(je.a,{className:t.inputs,id:"outlined-secondary",label:"Email",variant:"outlined",color:"secondary",name:"email",required:!0,onChange:s}),Object(p.jsxs)(R.a,{className:t.actionsContainer,container:!0,direction:"row",alignItems:"stretch",children:[Object(p.jsx)(R.a,{className:t.totalContainer,item:!0,xs:6,children:Object(p.jsxs)("div",{className:t.total,children:[" Total: $",o]})}),Object(p.jsx)(R.a,{className:t.submitContainer,item:!0,xs:6,children:Object(p.jsx)(K.a,{type:"submit",className:t.submmitButton,children:"Finalizar pago"})})]})]})};var ge=function(){return Object(p.jsx)(f,{children:Object(p.jsxs)(g.a,{children:[Object(p.jsx)(N,{img:"../img/carritoCompra.png",alt:"imagen carrito de compras"}),Object(p.jsxs)(S.c,{children:[Object(p.jsx)(S.a,{exact:!0,path:"/",children:Object(p.jsx)(V,{})}),Object(p.jsx)(S.a,{exact:!0,path:"/category/:comicID",children:Object(p.jsx)(V,{})}),Object(p.jsx)(S.a,{exact:!0,path:"/item/:productId",children:Object(p.jsx)(Y,{})}),Object(p.jsx)(S.a,{exact:!0,path:"/cart",children:Object(p.jsx)(xe,{})}),Object(p.jsx)(S.a,{exact:!0,path:"/finalizar",children:Object(p.jsx)(fe,{})})]})]})})};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(ge,{})}),document.getElementById("root"))},95:function(e,t,n){},96:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.7b4c986b.chunk.js.map