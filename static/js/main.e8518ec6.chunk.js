(this.webpackJsonprick_and_morty=this.webpackJsonprick_and_morty||[]).push([[0],{3:function(e,r,t){e.exports={characters:"Character_characters__21Zes",characters__inner:"Character_characters__inner__P3N02",loading:"Character_loading__LkXdW",character:"Character_character__2g5cE",image:"Character_image__3Vf7p",info:"Character_info__1ijum",name:"Character_name__2crId",status:"Character_status__3DLYa",green:"Character_green__3e2_7",red:"Character_red__1N9ye",gray:"Character_gray__2rr3m",blue:"Character_blue__2oAp9",pink:"Character_pink__2RPcm",origin:"Character_origin__D3efZ",button:"Character_button__2HowB"}},30:function(e,r,t){e.exports={header:"Header_header__17qM7"}},37:function(e,r,t){},38:function(e,r,t){},68:function(e,r,t){"use strict";t.r(r);var a=t(0),c=t(11),n=t.n(c),s=(t(37),t(38),t(3)),i=t.n(s),u=t(1),h=function(e){var r=e.characters[e.currentCharacterId],t=function(r){var t=Math.floor(Math.random()*(r-1))+1;e.requestNewCharacter(t,e.characters)};Object(a.useEffect)((function(){0===e.count?e.requestCharactersCount():t(e.count)}),[e.count]);return Object(u.jsx)("div",{className:i.a.characters,children:e.isFetching?Object(u.jsx)("div",{className:i.a.loading,children:"...loading"}):Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:i.a.characters__inner,children:[Object(u.jsxs)("div",{className:i.a.character,children:[Object(u.jsx)("div",{className:i.a.image,children:Object(u.jsx)("img",{src:r.image,alt:""})}),Object(u.jsxs)("div",{className:i.a.info,children:[Object(u.jsx)("div",{className:i.a.name,children:r.name}),Object(u.jsxs)("div",{className:i.a.status+" "+function(e){switch(e){case"Alive":return i.a.green;case"Dead":return i.a.red;default:return i.a.gray}}(r.status),children:[r.status,Object(u.jsx)("pre",{children:" - "}),Object(u.jsx)("span",{className:i.a.gender+" "+function(e){switch(e){case"Male":return i.a.blue;case"Female":return i.a.pink;default:return i.a.gray}}(r.gender),children:r.species})]}),Object(u.jsxs)("div",{className:i.a.origin,children:[Object(u.jsx)("div",{className:i.a.gray,children:"First seen in:"}),r.origin]}),Object(u.jsxs)("div",{className:i.a.location,children:[Object(u.jsx)("div",{className:i.a.gray,children:"Last known location:"}),r.location]})]})]}),Object(u.jsx)("div",{className:i.a.button,children:Object(u.jsx)("button",{onClick:function(){return t(e.count)},children:"Get random character"})})]})})})},o=t(13),d=t(10),j=t.n(d),l=t(17),_=t(12),b=t(5),f=t(29).create({baseURL:"https://rickandmortyapi.com/api/"}),g=function(e){return f.get("character/"+e).then((function(e){return e.data}))},m=function(){return f.get("character").then((function(e){return e.data.info.count}))},O="characters/SET_CHARACTER",C="characters/SET_CURRENT_CHARACTER",p="characters/SET_CHARACTERS_COUNT",x="characters/TOGGLE_IS_FETCHING",v={count:0,currentCharacterId:0,characters:{},isFetching:!0},N=function(e){return{type:O,character:e}},y=function(e){return{type:C,characterId:e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case O:return Object(b.a)(Object(b.a)({},e),{},{characters:Object(b.a)(Object(b.a)({},e.characters),{},Object(_.a)({},r.character.id,r.character)),currentCharacterId:r.character.id,isFetching:!1});case C:return Object(b.a)(Object(b.a)({},e),{},{currentCharacterId:r.characterId});case p:return Object(b.a)(Object(b.a)({},e),{},{count:r.count});case x:return Object(b.a)(Object(b.a)({},e),{},{isFetching:r.isFetching});default:return e}},F=function(e){return e.characters.currentCharacterId},w=function(e){return e.characters.characters},I=function(e){return e.characters.count},E=function(e){return e.characters.isFetching},T={requestNewCharacter:function(e,r){return function(){var t=Object(l.a)(j.a.mark((function t(a){var c,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e in r)){t.next=4;break}a(y(e)),t.next=10;break;case 4:return a({type:x,isFetching:!0}),t.next=7,g(e);case 7:c=t.sent,n={id:c.id,name:c.name,status:(s=c.status,s[0].toUpperCase()+s.substring(1)),species:c.species,gender:c.gender,origin:c.origin.name,location:c.location.name,image:c.image},a(N(n));case 10:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},requestCharactersCount:function(){return function(){var e=Object(l.a)(j.a.mark((function e(r){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,r({type:p,count:t});case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}},R=Object(o.b)((function(e){return{currentCharacterId:F(e),characters:w(e),count:I(e),isFetching:E(e)}}),T)(h),A=t(30),L=t.n(A),H=function(e){return Object(u.jsx)("header",{className:L.a.header,children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("h1",{children:"Rick and Morty"})})})};var S=function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(H,{}),Object(u.jsx)(R,{})]})},q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,69)).then((function(r){var t=r.getCLS,a=r.getFID,c=r.getFCP,n=r.getLCP,s=r.getTTFB;t(e),a(e),c(e),n(e),s(e)}))},M=t(32),D=t(14),G=t(31),P=Object(D.b)({characters:k}),U=Object(D.c)(P,Object(D.a)(G.a));n.a.render(Object(u.jsx)(M.a,{children:Object(u.jsx)(o.a,{store:U,children:Object(u.jsx)(S,{})})}),document.getElementById("root")),q()}},[[68,1,2]]]);
//# sourceMappingURL=main.e8518ec6.chunk.js.map