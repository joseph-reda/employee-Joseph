<template>
  <div class="home-container">
    <div class="home-card">
      <h1 class="home-title">Welcome, {{ username }}</h1>
      <p class="home-description">This is the Employee Management System dashboard.</p>
      <div class="home-buttons">
        <router-link to="/employees" class="home-link">Employees</router-link>
        <router-link to="/departments" class="home-link">Departments</router-link>
        <router-link to="/projects" class="home-link">Projects</router-link>
        <router-link to="/companies" class="home-link">Companies</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      username: 'Admin', // أو جلبها من حالة عامة إذا كانت محفوظة
    };
  }
};
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #f0f4f8, #dbeafe);
}

.home-card {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  text-align: center;
}

.home-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #2d3748;
}

.home-description {
  font-size: 16px;
  color: #4a5568;
  margin-bottom: 1.5rem;
}

.home-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.home-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #4299e1;
  color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.home-link:hover {
  background-color: #3182ce;
}
</style>
