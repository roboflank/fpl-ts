(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(95)),i={id:"index",title:"fpl-ts",slug:"/api",sidebar_label:"Overview",hide_title:!0},s={unversionedId:"api/index",id:"api/index",isDocsHomePage:!1,title:"fpl-ts",description:"A JS/TS wrapper for FPL API.",source:"@site/docs/api/index.md",slug:"/api",permalink:"/fpl-ts/api",editUrl:"https://github.com/roboflank/fpl-ts/edit/master/website/docs/api/index.md",version:"current",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"Examples",permalink:"/fpl-ts/examples"},next:{title:"fpl-ts",permalink:"/fpl-ts/api/modules"}},c=[{value:"Installing fpl-ts",id:"installing-fpl-ts",children:[]},{value:"Docs",id:"docs",children:[{value:"1. Classes &amp; Methods",id:"1-classes--methods",children:[]},{value:"2. Types",id:"2-types",children:[]},{value:"3. Guides &amp; Examples",id:"3-guides--examples",children:[]},{value:"Example",id:"example",children:[]}]}],o={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",{align:"center"},Object(l.b)("a",{href:"https://roboflank.github.io/fpl-ts/api"},Object(l.b)("img",{src:"https://raw.githubusercontent.com/roboflank/fpl-ts/build/website/static/img/fpl-ts.png"}))),Object(l.b)("p",{align:"center"},"A JS/TS wrapper for FPL API."),Object(l.b)("h3",{id:"installing-fpl-ts"},"Installing fpl-ts"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"npm i fpl-ts\n")),Object(l.b)("h2",{id:"docs"},"Docs"),Object(l.b)("h3",{id:"1-classes--methods"},"1. Classes & Methods"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://roboflank.github.io/fpl-ts/api/classes/index.fixture"}),"Fixture")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://roboflank.github.io/fpl-ts/api/classes/index.gameweek"}),"Gameweek")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://roboflank.github.io/fpl-ts/api/classes/index.player"}),"Player")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://roboflank.github.io/fpl-ts/api/classes/index.team"}),"Team")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://roboflank.github.io/fpl-ts/api/classes/index.user"}),"User")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://roboflank.github.io/fpl-ts/api/classes/index.classicleague"}),"Classic League")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://roboflank.github.io/fpl-ts/api/classes/index.index.h2hleague"}),"H2H League"))),Object(l.b)("h3",{id:"2-types"},"2. Types"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://roboflank.github.io/fpl-ts/api/modules/types"}),"index"))),Object(l.b)("h3",{id:"3-guides--examples"},"3. Guides & Examples"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://roboflank.github.io/fpl-ts/examples"}),"Guide & Examples"))),Object(l.b)("h3",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { User, Player, Fixture, Team } from 'fpl-ts'\n\n//  Get Fixture\nconst getFixtureDetails = async () => {\n  const fixture = new Fixture(167)\n  try {\n    const details = await fixture.getDetails()\n    console.log(details)\n  } catch (err) {\n    console.error(err)\n  }\n}\n\n//  Get a player\nconst getPlayerDetails = async () => {\n  const player = new Player([302])\n  try {\n    const bruno = await player.getDetails()\n    console.log(bruno)\n  } catch (err) {\n    console.error(err)\n  }\n}\n\n// Get user's details\nconst getUser = async () => {\n  const user = new User(91928)\n  try {\n    const details = await user.getDetails()\n    console.log(details)\n  } catch (err) {\n    console.error(err)\n  }\n}\n")),Object(l.b)("p",null,"Inspired by ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://fpl.readthedocs.io/"}),"FPL")))}p.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),b=p(n),f=r,d=b["".concat(i,".").concat(f)]||b[f]||u[f]||l;return n?a.a.createElement(d,s(s({ref:t},o),{},{components:n})):a.a.createElement(d,s({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);