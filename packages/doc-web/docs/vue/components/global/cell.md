---
title: 单元格
sidebar_custom_props:
  suffix: Cell
hide_title: true
pagination_prev: null
pagination_next: null
side_iframe_path: "#/cell"
---

# 单元格 _Cell_

**单元格为列表中的单个展示项，可使用多个单元格可以组合成一个单元格组。**

import TabsLink from '@site/src/components/tabsLink';

<TabsLink id="ticell-api" />

## 安装使用

```typescript showLineNumbers
import { TiCell, TiCellGroup } from '@titian-design/mobile-vue';
```

## 基本用法

#### 单独使用单元格

```html showLineNumbers
<template>
  <TiCell title="标题" />
  <TiCell title="标题" desc="居右详细内容文字" />
  <TiCell title="标题" label="标题下方附加信息" />
  <TiCell title="标题" desc="自定义左侧图标" icon="home" />
  <TiCell title="标题" desc="自定义图标颜色" icon="home" color="#ff0000" />
  <TiCell title="标题" desc="自定义右侧图标" right-icon="arrow-right" />
  <TiCell title="标题" desc="使用默认右侧箭头" arrow />
  <TiCell title="标题" desc="禁用单元格" disabled />
  <TiCell title="标题" desc="开启点击反馈" clickable />
  <TiCell title="标题" label="附加信息" desc="居上对齐" align-items="start" />
  <TiCell title="标题" label="附加信息" desc="居中对齐" align-items="center" />
  <TiCell title="标题" label="附加信息" desc="居下对齐" align-items="end" />
  <TiCell title="标题" desc="不展示下方分割线" :divider="false" />
<template>

<script lang="ts" setup>
import { TiCell } from '@titian-design/mobile-vue';
</script>
```

#### 使用 `slot` 修改单元格内容

```html showLineNumbers
<template>
  <TiCell title="使用slot自定义左侧图标">
    <TiIcon name="home" slot="icon" />
  </TiCell>

  <TiCell title="使用slot自定义右侧图标">
    <TiIcon name="home" slot="right-icon" />
  </TiCell>

  <TiCell>
    <div slot="title">使用 slot 修改 title</div>
  </TiCell>

  <TiCell title="使用slot自定义label">
    <div slot="label">标题下方附加信息</div>
  </TiCell>

  <TiCell title="使用slot自定义desc">
    <div slot="desc">居右详细内容文字</div>
  </TiCell>
</template>

<script lang="ts" setup>
import { TiCell } from '@titian-design/mobile-vue';
</script>
```

#### 多个单元格组合在一起

```html showLineNumbers
<template>
  <TiCellGroup title="单元格组标题">
    <TiCell title="标题" desc="详细内容文字" />
    <TiCell title="标题" desc="详细内容文字" />
    <TiCell title="标题" desc="详细内容文字" />
  </TiCellGroup>

  <TiCellGroup title="单元格组标题" subTitle="单元格组副标题">
    <TiCell title="标题" desc="详细内容文字" />
    <TiCell title="标题" desc="详细内容文字" />
    <TiCell title="标题" desc="详细内容文字" />
  </TiCellGroup>

  <TiCellGroup title="单元格组模式为卡片" mode="card">
    <TiCell title="标题" desc="详细内容文字" />
    <TiCell title="标题" desc="详细内容文字" />
    <TiCell title="标题" desc="详细内容文字" />
  </TiCellGroup>
</template>

<script lang="ts" setup>
import { TiCell, TiCellGroup} from '@titian-design/mobile-vue';
</script>
```


#### 为单元格绑定点击事件

```html showLineNumbers
<template>
  <TiCell title="标题" @click="handleClick" />
</template>

<script lang="ts" setup>
import { TiCell } from '@titian-design/mobile-vue';

const handleClick = (e:Event) => {
  console.log('点击了 cell')
}
</script>
```

#### 通过  [::part](https://developer.mozilla.org/en-US/docs/Web/CSS/::part) 修改组件样式

```html showLineNumbers
<template>
  <TiCell title="标题" @click="handleClick" />
</template>

<script lang="ts" setup>
import { TiCell } from '@titian-design/mobile-vue';
</script>

<style>
  ti-cell::part(custom-cell-ext-class) {
    background-color: red;
  }
</style>
```

#### 通过 [css变量](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) 修改组件样式

```html showLineNumbers
<template>
  <TiCell title="标题" @click="handleClick" />
</template>

<script lang="ts" setup>
import { TiCell } from '@titian-design/mobile-vue';
</script>

<style>
  ti-cell::part(custom-cell-ext-class) {
    background-color: red;
  }
</style>
```

## TiCell API

### 属性 **Properties**

| 名称          | 类型      | 是否必填 | 默认值     | 说明                                                         | 备注                                                              |
| ------------- | --------- | -------- | ---------- | ------------------------------------------------------------ | ----------------------------------------------------------------- |
| title         | `string`  | 否       | -          | 标题                                                         | - |
| label         | `string`  | 否       | -          | 标题下方附加信息                                             | -                                                                 |
| desc          | `string`  | 否       | -          | 副标题，右侧描述信息                                         | -                                                                 |
| sub-desc       | `string`  | 否       | -          | 副标题下面附加信息                                           | -                                                                 |
| arrow         | `boolean` | 否       | `false`     | 是否使用默认右侧向右箭头                                         | -                                                                 |
| required      | `boolean` | 否       | `false`      | 是否显示表单必填星号                                         |           -                                                        |
| disabled      | `boolean` | 否       | `false`      | 是否禁用单元格                                               | -                                                                 |
| icon          | `string`  | 否       | -          | 自定义左侧图标                                               | -                                                                 |
| icon-size      | `string`  | 否       | -          | 自定义左侧图标尺寸                                           | -                                                                 |
| right-icon     | `string`  | 否       | -          | 自定义右侧侧图标                                             | -                                                                 |
| right-icon-size | `string`  | 否       | -          | 自定义右侧图标尺寸                                           | -                                                                 |
| color         | `string`  | 否       | -          | 所有图标颜色，如果需要修改某个单一图标颜色，可使用自定义类名 | -                                                                 |
| clickable     | `boolean` | 否       | `false`       | 开启点击反馈                                                   | -                                                                 |
| align-items    | `string`  | 否       | -          | 单元格的横向对齐方式, 具体值可见 [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)                                         | -                                                                 |
| ext-style      | `string` \| `Record<string, string>`  | 否       | -          | 根节点额外扩展样式                                           | 属性值如果是带单位的话，要带上单位，如：`{margin: '10px'}`       |
| divider       | `boolean` | 否       | -          | 是否展示分割线                                               | -                                                                 |
| title-width    | `string`  | 否       | -          | 标题宽度，须包含单位，例如：`100px`                                         | -                                                                 |

### 插槽 **Slots**

| 名称      | 说明                       | 备注 |
| --------- | -------------------------- | ---- |
| icon      | 自定义右侧图标块展示       | 传入 `icon` 属性会忽略此 `slot`   |
| title     | 自定义标题块展示           | 传入 `title` 属性会忽略此 `slot`     |
| label     | 自定义附加信息块展示       |  传入 `label` 属性会忽略标题此 `slot`  |
| desc      | 自定义描述信息块展示       | 传入 `desc` 属性会忽略此 `slot`    |
| sub-desc   | 自定义描述信息附加信息展示 | 传入 `subDesc` 属性会忽略此 `slot`    |
| right-icon | 自定义右侧图标块展示       | 传入 `right-icon` 或者设置 `arrow` 属性会忽略此 `slot`  |

### 可扩展样式名 **External Class**

| 类名         | 说明                                 | 备注 |
| ------------ | ------------------------------------ | ---- |
| ext-class     | 根节点可扩展的类名                   | -    |
| title-class   | 单元格附加信息的自定义类名           | -    |
| label-class   | 单元格标题的自定义类名               | -    |
| desc-class    | 单元格描述信息的自定义类名           | -    |

### CSS 变量 **CSS Variables**

| 变量                          |  默认值 | 说明 | 备注 |
| --------------------------    |  ------ | ----- | ---- |
| `--cell-word-break`           | `break-all` | -    |
| `--cell-padding-v`            | `@gap-32` | - | - |
| `--cell-padding-h`            | `@gap-28` | - | - |
| `--cell-text-color`           | `var(--neutral-color-1, #212121)` | - | - |
| `--cell-title-text-color`     | `var(--neutral-color-1, #212121)` | - | - |
| `--cell-label-text-color`     | `var(--neutral-color-3, #9e9e9e)` | - | - |
| `--cell-desc-text-color`      | `var(--neutral-color-1, #212121)` | - | - |
| `--cell-bg-color`             | `var(--neutral-color-9, #ffffff)` | - | - |
| `--cell-right-icon-color`     | `var(--neutral-color-4, #c4c4c4)` | - | - |
| `--cell-text-disabled-color`  | `var(--neutral-color-3, #9e9e9e)` | - | - |
| `--cell-hover-bg-color`       | `rgba(0, 0, 0, 0.1)` | - | - |
| `--cell-required-color`       | `#ff0000` | - | - |
| `--cell-required-margin-left` | `4px` | - | - |
| `--cell-divider-gap`          | `28px` | - | - |
| `--cell-line-height`          | `1.2` | - | - |
| `--cell-icon-margin-right`    | `20px` | - | - |
| `--cell-title-font-size`      | `28px` | - | - |
| `--cell-title-font-weight`    | `400` | - | - |
| `--cell-title-line-height`    | `42px` | - | - |
| `--cell-label-font-size`      | `24px` | - | - |
| `--cell-label-font-weight`    | `400` | - | - |
| `--cell-label-line-height`    | `36px` | - | - |
| `--cell-desc-font-size`       | `28px` | - | - |
| `--cell-label-font-weight`    | `400` | - | - |
| `--cell-label-line-height`    | `36px` | - | - |
| `--cell-title-wrap-width`    | `auto` | - | - |
| `--cell-title-wrap-min-width`    | `100px` | - | - |
| `--cell-title-wrap-padding`    | `0` | - | - |

## TiCellGroup API

### 属性 **Properties**

| 名称     | 类型     | 默认值  | 说明               | 备注                                  |
| -------- | -------- | ------- | ------------------ | ------------------------------------- |
| title    | `string` | -       | 标题               | - |
| sub-title | `string` | -       | 副标题             | 只有 `title` 存在时，才会展示此选项。 |
| mode     | `default` \| `card` | `default` | 单元格组展示的模式 | 支持：默认样式（`default`）, 卡片模式（`card`） |

### 插槽 **Slots**

| 名称    | 说明               | 备注 |
| ------- | ------------------ | ---- |
| title   | 自定义标题块展示   |  传入 `title` 属性会忽略此 `slot`   |

### 可扩展样式名 **External Class**

| 类名       | 说明                   | 备注 |
| ---------- | ---------------------- | ---- |
| ext-class   | 根节点可扩展的类名     | -    |
| title-wrap-class | 分组标题的可扩展的类名 | -    |
| title-class   | 标题可扩展类名       | -    |
| sub-title-class   | 副标题可扩展类名       | -    |

### CSS 变量 **CSS Variables**

| 变量                                  | 默认值                 | 备注 |
| ----------------------------------   | -------------------- | ---- |
| `--cell-group-margin-v`              | `0` | -    |
| `--cell-group-margin-h`              | `16px` | -    |
| `--cell-group-radius`|               | `8px` | - |
| `--cell-group-title-padding-v`       | `28px` | - |
| `--cell-group-title-padding-h`       | `28px` | - |
| `--cell-group-title-color`           | `var(--neutral-color-1, #212121)` | - |
| `--cell-group-title-font-size`       | `28px` | - |
| `--cell-group-title-font-weight`     | `var(--font-weight-bold, 600)` | - |
| `--cell-group-title-line-height`     | `1.2` | - |
| `--cell-group-sub-title-color`       | `var(--neutral-color-2, #757575)` | - |
| `--cell-group-sub-title-font-size`   | `20px` | - |
| `--cell-group-sub-title-font-weight` | `400` | - |
| `--cell-group-sub-title-line-height` | `1.2` | - |
| `--cell-group-sub-title-margin-left` | `8px` | - |
| `--cell-group-body-bg-color`         | `var(--neutral-color-9, #ffffff)` | - |
