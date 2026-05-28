<!--
 * @title: 
 * @Autor: li yu mo
 * @Date: 2026-05-27
 * @LastEditors: li yu mo
 * @LastEditTime: 2026-05-27
 * @FilePath: /liyumo-blog/docs/JS/this.md
-->
# this 指向

## 什么是this

this表示函数执行时的调用对象。

## 普通函数

```js
function test(){
 console.log(this)
}
```

## 箭头函数

箭头函数没有自己的this。

## 项目使用

Vue事件绑定场景。