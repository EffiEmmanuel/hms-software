import { makeAPICall } from "../helpers/apiCall";

export const login = async (username, password) => {
  const { data, error } = makeAPICall.post("admin/login", {
    username,
    password,
  });

  if (data) {
    localStorage.setItem("internistikaLoginToken", data);
    return data;
  } else {
    return {};
  }
};

export const logout = () => {
  localStorage.removeItem("internistikaLoginToken");
  window.location.reload();
};
