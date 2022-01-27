<template>
  <div class="mx-auto max-w-4xl mt-10">
    <p class="text-xs text-middle-gray">About</p>
    <h1 class="text-2xl font-semibold text-dark">About Us</h1>
    <div class="flex items-center justify-between space-x-10 mb-20 mt-6">
      <div class="w-1/2 h-auto border-left border-gray-300">
        <div class="relative">
          <div class="h-60 w-60">
            <img src="../images/livingroom.png" alt="lining-room" class="h-full w-full" />
          </div>
          <div class="absolute right-20 -bottom-11">
            <div class="h-40 w-40">
              <img src="../images/dinning.png" alt="dinning-room" class="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2 h-auto">
        <div class="flex flex-col space-y-6">
          <div>
            <h1 class="font-bold text-dark text-3xl">WE ARE</h1>
          </div>
          <div>
            <p class="text-middle-gray text-sm">
              Furnitureid is a furniture company that provides
              <span>
                <p>more than 200+ furniture products that we offer</p>
              </span>
              <span>
                <p>for you, don't worry about our products, we</p>
              </span>
              <span>
                <p>always provide the best for you with quality</p>
              </span>
              <span>
                <p>furniture materials and designs.</p>
              </span>
            </p>
          </div>
          <div
            class="felx flex-col items-center space-y-6"
            v-for="founder in founders"
            :key="founder.id"
          >
            <div class="flex items-center justify-start space-x-4">
              <div>
                <img
                  :src="founder.url"
                  :alt="founder.alt"
                  :class="founder.class"
                  class="bg-light-gray"
                />
              </div>
              <div>
                <p class="text-left font-bold">
                  {{founder.name}}
                  <span>
                    <p class="text-left font-light text-middle-gray text-xs">{{founder.post}}</p>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      founders: [
        {
          id: 1,
          name: "Hazard North",
          alt: "Hazard North",
          url: require("../images/hazard.png"),
          post: "Owner Furniturid",
          class: "rounded-tl-full"
        },
        {
          id: 1,
          name: "Emiliano Cort",
          alt: "Emiliano Cort",
          url: require("../images/emillino.png"),
          post: "Co-Founder ",
          class: "rounded-tr-full"
        }
      ]
    };
  }
};
</script>