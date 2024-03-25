# 小橙编程学习宝典  
>
> ***XiaoCheng Programming Learning Book***
>
## 前端学习

### 起步三件套(HTML、css、js)

#### ⭐️ HTML5新特性  

1. 语义化标签  
  ![alt text](image.png)
2. 浏览器支持  
3. 多媒体标签  
    + **embed**(视频、音频 不支持移动端) 
    + **video**(视频 PC与移动兼容)
4. Canvas 画布  （脚本绘制图形）
5. ❌ 内联 SVG  （质量不下降的可伸缩矢量图形）
6. 本地(Web)存储  
    + localStorage - 长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除。  
    + sessionStorage - 临时保存同一窗口的数据，在关闭窗口后将删除这些数据。
7. ❌ Web SQL  
8. Web Workers 
   + 运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能 ) 
9. 应用缓存（Cache Manifest）  
    + \<html manifest="demo.appcache"> 离线访问,速度快减少服务器负载
10. 地理定位  **getCurrentPosition()**  
11. 拖放  

#### ⭐️ CSS

1. 选择器
2. 属性
3. 文档流
4. ⭐️ 内联元素 / 块状元素
5. ⭐️ 盒子模型
6. ⭐️ 浮动
7. ⭐️ 定位
8. ⭐️ 层叠规则
9. ❗ BFC 和 IFC 机制
10. CSS3
    + ⭐️ 响应式布局
    + 媒体查询
    + Flex 布局
    + Grid 布局
    + 瀑布流
    + 动画
    + 过渡
    + 渐变
    + 背景
    + 边框
    + 圆角
    + 字体
    + 2D / 3D 转换  
  
#### ⭐️JavaScript  

1. ⭐️ 数据类型
   + 未定义 Undefined  
    **Symbol(一个永远不会重复的字符串)**
   + 引用类型  
     对象 Object  
     数组 Array  
     函数 Function  
     ✅ 数据类型转换  
     ✅ 函数  

2. ⭐️ 函数  
  2.1 ⭐️ 自定义函数  
  2.2 调用方式
     + ⭐️ 全局调用  
     构造函数调用  
     + ⭐️ 函数方法调用  
     apply  
     call  
     + ❗ 闭包  

3. ✅ 对象  
  原型链和继承  

4. ✅ 作用域（作用域链）  
5. ✅ BOM API
6. ⭐️ DOM API
7. ⭐️ Ajax
8. ✅ JavaScript 执行机制
9. ✅ ES6+ 特性
   + let 和 const
   + 变量解构赋值
   + 对象扩展和新增方法
   + Symbol
   + Set 和 Map 数据结构
   + ⭐️❗ Promise & async / await 异步编程
   + Generator 函数异步编程

---

### 前端基础知识

✅ 互联网
⭐️ 域名
⭐️ DNS
⭐️ 服务器  

#### ✅ 浏览器

+ 浏览器 DOM 事件流 / 事件委托  
+ ⭐️ 浏览器加载顺序  
+ ⭐️ 浏览器渲染过程  
+ 浏览器事件循环  
+ 浏览器同源策略  
+ ❗ 跨域解决方案  
+ 浏览器缓存  
+ 控制台调试技巧  
  
#### ✅ HTTP

1. ❗ HTTP 请求过程  
2. 常见 HTTP 协议
   + HTTP 1.0  
   + ⭐️ HTTP 1.1
   + HTTP 2
   + HTTP 3

3. ⭐️ HTTP 请求类别

4. WebSocket  
5. ⭐️ Cookie  
6. Session  
7. ⭐️ HTTPS  

---

### 计算机基础

✅ 算法和数据结构  
⭐️ 时间 / 空间复杂度分析

+ 数据结构  
+ 数组  
+ 字符串  
+ 队列  
+ 栈  
+ 链表  
+ 集合  
+ 哈希表  
+ 二叉树  
+ 算法  
+ 排序  
+ 双指针  
+ 查找  
+ 分治  
+ 动态规划  
+ 递归  
+ 回溯  
+ 贪心  
+ 位运算  
+ DFS  
+ BFS  
+ 图  

---

### ✅ 计算机网络

+ HTTP 协议
+ 网络模型
+ UDP / TCP 协议

---

### ✅ 操作系统

+ 进程、线程
+ 进程 / 线程间通讯方式
+ 进程调度算法
+ 进程 / 线程状态
+ 死锁
+ 内存管理
+ 软件开发基础

---

### ✅ 设计模式

+ 单例模式
+ 代理模式
+ 工厂模式
+ 装饰者模式
+ 观察者模式
+ 策略模式
+ 门面模式  
