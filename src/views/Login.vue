<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin" class="login-box">
      <h2>Login</h2>
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
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
        this.error = 'Invalid email or password.';
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
  background: linear-gradient(to bottom right, #dbeafe, #f3e8ff);
}
.login-box {
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
}
.login-box h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}
.login-box input {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}
.login-box button {
  width: 100%;
  background: #2563eb;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}
.login-box button:hover {
  background: #1d4ed8;
}
.error {
  margin-top: 1rem;
  color: red;
  text-align: center;
}
</style>
