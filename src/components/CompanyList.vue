<template>
  <div class="company-list">
    <h2>Company List</h2>

    <div class="actions">
      <input type="text" v-model="search" placeholder="Search by name/code..." />
      <button @click="deleteSelected" :disabled="!selected.length">Delete Selected</button>
      <button @click="exportCSV" :disabled="!filteredCompanies.length">Export CSV</button>
    </div>

    <table>
      <thead>
        <tr>
          <th><input type="checkbox" @change="toggleAll" :checked="allSelected" /></th>
          <th>Name</th>
          <th>Code</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="company in paginatedCompanies" :key="company.id">
          <td><input type="checkbox" v-model="selected" :value="company.id" /></td>
          <td>{{ company.name }}</td>
          <td>{{ company.code }}</td>
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
  name: 'CompanyList',
  data() {
    return {
      companies: [
        { id: 1, name: 'Alpha Corp', code: 'ALPHA' },
        { id: 2, name: 'Beta Inc', code: 'BETA' },
        { id: 3, name: 'Gamma Ltd', code: 'GAMMA' },
        { id: 4, name: 'Delta LLC', code: 'DELTA' },
        { id: 5, name: 'Zeta Group', code: 'ZETA' }
      ],
      search: '',
      page: 1,
      perPage: 3,
      selected: []
    };
  },
  computed: {
    filteredCompanies() {
      const query = this.search.toLowerCase();
      return this.companies.filter(
        c => c.name.toLowerCase().includes(query) || c.code.toLowerCase().includes(query)
      );
    },
    paginatedCompanies() {
      const start = (this.page - 1) * this.perPage;
      return this.filteredCompanies.slice(start, start + this.perPage);
    },
    totalPages() {
      return Math.ceil(this.filteredCompanies.length / this.perPage);
    },
    allSelected() {
      return (
        this.paginatedCompanies.length > 0 &&
        this.paginatedCompanies.every(c => this.selected.includes(c.id))
      );
    }
  },
  methods: {
    toggleAll(e) {
      const ids = this.paginatedCompanies.map(c => c.id);
      this.selected = e.target.checked ? [...new Set([...this.selected, ...ids])] : this.selected.filter(id => !ids.includes(id));
    },
    deleteSelected() {
      this.companies = this.companies.filter(c => !this.selected.includes(c.id));
      this.selected = [];
    },
    exportCSV() {
      const rows = [['ID', 'Name', 'Code']];
      this.filteredCompanies.forEach(c => rows.push([c.id, c.name, c.code]));

      const csv = rows.map(row => row.join(',')).join('\n');
      const blob = new Blob([csv], { type: 'text/csv' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'companies.csv';
      link.click();
    }
  }
};
</script>

<style scoped>
.company-list {
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
