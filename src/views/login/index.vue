<template>
  <div class="login_box">
    <!-- 导航栏 -->
    <van-nav-bar :title="isLogin?'登录':' 注册'" left-text=" 返回" left-arrow @click-left="$router.go(-1)">
      <template #right>
        <van-icon name="ellipsis" />
      </template>
    </van-nav-bar>



    <!-- 图片 -->
    <div class="img_box">
      <img src="http://s.weituibao.com/1582958061265/mlogo.png" alt="">
    </div>

    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]" />
      <div style="margin: 16px;">
        <Verify ref="verify" @success="alert('success')" @error="alert('error')" :type="2" :codeLength=4
          :showButton=false :fontSize="'20px'">
        </Verify>
        <p @click="isLogin=isLogin?false:true">{{isLogin?'注册账号':'已有账号，立即登录'}}</p>
        <van-button round block type="info" native-type="submit" color="rgb(27,174,174)">{{isLogin?'登录':"立即注册"}}
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Verify from 'vue2-verify'
import { Toast } from 'vant'
import { login, reg } from '@/api/index'
// import http from '@/api/http';
import md5 from 'js-md5'
export default {
  data() {
    return {
      username: '',
      password: '',
      isLogin: true//登录还是注册
    };
  },
  methods: {
    checkCode() {
      let qqq = this.$refs.verify;
      let www = qqq.instance;
      let res = (www.inputValue == www.codeChose)
      qqq.refresh()
      return res
    },
    onSubmit(value) {
      // 能走到这个函数，证明from校验通过的
      let res = this.checkCode()//验证码校验的结果 
      if (res) {
        // 判断登录/注册
        if (this.isLogin) {
          this.login()//登录
        } else {
          this.reg()//注册
          Toast.success('恭喜您，注册成功！');
          this.isLogin = true
        }

      } else {
        Toast.fail('验证码输入有误！');
      }
      console.log(res, value);
    },
    login() {
      // console.log("登录接口");
      login({
        loginName: this.username,
        passwordMd5: md5(this.password)
      }).then(data => {
        // 登陆成功后，把token存储到localStorage
        localStorage.setItem("xfapptoken", data.data)
        // 跳转首页
        this.$router.push("/home")
        // console.log(data);
      })
    },
    reg() {
      // console.log("注册接口");
      reg({
        loginName: this.username,
        password: this.password
      }).then(data => {
        console.log(data);
      })
    },
  },
  components: {
    Verify
  }
};
</script>

<style lang="less" scoped>
.img_box img {
  width: 120px;
  height: 120px;
  margin-top: 80px;
}

/deep/.cerify-code-panel {
  display: flex;

  .verify-code-area {
    margin-top: 29px;
  }
}

p {
  color: blue;
}
</style>