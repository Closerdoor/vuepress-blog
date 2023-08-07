---
title: cookie,localStorage和SessionStorage
author: Closerdoor
date: '2021-12-12'
---

## cookie

用于存储 web 页面的用户信息，主要用于保存登陆信息。

当浏览器从服务器上请求 web 页面时， 属于该页面的 cookie 会被添加到该请求中。服务端通过这种方式来获取用户的信息。

### **特点:**

* 可以设置过期时间
* 最大可以存储4KB
* 每一个域名下面最多可以存储50条数据

### **内容:**

主要包括：名字、值、过期时间、路径和域。路径与域一起构成cookie的作用范围。

如果不在浏览器中设置过期时间，cookie被保存在内存中，生命周期随浏览器的关闭而结束，这种cookie简称会话cookie。如果在浏览器中设置了cookie的过期时间，cookie被保存在硬盘中，关闭浏览器后，cookie数据仍然存在，直到过期时间结束才消失。

### **格式：**
`name=value;[expires=data];[path=path];[domain=somewhere.com];[secure]`
//expires:过期时间，后面必须填写日期对象【注】系统会自动清除过期的cookie
//path:限制访问路径。如果不设置，默认是加载当前.html文件的路径【注】设置的cookie路径和加载当前文件的路径必须一致，如果不一致，cookie访问失败
//domain:限制访问域名。如果不设置，默认是加载当前.html文件的服务器域名/ip
//secure:如果设置，设置cookie时，可以通过http/https协议加载文件设置。设置了这个字段以后，只能设置https协议加载cookie
如何使用：
需要自己封装cookie方法，这里我们使用jQuery Cookie 插件演示用cookie保存购物车数据
```js
//1、判断是否存在cookie
var first=$.cookie("goods") == null ? true : false;
//2、如果是第一次添加
if(first){
    var goodsArr=[{
      id:id,
      num:1
    }];
    $.cookie("goods",JSON.stringify(goodsArr),{expires:7});
}else{
    //3、不是第一次添加，判断原有数据里是否添加过该商品
    var str=$.cookie("goods");
    var goodsArr=JSON.parse(str);
    //假设添加过该商品
    var same=true;
    for(var i=0;i<goodsArr.length;i++){
      if(id == goodsArr[i].id){
        goodsArr[i].num++;
        same=false;
        break;
      }
    }
    if(same){
      //如果没有添加过，新增商品数据
        var obj={
        id:id,
        num:1
    };
    goodsArr.push(obj);
}
$.cookie("goods",JSON.stringify(goodsArr),{expires:7});
```

## web storage

cookie的大小是受限的，并且每次请求一个新页面的时候cookie都会被发送过去，这样无形中浪费了带宽，另外cookie还需要指定作用域，不可跨域调用。 

但是cookie也是不可或缺的，cookie的作用是与服务器进行交互，作为http规范的一部分而存在的，而web Storage仅仅是为了在本地“存储”数据而生 

localStorage 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除。
sessionStorage 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。
### **特点:**

* 减少网络流量：一旦数据保存在本地之后，就可以避免再向服务器请求数据，因此减少数据在浏览器和服务器间不必要的来回传递

* 快速显示数据：性能好，从本地读数据比通过网络从服务器上获得数据快得多，本地数据可以及时获得，整个页面和数据都在本地的话，可以立即显示

* 临时存储：很多时候数据只需要在用户浏览一组页面期间使用，关闭窗口后数据就可以丢弃了，这种情况使用sessionStorage非常方便

如何使用:window.localStorage或window.sessionStorage

```js
setItem("key","value")
getItem("key")//获取名称为“key”的值
removeItem("key");//删除名称为“key”的信息。
clear();​//清空localStorage中所有信息
```
### **localStorage 和 sessionStorage 的区别：**
localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据

sessionStorage是在同源的同窗口中，始终存在的数据，也就是说只要这个浏览器窗口没有关闭，即使刷新页面或进入同源另一个页面，数据仍然存在，关闭窗口后，sessionStorage就会被销毁，同时“独立”打开的不同窗口，即使是同一页面，sessionStorage对象也是不同的