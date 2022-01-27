<template>
  <div class>
    <div class="absolute top-60 left-44">
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
        <p class="text-middle-gray leading-5.1 text-sm">
          Elegant and quality furniture products are here to beautify the
          <br />appearance of the indoor and outdoor rooms in your home.
        </p>
      </div>
      <div class="flex items-center space-x-10">
        <div v-for="icon in icons" :key="icon.id">
          <router-link :to="icon.link">
            <img :src="icon.url" :alt="icon.alt" class="h-6" />
          </router-link>
        </div>
      </div>
      <div class="pt-6">
        <button
          type="submit"
          class="text-sm text-center h-10 w-32 bg-primary rounded-tr-3xl text-white"
        >
          <a href>Get started</a>
        </button>
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
          link: "/facebook"
        },
        {
          id: 2,
          url: require("../images/instagram.png"),
          alt: "instahram-logo",
          link: "/instagram"
        },
        {
          id: 3,
          url: require("../images/twitter.png"),
          alt: "twitter-logo",
          link: "/twitter"
        }
      ]
    };
  }
};
</script>