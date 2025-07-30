<template>
  <div class="employee-list">
    <h2>Employee List</h2>

    <div class="actions">
      <input type="text" v-model="search" placeholder="Search by name or ID..." />
      <button @click="deleteSelected" :disabled="!selected.length">Delete Selected</button>
      <button @click="exportCSV" :disabled="!filteredEmployees.length">Export CSV</button>
    </div>

    <table>
      <thead>
        <tr>
          <th><input type="checkbox" @change="toggleAll" :checked="allSelected" /></th>
          <th>Name</th>
          <th>ID</th>
          <th>Department</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emp in paginatedEmployees" :key="emp.id">
          <td><input type="checkbox" v-model="selected" :value="emp.id" /></td>
          <td>{{ emp.name }}</td>
          <td>{{ emp.employeeId }}</td>
          <td>{{ emp.department }}</td>
          <td>{{ emp.email }}</td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <button @click="page--" :disabled="page === 1">Prev</button>
      <span>Page {{ page }} of {{ totalPages }}</span>
      <button @click="page++" :disabled="page === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeList',
  data() {
    return {
      employees: [
        { id: 1, name: 'Alice Smith', employeeId: 'E001', department: 'HR', email: 'alice@company.com' },
        { id: 2, name: 'Bob Johnson', employeeId: 'E002', department: 'Engineering', email: 'bob@company.com' },
        { id: 3, name: 'Carol Davis', employeeId: 'E003', department: 'Sales', email: 'carol@company.com' },
        { id: 4, name: 'David Wilson', employeeId: 'E004', department: 'Marketing', email: 'david@company.com' }
        // Add more as needed
      ],
      search: '',
      page: 1,
      perPage: 3,
      selected: []
    };
  },
  computed: {
    filteredEmployees() {
      const query = this.search.toLowerCase();
      return this.employees.filter(
        e =>
          e.name.toLowerCase().includes(query) ||
          e.employeeId.toLowerCase().includes(query)
      );
    },
    paginatedEmployees() {
      const start = (this.page - 1) * this.perPage;
      return this.filteredEmployees.slice(start, start + this.perPage);
    },
    totalPages() {
      return Math.ceil(this.filteredEmployees.length / this.perPage);
    },
    allSelected() {
      return (
        this.paginatedEmployees.length > 0 &&
        this.paginatedEmployees.every(e => this.selected.includes(e.id))
      );
    }
  },
  methods: {
    toggleAll(e) {
      const ids = this.paginatedEmployees.map(e => e.id);
      this.selected = e.target.checked
        ? [...new Set([...this.selected, ...ids])]
        : this.selected.filter(id => !ids.includes(id));
    },
    deleteSelected() {
      this.employees = this.employees.filter(e => !this.selected.includes(e.id));
      this.selected = [];
    },
    exportCSV() {
      const rows = [['ID', 'Name', 'Employee ID', 'Department', 'Email']];
      this.filteredEmployees.forEach(e =>
        rows.push([e.id, e.name, e.employeeId, e.department, e.email])
      );

      const csv = rows.map(row => row.join(',')).join('\n');
      const blob = new Blob([csv], { type: 'text/csv' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'employees.csv';
      link.click();
    }
  }
};
</script>

<style scoped>
.employee-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  gap: 1rem;
}

input[type="text"] {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  background: #2c5282;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

th, td {
  border: 1px solid #eee;
  padding: 0.5rem;
  text-align: left;
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
