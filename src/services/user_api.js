import axios from "axios";

const userApi = axios.create({
  baseURL: "http://localhost:8080/api/v1/user",
});


// creamos un nuevo usuario en la base de datos, relacionado con el rol de estudiante
export const createStudent = async (user) => {
  try {
    const response = await userApi.post("/register/estudiante", user);
    return response.data;
  } catch (error) { // si hay un error, lo mostramos en consola
    console.error("Error al crear");
  }
};


// usuario de tipo tutor
export const createTutor = async (user) => {
  try {
    const response = await userApi.post("/register/tutor", user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

