<template>
  <div class="title-preview" :style="style">
    <div class="title" :style="titleStyle">
      <span>{{ value.data.title }}</span>
    </div>
    <div class="more" :style="moreStyle">
      <span>{{ value.data.moreTitle }}</span>
    </div>
  </div>
</template>

<script>
import { px2viewport } from '@/utils'
export default {
  name: 'title-preview',
  data() {
    return {}
  },
  props: {
    value: {
      type: Object
    }
  },
  computed: {
    style() {
      let { style } = this.value,
        _style = {}
      _style.backgroundColor = style.backgroundColor || 'transparent'
      _style.marginTop = `${px2viewport(style.marginTop)}vw`
      _style.marginRight = `${px2viewport(style.marginRight)}vw`
      _style.marginBottom = `${px2viewport(style.marginBottom)}vw`
      _style.marginLeft = `${px2viewport(style.marginLeft)}vw`
      _style.paddingRight = `${px2viewport(style.paddingRight)}vw`
      _style.paddingLeft = `${px2viewport(style.paddingLeft)}vw`
      _style.height = `${px2viewport(style.height)}vw`
      if (style.layout === 'center') {
        _style.textAlign = 'center'
      }

      return _style
    },
    titleStyle() {
      let { style } = this.value,
        _style = {}
      if (style.layout === 'spaceBetween') {
        _style.float = 'left'
        _style.display = 'inline-block'
      }
      _style.color = style.color || '#333'
      _style.fontSize = `${px2viewport(style.fontSize)}vw`
      _style.lineHeight = `${px2viewport(style.height)}vw`

      return _style
    },
    moreStyle() {
      let { style } = this.value,
        _style = {}
      if (style.layout === 'spaceBetween') {
        _style.float = 'right'
        _style.display = 'inline-block'
      }
      _style.color = style.moreColor || '#333'
      _style.fontSize = `${px2viewport(style.moreFontSize)}vw`
      _style.lineHeight = `${px2viewport(style.height)}vw`

      return _style
    }
  }
}
</script>

<style lang="less" scoped>
</style>