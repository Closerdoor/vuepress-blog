(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{442:function(t,a,e){"use strict";e.r(a);var s=e(2),o=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"javascript是一种单线程语言-它的异步和多线程实现是通过event-loop事件循环机制来实现。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript是一种单线程语言-它的异步和多线程实现是通过event-loop事件循环机制来实现。"}},[t._v("#")]),t._v(" JavaScript是一种单线程语言，它的异步和多线程实现是通过Event Loop事件循环机制来实现。")]),t._v(" "),a("h3",{attrs:{id:"event-loop主要分为三部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-loop主要分为三部分"}},[t._v("#")]),t._v(" Event Loop主要分为三部分：")]),t._v(" "),a("ul",[a("li",[t._v("调用栈(call stack)")]),t._v(" "),a("li",[t._v("消息队列(Message queue)")]),t._v(" "),a("li",[t._v("微任务队列(Microtask Queue)\nEvent Loop开始时会从全局代码开始一行一行执行，遇到函数调用会把它压入调用栈中，被压入的函数叫做帧(Frame)，但函数返回后会从调用栈中弹出。")])]),t._v(" "),a("p",[t._v("而异步操作比如定时器，ajax等会进入消息队列中，当这些被压入栈时，他们里面的回调函数进入消息队列等待，等调用栈清空再执行。")]),t._v(" "),a("p",[t._v("使用promise、async/await创建的异步操作会进入微任务队列，会在调用栈被清空时立即执行，并且处理期间新加入的微任务队列也会一起执行。")])])}),[],!1,null,null,null);a.default=o.exports}}]);