<template>
  <div>
    <Header />
    <router-view></router-view>
    <!-- <Footer v-if="$route.path === '/home' || $route.path === '/search'"/> -->
    <Footer v-if='!$route.meta.isHide'/>
    
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {mapActions} from 'vuex'
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted(){
    this.getCategoryList();
  },
  methods:{
    ...mapActions(['getCategoryList']),

  }
};
</script>

<style></style>
