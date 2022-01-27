<template>
  <div class="mx-auto max-w-4xl ">
    <div class="mt-10">
      <div class="flex flex-col items-center justify-center space-y-4">
        <div>
          <p class="text-middle-gray text-sm">why</p>
          <p class="font-semibold text-2xl text-dark">Why choose us?</p>
        </div>
        <div>
          <p class="text-middle-gray text-left text-sm">
            Elegant and quality furniture products are here to beautify the
            <span>
              <p
                class="text-middle-gray text-left text-sm"
              >appearance of the indoor and outdoor rooms in your home.</p>
            </span>
          </p>
        </div>
        <div class="flex items-start justify-between space-x-10 w-full">
          <div class="h-56 w-64" :class="choose.class" v-for="choose in chooses" :key="choose.id">
            <div class="flex flex-col items-center space-y-3 py-6">
              <div
                class="rounded-full h-10 w-10 flex items-center justify-center"
                :class="choose.imageBgColor"
              >
                <div class="items-center h-4 w-4">
                  <img :src="choose.url" :alt="choose.alt" />
                </div>
              </div>

              <div class="flex flex-col justify-center items-start pl-4">
                <div
                  class="text-white text-left text-md"
                  :class="choose.titleColor"
                >{{choose.title}}</div>
                <p class="text-left text-xs pt-2" :class="choose.textColor">
                  {{choose.text1}}
                  <span>
                    <p class="text-left text-xs">{{choose.text2}}</p>
                  </span>

                  <span>
                    <p class="text-left text-xs">{{choose.text3}}</p>
                  </span>
                  <span>
                    <p class="text-left text-xs">{{choose.text4}}</p>
                  </span>

                  <span>
                    <p class="text-left text-xs">{{choose.text5}}</p>
                  </span>
                  <span>
                    <p class="text-left text-xs">{{choose.text6}}</p>
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
      chooses: [
        {
          id: 1,
          text1: "Furnitureid pamper our",
          text2: "customers to choose",
          text3: "quality materials here all of",
          text4: "our furniture products",
          text5: "are of the best quality",
          text6: "",
          url: require("../images/quality-product.png"),
          alt: "../images/quality-product.png",
          title: "Quality Product",
          class: " bg-primary rounded-bl-4xl",
          imageBgColor: "bg-white",
          titleColor: "text-white",
          textColor: "text-white"
        },
        {
          id: 2,
          text1: " When customers buy",
          text2: "furniture products, we",
          text3: "provide benefits by",
          text4: "delivering the furniture of",
          text5: "their choice to their",
          text6: "destination.",
          url: require("../images/vehicle.png"),
          title: "Free Shipping",
          class: "rounded-tr-4xl bg-white border-2 border-dark",
          imageBgColor: "bg-light-gray",
          titleColor: "text-dark",
          textColor: "text-middle-gray"
        },
        {
          id: 3,
          text1: " Furnitureid provides",
          text2: "service all the time to",
          text3: "provide a happier and",
          text4: "easier customer",
          text5: "experience if they",
          text6: "experience problems.",
          url: require("../images/support.png"),
          title: "24/7 Support",
          class: "rounded-bl-4xl bg-white border-2 border-dark",
          imageBgColor: "bg-light-gray",
          titleColor: "text-dark",
          textColor: "text-middle-gray"
        }
      ]
    };
  }
};
</script>