import wepy from 'wepy';
import {
  modal
} from './utils.js';

export default class ImgBox extends wepy.component {
  props = {
    url: {
      type: String,
      default: ''
    },
    isDelShow: {
      type: Boolean,
      default: false
    }
  }

  data = {
    DEL_ICON: './message_dele_icon_n.svg',
    isShow: false
  }

  methods = {
    imgPreview(url) {
      if (url === null || url === "") {
        return;
      }
      this.$emit('preview', url)
    },

    delImg(url) {
      if (url === null || url === "") {
        return;
      }
      modal('是否确认删除该图片')
        .then(() => this.$emit('delImg', url))
        .catch(() => console.log('cancle'))


    }
  }

  onLoad() {}
}