<template>
  <div class="mt-20">
    <div class="bg-primary w-full h-auto footerbox">
      <div class="mx-auto max-w-4xl">
        <div class="flex items-start space-x-64 h-auto">
          <div class="pt-24">
            <div>
              <p class="text-3xl text-white text-left">
                Furnitureid
                <span class>
                  <p class="text-sm text-white text-left mt-4">Semi street 06, Sumobito,</p>
                </span>
                <span>
                  <p class="text-sm text-white text-left">Jombang Indonesian</p>
                </span>
                <span>
                  <p class="text-sm text-white text-left mt-4">+62 85456729899</p>
                </span>
                <span>
                  <p class="text-sm text-white text-left">
                    <a href>hey@furnitureid.com</a>
                  </p>
                </span>
              </p>
            </div>
          </div>
          <div class="pb-14">
            <div class="flex items-center space-x-24">
              <div class v-for="i in headings" :key="i.id">
                <h1 class="text-white pt-24 text-lg" :class="i.class">{{i.title}}</h1>
              </div>
            </div>
            <div class="flex space-x-20">
              <div class="flex flex-col space-y-2 mt-2">
                <div class v-for="i in company" :key="i.id">
                  <a href class="text-white text-sm">{{i.name}}</a>
                </div>
              </div>
              <div class="flex flex-col space-y-2 mt-2">
                <div class v-for="i in support" :key="i.id">
                  <a href class="text-white text-sm">{{i.name}}</a>
                </div>
              </div>
              <div class="flex flex-col space-y-2 mt-2">
                <div class v-for="i in service" :key="i.id">
                  <a href class="text-white text-sm text-left pl-4">{{i.name}}</a>
                </div>
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
      headings: [
        {
          id: 1,
          title: "Company",
          class: "text-lg"
        },
        {
          id: 2,
          title: "Support",
          color: "text-lg"
        },
        {
          id: 3,
          title: "Service",
          class: ""
        }
      ],
      company: [
        {
          id: 1,
          name: "About us"
        },
        {
          id: 2,
          name: "Mebels"
        },
        {
          id: 3,
          name: "Features"
        },
        {
          id: 4,
          name: "Careers"
        },
        {
          id: 5,
          name: "Customer care"
        }
      ],
      support: [
        {
          id: 1,
          name: "Contact us"
        },
        {
          id: 2,
          name: "FaQ"
        },
        {
          id: 3,
          name: "Features"
        },
        {
          id: 4,
          name: "Call center"
        }
      ],
      service: [
        {
          id: 1,
          name: "Premium service"
        },
        {
          id: 2,
          name: "Privacy Policy"
        },
        {
          id: 3,
          name: "Terms"
        }
      ]
    };
  }
};
</script>
<style scoped>
.footerbox{
clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 30%);
}
</style>