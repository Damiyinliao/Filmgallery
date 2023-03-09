<template>
  <Header />
  <router-view></router-view>
  <div v-show="$route.meta.show">
    <Footer />
  </div>
  
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
