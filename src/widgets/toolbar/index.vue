<template>
  <div class="toolbar-preview clearfix" :style="style">
    <div class="location">
      <van-icon class="icon" name="location-o" />
      <span>合肥</span>
      <van-icon class="icon-arrow" name="arrow-down" />
    </div>
    <div class="scan">
      <van-icon class="icon" name="scan" />
      <span>扫码</span>
    </div>
  </div>
</template>

<script>
import { px2viewport } from '@/utils'
import { Icon } from 'vant'
export default {
  name: 'toolbar-preview',
  components: {
    [Icon.name]: Icon
  },
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
      _style.color = style.color || '#333'
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
.toolbar-preview {
  display: flex;
  justify-content: space-between;
  .location,
  .scan {
    display: flex;
    align-items: center;
    .icon {
      margin-right: 5px;
    }
    .icon-arrow {
      margin-left: 5px;
    }
  }
}
</style>