<template>
  <div class="topNav_box" :class="{ active: flag }">
    <div
      class="left iconfont icon-fenlei"
      @click="$router.push('/class')"
    ></div>
    <div class="mid">
      <div class="xf">新峰商城</div>
      <div class="yi">丨 &nbsp;</div>
      <div class="title">山河无恙,人间皆安</div>
    </div>
    <div class="right iconfont icon-user" @click="$router.push('/user')"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
    };
  },
  // 在第一次渲染完成的时候   监听滚动条
  mounted() {
    // 使用二级事件
    window.addEventListener("scroll", this.fn);
  },
  // 销毁事件
  beforeDestroy() {
    window.removeEventListener("scroll", this.fn);
  },
  methods: {
    fn() {
      if (document.documentElement.scrollTop > 50) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.topNav_box {
  color: #1baeae;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; //悬浮到顶部 脱离文档流
  transform: all 0.3s;
  z-index: 1000;
  .left,
  .right {
    width: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
  }
  .mid {
    width: 255px;
    height: 30px;
    background: rgba(200, 200, 200, 0.5);
    border-radius: 30px;
    .yi {
      color: black;
      display: inline-block;
      line-height: 30px;
    }
    .xf {
      font-weight: 900;
      display: inline-block;
    }
    .title {
      color: black;
      font-weight: 200;
      opacity: 0.7;
      display: inline-block;
    }
  }
}
.active {
  background-color: #1baeae;
  .left,
  .right {
    color: #fff;
  }
}
</style>