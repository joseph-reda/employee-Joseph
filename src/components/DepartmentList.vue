<template>
  <div class="department-list">
    <h2>Department List</h2>

    <div class="actions">
      <input type="text" v-model="search" placeholder="Search by name/code..." />
      <button @click="deleteSelected" :disabled="!selected.length">Delete Selected</button>
      <button @click="exportCSV" :disabled="!filteredDepartments.length">Export CSV</button>
    </div>

    <table>
      <thead>
        <tr>
          <th><input type="checkbox" @change="toggleAll" :checked="allSelected" /></th>
          <th>Name</th>
          <th>Code</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dept in paginatedDepartments" :key="dept.id">
          <td><input type="checkbox" v-model="selected" :value="dept.id" /></td>
          <td>{{ dept.name }}</td>
          <td>{{ dept.code }}</td>
          <td>{{ dept.company }}</td>
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
  name: 'DepartmentList',
  data() {
    return {
      departments: [
        { id: 1, name: 'HR', code: 'HR01', company: 'Alpha Corp' },
        { id: 2, name: 'Engineering', code: 'ENG01', company: 'Alpha Corp' },
        { id: 3, name: 'Sales', code: 'SAL01', company: 'Beta Inc' },
        { id: 4, name: 'Marketing', code: 'MKT01', company: 'Gamma Ltd' }
      ],
      search: '',
      page: 1,
      perPage: 3,
      selected: []
    };
  },
  computed: {
    filteredDepartments() {
      const query = this.search.toLowerCase();
      return this.departments.filter(
        d => d.name.toLowerCase().includes(query) || d.code.toLowerCase().includes(query)
      );
    },
    paginatedDepartments() {
      const start = (this.page - 1) * this.perPage;
      return this.filteredDepartments.slice(start, start + this.perPage);
    },
    totalPages() {
      return Math.ceil(this.filteredDepartments.length / this.perPage);
    },
    allSelected() {
      return (
        this.paginatedDepartments.length > 0 &&
        this.paginatedDepartments.every(d => this.selected.includes(d.id))
      );
    }
  },
  methods: {
    toggleAll(e) {
      const ids = this.paginatedDepartments.map(d => d.id);
      this.selected = e.target.checked ? [...new Set([...this.selected, ...ids])] : this.selected.filter(id => !ids.includes(id));
    },
    deleteSelected() {
      this.departments = this.departments.filter(d => !this.selected.includes(d.id));
      this.selected = [];
    },
    exportCSV() {
      const rows = [['ID', 'Name', 'Code', 'Company']];
      this.filteredDepartments.forEach(d => rows.push([d.id, d.name, d.code, d.company]));

      const csv = rows.map(row => row.join(',')).join('\n');
      const blob = new Blob([csv], { type: 'text/csv' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'departments.csv';
      link.click();
    }
  }
};
</script>

<style scoped>
.department-list {
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
