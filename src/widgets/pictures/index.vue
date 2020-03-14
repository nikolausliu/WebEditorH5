<template>
  <div class="pictures-preview" :class="`cols-${cols}`" :style="style">
    <div class="pictures-item" v-for="(item, index) in value.data" :key="index" :style="itemStyle">
      <img :src="item.img || defaultImageUrl" :alt="item.title" />
    </div>
  </div>
</template>

<script>
import { defaultImageUrl } from '../config'
import { px2viewport } from '@/utils'
export default {
  name: 'pictures-preview',
  data() {
    return { defaultImageUrl }
  },
  props: {
    value: {
      type: Object
    }
  },
  computed: {
    cols() {
      return this.value.style.cols || 1
    },
    style() {
      let { style } = this.value,
        _style = {}
      _style.backgroundColor = style.backgroundColor || 'transparent'
      _style.marginTop = `${px2viewport(style.marginTop)}vw`
      _style.marginRight = `${px2viewport(style.marginRight)}vw`
      _style.marginBottom = `${px2viewport(style.marginBottom)}vw`
      _style.marginLeft = `${px2viewport(style.marginLeft)}vw`

      return _style
    },
    itemStyle() {
      let { style } = this.value,
        _style = {},
        cols = style.cols || 1,
        len = this.value.data.length
      _style.marginRight = `${px2viewport(style.space)}vw`
      _style.marginBottom = `${px2viewport(style.space)}vw`
      // (屏宽 - 图片总间隔数 - 左右margin) / 列数
      _style.width = `${px2viewport(
        (375 -
          style.space * (cols - 1) -
          style.marginLeft -
          style.marginRight) /
          cols
      )}vw`

      return _style
    }
  }
}
</script>

<style lang="less" scoped>
.pictures-preview {
  display: flex;
  flex-wrap: wrap;
  .pictures-item {
    img {
      display: block;
      width: 100%;
    }
  }
  &.cols-1 {
    .pictures-item {
      margin-right: 0 !important;
      &:last-child {
        margin-bottom: 0 !important;
      }
    }
  }
  &.cols-2 {
    .pictures-item {
      &:nth-child(2n) {
        margin-right: 0 !important;
      }
    }
  }
  &.cols-3 {
    .pictures-item {
      &:nth-child(3n) {
        margin-right: 0 !important;
      }
    }
  }
}
</style>