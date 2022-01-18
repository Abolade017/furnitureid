<template>
  <div class="home">
    <Helloworld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Helloworld from '@/components/Helloworld.vue'

export default {
  name: 'Home',
  components: {
    Helloworld
  }
}
</script>
