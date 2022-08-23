import { makeAPICall } from "../helpers/apiCall";

export const login = async (username, password) => {
  const { data, error } = makeAPICall.post("admin/login", {
    username,
    password,
  });

  if (data) {
    sessionStorage.setItem("token", data);
    return data
  } else {
    return {}
  }
};

export const logout = () => {
    sessionStorage.removeItem('internistikaLoginToken')
    window.location.reload()
}