<template>
  <div class>
    <div class="absolute top-28 left-0">
      <div class>
        <img src="../images/zigzag.svg" alt="zig-zag-svg" class="w-full h-full" />
      </div>
    </div>
    <div class="absolute right-4 top-40">
      <img src="../images/sofa.png" alt class="h-96" />
    </div>
    <div class="absolute right-98 top-80 mt-36">
      <div class="relative h-36 w-80">
        <img src="../images/sofa2.png" alt class="h-full" />
      </div>
      <div class="absolute top-12 left-32">
        <img src="../images/Play.png" alt />
      </div>
    </div>
    <div class="absolute right-44 bottom-20">
      <div class="flex items-center space-x-10 ">
        <div v-for="i in navigator" :key="i.id">
          <button class="rounded-full flex justify-center items-center  h-10 w-10" :class="i.class">
            <img :src="i.url" :alt="i.alt" class="items-center  h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navigator: [
        {
          id: 1,
          name: "left",
          alt: "previous",
          url: require("../images/left-arrow.png"),
          class:"bg-white ring-1 ring-dark"
        },
        {
          id: 2,
          name: "right",
          alt: "next",
          url: require("../images/right-arrow.png"),
          class:"bg-primary"        }
      ]
    };
  }
};
</script>