<template>
  <Header />
  <router-view></router-view>
  <Footer v-show="$route.meta.show"/>
</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { onMounted } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup() {
    // let router = useRouter
    // onMounted(()=>{
    //   console.log("这里是App组件", router.currentRoute.value);
    // })
  },
  
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;2
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
