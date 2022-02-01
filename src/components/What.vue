<template>
  <div class="mx-auto max-w-4xl mt-10">
    <div class="flex items-center justify-between space-x-20">
      <!-- left column -->
      <div class="w-1/2  h-auto">
        <div>
          <p class="text-middle-gray text-sm">what</p>
        </div>
        <div class="mt-4">
          <h1 class="text-dark font-semibold text-3xl">
            What our customers
            <span>
              <h1>say?</h1>
            </span>
          </h1>
        </div>
        <div class="flex space-x-10 justify-end items-center">
           <img src="../images/Quote-icon.png" alt="quotation-mark" class="h-6">
        </div>
        <div class="mt-6">
          <p class="text-middle-gray text-sm">
            <span>
              <p class="text-sm">Furniture is indeed the best, it is proven by me</p>
            </span>
            <span>
              <p class="text-sm">buying a product, namely a very beautiful sofa</p>
            </span>
            <span>
              <p class="text-sm">chair, I am very satisfied with buying furniture</p>
            </span>
            <span>
              <p class="text-sm">products here, the service is also comfortable and</p>
            </span>
            <span>
              <p class="text-sm">easy, thank you, furnitureid, I am very satisfied with buying</p>
            </span>
            <span>
              <p class="text-sm">buying your product.</p>
            </span>
          </p>
        </div>
       
        <div class="mt-4">
          <div class="flex items-center justify-between">
            <!--lazio sir coulumn  -->
            <div class="flex items-center space-x-2">
              <div class="items-center">
                <img src="../images/lazio-sir.png" alt="lazio-sir" />
              </div>
              <div class="mt-4">
                <p class="text-dark text-xs font-bold">
                  Laizo Sir
                  <span>
                    <p class="text-xs text-middle-gray">Furniture</p>
                  </span>
                </p>
              </div>
            </div>
            <!-- rating star column -->
            <div class="flex items-center space-x-4">
              <div class="flex items-center space-x-2">
                <div v-for="i in 5" :key="i.id">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-mid-orange items-center"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
              </div>
              <div class="text-dark text-xs font-bold">5/5</div>
            </div>
          </div>
        </div>
      </div>
      <!-- right column -->
      <div class="w-1/2">
        <div class="h-auto">
          <img src="../images/sitting-arrangement.png" alt="sitting-arrangement" class="h-full" />
        </div>
      </div>
    </div>
  </div>
</template>