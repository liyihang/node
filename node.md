#node.js

#node.js 简介
##什么是JavaScript？

一门脚步语言 需要嵌入html执行

##浏览器中的JavaScript可以做什么？

校验表单 操作dom 等等

##浏览器中的JavaScript不可以做什么？

操作服务器硬件

##浏览器与JavaScript是什么关系？

浏览器解析js，目的是为了让计算机能看懂js，看懂01010101，机器码、字节码

编译

内核-->js引擎

引擎 1.转化  汽油柴油等等->转化->成动能

             模板+数据--->页面
    
              js代码--->机器码\字节码
    
     2.移植性
    
     js引擎套一个壳子，写js代码传给js引擎，操作硬件
    
     node.js  v8引擎去解析js

##JavaScript只可以运行在浏览器中吗？

##什么是 Node.js?

- https://nodejs.org/en/
- node是js运行环境基于v8引擎
  特点用事件驱动、无阻塞的io模型
  优势轻量、高效
- node.js是门技术不是语言
  java java
  .net c#
  node js
- Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. 
  - JavaScript runtime  JavaScript 运行时
  - Chrome's V8 JavaScript engine Chrome 浏览器 V8 引擎
  - Node.js 是一个 构建于 谷歌的 Chrome 浏览器的 V8 引擎之上的一个 JavaScript运行时 环境
  - Node.js可以解析和执行 JavaScript 代码
- Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. 
  - event-driven  事件驱动模型
  - non-blocking I/O model  非阻塞IO模型  IO（input/output）输入与输出
  - lightweight[ˈlaɪtweɪt]  轻量级
    - 在软件开发行业中，轻量级标识褒义词
    - 轻量级也就意味着 运行速度快
    - 轻量级也就意味着有更好的 跨平台 特性（平台的差异性，兼容性）
  - efficient[ɪˈfɪʃnt] 高效的
  - Node.js的 事件驱动和非阻塞IO模型使得Node.js本身非常的轻量和高效
##node.js和npm的关系
- Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
  - package ecosystem npm  包生态系统 npm
  - largest  最大的
  - open source libraries 开源库
    - 理论意义上 开源就表示有成熟的社区，开放源代码
  - Node.js 的npm包生态系统，是世界上 最大的 开源库 生态系统
  - 以前的 客户端中 JavaScript 库 散列在互联网的各个地方
  - npm 就是 把大家经常使用的一些开源库 给 组织到了一起

Node 是一个可以解析和执行 JavaScript 代码的 运行时环境

#node.js的安装

node.js 的安装我们直接在官网下载相对于的平台安装包，这里我们是windows下。https://nodejs.org/zh-cn/

![1542703643611](D:\front-end\node\node.assets\1542703643611.png)

下载完成之后我们一路next即可。安装完成我们`win`+`R`打开命令行，输入`node -v`查看版本。

![1542703861458](D:\front-end\node\node.assets\1542703861458.png)

上面`node`的版本是8.9.4,`npm`的版本是5.6.

```
如果想更新node的版本，windows 下输入命令`where node`查看node的安装位置，下载最新的版本node覆盖安装即可。
```

以上就是`node`安装。



# node.js初识

