<template>
  <div>
    <Navbar />
    <div class="container">
      <h2 class="title">Project List</h2>
      <table class="styled-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Project Name</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(project, index) in projects" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ project.name }}</td>
            <td>{{ project.description }}</td>
            <td>{{ project.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
  name: 'ProjectList',
  components: { Navbar },
  data() {
    return {
      projects: [
        { name: 'Website Redesign', description: 'UI/UX improvements', status: 'In Progress' },
        { name: 'HR System', description: 'Employee data management', status: 'Completed' },
        { name: 'Payroll Automation', description: 'Automate salary calculations', status: 'Pending' }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  color: #2c5282;
}

.styled-table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.styled-table th, .styled-table td {
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  text-align: left;
}

.styled-table th {
  background-color: #2c5282;
  color: white;
}

.styled-table tr:nth-child(even) {
  background-color: #f8f9fa;
}

.styled-table tr:hover {
  background-color: #edf2f7;
}
</style>
