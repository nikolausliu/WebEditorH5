<template>
  <div class="text-preview" :style="style">{{ value.data.title }}</div>
</template>

<script>
import { px2viewport } from '@/utils'
export default {
  name: 'text-preview',
  data() {
    return {}
  },
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    style() {
      let { style } = this.value,
        _style = {}
      _style.color = style.color
      _style.backgroundColor = style.backgroundColor || 'transparent'
      _style.textAlign = style.align
      _style.fontSize = `${px2viewport(style.fontSize)}vw`
      _style.lineHeight = `${px2viewport(style.lineHeight)}vw`
      _style.marginTop = `${px2viewport(style.marginTop)}vw`
      _style.marginRight = `${px2viewport(style.marginRight)}vw`
      _style.marginBottom = `${px2viewport(style.marginBottom)}vw`
      _style.marginLeft = `${px2viewport(style.marginLeft)}vw`
      _style.paddingTop = `${px2viewport(style.paddingTop)}vw`
      _style.paddingRight = `${px2viewport(style.paddingRight)}vw`
      _style.paddingBottom = `${px2viewport(style.paddingBottom)}vw`
      _style.paddingLeft = `${px2viewport(style.paddingLeft)}vw`

      return _style
    }
  }
}
</script>

<style lang="less" scoped>
.text-preview {
  font-size: 14px;
}
</style>