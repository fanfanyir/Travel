<template>
  <div class="index">
    <div class="index-search">
      <p class="title">搜索模块</p>
      <span>1. url : '/search'</span>
      <p>{{search}}</p>
      <span>2. url : '/getspec'</span>
      <p>{{getspec}}</p>
    </div>
    <br />

    <div class="index-order">
      <p class="title">订单管理模块</p>
      <span>1. url : '/order/placecar  post'</span>
      <p>data: {{orderPlacecar}}</p>
      <span>2. url : '/order/buy'</span>
      <p>data: {{orderBuy}}</p>
      <span>3. url : '/order/pay'</span>
      <p>data: {{orderPay}}</p>
      <span>4. url : '/order/manyPay  post'</span>
      <p>data: {{orderManypay}}</p>
      <span>5. url : '/order/finish'</span>
      <p>data: {{orderFinish}}</p>
      <span>6. url : '/order/delete'</span>
      <p>data: {{orderDelete}}</p>
      <span>7. url : '/order/cancel'</span>
      <p>data: {{orderCancel}}</p>
      <span>8. url : '/order/info'</span>
      <p>data: {{orderInfo}}</p>
    </div>
    <br />

    <div class="index-info">
      <p class="title">order状态的查看</p>
      <span>1. url : '/info/all'</span>
      <p>{{infoAll}}</p>
      <span>2. url : '/info/unpay'</span>
      <p>{{InfoUnpay}}</p>
      <span>3. url : '/info/wait'</span>
      <p>{{infoWait}}</p>
      <span>4. url : '/info/finish'</span>
      <p>{{infoFinish}}</p>
    </div>
    <br />

    <div class="index-shopcar">
      <p class="title">购物车</p>
      <span>1. url : '/shopcar/toshow'</span>
      <p>{{shopcarShow}}</p>
      <span>2. url : '/shopcar/toadd'</span>
      <p>{{shopcarAdd}}</p>
      <span>3. url : '/shopcar/todel'</span>
      <p>{{shopcarDel}}</p>
      <span>4. url : '/shopcar/tomesg'</span>
      <p>{{shopcarMesg}}</p>
    </div>
    <br />

    <div class="index-shopes">
      <p class="title">商品展示</p>
      <span>1. url : '/index'</span>
      <p>{{shopesIndex}}</p>
      <span>2. url : '/content'</span>
      <p>{{shopesContent}}</p>
      <span>3. url : '/detail'</span>
      <p>{{shopesDetail}}</p>
    </div>

    <div class="index-shopesDet">
      <p class="title">商品展示</p>
      <span>2. url : '/content'</span>
      <p>{{getspec}}</p>
    </div>
    <br />

    <!-- <div class="index-user">
      <p class="title">用户模块</p>
      <span>1. url : '/user/login'</span>
      <p>{{shopcarShow}}</p>
      <span>2. url : '/user/regist'</span>
      <p>{{shopcarAdd}}</p>
      <span>3. url : '/user/update'</span>
      <p>{{shopcarDel}}</p>
      <span>4. url : '/user/login'</span>
      <p>{{shopcarMesg}}</p>
    </div> -->

    <div class="index-address">
      <p class="title">用户地址管理</p>
      <span>1. url : '/address/add'</span>
      <p>{{shopcarShow}}</p>
      <span>2. url : '/address/modify'</span>
      <p>{{shopcarAdd}}</p>
      <span>3. url : '/address/update'</span>
      <p>{{shopcarDel}}</p>
      <span>4. url : '/address/login'</span>
      <p>{{shopcarMesg}}</p>
    </div>
  </div>


</template>

<script>
import axios from 'axios'
export default {
  name: 'Index',
  data () {
    return {
      search: '',
      getspec: '',

      orderPlacecar: '',
      orderBuy: '',
      orderPay: '',
      orderManyPay: '',
      orderFinish: '',
      orderDelete: '',
      orderCancel: '',
      orderInfo: '',

      infoAll: '',
      InfoUnpay: '',
      infoWait: '',
      infoFinish: '',

      shopcarShow: '',
      shopcarAdd: '',
      shopcarDel: '',
      shopcarMesg: '',

      shopesIndex: '',
      shopesContent: '',
      shopesDetail: ''
    }
  },
  methods: {
    // getHomeInfo () {
    //   axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    // },
    getInfoSucc (res, state) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        state = data.data
      }
    },
    getHomeInfo () {
      axios.get('/api/search').then(this.getInfoSucc(this.search))
    },
    getSpecInfo () {
      axios.get('/api/getspec?productid=1').then(this.getInfoSucc(this.getspec))
    },

    modiPlacecar () {
      axios.post('/api/order/placecar').then(this.getInfoSucc(this.orderPlacecar))
    },
    getOrderBuy () {
      axios.get('/api/order/buy').then(this.getInfoSucc(this.orderBuy))
    },
    getOrderPay () {
      axios.get('/api/order/pay').then(this.getInfoSucc(this.orderPay))
    },
    modiOrderManyPay () {
      axios.post('/api/order/manyPay').then(this.getInfoSucc(this.orderManyPay))
    },
    getOrderFinish () {
      axios.get('/api/order/finish').then(this.getInfoSucc(this.orderFinish))
    },
    getOrderDelete () {
      axios.get('/api/order/delete').then(this.getInfoSucc(this.orderDelete))
    },
    getOrderCancel () {
      axios.get('/api/order/cancel').then(this.getInfoSucc(this.orderCancel))
    },
    getOrderInfo () {
      axios.get('/api/order/info').then(this.getInfoSucc(this.orderInfo))
    },

    getInfoAll () {
      axios.get('/api/info/all').then(this.getInfoSucc(this.infoAll))
    },
    getInfoUnpay () {
      axios.get('/api/info/unpay').then(this.getInfoSucc(this.InfoUnpay))
    },
    getInfoWait () {
      axios.get('/api/info/wait').then(this.getInfoSucc(this.infoWait))
    },
    getInfoFinish () {
      axios.get('/api/info/finish').then(this.getInfoSucc(this.infoFinish))
    },

    getShopcarShow () {
      axios.get('/api/shopcar/toshow?userId=diefef').then(this.getInfoSucc(this.shopcarShow))
    },
    getShopcarAdd () {
      axios.get('/api/shopcar/toadd?userId=ddfgfh&productId=10001&number=1').then(this.getInfoSucc(this.shopcarAdd))
    },
    getShopcarDel () {
      axios.get('/api/shopcar/todel?userId=diefef&productId=10002').then(this.getInfoSucc(this.shopcarDel))
    },
    getShopcarMesg () {
      axios.get('/api/shopcar/tomesg?userId=diefef').then(this.getInfoSucc(this.shopcarMesg))
    },


      
    getShopesIndex () {
      axios.get('/api/index').then(this.getInfoSucc(this.shopesIndex))
    },
    getShopesContent () {
      axios.get('/api/content').then(this.getInfoSucc(this.shopesContent))
    },
    getShopesDetail () {
      axios.get('/api/detail').then(this.getInfoSucc(this.shopesDetail))
    }
  },
  mounted () {
    // this.getHomeInfo()
  }
}
</script>

<style scoped lang='stylus'>
.index
  padding: 10px;
  font-size: 16px
  .title
    font-size: 20px
    font-weight: bold
    height: 30px
</style>
