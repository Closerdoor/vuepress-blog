(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{483:function(t,e,n){"use strict";n.r(e);var s=n(2),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"鼠标触发事件event"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#鼠标触发事件event"}},[t._v("#")]),t._v(" 鼠标触发事件event")]),t._v(" "),e("p",[t._v("clientX clientY\n触发事件时鼠标指针距离window窗口左上角的位置\n坐标原点为 window窗口的左上角")]),t._v(" "),e("p",[t._v("pageX pageY\n触发事件时鼠标指针距离docuemnt文档左上角的位置\n坐标原点为 document文档的左上角")]),t._v(" "),e("p",[t._v("clientX和pageX的区别是 文档的窗口可能比window窗口要高，此时会出现滚动条，pageX的定位原点是文档左上角(包括滚动条移动的距离)，而clientX原点永远是可视窗口左上角")]),t._v(" "),e("p",[t._v("offsetX offsetY\n元素content内容区域的左上角为原点\n以当前事件的目标对象边框内沿(content)左上角为原点，定位x轴坐标")]),t._v(" "),e("h2",{attrs:{id:"浏览器窗口尺寸"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器窗口尺寸"}},[t._v("#")]),t._v(" 浏览器窗口尺寸")]),t._v(" "),e("p",[t._v("浏览器窗口宽度/高度如何获取\nwindow.innerWidth\n浏览器window view宽度 包括浏览器滚动条\nwindow.innerHeight\n浏览器window view高度 包括浏览器滚动条\n浏览器可视区域窗口的 width + padding + border + 滚动条,会受到F12的影响")]),t._v(" "),e("h2",{attrs:{id:"元素属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#元素属性"}},[t._v("#")]),t._v(" 元素属性")]),t._v(" "),e("p",[t._v("offsetWidth offsetHeight\n元素的实际宽度高度 width/height + padding  + border\n包括滚动条")]),t._v(" "),e("p",[t._v("clientWidth clientHeight\n元素的宽度高度 不包括边框 不包括滚动条 width/height + padding")]),t._v(" "),e("p",[t._v("边框>滚动条>padding>content")]),t._v(" "),e("p",[t._v("offset系列:获取元素的宽,高,left,top, offsetParent\n元素的实际宽度高度 width/height + padding  + border\noffsetWidth:元素的宽,有边框\noffsetHeight:元素的高,有边框\noffsetLeft:元素距离定位父级左边位置的值\noffsetTop:元素距离定位父级上面位置的值")]),t._v(" "),e("p",[t._v("scroll系列:卷曲出去的值\nscrollLeft:向左卷曲出去的距离\nscrollTop:向上卷曲出去的距离\nscrollWidth:元素中内容的实际的宽(如果内容很少或者没有内容, 元素自身的宽),没有边框\nscrollHeight:元素中内容的实际的高(如果内容很少或者没有内容,元素自身的高),没有边框")]),t._v(" "),e("p",[t._v("client系列:可视区域\nclientWidth:可视区域的宽(没有边框),边框内部的宽度\nclientHeight:可视区域的高(没有边框),边框内部的高度\nclientLeft:左边框的宽度\nclientTop:上边框的宽度")]),t._v(" "),e("h2",{attrs:{id:"getboundingclientrect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getboundingclientrect"}},[t._v("#")]),t._v(" "),e("strong",[t._v("getBoundingClientRect")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" rect "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rect")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("元素总宽度")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("padding"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("border"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("元素总高度")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("height"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("padding"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("border"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("bottom")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 底边距离浏览器顶部\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("left")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 左边距离浏览器左边\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("right")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 右边距离浏览器左边 right "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" left "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" width\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("top")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 顶部距离浏览器顶部\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 元素左上角顶点距离浏览器左上角顶点的坐标"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("y")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 元素左上角顶点距离浏览器左上角顶点的坐标"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Y")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);