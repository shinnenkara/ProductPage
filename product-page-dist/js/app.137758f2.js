(function(e){function t(t){for(var a,o,s=t[0],u=t[1],c=t[2],d=0,v=[];d<s.length;d++)o=s[d],n[o]&&v.push(n[o][0]),n[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(v.length)v.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,s=1;s<r.length;s++){var u=r[s];0!==n[u]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},i=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"00b4":function(e,t,r){e.exports=r.p+"img/vmSocks-blue-onWhite.64d27ff3.jpg"},"034f":function(e,t,r){"use strict";var a=r("64a9"),n=r.n(a);n.a},"06c2":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"product"},[r("div",{staticClass:"product-image"},[r("a",{attrs:{href:e.image}},[r("img",{attrs:{src:e.image,alt:""}})])]),r("div",{staticClass:"product-info"},[r("h1",[e._v(e._s(e.title))]),e.sale?r("p",[e._v(e._s(e.sale))]):r("p",[r("br")]),e.inStock>10?r("p",[e._v("In Stock")]):e.inStock<=10&&e.inStock>0?r("p",[e._v("Almost Sold Out!")]):r("p",{class:{"out-of-stock":!e.inStock}},[e._v("Out of Stock")]),r("p",[e._v("Shipping: "+e._s(e.shipping))]),r("product-details",{attrs:{details:e.details}}),e._l(e.variants,function(t,a){return r("div",{key:t.variantId,staticClass:"color-box",class:{"active-color":e.variants[e.selectedVariant].variantData["color"]==t.variantData["color"]},style:{backgroundColor:t.variantData["color"]},on:{click:function(t){return e.updateProduct(a)}}})}),r("ul",e._l(e.sizes,function(t,a){return r("li",{key:a},[e._v(e._s(t))])}),0),r("button",{class:{"disabled-button":!e.inStock},attrs:{disabled:!e.inStock},on:{click:function(t){return e.addToCart()}}},[e._v("Add to Cart")])],2),r("product-tabs",{attrs:{reviews:e.reviews},on:{"review-submitted":e.addReview}})],1)},n=[],i=r("4157"),o=r.n(i),s=r("00b4"),u=r.n(s),c={props:{premium:{type:Boolean,default:!1,required:!0},cart:{type:Array,required:!0}},data:function(){return{brand:"Kara Sick",product:"Socks",message:"heh",selectedVariant:0,details:["90% cotton","10% polyester","Gender-neutral"],variants:[{variantId:2234,variantData:{color:"green",image:o.a,quantity:12,onSale:!1}},{variantId:2235,variantData:{color:"blue",image:u.a,quantity:3,onSale:!0}}],sizes:["S","M","L","XL"],reviews:[]}},methods:{addToCart:function(){this.$emit("add-to-cart",this.variants[this.selectedVariant].variantId),--this.variants[this.selectedVariant].variantData["quantity"]},updateProduct:function(e){this.selectedVariant=e},removeFromCart:function(){for(var e=0;e<this.variants.length;e++)if(this.cart[this.cart.length-1]==this.variants[e].variantId)return this.cart.splice(-1,1),void++this.variants[e].variantData["quantity"]},addReview:function(e){this.reviews.push(e)}},computed:{title:function(){return this.brand+" "+this.product},image:function(){return this.variants[this.selectedVariant].variantData["image"]},inStock:function(){return this.variants[this.selectedVariant].variantData["quantity"]},sale:function(){return this.variants[this.selectedVariant].variantData["onSale"]?this.brand+" "+this.product+" are on sale!":0},shipping:function(){return this.premium?"Free":"$2.99"}}},l=c,d=r("2877"),v=Object(d["a"])(l,a,n,!1,null,null,null);t["default"]=v.exports},"39aa":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cart"},[r("button",{directives:[{name:"show",rawName:"v-show",value:0!=e.cart,expression:"cart != 0"}],on:{click:function(t){return e.removeFromCart()}}},[e._v("Remove from Cart")]),r("p",[e._v("Cart("+e._s(e.cartLength)+")")])])},n=[],i={props:{cart:{type:Array,required:!0}},data:function(){return{removeButton:!1}},methods:{removeFromCart:function(){this.$emit("remove-from-cart")},showRemoveButton:function(){}},computed:{cartLength:function(){return this.cart.length}}},o=i,s=r("2877"),u=Object(s["a"])(o,a,n,!1,null,null,null);t["default"]=u.exports},4157:function(e,t,r){e.exports=r.p+"img/vmSocks-green-onWhite.197149a2.jpg"},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("cart",{attrs:{cart:e.cart},on:{"remove-from-cart":e.removeFromCart}}),r("product",{ref:"Product",attrs:{premium:e.premium,cart:e.cart},on:{"add-to-cart":e.addToCart}})],1)},i=[],o={name:"app",data:function(){return{cart:[],premium:!0}},methods:{addToCart:function(e){this.cart.push(e)},removeFromCart:function(){this.$refs.Product.removeFromCart()},addReview:function(e){this.$refs.Product.addReview(e)}}},s=o,u=(r("034f"),r("2877")),c=Object(u["a"])(s,n,i,!1,null,null,null),l=c.exports;a["a"].config.productionTip=!1,r("b43f"),new a["a"]({render:function(e){return e(l)}}).$mount("#app")},"64a9":function(e,t,r){},"79fd":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",e._l(e.details,function(t,a){return r("li",{key:a},[e._v(e._s(t))])}),0)},n=[],i={props:{details:{type:Array,required:!0}}},o=i,s=r("2877"),u=Object(s["a"])(o,a,n,!1,null,null,null);t["default"]=u.exports},"7c47":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"review-form",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e.errors.length?r("p",{staticClass:"error"},[r("b",[e._v("Please correct the following error(s):")]),r("ul",e._l(e.errors,function(t,a){return r("li",{key:a},[e._v(e._s(t))])}),0)]):e._e(),r("p",[r("label",{attrs:{for:"name"}},[e._v("Name:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{id:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),r("p",[r("label",{attrs:{for:"review"}},[e._v("Review:")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.review,expression:"review"}],attrs:{id:"review"},domProps:{value:e.review},on:{input:function(t){t.target.composing||(e.review=t.target.value)}}})]),r("p",[r("label",{attrs:{for:"rating"}},[e._v("Rating:")]),r("select",{directives:[{name:"model",rawName:"v-model.number",value:e.rating,expression:"rating",modifiers:{number:!0}}],attrs:{id:"rating"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(t){var r="_value"in t?t._value:t.value;return e._n(r)});e.rating=t.target.multiple?r:r[0]}}},[r("option",[e._v("5")]),r("option",[e._v("4")]),r("option",[e._v("3")]),r("option",[e._v("2")]),r("option",[e._v("1")])])]),r("p",[e._v("Would you recommend this product?")]),r("div",{staticClass:"buttons-radio"},[r("label",{staticClass:"button-radio"},[e._v("Yes"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.recommend,expression:"recommend"}],attrs:{type:"radio",value:"Yes"},domProps:{checked:e._q(e.recommend,"Yes")},on:{change:function(t){e.recommend="Yes"}}})]),r("label",{staticClass:"button-radio"},[e._v("No"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.recommend,expression:"recommend"}],attrs:{type:"radio",value:"No"},domProps:{checked:e._q(e.recommend,"No")},on:{change:function(t){e.recommend="No"}}})])]),e._m(0)])},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("input",{attrs:{type:"submit",value:"Submit"}})])}],i=(r("7f7f"),{data:function(){return{name:null,review:null,rating:null,recommend:null,errors:[]}},methods:{onSubmit:function(){if(this.errors=[],this.name&&this.review&&this.rating&&this.recommend){var e={name:this.name,review:this.review,rating:this.rating,recommend:this.recommend};this.$emit("review-submitted",e),this.name=null,this.review=null,this.rating=null,this.recommend=null}else this.name||this.errors.push("Name required."),this.review||this.errors.push("Review required."),this.rating||this.errors.push("Rating required."),this.recommend||this.errors.push("Recommendation required.")}}}),o=i,s=r("2877"),u=Object(s["a"])(o,a,n,!1,null,null,null);t["default"]=u.exports},b43f:function(e,t,r){"use strict";r.r(t);var a=r("2b0e");a["a"].component("cart",r("39aa").default),a["a"].component("product",r("06c2").default),a["a"].component("product-details",r("79fd").default),a["a"].component("product-review",r("7c47").default),a["a"].component("product-tabs",r("d6bb").default)},d6bb:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"review-tabs"},[e._l(e.tabs,function(t,a){return r("span",{key:a,staticClass:"tab",class:{"active-tab":e.selectedTab==t},on:{click:function(r){e.selectedTab=t}}},[e._v("\n        "+e._s(t)+"\n    ")])}),r("div",{directives:[{name:"show",rawName:"v-show",value:"Reviews"===e.selectedTab,expression:"selectedTab === 'Reviews'"}],staticClass:"product-reviews"},[r("h2",[e._v("Reviews")]),r("p",{directives:[{name:"show",rawName:"v-show",value:!e.reviews.length,expression:"!reviews.length"}]},[e._v("There are no reviews yet.")]),r("ul",e._l(e.reviews,function(t,a){return r("li",{key:a},[r("p",[e._v(e._s(t.name))]),r("p",[e._v("Rating: "+e._s(t.rating))]),r("p",[e._v(e._s(t.review))])])}),0)]),r("product-review",{directives:[{name:"show",rawName:"v-show",value:"Make a Review"===e.selectedTab,expression:"selectedTab === 'Make a Review'"}],on:{"review-submitted":e.addReview}})],2)},n=[],i={props:{reviews:{type:Array,required:!0}},data:function(){return{tabs:["Reviews","Make a Review"],selectedTab:"Reviews"}},methods:{addReview:function(e){this.$emit("review-submitted",e)}}},o=i,s=r("2877"),u=Object(s["a"])(o,a,n,!1,null,null,null);t["default"]=u.exports}});
//# sourceMappingURL=app.137758f2.js.map