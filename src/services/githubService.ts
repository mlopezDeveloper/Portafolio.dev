import axios from 'axios';

// Acceder a la variable de entorno usando import.meta.env
const token = import.meta.env.VITE_GITHUB_TOKEN || ''; // Asegúrate de que la variable en .env se llame VITE_GITHUB_TOKEN
console.log('Token de GitHub:', token);
const githubApi = axios.create({
    baseURL: 'https://api.github.com/users/mlopezDeveloper/repos',
    headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json'
    }
});

// Manejo de errores global
githubApi.interceptors.response.use(
    response => response, // Si la respuesta es exitosa, devuélvela tal cual
    error => {
        console.error('Error en la petición a la API:', error.response?.status || error.message);
        return Promise.reject(error);
    }
);

// Definimos y exportamos la función fetchRepos
export const fetchRepos = async () => {
    try {
        const response = await githubApi.get('');
        return response.data;
    } catch (error) {
        console.error('Error al obtener los repositorios:', error);
        throw error; // Devolvemos el error para que el componente lo maneje
    }
};
