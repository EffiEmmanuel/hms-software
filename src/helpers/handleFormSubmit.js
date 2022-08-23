import Swal from "sweetalert2";
import axios from "axios";

const handleFormSubmit = async (endpoint, data, title, text) => {
  let response;
  // API call to the server
  await axios
    .post(`${process.env.REACT_APP_BASE_URL}/${endpoint}`, {
      data,
    })
    .then((res) => {
      Swal.fire({
        title: title,
        text: text,
        timer: 2000,
        icon: "success",
      });

      response = true;
    })
    .catch((err) => {
      Swal.fire({
        title: "Failed",
        text: "An error occured. Please try again.",
        timer: 2000,
        icon: "error",
      });

      response = false;
    });

  return response;
};

export default handleFormSubmit;
