<template>
  <div id="app">
    <AppNavbar />
    <main class="main-content">
      <router-view />
    </main>
    <footer class="footer">
      <p>© 2025 BrainWise - All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import AppNavbar from './components/Navbar.vue';

export default {
  name: 'AppRoot',
  components: {
    AppNavbar
  }
};
</script>

<style>
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Base */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9fafb;
  color: #1a202c;
  min-height: 100vh;
}

/* App Container */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 2rem;
}

/* Footer */
.footer {
  background-color: #1f2937;
  color: #f1f1f1;
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
}
</style>
