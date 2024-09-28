import { fetchRepos } from './githubService';

// Función para obtener los repositorios de GitHub
export const getGithubRepos = async () => {
    try {
        const repos = await fetchRepos();
        return repos;
    } catch (error) {
        console.error('Error al obtener los repositorios:', error);
        throw new Error('Error al obtener los repositorios de GitHub');
    }
};


