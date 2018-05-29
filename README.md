### Popup 组件的使用

> 说明：npm 版本需要 6.1 以上

### 一、安装

```
npm install wpy-imglist --save
```

### 二、引用

```
import ImgList from 'wpy-imglist';
```

### 三、声明组件

```
// 声明组件，分配组件id
components = {
    ImgList: ImgList
}
```

### 四、属性使用

```
<template>
  <ImgList
    :urls.sync="urls"
    :isDelShow.sync="isDelShow"
    :boxSize.sync="boxSize"
    :boxSpace.sync="boxSize"
    @delImg.user='delImg'
  />
</template>
```

1.  urls: 必须项，包含图片路径的数组
2.  isDelShow: 布尔值，是否显示删除按钮，和`@delImg.user='delImg'`一起使用，当 isDelShow 为 true，用户点击删除按钮时，method 中的 delImg 函数将被触发
3.  boxSize: Number 类型，表示每个小图的大小，不传默认为 213，单位默认为 rpx
4.  boxSpace: Number 类型，表示每个图片之间的间距，不传默认为 16，单位默认为 rpx
