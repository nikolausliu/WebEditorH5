<template>
  <div class="searchbar-preview" :style="style">
    <div class="searchbar__input" :style="inputStyle" @click="visible = true">
      <van-icon name="search" class="searchbar__icon"></van-icon>
      <div class="searchbar__content">{{ value.data.placeholder || '请输入搜索关键词' }}</div>
    </div>
    <!-- calc(50% - 1px) 修复popup顶端会露出1px背景遮罩层overlay的bug -->
    <van-popup
      position="right"
      :style="{width: '100%', height: '100%', top: 'calc(50% - 1px)'}"
      v-model="visible"
    >
      <div class="search-page" :class="{'is-visible': visible}">
        <van-search
          show-action
          placeholder="请输入搜索关键词"
          :shape="value.style.shape"
          v-model="value.data.placeholder"
          @cancel="handleCancel"
        />
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Icon, Search, Popup } from 'vant'
import { px2viewport } from '@/utils'
export default {
  name: 'searchbar-preview',
  components: {
    [Icon.name]: Icon,
    [Search.name]: Search,
    [Popup.name]: Popup
  },
  data() {
    return {
      visible: false,
      keyword: ''
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
      _style.backgroundColor = style.backgroundColor

      return _style
    },
    inputStyle() {
      let { style } = this.value,
        _style = {}
      _style.backgroundColor = style.inputBackgroundColor
      _style.marginTop = `${px2viewport(style.marginTop)}vw`
      _style.marginRight = `${px2viewport(style.marginRight)}vw`
      _style.marginBottom = `${px2viewport(style.marginBottom)}vw`
      _style.marginLeft = `${px2viewport(style.marginLeft)}vw`
      _style.height = `${px2viewport(style.inputHeight)}vw`
      _style.borderRadius =
        style.shape === 'square'
          ? `${px2viewport(5)}vw`
          : `${px2viewport(style.inputHeight / 2)}vw`

      return _style
    }
  },
  methods: {
    handleCancel() {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
.searchbar-preview {
  padding: 5px 15px;
  .searchbar__input {
    display: flex;
    align-items: center;
    .searchbar__icon {
      margin-left: 10px;
      font-size: 16px;
      color: #666;
    }
    .searchbar__content {
      padding: 0 10px;
      font-size: 14px;
      color: #666;
    }
  }
}
</style>