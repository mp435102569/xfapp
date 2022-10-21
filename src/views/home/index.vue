<template>
  <div class="home_box">
    <topNav />
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in carousels" :key="item.carouselUrl"
        ><img :src="item.carouselUrl" alt=""
      /></van-swipe-item>
    </van-swipe>
    <!-- 九宫格 -->
    <van-grid :column-num="5">
      <van-grid-item
        v-for="item in icon"
        :key="item.index"
        icon-prefix="iconfont"
        :icon="item.icon"
        :text="item.text"
      >
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { getHomeInfo } from "@/api";
import topNav from "./topNav.vue";
export default {
  data() {
    return {
      carousels: [],
      hotGoodses: [],
      newGoodses: [],
      recommendGoodses: [],
      icon: [
        {
          icon: "@/assets/icon_7n8uc7zpk1y/baihuochaoshi.png",
          text: "新峰超市",
        },
        { icon: "../../assets/icon_7n8uc7zpk1y/fushi.png", text: "新峰服饰" },
        { icon: "../../assets/icon_7n8uc7zpk1y/quanqiu.png", text: "全球购" },
        {
          icon: "../../assets/icon_7n8uc7zpk1y/shengxianshuiguo.png",
          text: "新峰生鲜",
        },
        {
          icon: "../../assets/icon_7n8uc7zpk1y/zhisongdaojia.png",
          text: "新峰到家",
        },
        {
          icon: "../../assets/icon_7n8uc7zpk1y/chongzhi.png",
          text: "充值缴费",
        },
        { icon: "../../assets/icon_7n8uc7zpk1y/pinduoduo.png", text: "9.9拼" },
        {
          icon: "../../assets/icon_7n8uc7zpk1y/lingquanzhongxin.png",
          text: "领券",
        },
        { icon: "../../assets/icon_7n8uc7zpk1y/shengqian.png", text: "省钱" },
        { icon: "../../assets/icon_7n8uc7zpk1y/quanbu.png", text: "全部" },
      ],
    };
  },
  components: {
    topNav,
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      getHomeInfo().then((data) => {
        // console.log(data);
        this.carousels = data.data.carousels;
        this.hotGoodses = data.data.hotGoodses;
        this.newGoodses = data.data.newGoodses;
        this.recommendGoodses = data.data.recommendGoodses;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.home_box {
  height: 2000px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>