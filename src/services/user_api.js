import axios from "axios";

const userApi = axios.create({
  baseURL: "http://localhost:8081/api/v1/user",
});

const userApiProduction = axios.create({
  baseURL: "https://backend-platorma-tutorias-en-linea.onrender.com",
});


// creamos un nuevo usuario en la base de datos, relacionado con el rol de estudiante
export const createStudent = async (user) => {
  try {
    const response = await userApi.post("/register/estudiante", user);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
