<template>
  <div>
    <detail-banner :bannerImg="bannerImg" :imgs="imgs" :name="name"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      imgs: [],
      list: [],
      bannerImg: '',
      name: '',
      id: ''
    }
  },
  methods: {
    getDeatilInfo () {
      // axios.get('/api/detail.json?id=' + this.$route.params.id)
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        var data = res.data
        this.bannerImg = data.bannerImg
        this.imgs = data.gallaryImgs
        this.list = data.categoryList
        this.name = data.sightName
      }
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.getDeatilInfo()
  }
}
</script>

<style lang="stylus" scoped>
.content
  height: 52rem
</style>
