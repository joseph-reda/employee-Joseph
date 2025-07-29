<template>
  <div class="company-container">
    <div class="company-card">
      <h2 class="company-title">Company List</h2>
      <button class="add-button" @click="addCompany">Add Company</button>
      <table class="company-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Company Name</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(company, index) in companies" :key="company.id">
            <td>{{ index + 1 }}</td>
            <td>{{ company.name }}</td>
            <td>{{ company.location }}</td>
            <td>
              <button class="edit-button" @click="editCompany(company)">Edit</button>
              <button class="delete-button" @click="deleteCompany(company.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyList",
  data() {
    return {
      companies: [
        { id: 1, name: "OpenAI", location: "San Francisco" },
        { id: 2, name: "Google", location: "Mountain View" },
        { id: 3, name: "Amazon", location: "Seattle" },
      ]
    };
  },
  methods: {
    addCompany() {
      alert("Add Company clicked");
    },
    editCompany(company) {
      alert(`Edit Company: ${company.name}`);
    },
    deleteCompany(id) {
      this.companies = this.companies.filter(c => c.id !== id);
    }
  }
};
</script>

<style scoped>
.company-container {
  padding: 2rem;
  background-color: #f0f4f8;
  min-height: 100vh;
}

.company-card {
  max-width: 900px;
  margin: auto;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}

.company-title {
  font-size: 24px;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.add-button {
  padding: 0.5rem 1rem;
  background-color: #38b2ac;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 1rem;
}

.add-button:hover {
  background-color: #319795;
}

.company-table {
  width: 100%;
  border-collapse: collapse;
}

.company-table th,
.company-table td {
  padding: 0.75rem;
  border-bottom: 1px solid #ccc;
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
