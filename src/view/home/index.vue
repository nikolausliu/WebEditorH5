<template>
  <div class="home" ref="home">
    <template v-for="(widget, index) in list">
      <!-- text 文本组件 -->
      <text-preview :key="index" v-if="widget.id === 'text'" :value="widget"></text-preview>
      <!-- blank 辅助空白 -->
      <blank-preview :key="index" v-if="widget.id === 'blank'" :value="widget"></blank-preview>
      <!-- line 辅助线 -->
      <line-preview :key="index" v-if="widget.id === 'line'" :value="widget"></line-preview>
      <!-- searchbar 搜索栏 -->
      <searchbar-preview :key="index" v-if="widget.id === 'searchbar'" :value="widget"></searchbar-preview>
      <!-- swiper 轮播图 -->
      <swiper-preview :key="index" v-if="widget.id === 'swiper'" :value="widget"></swiper-preview>
      <!-- grid 轮播图 -->
      <grid-preview :key="index" v-if="widget.id === 'grid'" :value="widget"></grid-preview>
      <!-- title 标题 -->
      <title-preview :key="index" v-if="widget.id === 'title'" :value="widget"></title-preview>
      <!-- pictures 图片组 -->
      <pictures-preview :key="index" v-if="widget.id === 'pictures'" :value="widget"></pictures-preview>
      <!-- toolbar 工具栏 -->
      <toolbar-preview :key="index" v-if="widget.id === 'toolbar'" :value="widget"></toolbar-preview>
      <!-- products 商品列表 -->
      <products-preview :key="index" v-if="widget.id === 'products'" :value="widget"></products-preview>
    </template>
  </div>
</template>

<script>
import {
  TextPreview,
  BlankPreview,
  LinePreview,
  SearchbarPreview,
  SwiperPreview,
  GridPreview,
  TitlePreview,
  PicturesPreview,
  ToolbarPreview,
  ProductsPreview
} from '@/widgets/index'
export default {
  name: 'home',
  components: {
    [TextPreview.name]: TextPreview,
    [BlankPreview.name]: BlankPreview,
    [LinePreview.name]: LinePreview,
    [SearchbarPreview.name]: SearchbarPreview,
    [SwiperPreview.name]: SwiperPreview,
    [GridPreview.name]: GridPreview,
    [TitlePreview.name]: TitlePreview,
    [PicturesPreview.name]: PicturesPreview,
    [ToolbarPreview.name]: ToolbarPreview,
    [ProductsPreview.name]: ProductsPreview
  },
  created() {
    this.fetchList()
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    fetchList() {
      this._request
        .get('/api/list')
        .then(res => {
          const { code, data } = res
          if (code === 0) {
            this.list = data.list
          }
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  overflow: hidden;
  width: 100vw;
  min-height: 100vh;
  background: #fff;
}
</style>