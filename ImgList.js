import wepy from 'wepy'
import ImgBox from './ImgBox/ImgBox'

export default class ImgList extends wepy.component {
  props = {
    urls: {
      type: Array,
      default: []
    },
    isDelShow: {
      type: Boolean,
      default: false
    },
    boxSize: {
      type: Number,
      default: 213
    },
    boxSpace: {
      type: Number,
      default: 16
    }
  }

  components = {
    ImgBox
  }

  data = {
    rootHeight: 442,
    rootWidth: 671,
    boxWidth: 213,
    boxHeight: 213,
    rootSizeInitor: this.getRootSizeInitor()
  }

  watch = {
    urls() {
      this.initSizeWithList()
    }
  }

  methods = {
    delImg(url) {
      this.$emit('delete', url)
    },
    preview(url) {
      wepy.previewImage({
        current: url,
        urls: this.urls
      })
    }
  }

  onLoad() {
    if (typeof (boxSize) === undefined) {
      this.boxSize = 213
    }
    if (typeof (boxSpace) === undefined) {
      this.boxSpace = 16
    }
    this.initSizeWithList()
  }

  initSizeWithList() {
    this.initUrlList()
    this.initRootSize()
    this.initBoxSize()
  }

  initUrlList() {
    const len = this.dealInValidLen()
    if (len > 6) {
      this.urls = this.urls.slice(0, 6)
    }
  }

  initRootSize() {
    const len = this.dealInValidLen()
    this.rootSizeInitor[`len${len}`]();
    this.$apply();
  }

  initBoxSize() {
    const len = this.urls.length
    if (len === 1) {
      this.boxHeight = this.rootHeight
      this.boxWidth = this.rootWidth
      this.$apply()
      return
    }
    this.boxHeight = this.boxSize
    this.boxWidth = this.boxSize
  }

  dealInValidLen() {
    let res = 0
    const urls = this.urls

    for (let i = 0; i < urls.length; i++) {
      const url = urls[i]
      if (typeof (url) !== 'undefined' && url !== '' && url !== null) {
        res++
      } else {
        urls.splice(i, 1)
        i--
      }
    }
    return res
  }

  getRootSizeInitor() {
    const rootSizeInitor = {}
    rootSizeInitor['len0'] = () => {
      this.rootHeight = 0
      this.rootWidth = 0
      this.$apply()
    }
    rootSizeInitor['len1'] = () => {
      this.rootHeight = this.boxSize * 2 + this.boxSpace
      this.rootWidth = this.boxSize * 3 + this.boxSpace * 2
      this.$apply()
    }
    rootSizeInitor['len2'] = () => {
      this.rootHeight = this.boxSize
      this.rootWidth = this.boxSize * 2 + this.boxSpace
      this.$apply()
    }
    rootSizeInitor['len3'] = () => {
      this.rootHeight = this.boxSize
      this.rootWidth = this.boxSize * 3 + this.boxSpace * 2
      this.$apply()
    }
    rootSizeInitor['len4'] = () => {
      this.rootHeight = this.boxSize * 2 + this.boxSpace
      this.rootWidth = this.boxSize * 2 + this.boxSpace
      this.$apply()
    }
    rootSizeInitor['len5'] = () => {
      this.rootHeight = this.boxSize * 2 + this.boxSpace
      this.rootWidth = this.boxSize * 3 + this.boxSpace * 2;
      this.urls.push('')
      this.$apply()
    }
    rootSizeInitor['len6'] = () => {
      this.rootHeight = this.boxSize * 2 + this.boxSpace
      this.rootWidth = this.boxSize * 3 + this.boxSpace * 2
      this.$apply()
    }
    return rootSizeInitor
  }
}
