<template>
  <div class="mx-auto max-w-4xl">
    <div class="mt-20">
       <div class=" flex flex-col space-y-4 ">
         <div>
      <p class="text-sm text-middle-gray">Search</p>
      <div><h1 class="text-2xl font-semibold ">Find Our Furniture</h1></div>
      </div>
      <div class="relative">
         <input
            type="text"
            placeholder="Search Your Furnitures"
            class="focus:border-light-gray border-none bg-light-blue rounded-tr-3xl rounded-bl-3xl w-98 h-10 placeholder-middle-gray placeholder:text-center"
          />
          <div class="absolute bottom-1 left-8">
          <button type="submit" class>
            <img src="../images/Search-icon.png" alt class="h-4" />
          </button>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
input {
  text-align: center;
}
::placeholder {
  text-align: center;
}
</style>