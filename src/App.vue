<template>
  <div>
    <Header />
    <Search />
    <Why />
    <Featured/>
    <About />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";
import Why from "@/components/Why.vue";
import Featured from "@/components/Featured.vue";
import About from "@/components/About.vue";
export default {
  components: {
    Header,
    Search,
    Why,
    Featured,
    About,
  },
  data() {
    return {};
  }
};
</script>
