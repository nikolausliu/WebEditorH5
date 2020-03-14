<template>
  <div class="grid-preview" :style="style">
    <div class="grids">
      <div
        class="grid-item"
        v-for="(item, index) in value.data"
        :key="index"
        :value="item"
        :style="itemStyle"
      >
        <img
          class="grid-item__icon"
          :src="item.icon || defaultImageUrl"
          :alt="item.title"
          :style="iconStyle"
        />
        <div class="grid-item__title" :style="titleStyle">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defaultImageUrl } from '../config'
import { px2viewport } from '@/utils'
export default {
  name: 'grid-preview',
  data() {
    return {
      defaultImageUrl
    }
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
      _style.marginTop = `${px2viewport(style.marginTop)}vw`
      _style.marginRight = `${px2viewport(style.marginRight)}vw`
      _style.marginBottom = `${px2viewport(style.marginBottom)}vw`
      _style.marginLeft = `${px2viewport(style.marginLeft)}vw`
      _style.backgroundColor = style.backgroundColor

      return _style
    },
    itemStyle() {
      let { style } = this.value,
        _style = {},
        cols = style.cols || 3
      // (屏宽 - 左右margin) / 列数
      _style.width = `${px2viewport(
        (375 - style.marginLeft - style.marginRight) / cols
      )}vw`

      return _style
    },
    iconStyle() {
      let { style } = this.value,
        _style = {}
      _style.width = `${px2viewport(style.iconWidth || 50)}vw`
      _style.height = `${px2viewport(style.iconHeight || 50)}vw`

      return _style
    },
    titleStyle() {
      let { style } = this.value,
        _style = {}
      _style.color = style.color

      return _style
    }
  }
}
</script>

<style lang="less" scoped>
.grid-preview {
  .grids {
    display: flex;
    flex-wrap: wrap;

    .grid-item {
      padding: 10px 0;
      text-align: center;
      &__icon {
        width: 100%;
      }
      &__title {
        text-align: center;
        font-size: 12px;
      }
    }
  }
}
</style>