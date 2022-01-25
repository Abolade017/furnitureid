<template>
  <div class="mx-auto max-w-3xl">
    <div class="mt-24 flex flex-col items-center justify-center space-y-4">
      <p class="text-middle-gray">why</p>
      <p class="font-semibold text-2xl text-dark">Why choose us?</p>
      <p class="text-middle-gray text-left">
        Elegant and quality furniture products are here to beautify the
        <br />the indoor and outdoor rooms in your home.
      </p>

      <div class="mt-6">
        <div class="flex items-center justify-between space-x-10">
          <div class="bg-primary h-56 w-56 rounded-bl-4xl">
            <div class="flex flex-col items-center space-y-3 py-6">
              <div class="rounded-full h-10 w-10 flex items-center justify-center bg-white">
                <div class="items-center h-4 w-4">
                  <img src="../images/quality-product.png" alt="quality-products" />
                </div>
              </div>

              <div class="flex flex-col justify-center items-start pl-4">
                <div class="text-white text-left text-md">Quality Product</div>
                <p class="text-left text-xs pt-2 text-white">
                  Furnitureid pamper our
                  <span>
                    <p class="text-left text-xs text-white">customers to choose</p>
                  </span>

                  <span>
                    <p class="text-left text-xs text-white">quality materials here all of</p>
                  </span>
                  <span>
                    <p class="text-left text-xs text-white">our furniture products</p>
                  </span>

                  <span>
                    <p class="text-left text-xs text-white">are of the best quality</p>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="bg-white h-56 w-56 rounded-tr-4xl border-2 border-dark">
            <div class="flex flex-col items-center space-y-3 py-6">
              <div class="rounded-full h-10 w-10 flex items-center justify-center bg-light-gray">
                <div class="items-center h-4 w-4">
                  <img src="../images/vehicle.png" alt="shipping-bus" />
                </div>
              </div>
              <div class="flex flex-col justify-center items-start pl-4">
                <div class="text-dark text-left text-md font-semibold">Free Shipping</div>
                <p class="text-left text-xs pt-2 text-dark">
                  When customers buy
                  <span>
                    <p class="text-left text-xs text-dark">furniture products, we</p>
                  </span>
                  <span>
                    <p class="text-left text-xs text-dark">provide benefits by</p>
                  </span>
                  <span>
                    <p class="text-left text-xs text-dark">delivering the furniture of</p>
                  </span>
                  <span>
                    <p class="text-left text-xs text-dark">their choice to their</p>
                  </span>

                  <span>
                    <p class="text-left text-xs text-dark">destination.</p>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="bg-white h-56 w-56 rounded-bl-4xl border-2 border-dark">
            <div class="flex flex-col items-center space-y-3 py-6">
              <div class="rounded-full h-10 w-10 flex items-center justify-center bg-light-gray">
                <div class="items-center h-4 w-4">
                  <img src="../images/support.png" alt="24/7 support" />
                </div>
              </div>
              <div class="flex flex-col justify-center items-start pl-4">
                <div class="text-dark text-left text-md font-semibold">24/7 Support</div>
                <p class="text-left text-xs pt-2 text-dark">
                  Furnitureid provides
                  <span>
                    <p class="text-left text-xs text-dark">service all the time to</p>
                  </span>
                  <span>
                    <p class="text-left text-xs text-dark">provide a happier and</p>
                  </span>
                  <span>
                    <p class="text-left text-xs text-dark">easier customer</p>
                  </span>
                  <span>
                    <p class="text-left text-xs text-dark">experience if they</p>
                  </span>

                  <span>
                    <p class="text-left text-xs text-dark">experience problems.</p>
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
          text:
            "Furnitureid pamper our customers to choose quality materials here all of our furniture products are of the best quality",
          url: require("../images/Ellipse2.png"),
          title: "Quality Product"
        },
        {
          id: 2,
          text:
            "When customers buy furniture products, we provide benefits by delivering the furniture of their choice to their destination.",
          url: require("../images/Ellipse2.png"),
          title: "Free Shipping"
        },
        {
          id: 3,
          text:
            "Furnitureid provides service all the time to provide a happier and easier customer experience if they experience problems.",
          url: require("../images/Ellipse2.png"),
          title: "24/7 Support"
        }
      ]
    };
  }
};
</script>