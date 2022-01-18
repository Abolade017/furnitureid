<template>
  <div id="nav " class="relative">
    <div class="relative">
      <div class="w-7/12 bg-light-blue h-102">
        <div class="flex space-x-20 absolute top-0 left-40 pt-10 pb-10 ">
          <div>
            <router-link to="/furnitureid">
              <p class="text-primary">
                Furniture
                <span class="text-dark-gray">id</span>
              </p>
            </router-link>
          </div>
          <div class="flex item-center justify-between absolute top-0 left-96 pt-10 pb-10 ">
            <div class="flex space-x-9 items-center">
              <router-link to="/">Home</router-link>
              <router-link to="/feature">Feature</router-link>
              <router-link to="/contact">Contact</router-link>
              <router-link to="/about">About</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="w-4/12 bg-white h-100 ">
        <div class="flex items-center space-x-9 absolute top-0 right-32 py-10 ">
          <router-link to="/login">Login</router-link>
          <router-link to="/signup">signup</router-link>
        </div>
        <WhiteColumn />
      </div>
    </div>
     <BestQuality/> 
    <router-view />
  </div>
</template>
<script>
import BestQuality from "@/components/BestQuality.vue";
import WhiteColumn from "@/components/WhiteColumn.vue";
export default {
  components: {
    BestQuality,
    WhiteColumn,
  },
  data() {
    return {};
  }
};
</script>
