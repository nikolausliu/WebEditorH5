<template>
  <div class="blank-preview" :style="style"></div>
</template>

<script>
import { px2viewport } from '@/utils'
export default {
  name: 'blank-preview',
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
      _style.height = `${px2viewport(style.height)}vw`
      _style.backgroundColor = style.backgroundColor || 'transparent'

      return _style
    }
  }
}
</script>

<style lang="less" scoped>
</style>