<template>
  <div
    class="products-preview clearfix"
    :class="[`layout-${layout}`, borderTypeClass]"
    :style="style"
  >
    <div class="products-item" v-for="(item, index) in value.data" :key="index">
      <div class="products-item__pic">
        <img :src="item.img || defaultImageUrl" :alt="item.title" />
      </div>
      <div class="products-item__content">
        <div class="products-item__title text-ellipsis">{{ item.title }}</div>
        <div class="products-item__subtitle text-ellipsis">{{ item.subtitle }}</div>
        <div class="products-item__pricebar clearfix">
          <div class="products-item__price">
            <span class="products-item__price-prefix">￥</span>
            {{ item.price }}
          </div>
          <div class="products-item__buyicon">
            <img :src="item.buyicon || defaultBuyIcon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defaultImageUrl, defaultBuyIcon } from '../config'
import { px2viewport } from '@/utils'
export default {
  name: 'products-preview',
  data() {
    return {
      defaultImageUrl,
      defaultBuyIcon
    }
  },
  props: {
    value: {
      type: Object
    }
  },
  computed: {
    layout() {
      return this.value.style.layout
    },
    borderTypeClass() {
      const map = {
        border: 'has-border',
        shadow: 'has-shadow-border',
        none: 'no-border'
      }
      return map[this.value.style.borderType]
    },
    style() {
      let { style } = this.value,
        _style = {}
      _style.backgroundColor = style.backgroundColor || 'transparent'
      _style.marginTop = `${px2viewport(style.marginTop)}vw`
      _style.marginRight = `${px2viewport(style.marginRight)}vw`
      _style.marginBottom = `${px2viewport(style.marginBottom)}vw`
      _style.marginLeft = `${px2viewport(style.marginLeft)}vw`
      _style.paddingLeft = `${px2viewport(style.paddingLeft)}vw`
      _style.paddingRight = `${px2viewport(style.paddingRight)}vw`
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
.products-preview {
  .products-item {
    box-sizing: border-box;
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
    &__pic {
      img {
        display: block;
        width: 100%;
        border-radius: 5px 5px 0 0;
      }
    }
    &__content {
      padding: 15px;
      border-radius: 0 0 5px 5px;
      background: #fff;
    }
    &__title {
      margin-top: 10px;
      font-size: 16px;
    }
    &__subtitle {
      margin: 5px 0 10px;
      font-size: 12px;
      color: #666;
    }
    &__pricebar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__price {
      font-size: 16px;
      color: #f0453e;
    }
    &__price-prefix {
      font-size: 12px;
    }
    &__buyicon {
      img {
        display: block;
        width: 18px;
        height: 18px;
      }
    }
  }
  &.has-border {
    .products-item {
      border: 1px solid #dedede;
      border-radius: 5px;
    }
  }
  &.has-shadow-border {
    .products-item {
      &__content {
        box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.3);
      }
    }
  }
  &.no-border {
    border: none;
  }
  &.layout-2 {
    display: flex;
    flex-wrap: wrap;
    .products-item {
      width: calc((100% - 15px) / 2);
      margin-right: 15px;
      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
}
</style>