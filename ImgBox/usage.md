## ImgBox 组件的使用

1.  js 引用

```
<script>
    import wepy from 'wepy';
    // js 中引入组件文件
    import ImgBox from '../components/ImgList/ImgBox/ImgBox';

    export default class Index extends wepy.component {
        // 声明组件，分配组件id
        components = {
            ImgBox: ImgBox
        };
    }
</script>
```

2.  页面使用

```
<template>
    <!-- 以`<script>`脚本部分中所声明的组件ID为名命名自定义标签，从而在`<template>`模板部分中插入组件 -->
    <ImgBox></ImgBox>
</template>
```

3.  传值将一个包含图片路径的字符串,和一个表示是否显示删除按钮的布尔值参数传入即可

```
<template>
  <ImgBox :url="{{url}}" :isDelShow.sync="isDelShow"></ImgBox>
</template>
```

> 注意：sizeType="SMALL"该组件宽度高度均为 220rpx（传入为 NONE 或错误为 0），sizeType="BIG"该组件宽度为 675rpx,高度为 445rpx,使用的时候可以在外面包一层 view ，将其放到合适位置显示
