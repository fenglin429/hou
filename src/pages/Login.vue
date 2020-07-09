<template>
  <div id="outer">
    <!-- 背景图 -->
    <div class="background">
      <img :src="imgSrc" width="100%" height="100%" alt />
    </div>
    <!-- 登录页面 -->
    <div class="login">
      <h3>登录</h3>
      <div>
        用户名:
        <el-input placeholder="请输入用户名" v-model="user_input" clearable></el-input>
      </div>
      <div>
        密 码:
        <el-input placeholder="请输入密码" v-model="pwd_input" show-password></el-input>
      </div>
      <div>
          <button @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { API_CHECKLOGIN } from "@/api/apis";
export default {
  data() {
    return {
      // 背景图
      imgSrc: require("../assets/imgs/mx.jpeg"),
      // 用户名
      user_input: "",
      // 密码
      pwd_input: ""
    };
  },
  methods:{
      login(){
          API_CHECKLOGIN(this.user_input,this.pwd_input).then((res)=>{
              console.log(res);
          })

          
          
      }
  }

  
};
</script>

<style lang="less" scoped>
#outer {
  .background {
    width: 100%;
    height: 100%; /**宽高100%是为了图片铺满屏幕 */
    z-index: -1;
    position: absolute;
  }
  .login {
    z-index: 1;
    margin: auto;
    position: absolute; /*设定水平和垂直偏移父元素的50%，
再根据实际长度将子元素上左挪回一半大小*/
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -150px;
    width: 400px;
    height: 300px;
    background-color: #fff;
    div{
        display: flex;
        margin: 10px 5px;

    }
  }
}
</style>