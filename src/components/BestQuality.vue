<template>
  <div class>
    <div class="absolute top-60 left-40">
      <div>
        <h1 class="text-4xl font-bold text-dark leading-lg">
          The best and
          <br />
          <h1 class="pb-4 text-4xl font-bold text-dark leading-lg">quality furniture</h1>
        </h1>
      </div>
      <div class="ml-32 pb-2">
        <img src="../images/stroke.png" alt="stroke" class="w-48" />
      </div>
      <div class="pb-6">
        <p class="text-middle-gray leading-5.1">
          Elegant and quality furniture products are here to beautify the
          <br />appearance of the indoor and outdoor rooms in your home.
        </p>
      </div>
      <div class="flex items-center space-x-10">
        <div v-for="icon in icons" :key="icon.id">
          <router-link :to="icon.link">
            <img :src="icon.url" alt="icon.alt" class="h-6" />
          </router-link>
        </div>
      </div>
      <div class="pt-6">
        <button
          class="text-sm text-center h-10 w-32 bg-primary rounded-tr-3xl text-white"
        >Get started</button>
      </div>
    </div>
    <div class="absolute right-96 top-80 mt-40">
      <div class="relative h-40">
        <img src="../images/sofa2.png" alt class="h-full" />
      </div>
      <div class="absolute top-14 left-40">
        <img src="../images/Play.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      icons: [
        {
          id: 1,
          url: require("../images/Group-4.png"),
          alt: "facebook-logo",
          link: ""
        },
        {
          id: 2,
          url: require("../images/instagram.png"),
          alt: "instahram-logo",
          link: ""
        },
        {
          id: 3,
          url: require("../images/twitter.png"),
          alt: "twitter-logo",
          link: ""
        }
      ]
    };
  }
};
</script>