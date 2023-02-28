<template>
  <Header />
  <router-view></router-view>
  <Footer v-show="$route.meta.show"/>
</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup() {
  },
  
}
</script>

<style>
</style>
