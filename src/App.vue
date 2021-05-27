<template>
  <div>
    <Navbar/>
    <div class="container-fluid py-3">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>
