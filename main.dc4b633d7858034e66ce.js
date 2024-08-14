/*! For license information please see main.dc4b633d7858034e66ce.js.LICENSE.txt */
!function(e){function t(t){for(var n,s,a=t[0],c=t[1],u=t[2],f=0,p=[];f<a.length;f++)s=a[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(l&&l(t);p.length;)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={0:0},i=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;i.push([121,1]),r()}({121:function(e,t,r){r(122),e.exports=r(310)},310:function(e,t,r){"use strict";r.r(t);r(308);var n={isgameOver:!1,isGameStart:!1,bgSpeed:5,isSoundOn:!0,isMusicOn:!0};function o(e){return e.sys.canvas.width/2}function i(e){return e.sys.canvas.height/2}function s(e){return e.sys.canvas.width}function a(e){return e.sys.canvas.height}function c(e){n.isSoundOn&&e.sound.play("popup")}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d(e);if(t){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h(this,r)}}function h(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,Phaser.Scene);var t,r,n,s=p(a);function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),s.call(this,{key:"BootScene"})}return t=a,(r=[{key:"preload",value:function(){this.load.image("bg","./assets/sprites/bg.png"),this.load.image("bg-2","./assets/sprites/bg-3.png"),this.load.image("logo","./assets/sprites/logo.png"),this.load.image("life_icon","./assets/sprites/life_icon.png"),this.load.spritesheet("swim-1","./assets/sprites/swim.png",{frameWidth:250,frameHeight:132}),this.load.spritesheet("player","./assets/sprites/player.png",{frameWidth:253.5,frameHeight:1216}),this.load.audio("bgm",["./assets/audio/bgm.mp3","./assets/audio/bgm.ogg"]),this.load.audio("popup",["./assets/audio/popup.mp3","./assets/audio/popup.ogg"]),this.load.audio("jump",["./assets/audio/jump.mp3","./assets/audio/jump.ogg"]),this.load.audio("shield",["./assets/audio/shield.mp3","./assets/audio/shield.ogg"]),this.add.text(o(this),i(this),"Loading....",{fontSize:"50px"}).setOrigin(.5);for(var e=1;e<=6;e++)this.load.image("product-".concat(e),"./assets/sprites/products/".concat(e,".png"));this.load.image("gameover-popup","./assets/sprites/gameover-popup.png"),this.load.image("button-restart","./assets/sprites/button-restart.png"),this.load.image("logo-2","./assets/sprites/logo-2.png")}},{key:"create",value:function(){this.scene.start("GameScene")}},{key:"update",value:function(){}}])&&l(t.prototype,r),n&&l(t,n),a}();function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t,r){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=P(e);if(t){var o=P(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return O(this,r)}}function O(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(s,Phaser.Physics.Arcade.Sprite);var t,r,o,i=S(s);function s(e,t,r){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),x(w(n=i.call(this,e,t,r,"player")),"forGroundWater",void 0),x(w(n),"shield",void 0),x(w(n),"effect",void 0),n.scene.add.existing(w(n)),n.play("playerAnim"),n.scene.physics.world.enable(w(n)),n.setScale(.4),n.setDepth(4),n.forGroundWater=n.scene.add.rectangle(n.x,n.y+60,105,335,6407896,.5).setDepth(4),n.shield=n.scene.add.image(n.x,n.y,"bubble").setScale(1.2).setVisible(!1),n.body.setSize(.5*n.width,.5*n.height),n}return t=s,(r=[{key:"preUpdate",value:function(e,t){v(P(s.prototype),"preUpdate",this).call(this,e,t),n.isgameOver||this.forGroundWater.setPosition(this.x,this.y+80),this.shield.setPosition(this.x,this.y)}},{key:"changeLane",value:function(e,t){var r=this;this.effect.visible=!1,this.scene.tweens.add({targets:this,y:e,duration:300,onComplete:function(){r.effect.visible=!0,r.effect.setPosition(r.x,r.y-27)}})}},{key:"addShield",value:function(){this.shield.visible=!0}},{key:"removeShield",value:function(){this.shield.visible=!1}},{key:"GameStart",value:function(){this.effect=this.scene.add.rectangle(this.x,this.y-27,120,3,13498111).setDepth(4),this.scene.tweens.add({targets:this.effect,x:this.x-60,duration:100,yoyo:!0,repeat:-1})}},{key:"gameOver",value:function(){this.stop(),this.effect.visible=!1,this.scene.tweens.add({targets:this,angle:-80,duration:500,ease:Phaser.Math.Easing.Bounce.Out})}}])&&g(t.prototype,r),o&&g(t,o),s}();function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=G(e);if(t){var o=G(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return T(this,r)}}function T(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(s,Phaser.Physics.Arcade.Image);var t,r,o,i=R(s);function s(e,t,r){var n,o,a,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),n=i.call(this,e,t,r,"product-".concat(Phaser.Math.Between(1,6))),o=E(n),c=void 0,(a="point")in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,n.scene.add.existing(E(n)),n.setDepth(5),n.scene.physics.world.enable(E(n)),"product-1"==n.texture.key&&n.setScale(.12),"product-6"==n.texture.key&&n.setScale(.14),"product-2"==n.texture.key&&n.setScale(.7),"product-3"==n.texture.key&&n.setScale(.75),"product-4"==n.texture.key&&n.setScale(1),"product-5"==n.texture.key&&n.setScale(.12),n.body.setSize(.5*n.width,.5*n.height),"product-2"==n.texture.key?n.point=15:"product-3"==n.texture.key||"product-4"==n.texture.key||"product-1"==n.texture.key?n.point=10:"product-5"==n.texture.key?n.point=5:n.point=10,n}return t=s,(r=[{key:"preUpdate",value:function(){n.isgameOver||this.active&&(this.y+=n.bgSpeed)}}])&&_(t.prototype,r),o&&_(t,o),s}();function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=F(e);if(t){var o=F(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return I(this,r)}}function I(e,t){return!t||"object"!==X(t)&&"function"!=typeof t?L(e):t}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(f,Phaser.Scene);var t,r,u,l=M(f);function f(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),z(L(e=l.call(this,"GameScene")),"bgTile",void 0),z(L(e),"man",void 0),z(L(e),"msg",void 0),z(L(e),"laneXposArr",void 0),z(L(e),"productGroup",void 0),z(L(e),"score",void 0),z(L(e),"scoreText",void 0),z(L(e),"livesArr",void 0),z(L(e),"tileSpeed",void 0),z(L(e),"blueLineStartArr",void 0),z(L(e),"blueLine",void 0),e}return t=f,(r=[{key:"init",value:function(){}},{key:"create",value:function(){var e=this;this.livesArr=[],this.blueLine=[],this.blueLineStartArr=[];var t,r=3;this.tileSpeed=5,this.laneXposArr=[160,430,695,965,1235,1500,1760];for(var u=0;u<3;u++){var l=this.add.image(s(this)-70*u-55,70,"life_icon").setDepth(10).setScale(1.4).setVisible(!1);this.livesArr.push(l)}(t=this.anims).create({key:"Swim_1_Anim",frames:t.generateFrameNumbers("swim-1",{frames:[0,1,3,2]}),frameRate:6,repeat:-1}),t.create({key:"Swim_2_Anim",frames:t.generateFrameNumbers("swim-2",{frames:[0,1,3,2]}),frameRate:6,repeat:-1}),t.create({key:"playerAnim",frames:t.generateFrameNumbers("player",{frames:[0,1]}),frameRate:6,repeat:-1}),this.productGroup=this.add.group(),this.score=0,this.add.rectangle(o(this),i(this),s(this),a(this),6408410),this.bgTile=this.add.tileSprite(o(this),i(this),s(this),a(this),"bg"),this.bgTile.scaleX=.98;for(var f=0;f<this.laneXposArr.length;f++){var p=this.add.rectangle(this.laneXposArr[f],a(this)-250,80,15,83841).setDepth(4),h=this.add.rectangle(this.laneXposArr[f],a(this)-250,15,a(this),83841).setDepth(4).setOrigin(.5,1);this.tweens.add({targets:p,duration:2e3,y:a(this)}),this.tweens.add({targets:h,duration:2e3,y:a(this)}),this.blueLineStartArr.push(p),this.blueLine.push(h)}this.blueLineStartArr[3].visible=!1,this.blueLine[3].visible=!1,this.add.image(this.laneXposArr[3],i(this)-100,"logo-2").setScale(.3).setAlpha(.6),this.scoreText=this.add.text(o(this),70,"0",{fontSize:"80px",fontStyle:"bold",fontFamily:"font"}).setOrigin(.5).setDepth(10),this.add.rectangle(o(this),a(this),s(this),80,15461355).setOrigin(.5,1).setDepth(6),this.add.image(o(this),a(this)-30,"logo").setScale(.6).setDepth(6);var d=0;this.time.addEvent({delay:1e3,callback:function(){20==++d&&(e.tileSpeed=8,n.bgSpeed=7),40==d&&(e.tileSpeed=10,n.bgSpeed=9),60==d&&(e.tileSpeed=10,n.bgSpeed=13,console.log(n.bgSpeed)),80==d&&(e.tileSpeed=13,n.bgSpeed=15,console.log(n.bgSpeed))},repeat:-1}),this.time.addEvent({delay:2e3,callback:function(){if(!n.isgameOver)if(d<20){var t=new C(e,e.laneXposArr[Phaser.Math.Between(1,e.laneXposArr.length-2)],-150);e.productGroup.add(t)}else{var r=Phaser.Math.Between(1,e.laneXposArr.length-2),o=Phaser.Math.Between(1,e.laneXposArr.length-2);if(r!=o){var i=new C(e,e.laneXposArr[r],-300);e.productGroup.add(i);var s=new C(e,e.laneXposArr[o],-100);e.productGroup.add(s)}else{var a=new C(e,e.laneXposArr[Phaser.Math.Between(1,e.laneXposArr.length-2)],-150);e.productGroup.add(a)}}},repeat:-1}),this.man=new k(this,this.laneXposArr[3],a(this)-330),this.msg=this.add.text(o(this),i(this)-50,"T A P  T O  S W I T C H  L A N E S",{fontSize:"50px",fontFamily:"optima",fontStyle:"normal",color:"#ffffff"}).setOrigin(.5).setDepth(6),this.time.addEvent({delay:250,callback:function(){e.msg.visible=!e.msg.visible},repeat:-1}),this.add.rectangle(160,i(this),240,a(this),0,.001).setInteractive().on("pointerup",(function(){e.laneClick(0)})),this.add.rectangle(430,i(this),235,a(this),0,.001).setInteractive().on("pointerup",(function(){e.laneClick(1)})),this.add.rectangle(695,i(this),250,a(this),0,.001).setInteractive().on("pointerup",(function(){e.laneClick(2)})),this.add.rectangle(965,i(this),260,a(this),0,.001).setInteractive().on("pointerup",(function(){e.laneClick(3)})),this.add.rectangle(1235,i(this),250,a(this),0,.001).setInteractive().on("pointerup",(function(){e.laneClick(4)})),this.add.rectangle(1500,i(this),240,a(this),0,.001).setInteractive().on("pointerup",(function(){e.laneClick(5)})),this.add.rectangle(1760,i(this),230,a(this),0,.001).setInteractive().on("pointerup",(function(){e.laneClick(6)})),this.physics.add.overlap(this.man,this.productGroup,(function(t,r){r.destroy(),e.score+=r.point,e.scoreText.text="".concat(e.score),c(e),e.score}));var y=this.physics.add.image(o(this),a(this)+100,"product-3").setScale(14,.1);this.physics.add.overlap(y,this.productGroup,(function(t,o){o.destroy(),r>0&&r--,e.livesArr[r].visible=!1,0==r&&(console.log("Game over"),n.isgameOver=!0,e.man.stop(),e.addGameOver())}))}},{key:"update",value:function(e,t){this.bgTile.tilePositionY-=this.tileSpeed}},{key:"laneClick",value:function(e){this.msg.alpha=0,n.isgameOver||this.man.x!=this.laneXposArr[e]&&(this.tweens.add({targets:this.man,duration:200,x:this.laneXposArr[e]}),this.sound.play("jump"))}},{key:"addGameOver",value:function(){var e=this;c(this);var t=this.add.container(o(this),i(this)).setDepth(7),r=this.add.rectangle(0,0,s(this),a(this),0,.7),u=this.add.image(0,0,"gameover-popup").setScale(1.5),l=this.add.text(0,-230,"GAME 0VER",{fontSize:"80px",fontFamily:"font",color:"#ffffff"}).setOrigin(.5),f=this.add.text(0,-55,"SCORE ".concat(this.score),{fontSize:"40px",fontStyle:"bold",fontFamily:"font",color:"#002bb1"}).setOrigin(.5),p=this.add.image(0,170,"button-restart").setScale(1.5).setInteractive({cursor:"pointer"}).on("pointerup",(function(){n.isgameOver=!1,e.scene.start("GameScene")}));t.add([r,u,l,f,p])}}])&&B(t.prototype,r),u&&B(t,u),f}(),N={type:Phaser.AUTO,parent:"game",backgroundColor:"#001625",width:1920,height:1333,scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},dom:{createContainer:!0},physics:{default:"arcade",arcade:{gravity:{y:0},debug:!1}},scene:[y,W]};new Phaser.Game(N)}});