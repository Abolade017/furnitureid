<template>
  <div id="nav " class="h-auto">
    <Navbar />
    <div class="w-7/12 bg-light-blue h-102">
      <BestQuality />
    </div>
    <div class="w-5/12 bg-white">
      <WhiteColumn />
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import BestQuality from "@/components/BestQuality.vue";
import WhiteColumn from "@/components/WhiteColumn.vue";
export default {
  components: {
    BestQuality,
    WhiteColumn,
    Navbar
  }
};
</script>