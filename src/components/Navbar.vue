<template>
 <div class="flex space-x-20 justify-between items-center mx-auto max-w-4xl">
      <div>
        <div class="flex space-x-20 items-center absolute top-0 py-10">
          <router-link class="text-sm" to="/furnitureid">
            <p class="text-primary">
              Furniture
              <span class="text-dark-gray">id</span>
            </p>
          </router-link>
          <div class="flex item-center justify-between absolute top-0 left-64 pt-10 pb-10 ">
            <div class="flex space-x-14 items-center">
              <router-link class="text-sm" to="/">Home</router-link>
              <router-link class="text-sm" to="/feature">Feature</router-link>
              <router-link class="text-sm" to="/contact">Contact</router-link>
              <router-link to="/about">About</router-link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex items-center space-x-9 absolute top-0 right-32 py-10">
          <router-link to="/login" class="text-sm">Login</router-link>
          <router-link to="/signup" class="bg-primary text-white text-sm text-center rounded-tl-full rounded-br-full h-6 w-20">signup</router-link>
        </div>
      </div>
    </div>
</template>