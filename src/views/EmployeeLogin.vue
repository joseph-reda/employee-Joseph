<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="login-title">Employee Login</h2>
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="login-input"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="login-input"
      />
      <button @click="handleLogin" class="login-button">Login</button>
      <p class="error-message" v-if="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import authService from '../services/authService';

export default {
  name: 'EmployeeLogin',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    handleLogin() {
      const session = authService.login(this.email, this.password);
      if (session) {
        this.$router.push('/home');
      } else {
        this.error = 'Invalid email or password';
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #c3dafe, #e9d8fd);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.login-title {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  color: #2d3748;
}

.login-input {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #cbd5e0;
  font-size: 1rem;
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #4c51bf;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #434190;
}

.error-message {
  color: red;
  margin-top: 1rem;
  text-align: center;
}
</style>
