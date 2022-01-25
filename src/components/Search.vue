<template>
<div class="mx-auto max-w-3xl">
  <div class="mt-40 mb-20 flex flex-col items-center justify-center">
    <div class="absolute left-56">
      <div>
        <p class="text-middle-gray">Search</p>
      </div>
      <div>
        <p class="font-bold text-xl text-dark">Find Your Furniture</p>
      </div>

      <div class="w-98 my-4">
        <input
          type="text"
          placeholder="Search Your Furnitures"
          class="focus:border-light-gray border-none bg-faint-blue rounded-tr-3xl rounded-bl-3xl w-full h-10 placeholder-middle-gray placeholder:text-center"
        />
        <!--  -->
      </div>
      <div class="absolute left-10 bottom-5">
        <button type="submit" class>
          <img src="../images/Search-icon.png" alt class="h-4" />
        </button>
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