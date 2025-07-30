let users = [
  {
    email: "admin@company.com",
    password: "admin123",
    role: "admin",
    name: "Admin User",
    photo: "",
    activity: [],
  },
  {
    email: "manager@company.com",
    password: "manager123",
    role: "manager",
    name: "Manager User",
    photo: "",
    activity: [],
  },
  {
    email: "employee@company.com",
    password: "employee123",
    role: "employee",
    name: "Employee User",
    photo: "",
    activity: [],
  },
];

export default {
  login(email, password) {
    let user = users.find((u) => u.email === email);

    if (!user) {
      user = {
        email,
        password,
        role: "employee",
        name: email.split("@")[0],
        photo: "",
        activity: [],
      };
      users.push(user);
    } else if (user.password !== password) {
      return null;
    }

    const token = Math.random().toString(36).substr(2);
    const session = {
      token,
      user: {
        email: user.email,
        role: user.role,
        name: user.name,
        photo: user.photo,
      },
      loginAt: new Date().toISOString(),
    };

    localStorage.setItem("session", JSON.stringify(session));
    user.activity.push({ type: "login", time: session.loginAt });
    return session;
  },

  logout() {
    localStorage.removeItem("session");
  },

  getSession() {
    return JSON.parse(localStorage.getItem("session"));
  },

  isAuthenticated() {
    return !!localStorage.getItem("session");
  },

  getUser() {
    const session = this.getSession();
    return session ? session.user : null;
  },

  updateProfile(updates) {
    const session = this.getSession();
    if (!session) return;
    const user = users.find((u) => u.email === session.user.email);
    if (user) {
      Object.assign(user, updates);
      user.activity.push({
        type: "profile-update",
        time: new Date().toISOString(),
      });
      session.user = { ...session.user, ...updates };
      localStorage.setItem("session", JSON.stringify(session));
    }
  },

  getActivity(email) {
    const user = users.find((u) => u.email === email);
    return user ? user.activity : [];
  },
};
