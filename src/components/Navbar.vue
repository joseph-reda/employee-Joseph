<template>
  <nav class="navbar">
    <div class="navbar-container">
      <h1 class="navbar-title">Employee Management</h1>
      <ul class="navbar-links">
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/companies">Companies</router-link></li>
        <li><router-link to="/departments">Departments</router-link></li>
        <li><router-link to="/employees">Employees</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
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
  color: white;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
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
  gap: 1rem;
}

.navbar-links li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  transition: background-color 0.3s ease;
}

.navbar-links li a:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}
</style>
