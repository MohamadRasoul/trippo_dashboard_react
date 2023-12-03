import axios from "../../app/axios";

const API_URL = "/auth/admin/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.data.admin));
    localStorage.setItem("token", JSON.stringify(response.data.data.token));
  }

  return response.admin;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.data.admin));
    localStorage.setItem("token", JSON.stringify(response.data.data.token));
  }

  return response.admin;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
