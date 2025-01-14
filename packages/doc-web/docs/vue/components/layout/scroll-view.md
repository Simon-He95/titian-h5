---
title: 滑动容器
sidebar_custom_props:
  suffix: ScrollView
hide_title: true
pagination_prev: null
pagination_next: null
side_iframe_path: "#/scroll-view"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 滑动容器 _ScrollView_

**滑动容器，提供类似于小程序 ScrollView 的能力。**

import TabsLink from '@site/src/components/tabsLink';

<TabsLink id="tiscrollview-api" />

## 安装使用

```typescript showLineNumbers
import { TiScrollView } from '@titian-design/mobile-vue';
```

## 用法示例

#### 基础用法

<Tabs>
  <TabItem value="vue" label="index.vue" >

```html showLineNumbers
<template>
  <div class="scroll-view-page">
      <div class="page-section">
        <div class="page-section-title">
          <span>Vertical Scroll</span>
          <p>纵向滚动</p>
        </div>
        <div class="page-section-spacing">
          <TiScrollView
            scroll-y
            @scrolltoupper="upper"
            @scrolltolower="lower"
            @ti-scroll="scroll"
          >
            <div id="demo1" class="scroll-view-item demo-text-1" />
            <div id="demo2" class="scroll-view-item demo-text-2" />
            <div id="demo3" class="scroll-view-item demo-text-3" />
          </TiScrollView>
        </div>
      </div>

      <div class="page-section">
        <div class="page-section-title">
          <span>Horizontal Scroll</span>
          <p>横向滚动</p>
        </div>
        <div class="page-section-spacing">
          <TiScrollView
            scroll-x
            extStyle="width: 100%"
            @ti-scroll="scroll"
            @scrolltoupper="upper"
            @scrolltolower="lower"
          >
            <div id="demo1" class="scroll-view-item-h demo-text-1" />
            <div id="demo2" class="scroll-view-item-h demo-text-2" />
            <div id="demo3" class="scroll-view-item-h demo-text-3" />
          </TiScrollView>
        </div>
      </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { TiScrollView } from '@titian-design/mobile-vue';
  
const upper = () => {
  console.log("到达头部");
};
const lower = () => {
  console.log("到达底部");
};

const scroll = () => {
  console.log("滚动");
};
</script>
```

  </TabItem>
  <TabItem value="less" label="index.less">

```css less showLineNumbers
.scroll-view-page {
  .page-section-spacing {
    margin-top: 60px;

    --scroll-view-width: 100%;
    --scroll-view-height: 300px;
  }

  .scroll-view-item {
    height: 300px;
  }

  .scroll-view-item-h {
    display: inline-block;
    width: 100vw;
    height: 300px;
  }

  .demo-text-1 {
    position: relative;
    align-items: center;
    justify-content: center;

    background-color: #1aad19;

    color: #fff;
    font-size: 18px;
  }

  .demo-text-1 {
    position: relative;
    align-items: center;
    justify-content: center;

    background-color: #1aad19;

    color: #fff;
    font-size: 36px;
  }

  .demo-text-1::before {
    content: 'A';

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }

  .demo-text-2 {
    position: relative;
    align-items: center;
    justify-content: center;

    background-color: #2782d7;

    color: #fff;
    font-size: 36px;
  }

  .demo-text-2::before {
    content: 'B';

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }

  .demo-text-3 {
    position: relative;
    align-items: center;
    justify-content: center;

    background-color: #f1f1f1;

    color: #353535;
    font-size: 36px;
  }

  .demo-text-3::before {
    content: 'C';

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }
}
```

 </TabItem>
</Tabs>

## TiScrollView API

### 属性 **Properties**

| 属性           | 类型                 | 默认值  | 必填 | 说明                                                                               | 备注 |
| -------------- | -------------------- | ------- | ---- | ---------------------------------------------------------------------------------- | ---- |
| scroll-x        | `boolean`            | `false` | 否   | 允许横向滚动                                                                       | -    |
| scroll-y        | `boolean`            | `false` | 否   | 允许纵向滚动                                                                       | -    |
| upper-threshold | `number` \| `string` | `2px`   | 否   | 距顶部/左边多远时，触发 scrolltoupper 事件                                         | -    |
| lower-threshold | `number` \| `string` | `2px`   | 否   | 距底部/右边多远时，触发 scrolltolower 事件                                         | -    |
| scroll-top      | `number` \| `string` | -       | 否   | 设置竖向滚动条位置                                                                 | -    |
| scroll-left     | `number` \| `string` | -       | 否   | 设置横向滚动条位置                                                                 | -    |
| scroll-into-view | `string`             | -       | 否   | 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素 | -    |

### 事件 **Events**

| 名称          | 参数列表                    | 说明                  | 备注 |
| ------------- | --------------------------- | --------------------- | ---- |
| scrolltoupper | `(e: CustomEvent) => void` | 滚动到顶部/左边时触发 | -    |
| scrolltolower | `(e: CustomEvent) => void` | 滚动到底部/右边时触发 | -    |
| ti-scroll     | `(e: CustomEvent) => void` | 滚动时触发            | -    |


### CSS 变量 **CSS Variables**

| 变量                             | 默认值       | 说明                     | 备注 |
| -------------------------------- | ------------ | ------------------------ | ---- |
| `--scroll-view-width`            | auto         | 宽度                     | -    |
| `--scroll-view-height`           | auto         | 高度                     | -    |
| `--scroll-view-padding-v`        | 0            | 上下 padding 间距        | -    |
| `--scroll-view-padding-h`        | 0            | 左右 padding 间距        | -    |
| `--scroll-view-min-width`        | initial      | 最小宽度                 | -    |
| `--scroll-view-max-width`        | initial      | 最大宽度                 | -    |
| `--scroll-view-min-height`       | initial      | 最小高度                 | -    |
| `--scroll-view-max-height`       | initial      | 最大高度                 | -    |
| `--scroll-view-virtual-display`  | inline-block | 组件根节点 display 属性  | -    |
| `--scroll-view-virtual-position` | relative     | 组件根节点 position 属性 | -    |
