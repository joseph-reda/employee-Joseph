<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="login-title">Login</h2>
      <input
        v-model="username"
        type="text"
        placeholder="Enter your username"
        class="login-input"
      />
      <button
        @click="login"
        class="login-button"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeLogin',
  data() {
    return {
      username: ''
    };
  },
  methods: {
    login() {
      if (this.username) {
        this.$router.push('/home');
      } else {
        alert('Please enter a username.');
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #ebf8ff, #e9d8fd);
}

.login-card {
  background-color: #ffffff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
}

.login-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #2d3748;
}

.login-input {
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  margin-bottom: 1rem;
  outline: none;
  transition: border-color 0.3s;
}

.login-input:focus {
  border-color: #3182ce;
}

.login-button {
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: #3182ce;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #2b6cb0;
}
</style>
