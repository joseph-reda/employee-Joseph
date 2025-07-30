<template>
  <div id="app">
    <AppNavbar v-if="showNavbar" />
    <router-view />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AppNavbar from './components/Navbar.vue';

export default {
  name: 'AppRoot',
  components: {
    AppNavbar
  },
  setup() {
    const route = useRoute();
    const showNavbar = computed(() => route.path !== '/');
    return { showNavbar };
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9fafb;
  color: #2d3748;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
