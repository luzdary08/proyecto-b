import Swal from "sweetalert2";
import axios from "axios";

export function setAlert (title, text, type = 'success'){
    Swal.fire({
        icon: type,
        title:title,
        text:text,
        confirmButtonText: 'Cerrar',
        timerProgressBar: true,
        showCloseButton: true,
    });
};


export const API = axios.create({
    baseURL:'http://localhost:3000'
})

API.interceptors.request.use(request => {
    const token = JSON.parse(localStorage.getItem('userDetails'))
    if (token) {
      request.headers['Authorization'] = `Bearer ${token.token}`;
    }
    return request;
  });