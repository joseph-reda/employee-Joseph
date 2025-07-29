<template>
  <div class="employee-container">
    <div class="employee-card">
      <h2 class="employee-title">Employee List</h2>
      <button class="add-button" @click="addEmployee">Add Employee</button>

      <table class="employee-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(employee, index) in employees" :key="employee.id">
            <td>{{ index + 1 }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.position }}</td>
            <td>{{ employee.department }}</td>
            <td>
              <button class="edit-button" @click="editEmployee(employee)">Edit</button>
              <button class="delete-button" @click="deleteEmployee(employee.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployeeList",
  data() {
    return {
      employees: [
        { id: 1, name: "Ali Youssef", position: "Frontend Developer", department: "Engineering" },
        { id: 2, name: "Mona Khaled", position: "HR Manager", department: "Human Resources" },
        { id: 3, name: "Ibrahim Saleh", position: "Accountant", department: "Finance" }
      ]
    };
  },
  methods: {
    addEmployee() {
      alert("Add Employee clicked");
    },
    editEmployee(emp) {
      alert(`Edit Employee: ${emp.name}`);
    },
    deleteEmployee(id) {
      this.employees = this.employees.filter(e => e.id !== id);
    }
  }
};
</script>

<style scoped>
.employee-container {
  padding: 2rem;
  background-color: #f4f5f7;
  min-height: 100vh;
}

.employee-card {
  max-width: 1000px;
  margin: auto;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
}

.employee-title {
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

.employee-table {
  width: 100%;
  border-collapse: collapse;
}

.employee-table th,
.employee-table td {
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
