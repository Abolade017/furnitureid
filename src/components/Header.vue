<template>
  <div id="nav " class="relative ">
    <div class="w-7/12 bg-light-blue h-102">
      <div class="flex space-x-20 absolute top-0 left-40 pt-10 pb-10">
        <div>
          <router-link to="/furnitureid">
            <p class="text-primary">
              Furniture
              <span class="text-dark-gray">id</span>
            </p>
          </router-link>
          <div class="flex item-center justify-between absolute top-0 left-72 pt-10 pb-10 ml-10">
            <div class="flex space-x-10 items-center">
              <router-link to="/">Home</router-link>
              <router-link to="/feature">Feature</router-link>
              <router-link to="/contact">Contact</router-link>
              <router-link to="/about">About</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="w-5/12 bg-white">
        <div class="flex items-center space-x-9 absolute top-0 right-32 py-10">
          <router-link to="/login">Login</router-link>
          <router-link to="/signup">signup</router-link>
        </div>
        <WhiteColumn />
      </div>
    </div>
    <BestQuality />
  </div>
</template>
<script>
import BestQuality from "@/components/BestQuality.vue";
import WhiteColumn from "@/components/WhiteColumn.vue";
export default {
  components: {
    BestQuality,
    WhiteColumn
  }
};
</script>