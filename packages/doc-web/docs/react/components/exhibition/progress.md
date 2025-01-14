---
title: 进度条
sidebar_custom_props:
  suffix: Progress
hide_title: true
pagination_prev: null
pagination_next: null
side_iframe_path: "#/progress"
---

# 进度条 _Progress_

** 表示当前任务的进度。 **

import TabsLink from '@site/src/components/tabsLink';

<TabsLink id="tiprogress-api" />

## 安装使用

```typescript jsx showLineNumbers
import { TiProgress, TiCircleProgress } from '@titian-design/mobile-react';
```

## 用法示例

#### 基本使用

```typescript jsx showLineNumbers
const App: React.FC = () => {
  return (
    <>
      <TiProgress />
      <TiProgress value={80} />
      <TiCircleProgress value={80} />
    </>
  )
}
```

#### 设置缓冲进度

```typescript jsx showLineNumbers
const App: React.FC = () => {
  return (
    <>
      <TiProgress value={60} buffer={80}  />
      <TiCircleProgress value={80} buffer={80} />
    </>
  )
}
```

#### 设置进度条宽度

```typescript jsx showLineNumbers
const App: React.FC = () => {
  return (
    <>
      <TiProgress value={60} strokeWidth={20} />
      <TiCircleProgress value={60} strokeWidth={10} />
    </>
  )
}
```

#### 展示进度值，颜色等

```typescript jsx showLineNumbers
const App: React.FC = () => {
  const gradientColor = {
    from: "#108ee9",
    to: "#87d068"
  };
  return (
    <>
      <TiProgress value={60} showProgress  />
      <TiCircleProgress value={80} showProgress />

      <TiProgress value={80} color="#2a6ae9" />
      <TiCircleProgress value={80} color="#2a6ae9" />

      <TiProgress value={80} gradientColor={gradientColor} />
    </>
  )
}
```

## TiProgress API

### 属性 **Properties**

| 名称          | 类型      | 是否必填 | 默认值 | 说明                                    | 备注 |
| ------------- | --------- | -------- | ------ | --------------------------------------- | ---- |
| size         | `number`  | 否       | `72`      | 进度值大小                  | -    |
| value         | `number`  | 否       | 0      | 进度值，取值范围 0-100                  | -    |
| buffer        | `number`  | 否       | 0      | 缓冲值，取值范围 0-100                  | -    |
| showProgress  | `boolean` | 否       | false  | 是否展示进度值，默认不展示              | -    |
| color         | `string`  | 否       | -      | 进度条颜色，默认为主题色                | -    |
| strokeWidth   | `number`  | 否       | 8      | 进度条宽度，默认为 8px                  | -    |
| strokeColor   | `string`  | 否       | -      | 进度条轨道颜色，默认为进度条值的 10%    | -    |
| bufferBgColor   | `string`  | 否       | -      | 进度条缓冲轨道颜色，默认为进度条值的 30%    | -    |
| gradientColor | `GradientColor`  | 否       | -      | 进度条颜色为渐变色，需要设置 `from` 和 `to` | -    |

#### GradientColor

```typescript showLineNumbers
interface GradientColor {
  from: string;
  to: string;
}
```

### 可扩展样式名 **External Class**

| 类名      | 说明                   | 备注 |
| --------- | ---------------------- | ---- |
| extClass  | 扩展样式类名           | -    |
| textClass | 进度条文字扩展样式类名 | -    |

### CSS 变量 **CSS Variables**

| 变量                         | 默认值 | 说明           | 备注 |
| ---------------------------- | ------ | -------- | ---- |
| `--progress-margin-v`          | `8px` | 垂直方向外间距 | -    |
| `--progress-margin-h`          | `0` | 水平方向外间距 | -    |
| `--progress-height`            | `8px` | 进度条高度     | -    |
| `--progress-radius`            | `calc(var(--base-radius-size, 0px) + 12px)` | 圆角大小       | -    |
| `--progress-bar-color`         | `rgb(@theme-r, @theme-g, @theme-b)` | 轨道颜色       | -    |
| `--progress-bar-radius`        | `calc(var(--base-radius-size, 0px) + 12px)` | 轨道圆角大小   | -    |
| `--progress-pivot-margin-left` | `8px` | 左侧外间距     | -    |
| `--progress-pivot-color`       | `rgb(@theme-r, @theme-g, @theme-b)` | 进度条内容颜色 | -    |

## TiCircleProgress API

### 属性 **Properties**

| 名称          | 类型      | 是否必填 | 默认值 | 说明                                    | 备注 |
| ------------- | --------- | -------- | ------ | --------------------------------------- | ---- |
| size         | `number`  | 否       | `72`      | 进度值大小                  | -    |
| value         | `number`  | 否       | 0      | 进度值，取值范围 0-100                  | -    |
| buffer        | `number`  | 否       | 0      | 缓冲值，取值范围 0-100                  | -    |
| showProgress  | `boolean` | 否       | false  | 是否展示进度值，默认不展示              | -    |
| color         | `string`  | 否       | -      | 进度条颜色，默认为主题色                | -    |
| strokeWidth   | `number`  | 否       | 8      | 进度条宽度，默认为 8px                  | -    |
| strokeColor   | `string`  | 否       | -      | 进度条轨道颜色，默认为进度条值的 10%    | -    |
| bufferBgColor   | `string`  | 否       | -      | 进度条缓冲轨道颜色，默认为进度条值的 30%    | -    |
| font | `string` | 否 | - | canvas `font 属性` | - |

### 属性 **Properties**

| 类名      | 说明                   | 备注 |
| --------- | ---------------------- | ---- |
| extClass  | 扩展样式类名           | -    |
