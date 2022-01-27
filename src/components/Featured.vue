<template>
  <div class="mx-auto max-w-4xl mt-10 mb-10">
    <div>
      <p class="text-middle-gray text-left text-sm">Features</p>
    </div>
    <div>
      <h1 class="font-semibold text-dark text-2xl ">Featured</h1>
    </div>
    <div class="flex justify-between items-center mt-4 ">
      <div class="text-sm text-middle-gray">
        <p>
          These are our furniture products that are highly favored by our
          <span>
            <p>customers with quality designs and materials.</p>
          </span>
        </p>
      </div>
      <div class="text-md text-middle-gray">see more</div>
    </div>
    <div class="flex items-center justify-between space-x-10 mt-6">
      <div class="w-1/2 h-auto">
        <div class="relative">
          <div>
            <img src="../images/table.png" alt="table" />
          </div>
          <div class="absolute right-4 bottom-6">
            <DetailButton />
          </div>
        </div>
      </div>
      <div class="w-1/2 h-auto">
      <div class="flex flex-col space-y-10 items-center">
        <div class="relative" v-for="image in images" :key="image.id">
          <div>
            <img :src="image.url" :alt="image.alt" />
          </div>
          <div class="absolute right-4 bottom-6">
            <DetailButton />
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DetailButton from "@/components/DetailButton.vue";
export default {
  components: {
    DetailButton
  },
  data() {
    return {
      images: [
        {
          id: 1,
          url: require("../images/armsofa.png"),
          alt: 'sofa'
        },
        {
          id: 2,
          url: require("../images/chair.png"),
          alt: 'chair'
        }
      ]
    };
  }
};
</script>