import Swal from "sweetalert2";
import axios from "axios";

const handleFormSubmit = async (endpoint, data) => {
  let error, responseData, response;
  // API call to the server
  await axios
    .post(`${process.env.REACT_APP_BASE_URL}/${endpoint}`, {
      data,
    })
    .then((res) => {
      responseData = res;
    })
    .catch((err) => {
      error = err;
    });

  response = {
    error: error,
    responseData: responseData
  }

  return response;
};

export default handleFormSubmit;
