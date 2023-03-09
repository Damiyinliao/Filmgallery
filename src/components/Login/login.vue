<template>
  <div class="login-modal">
    <Transition name="login">
      <div class="login" v-show="visible">
        <i tabindex="-1" aria-label="遮罩" class="mask"></i>
        <div class="login-container">
          <svg @click="closeLogin" t="1677203601046" class="close icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="2767" width="24" height="24">
            <path
              d="M512 466.944l233.472-233.472a31.744 31.744 0 0 1 45.056 45.056L557.056 512l233.472 233.472a31.744 31.744 0 0 1-45.056 45.056L512 557.056l-233.472 233.472a31.744 31.744 0 0 1-45.056-45.056L466.944 512 233.472 278.528a31.744 31.744 0 0 1 45.056-45.056z"
              fill="#5A5A68" p-id="2768">
            </path>
          </svg>
          <div class="left">
            <img src="./images/film-logo3.png" class="logo">
            <div class="qrcode">
              <img src="./images/qrcode.png">
              <div class="status" v-show="status.qrcode">
                <div class="outdated" @click="createQrcode">
                  <svg t="1677216188230" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2790" width="20" height="20">
                    <path
                      d="M831.636714 301.145228V167.332647v-0.144464c0.084979-21.032365 12.950838-38.01122 33.983203-37.93049 21.138589 0.084979 28.786722 16.944863 28.786722 38.074954V397.320498c0.021245 16.723917-14.306257 29.300846-31.034423 29.279602H633.987718c-21.130091 0-38.274656-12.874357-38.334141-34.0002v-0.097726c0-21.05361 17.072332-29.65351 38.130191-29.65351H788.182573c-52.916581-91.378191-162.977461-169.979751-276.182573-169.979751-168.981245 0-318.672199 148.675452-318.672199 317.635452 0 168.955751 149.741942 319.819419 318.723187 319.819419 142.569693 0 271.444979-114.475552 305.411186-246.422838h0.029743c0-21.117344 15.942108-36.923485 37.063701-36.923485 21.121593 0 32.27512 20.055104 32.275121 41.172448-35.410855 174.547386-189.750174 305.925311-374.779751 305.925311-211.224432 0-382.457627-171.207701-382.457627-382.406639 0-211.194689 171.233195-382.406639 382.457627-382.406639 125.063967 0 249.805012 79.081693 319.585726 171.887535z m-30.018921 95.690888L788.182573 364.063867c-2.689593-3.577627 2.855303 2.268946 0-1.219452l75.304365-21.227817c-28.485046-0.038241-54.102041 23.598739-54.059552 55.7039l22.209328-96.17527c19.961627 22.060614 15.389743-6.262971 30.082655 19.116083l20.904897 43.806805v32.768h-81.006473z"
                      fill="#333333" p-id="2791">
                    </path>
                  </svg>
                  "刷新重试"
                </div>
                <div class="description">二维码已失效</div>
              </div>
            </div>
            <div class="tip">使用微信扫一扫，扫码登录！</div>
          </div>
          <div class="right">
            <h1 style="font-size: 22px; text-align: center;">
              {{ status.code ? status.login : status.register }}
              <svg style="cursor: pointer;" @click="status.code = !status.code" t="1677224437312" class="icon"
                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2300" width="20"
                height="20">
                <path
                  d="M575.914667 725.333333a21.397333 21.397333 0 0 1-21.248-21.162666V319.829333A21.184 21.184 0 0 1 576 298.666667c11.776 0 21.333333 9.706667 21.333333 21.162666v333.909334l85.568-85.568a21.226667 21.226667 0 0 1 30.101334 0.064c8.32 8.32 8.213333 21.973333 0.085333 30.101333l-120.832 120.810667a21.141333 21.141333 0 0 1-16.341333 6.186666z m-152.789334-426.325333a21.418667 21.418667 0 0 1 24.896 20.864V704.213333a21.205333 21.205333 0 0 1-21.333333 21.162667c-11.797333 0-21.354667-9.706667-21.354667-21.162667V364.266667l-91.669333 91.605333a21.248 21.248 0 0 1-30.122667-0.064 21.418667 21.418667 0 0 1-0.064-30.101333l120.896-120.810667a21.184 21.184 0 0 1 18.752-5.888z m252.202667-181.290667A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667z"
                  fill="#707070" p-id="2301"></path>
              </svg>
            </h1>
            <div class="input-container">
              <label class="phone">
                <span class="country-code">+86</span>
                <input type="text" placeholder="请输入手机号" v-model="user.phoneNumber">
                <svg v-show="user.phoneNumber" @click="user.phoneNumber = null" t="1677217475748" class="icon"
                  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3850" width="16"
                  height="16">
                  <path
                    d="M519.656727 472.459636l-160.512-160.488727a36.584727 36.584727 0 1 0-51.712 51.712l160.488728 160.512-160.488728 160.512a36.584727 36.584727 0 1 0 51.712 51.712l160.512-160.512 160.488728 160.512a36.584727 36.584727 0 1 0 51.735272-51.712l-160.512-160.512 160.512-160.512a36.584727 36.584727 0 1 0-51.735272-51.712L519.68 472.436364zM512 1024C229.236364 1024 0 794.763636 0 512S229.236364 0 512 0s512 229.236364 512 512-229.236364 512-512 512z"
                    fill="#888888" p-id="3851"></path>
                </svg>
              </label>
              <div class="err-msg"></div>
              <label class="auth-code" v-show="!status.code">
                <input type="text" placeholder="输入验证码" v-model="user.captcha">
                <span @click="resetCaptchaCode" v-html="code"></span>
              </label>
              <div class="err-msg" v-show="!status.code"></div>
              <label class="phone">
                <span class="country-code">密码</span>
                <input type="password" placeholder="请输入密码" v-model="user.password">
                <svg v-show="user.password" @click="user.password = null" t="1677217475748" class="icon"
                  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3850" width="16"
                  height="16">
                  <path
                    d="M519.656727 472.459636l-160.512-160.488727a36.584727 36.584727 0 1 0-51.712 51.712l160.488728 160.512-160.488728 160.512a36.584727 36.584727 0 1 0 51.712 51.712l160.512-160.512 160.488728 160.512a36.584727 36.584727 0 1 0 51.735272-51.712l-160.512-160.512 160.512-160.512a36.584727 36.584727 0 1 0-51.735272-51.712L519.68 472.436364zM512 1024C229.236364 1024 0 794.763636 0 512S229.236364 0 512 0s512 229.236364 512 512-229.236364 512-512 512z"
                    fill="#888888" p-id="3851"></path>
                </svg>
              </label>
              <div class="err-msg"></div>
              <label class="phone" v-show="!status.code">
                <span class="country-code">确认</span>
                <input type="password" placeholder="请再输入一次密码" v-model="user.confirmPassword" @blur="checkPwd">
                <svg v-show="user.confirmPassword" @click="user.confirmPassword = null" t="1677217475748" class="icon"
                  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3850" width="16"
                  height="16">
                  <path
                    d="M519.656727 472.459636l-160.512-160.488727a36.584727 36.584727 0 1 0-51.712 51.712l160.488728 160.512-160.488728 160.512a36.584727 36.584727 0 1 0 51.712 51.712l160.512-160.512 160.488728 160.512a36.584727 36.584727 0 1 0 51.735272-51.712l-160.512-160.512 160.512-160.512a36.584727 36.584727 0 1 0-51.735272-51.712L519.68 472.436364zM512 1024C229.236364 1024 0 794.763636 0 512S229.236364 0 512 0s512 229.236364 512 512-229.236364 512-512 512z"
                    fill="#888888" p-id="3851"></path>
                </svg>
              </label>
              <div class="err-msg" v-show="!status.code" v-html="status.tips"></div>
              <div class="submit" @click="submit">{{ status.code ? status.login : status.register }}
              </div>
            </div>
            <!-- 装饰的 -->
            <div class="agreements" v-show="!status.code">
              <input type="radio" class="radio">
              <label for="">我已阅读并同意</label><a href="">《用户协议》《隐私政策》</a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { reactive, watch, ref, onMounted } from 'vue';
import emitter from '@/utils/eventBus'
import Toast from '../Toast';
import { reqCaptchaCode, reqUserLogin, reqUserRegister } from '@/api'
// 验证码
let code = ref()
// 获取验证码
function getCaptchCode() {
  reqCaptchaCode().then((result) => {
    code.value = result;
  });
}
const visible = ref(false);
// 全局事件，移除渲染的登录组件
const closeLogin = () => {
  emitter.emit("closeLogin1");
}
// 页面一挂载就获取验证码以及展示页面
onMounted(() => {
  getCaptchCode();
  visible.value = true;
})
// 用户信息
const user = reactive({
  status: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
  authCode: '',
  captcha: ''
})
// 状态
const status = reactive({
  code: false,    //false表示未注册，需要注册。true表示已经注册了需要登录
  login: '登录',
  register: '注册',
  qrcode: true,
  tips: ''        // 如果密码不一致的提醒
})
// 登录和注册切换过程中，如果切换到注册页面就进行刷新验证码
watch(
  () => status.code,
  (newValue, oldValue) => {
    if (newValue) {
      getCaptchCode();
    }
  }, { immediate: true })
// 重置验证码
const resetCaptchaCode = () => getCaptchCode()
const checkPwd = () => {
  if (user.password !== user.confirmPassword) {
    status.tips = '密码不一致';
  } else {
    status.tips = '';
  }
}
const submit = () => {
  if (status.code) {
    login()
  } else {
    register()
  }
}
// 注册
const register = async () => {
  if (user.password !== user.confirmPassword) {
    Toast({ type: 'warning', message: '密码不一致', duration: 2500 });  //提示密码有误
    return;
  }
  if (user.password == user.confirmPassword) {
    let res = await reqUserRegister({
      username: user.phoneNumber,
      password: user.password,
      role: 'visitor',
      captcha: user.captcha,
      createTime: new Date().toLocaleString()
    })
    // 注册成功跳至登录页面
    if (res.data.data == 'REGISTERSUCCESS') {
      Toast({ type: 'success', message: '注册成功', duration: 2500 });  //提示注册成功
      status.code = true;
    }
  }
}
// 登录
const login = async () => {
  let res = await reqUserLogin({
    username: user.phoneNumber,
    password: user.password
  })
  // 登陆成功 存储Token
  if (res.data.msg == 'LOGINSUCCESS') {
    //利用localstorage存储到本地
    localStorage.setItem('token', res.data.access_token);
    // 登录成功，触发在header组件中的全局事件，获取用户信息
    emitter.emit("getLoginInfo", user.phoneNumber);
    Toast({ type: 'success', message: '登陆成功', duration: 2500 });  //提示登陆成功
    // 登录成功关闭页面
    closeLogin();
  }
}
// 刷新二维码 (TODO) 微信二维码扫码登录暂未实现 微信扫码登录只有公司认证的服务号能用
const createQrcode = () => {
  status.qrcode = false;
}


</script>

<style lang="less" scoped>
.login {
  z-index: 998;
  visibility: visible;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  transition: opacity .2s, visibility .2s;
}

// 设置过渡效果
.login-enter-active,
.login-leave-active {
  transition: all 0.3s;
}

.login-enter-from,
.login-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .4);
  z-index: -1;
}

.login-container {
  display: flex;
  position: relative;
  width: 804px;
  height: 478px;
  background: #fff;
  border-radius: 16px;
  padding: 60px 0;
  transition: all .2s;

  .close {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
  }
}

.left {
  width: 404px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-right: .5px solid rgba(0, 0, 0, .08);

  .logo {
    width: 150px;
    height: 75px;
  }

  .qrcode {
    position: relative;
    margin: 32px 0;
    width: 164px;
    height: 164px;
    line-height: 18px;
    font-weight: 500;

    img {
      width: 155px;
      height: 155px;
    }

    .status {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      flex-direction: column;
      background: hsla(0, 0%, 100%, .95);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .status div:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .outdated {
      cursor: pointer;
    }

    .description {
      margin-top: 6px;
      font-size: 12px;
      line-height: 16px;
      color: rgba(51, 51, 51, .8);
      font-weight: 400;
    }
  }

  .tip {
    margin-top: 20px;
    font-size: 20px;
    font-weight: normal;
  }
}

.right {
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.input-container {
  margin-top: 28px;
  width: 280px;
  display: flex;
  flex-direction: column;
}

.err-msg {
  margin-top: 6px;
  height: 10px;
  line-height: 10px;
  font-size: 10px;
  color: #ff2442;
}

.phone {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 22px;
  color: #333;
  height: 40px;
  border-bottom: .5px solid rgba(0, 0, 0, .08);
  transition: border-color .2s;

  .country-code {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 48px;
    height: 100%;
    font-weight: 510;
  }

  .country-code:after {
    position: absolute;
    right: 0;
    top: 12px;
    content: "";
    width: .5px;
    height: 16px;
    background: rgba(0, 0, 0, .08);
  }

  input {
    margin-left: 16px;
    flex: 1;
    font-size: 18px;
    width: 140px;
    font-weight: 510;
    height: 100%;
    caret-color: #ff2442;
  }

  svg {
    cursor: pointer;
  }
}

.auth-code {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 22px;
  color: #333;
  height: 40px;
  border-bottom: .5px solid rgba(0, 0, 0, .08);
  transition: border-color .2s;

  input {
    flex: 1;
    font-size: 18px;
    width: 140px;
    font-weight: 510;
    height: 100%;
    caret-color: #ff2442;
  }

  span {
    font-size: 16px;
    cursor: pointer;
    color: rgba(255, 36, 66, .3);

    svg {
      height: 40px;
      width: 120px;
    }
  }
}

.submit {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  height: 40px;
  background: rgba(0, 0, 0, .04);
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  color: rgba(51, 51, 51, .2);
  cursor: pointer;
  transition: all .2s;

  &:hover {
    transform: scale(1.04);
    background-color: #4c5d6d;
    color: #fff;
  }
}

.agreements {
  width: 280px;
  position: relative;
  margin-top: 16px;
  padding-left: 18px;
  font-size: 12px;
  color: rgba(51, 51, 51, .6);
  line-height: 160%;

  .radio {
    position: absolute;
    left: 0;
    top: 4.5px;
    border: 0.5px solid rgb(80, 79, 79);
    width: 10px;
    height: 10px;
    appearance: radio;
  }
}
</style>