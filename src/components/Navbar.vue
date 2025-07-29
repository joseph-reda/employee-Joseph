<template>
  <nav class="navbar">
    <div class="navbar-container">
      <h1 class="navbar-title">Employee Management</h1>
      <ul class="navbar-links">
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/companies">Companies</router-link></li>
        <li><router-link to="/departments">Departments</router-link></li>
        <li><router-link to="/employees">Employees</router-link></li>
        <li><router-link to="/">Logout</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar'
};
</script>

<style scoped>
.navbar {
  background-color: #2c5282;
  padding: 1rem;
  color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.navbar-links li {
  font-weight: 500;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  transition: color 0.2s ease;
}

.navbar-links a:hover {
  color: #a0c4ff;
}
</style>
