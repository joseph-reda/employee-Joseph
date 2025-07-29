<template>
  <div class="department-container">
    <div class="department-card">
      <h2 class="department-title">Department List</h2>
      <button class="add-button" @click="addDepartment">Add Department</button>

      <table class="department-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Department Name</th>
            <th>Manager</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(dept, index) in departments" :key="dept.id">
            <td>{{ index + 1 }}</td>
            <td>{{ dept.name }}</td>
            <td>{{ dept.manager }}</td>
            <td>
              <button class="edit-button" @click="editDepartment(dept)">Edit</button>
              <button class="delete-button" @click="deleteDepartment(dept.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DepartmentList",
  data() {
    return {
      departments: [
        { id: 1, name: "Engineering", manager: "John Smith" },
        { id: 2, name: "Human Resources", manager: "Jane Doe" },
        { id: 3, name: "Finance", manager: "Michael Scott" },
      ]
    };
  },
  methods: {
    addDepartment() {
      alert("Add Department clicked");
    },
    editDepartment(dept) {
      alert(`Edit Department: ${dept.name}`);
    },
    deleteDepartment(id) {
      this.departments = this.departments.filter(d => d.id !== id);
    }
  }
};
</script>

<style scoped>
.department-container {
  padding: 2rem;
  background-color: #f9fafb;
  min-height: 100vh;
}

.department-card {
  max-width: 900px;
  margin: auto;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
}

.department-title {
  font-size: 24px;
  margin-bottom: 1rem;
  color: #1a202c;
}

.add-button {
  padding: 0.5rem 1rem;
  background-color: #38a169;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 1rem;
}

.add-button:hover {
  background-color: #2f855a;
}

.department-table {
  width: 100%;
  border-collapse: collapse;
}

.department-table th,
.department-table td {
  padding: 0.75rem;
  border-bottom: 1px solid #e2e8f0;
  text-align: left;
}

.edit-button,
.delete-button {
  padding: 0.25rem 0.75rem;
  margin-right: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.edit-button {
  background-color: #4299e1;
  color: white;
}

.edit-button:hover {
  background-color: #3182ce;
}

.delete-button {
  background-color: #e53e3e;
  color: white;
}

.delete-button:hover {
  background-color: #c53030;
}
</style>
