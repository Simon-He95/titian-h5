---
title: 标签页
sidebar_custom_props:
  suffix: Tabs
hide_title: true
pagination_prev: null
pagination_next: null
side_iframe_path: "#/tabs"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 标签页 _Tabs_
**选项卡切换组件，用于在不同的内容区域之间进行切换**

import TabsLink from '@site/src/components/tabsLink';

<TabsLink id="ti-tabs-api" />

## 用法示例
#### 基础用法
<Tabs>
<TabItem value="html" label="index.html">

```html showLineNumbers
<ti-tabs id="ti-tabs"></ti-tabs>
```
</TabItem>
<TabItem value="js" label="index.js">

```js showLineNumbers
window.onload=function(){
    var tabs = document.getElementById("ti-tabs");
    tabs.tabs = ["首页", "商品列表", "购物车", "个人中心"];
}
```
</TabItem>
</Tabs>

#### 自定义字段名称
<Tabs>
<TabItem value="html" label="index.html">

```html showLineNumbers
<ti-tabs id="ti-tabs" tab-key="name"></ti-tabs>
```
</TabItem>
<TabItem value="js" label="index.js">

```js showLineNumbers
window.onload=function(){
  var tabs = document.getElementById("ti-tabs");
  tabs.tabs = [{name: '首页'}, {name: '我的'}];
}
```
</TabItem>
</Tabs>

#### 主体内容使用插槽，内置swiper
<Tabs>
<TabItem value="html" label="index.html">

```html showLineNumbers
<ti-tabs id="ti-tabs" use-slot></ti-tabs>
```
</TabItem>
<TabItem value="js" label="index.js">

```js showLineNumbers
window.onload=function(){
  var tabs = ["首页", "商品列表", "购物车", "个人中心"];
  var tabsDom = document.getElementById("ti-tabs");
  tabsDom.tabs = tabs;
  var html = "";
  for(var i=0;i++;i<tabs.length){
    html += `<div slot="tab-content-${index}">- ${item} -</div>`;
  };
  tabsDom.appendChild(html);
}
```
</TabItem>
</Tabs>

#### 设置单屏平铺显示的tab数量
**当实际tabs总量小于设置的count值时，默认按当前总数平分整个屏幕。可以设置autoGap为false, 取消默认效果。**
<Tabs>
<TabItem value="html" label="index.html">

```html showLineNumbers
<ti-tabs id="ti-tabs1"></ti-tabs>
<ti-tabs id="ti-tabs2"></ti-tabs>
<ti-tabs id="ti-tabs3"></ti-tabs>
```
</TabItem>
<TabItem value="js" label="index.js">

```js showLineNumbers
window.onload=function(){
  var tabs1 = ["首页", "商品列表", "购物车", "个人中心"];
  var tabs2 = ["首页", "商品列表"];

  var tabs1Dom = document.getElementById("ti-tabs1");
  tabs1Dom.tabs = tabs1
  tabs1Dom.count = 3
  var tabs2Dom = document.getElementById("ti-tabs2");
  tabs2Dom.tabs = tabs2
  tabs2Dom.count = 3
  var tabs3Dom = document.getElementById("ti-tabs3");
  tabs3Dom.tabs = tabs2
  tabs3Dom.count = 3
  tabs3Dom.autoGap = false
}
```
</TabItem>
</Tabs>

#### 设置每个tab的宽度
**当实际tabs总宽度小于屏幕宽度时，默认按当前总数平分整个屏幕。可以设置autoGap为false, 取消默认效果。**
<Tabs>
<TabItem value="html" label="index.html">

```html showLineNumbers
<ti-tabs id="ti-tabs1"></ti-tabs>
<ti-tabs id="ti-tabs2"></ti-tabs>
<ti-tabs id="ti-tabs3"></ti-tabs>
```
</TabItem>
<TabItem value="js" label="index.js">

```js showLineNumbers
window.onload=function(){
  var tabs1 = ["首页", "商品列表", "购物车", "个人中心", "详情页", "筛选"];
  var tabs2 = ["首页", "商品列表"];

  var tabs1Dom = document.getElementById("ti-tabs1");
  tabs1Dom.tabs = tabs1
  tabs1Dom.tabWidth = 150
  var tabs2Dom = document.getElementById("ti-tabs2");
  tabs2Dom.tabs = tabs2
  tabs2Dom.tabWidth = 150
  var tabs3Dom = document.getElementById("ti-tabs3");
  tabs3Dom.tabs = tabs2
  tabs3Dom.tabWidth = 150
  tabs3Dom.autoGap = false
}
```
</TabItem>
</Tabs>

#### 设置相邻tab之间的间隔
**当实际tabs总宽度小于屏幕宽度时，默认会增加tab之间间隙，到达撑满一屏。可以设置autoGap为false, 取消默认效果。**
<Tabs>
<TabItem value="html" label="index.html">

```html showLineNumbers
<ti-tabs id="ti-tabs1"></ti-tabs>
<ti-tabs id="ti-tabs2"></ti-tabs>
<ti-tabs id="ti-tabs3"></ti-tabs>
```
</TabItem>
<TabItem value="js" label="index.js">

```js showLineNumbers
window.onload=function(){
  var tabs1 = ["首页", "商品列表", "购物车", "个人中心", "详情页", "筛选"];
  var tabs2 = ["首页", "商品列表"];

  var tabs1Dom = document.getElementById("ti-tabs1");
  tabs1Dom.tabs = tabs1
  tabs1Dom.gap = 50
  var tabs2Dom = document.getElementById("ti-tabs2");
  tabs2Dom.tabs = tabs2
  tabs2Dom.tabs = 50
  var tabs3Dom = document.getElementById("ti-tabs3");
  tabs3Dom.tabs = tabs2
  tabs3Dom.tabs = 50
  tabs3Dom.autoGap = false
}
```
</TabItem>
</Tabs>

#### tabs组件内置吸顶
<Tabs>
<TabItem value="html" label="index.html">

```html showLineNumbers
<ti-tabs id="ti-tabs"></ti-tabs>
```
</TabItem>
<TabItem value="js" label="index.js">

```js showLineNumbers
window.onload=function(){
  var tabs = ["首页", "商品列表"];

  var tabsDom = document.getElementById("ti-tabs");
  tabsDom.tabs = tabs;
  tabsDom.offsetTop = 50;
}
```
</TabItem>
</Tabs>

#### 禁用项
<Tabs>
<TabItem value="html" label="index.html">

```html showLineNumbers
<ti-tabs id="ti-tabs"></ti-tabs>
```
</TabItem>
<TabItem value="js" label="index.js">

```js showLineNumbers
window.onload=function(){
  var tabs = ["首页", "商品列表", "购物车", "个人中心", "详情页", "筛选"];

  var tabsDom = document.getElementById("ti-tabs");
  tabsDom.tabs = tabs;
  tabsDom.disabledTabs = [3];
}
```
</TabItem>
</Tabs>

#### 风格设置
<Tabs>
<TabItem value="html" label="index.html">

```html showLineNumbers
<ti-tabs id="ti-tabs1" variant="pure"></ti-tabs>
<ti-tabs id="ti-tabs2" variant="block"></ti-tabs>
<ti-tabs id="ti-tabs3" variant="calendar"></ti-tabs>
<ti-tabs id="ti-tabs4" variant="multi"></ti-tabs>
```
</TabItem>
<TabItem value="js" label="index.js">

```js showLineNumbers
window.onload=function(){
  var tabs1 = document.getElementById("ti-tabs1");
  tabs1.tabs = ["首页", "商品列表", "购物车", "个人中心", "详情页", "筛选"];

  var tabs2 = document.getElementById("ti-tabs2");
  tabs2.tabs = ["首页", "商品列表", "购物车", "个人中心", "详情页", "筛选"];

  var tabs3 = document.getElementById("ti-tabs3");
  tabs3.tabs = [
    { label: '01', description: '周一' }, 
    { label: '02', description: '周二' }
  ];

  var tabs4 = document.getElementById("ti-tabs4");
  tabs4.tabs = [
    { label: '第一期', description: '01.01', date: '2022-01-01' }, 
    { label: '第二期', description: '10.01', date: '2022-10-01', tag: '国庆节'},
    { label: '第三期', description: '12.02', date: '2022-12-02' },
    { label: '第四期', description: '12.03', date: '2022-12-03' }
  ];
}
```
</TabItem>
</Tabs>

#### 风格线设置
<Tabs>
<TabItem value="html" label="index.html">

```html showLineNumbers
<ti-tabs id="ti-tabs1" divider="default"></ti-tabs>
<ti-tabs id="ti-tabs2" divider="line"></ti-tabs>
<ti-tabs id="ti-tabs3" divider="shadow"></ti-tabs>
```
</TabItem>
<TabItem value="js" label="index.js">

```js showLineNumbers
window.onload=function(){
  var tabs = ["首页", "商品列表", "购物车", "个人中心", "详情页", "筛选"];

  var tabs1 = document.getElementById("ti-tabs1");
  tabs1.tabs = tabs;

  var tabs2 = document.getElementById("ti-tabs2");
  tabs2.tabs = tabs;

  var tabs3 = document.getElementById("ti-tabs3");
  tabs3.tabs = tabs;
}
```
</TabItem>
</Tabs>

## ti-tabs API
### 属性 **Properties**

| 名称                  | 类型                                 | 必填 | 默认值  | 说明                                                                                         | 备注 |
| --------------------- | ------------------------------------ | ---- | ------- | -------------------------------------------------------------------------------------------- | ---- |
| variant               | `string`                             | 否   | `pure`  | 标签页的风格，可选值：`block` `pure` `calendar` `multi`                                      | -    |
| tabs                  | `array` \| `Array<Option>`           | 是   | -       | 数据项, ['首页', '我的'] 或者 [{label: '首页'}，{label: '我的'}]                             | -    |
| active-tab            | `number` \| `string`                 | 否   | `0`     | 选中项索引，或者 tab-key 对应的值                                                            | -    |
| disabled-tabs         | `array`                              | 否   | -       | 禁用的数据项                                                                                 | -    |
| duration              | `number`                             | 否   | `500`   | 滑动动画时长                                                                                 | -    |
| divider               | `string`                             | 否   | -       | 分割线类型，可选值：`line` `shadow` `default`                                                | -    |
| sticky                | `boolean`                            | 否   | `false` | 是否有吸顶效果                                                                               | -    |
| offset-top            | `number`                             | 否   | 0       | 吸顶距离，单位px                                                                             | -    |
| use-pure-css          | `boolean`                            | 否   | `false` | 使用css的position: sticky实现                                                                | -    |
| count                 | `number`                             | 否   | `5`     | 单屏展示的菜单数量                                                                           | -    |
| tab-width             | `number`                             | 否   | -       | 每个菜单的宽度，单位 px，设置此项后 count 则无效                                             | -    |
| gap                   | `number`                             | 否   | `-1`    | tab(文字)间距，单位 px，设置此项后 tab-width 和 count 无效                                   | -    |
| auto-gap              | `boolean`                            | 否   | `true`  | 当 tab 总宽度不够一屏，采用平铺模式                                                          | -    |
| use-slot              | `boolean`                            | 否   | `false` | 是否启用插槽，即内置 swiper 组件                                                             | -    |
| ext-style             | `string` \| `Record<string, string>` | 否   | -       | 根节点样式                                                                                   | -    |
| tab-key               | `string`                             | 否   | `label` | tabs 如果是对象数组，对应每项的关键词 key                                                    | -    |
| alias                 | `Record<string, string>`             | 否   | -       | 数据项默认字段名`label` `description` `tag` `date`的别名，用于自定义数据，可替代`tabKey`属性 | -    |
| scroll-with-animation | `boolean`                            | 否   | `true`  | tab切换，是否使用过度动画                                                                    | -    |
| async-change          | `boolean`                            | 否   | `false` | 是否采用受控模式，异步设置active-tab                                                         | -    |

### Option

API 中的 tabs 可以为一个对象数组，数组中的每一个对象有以下 key：

| 名称        | 类型     | 必填 | 默认值 | 说明                                                                                  | 备注 |
| ----------- | -------- | ---- | ------ | ------------------------------------------------------------------------------------- | ---- |
| label       | `string` | 否   | -      | 标题                                                                                  | -    |
| description | `string` | 否   | -      | variant设置`calendar`或者`multi`可用，标题下描述文字                                  | -    |
| tag         | `string` | 否   | -      | variant设置`multi`可用，最下方标签，如设置日期标签国庆节等                            | -    |
| date        | `string` | 否   | -      | variant设置`multi`可用，设置日期如：2022-12-01，如果是当前日期，下标tag将会写成`当前` | -    |

### 事件 **Events**
| 名称          | 参数列表                                                                                    | 描述                               | 备注 |
| ------------- | ------------------------------------------------------------------------------------------- | ---------------------------------- | ---- |
| bind:change   | `(e: WechatMiniprogram.CustomEvent<{index: number, item: Record<string, string>}>) => void` | 当前激活的标签                     | -    |
| bind:fixed    | `(e: WechatMiniprogram.CustomEvent<{isFixed: boolean}>) => void`                            | 使用吸顶功能是，吸顶状态改变是触发 | -    |
| bind:click    | `(e: WechatMiniprogram.CustomEvent<{index: number, item: Record<string, string>}>) => void` | 点击tab项时触发                    | -    |
| bind:disabled | `(e: WechatMiniprogram.CustomEvent<{index: number, item: Record<string, string>}>) => void` | 点击禁用的tab项时触发              | -    |

### 插槽 **Slots**

| 名称                 | 说明                                                                                            | 备注 |
| -------------------- | ----------------------------------------------------------------------------------------------- | ---- |
| tab-content-${index} | 每个标签页展示项，index为tabs的索引，如果使用插槽请用可扩展样式类名`swiper-class`设置容器高度。 | -    |

### 外部样式类 **External Classes**

| 名称             | 说明               | 备注                                                             |
| ---------------- | ------------------ | ---------------------------------------------------------------- |
| tab-active-class | 选中节点样式名     | -                                                                |
| tab-text-class   | tab 文字容器样式名 | 可设置缺省或者截断                                               |
| swiper-class     | swiper 容器样式名  | -                                                                |
| tabs-class       | tabs 样式名        | -                                                                |
| tabs-mark-class  | 当前项底部标志类名 | 如果修改下划线的宽度，在自定义样式类里加--tabs-mark-width: 10rpx |
| ext-class        | 根节点样式类名     | -                                                                |

### CSS 变量 **CSS Variable**
| 变量                           | 默认值    | 说明                               | 备注 |
| ------------------------------ | --------- | ---------------------------------- | ---- |
| --tabs-background-color        | `#fff`    | tabs背景颜色                       | -    |
| --tabs-swiper-background-color | `#fff`    | tabs下方swiper内容部分背景颜色     | -    |
| --tabs-tab-height              | `88rpx`   | tabs高度                           | -    |
| --tabs-swiper-height           | `150rpx`  | tabs下方swiper内容部分高度         | -    |
| --tabs-tab-color               | `#757575` | tabs文字颜色                       | -    |
| --tabs-tab-font-size           | `28rpx`   | tabs文字字号                       | -    |
| --tabs-active-text-color       | `#212121` | tabs激活项文字颜色                 | -    |
| --tabs-active-line-color       | `#fa2c19` | tabs激活项下标颜色，默认跟随主题色 | -    |