import axios from "axios";

const userApi = axios.create({
  baseURL: "http://localhost:8080/api/v1/user/",
});

// Crear un nuevo usuario en la base de datos, relacionado con la tabla de estudiante
export const createStudent = async (user) => {
  try {
    const response = await userApi.post("register/estudiante", user);
    return response.data;
  } catch (error) {
    console.error("Error al crear", error);
    throw error; // throw error para que el componente pueda manejar el error
    // throw es una palabra clave que se usa para lanzar una excepción.
  }
};

// Login de usuario
export const loginStudent =  (user) => {


  return userApi.post("auth/", user)
  
};


// usuario de tipo tutor
export const createTutor = async (user) => {
  try {
    const response = await userApi.post("register/tutor", user);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
