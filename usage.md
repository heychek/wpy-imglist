## ImgList 组件的使用

1.  js 引用

```
<script>
    import wepy from 'wepy';
    // js 中引入组件文件
    import ImgList from '../components/ImgList/ImgList';

    export default class Index extends wepy.component {
        // 声明组件，分配组件id
        components = {
            ImgList: ImgList
        };
    }
</script>
```

2.  页面使用

```
<template>
    <!-- 以`<script>`脚本部分中所声明的组件ID为名命名自定义标签，从而在`<template>`模板部分中插入组件 -->
    <ImgList></ImgList>
</template>
```

3.  传值将一个包含图片路径的数组和表示是否显示删除按钮的布尔值参数传入即可

```
<template>
  <ImgList :syncUrlList.sync="urlList" :isDelShow.sync="isDelShow"></ImgList>
</template>
```

> 注意：该组件宽度 670rpx 或 442rpx（传入 2 或 4 张图片时）, 高度根据传入图片数量不同有所变化（最多只能传入 6 张图片，多传只显示前六张），使用的时候可以在外面包一层 view ，将其放到合适位置显示
