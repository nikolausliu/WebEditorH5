<template>
  <div class="swiper-preview" :style="style">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in value.data" :key="index">
        <img
          class="pic"
          :src="item.picUrl || defaultImageUrl"
          :alt="item.title"
          @load="handleImgLoad"
          @error="handleImgError"
          @click="handleClick(index)"
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { defaultImageUrl } from '../config'
import { px2viewport } from '@/utils'
import { Swipe, SwipeItem } from 'vant'
import doFunc from '../doFunc'
export default {
  name: 'swiper-preview',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {
      defaultImageUrl,
      height: '100px'
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

      return _style
    }
  },
  watch: {
    'value.data': {
      deep: true,
      handler(newVal) {
        if (!newVal.length) {
          this.height = '100px'
        }
      }
    }
  },
  methods: {
    handleImgLoad(e) {
      // console.log(e)
    },
    handleImgError(e) {
      // console.log('error', e)
    },
    handleClick(index) {
      doFunc(this.value.data, index)
    }
  }
}
</script>

<style lang="less" scoped>
.pic {
  width: 100%;
}
</style>