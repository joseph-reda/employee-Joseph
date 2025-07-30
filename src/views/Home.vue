<template>
  <div>
    <div class="dashboard">
      <h1 class="dashboard-title">Dashboard</h1>
      <div class="card-grid">
        <CompanyList />
        <DepartmentList />
        <EmployeeList />
        <ProjectList />
      </div>
    </div>
  </div>
</template>

<script>
import CompanyList from '../components/CompanyList.vue';
import DepartmentList from '../components/DepartmentList.vue';
import EmployeeList from '../components/EmployeeList.vue';
import ProjectList from '../components/ProjectList.vue';

export default {
  name: 'EmployeeHome',
  components: {
    CompanyList,
    DepartmentList,
    EmployeeList,
    ProjectList
  }
};
</script>

<style scoped>
.dashboard {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
}

.dashboard-title {
  font-size: 2rem;
  font-weight: bold;
  color: #2c5282;
  margin-bottom: 1.5rem;
}

.card-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
