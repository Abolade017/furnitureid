<template>
  <div>
    <Header />
    <Search />
    <Why />
    <Featured/>
    <About />
    <What />
    <Footer/>
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";
import Why from "@/components/Why.vue";
import Featured from "@/components/Featured.vue";
import About from "@/components/About.vue";
import What from "@/components/What.vue";
import Footer from "@/components/Footer.vue"; 
export default {
  components: {
    Header,
    Search,
    Why,
    Featured,
    About,
    What,
    Footer,
  },
  data() {
    return {};
  }
};
</script>
