export const USER_ROLES = {
  MANAGER: "Quản lý thư viện",
  LIBRARIAN: "Thủ thư",
};

const AUTH_STORAGE_KEY = "library-current-user";

const demoAccounts = [
  {
    username: "admin",
    password: "123456",
    name: "Nguyễn Văn A",
    role: USER_ROLES.MANAGER,
  },
  {
    username: "thuthu",
    password: "123456",
    name: "Trần Thị B",
    role: USER_ROLES.LIBRARIAN,
  },
];

export function getCurrentUser() {
  try {
    const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  } catch {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

export function login(username, password) {
  const account = demoAccounts.find(
    (item) => item.username === username.trim() && item.password === password
  );

  if (!account) {
    return null;
  }

  const user = {
    username: account.username,
    name: account.name,
    role: account.role,
  };
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  return user;
}

export function logout() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}

export function isManager(user = getCurrentUser()) {
  return user?.role === USER_ROLES.MANAGER;
}
