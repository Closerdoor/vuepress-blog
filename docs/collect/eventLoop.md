---
title: JavaScript中的EventLoop事件循环
author: Closerdoor
date: '2021-12-12'
---

## JavaScript是一种单线程语言，它的异步和多线程实现是通过Event Loop事件循环机制来实现。

### Event Loop主要分为三部分：

* 调用栈(call stack)
* 消息队列(Message queue)
* 微任务队列(Microtask Queue)
Event Loop开始时会从全局代码开始一行一行执行，遇到函数调用会把它压入调用栈中，被压入的函数叫做帧(Frame)，但函数返回后会从调用栈中弹出。

而异步操作比如定时器，ajax等会进入消息队列中，当这些被压入栈时，他们里面的回调函数进入消息队列等待，等调用栈清空再执行。

使用promise、async/await创建的异步操作会进入微任务队列，会在调用栈被清空时立即执行，并且处理期间新加入的微任务队列也会一起执行。