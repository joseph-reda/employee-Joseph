<template>
  <div class="project-list">
    <h2 class="title">Projects</h2>

    <div class="actions">
      <input
        v-model="search"
        type="text"
        placeholder="Search by name"
        class="search-input"
      />
      <button class="add-button" @click="addProject">+ Add Project</button>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Manager</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(project, index) in filteredProjects" :key="index">
          <td>{{ project.name }}</td>
          <td>{{ project.manager }}</td>
          <td>{{ project.status }}</td>
          <td>
            <button class="edit" @click="editProject(index)">Edit</button>
            <button class="delete" @click="deleteProject(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ProjectList",
  data() {
    return {
      search: "",
      projects: [
        { name: "Website Redesign", manager: "Alice", status: "In Progress" },
        { name: "Mobile App", manager: "Bob", status: "Completed" }
      ]
    };
  },
  computed: {
    filteredProjects() {
      return this.projects.filter(p =>
        p.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  methods: {
    addProject() {
      const name = prompt("Enter project name:");
      const manager = prompt("Enter manager:");
      const status = prompt("Enter status:");
      if (name && manager && status) {
        this.projects.push({ name, manager, status });
      }
    },
    editProject(index) {
      const project = this.projects[index];
      const name = prompt("Edit project name:", project.name);
      const manager = prompt("Edit manager:", project.manager);
      const status = prompt("Edit status:", project.status);
      if (name && manager && status) {
        this.projects[index] = { name, manager, status };
      }
    },
    deleteProject(index) {
      if (confirm("Are you sure you want to delete this project?")) {
        this.projects.splice(index, 1);
      }
    }
  }
};
</script>

<style scoped>
.project-list {
  background: #fff;
  border-radius: 6px;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.title {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #2c5282;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.search-input {
  padding: 0.4rem 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 60%;
}

.add-button {
  padding: 0.4rem 0.8rem;
  background-color: #2c5282;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #1a365d;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 0.75rem;
  border: 1px solid #ddd;
  text-align: left;
}

.edit,
.delete {
  padding: 0.3rem 0.6rem;
  margin-right: 0.3rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.edit {
  background-color: #3182ce;
  color: white;
}

.edit:hover {
  background-color: #2b6cb0;
}

.delete {
  background-color: #e53e3e;
  color: white;
}

.delete:hover {
  background-color: #c53030;
}
</style>
