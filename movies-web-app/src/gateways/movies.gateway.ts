import Axios, { AxiosInstance } from 'axios';
import { IMovies } from './movies.interfaces';

export class MoviesGateway {
    private axios: AxiosInstance;
    constructor() {
        this.axios = Axios.create({
            baseURL: 'https://api.themoviedb.org/3/movie/'
        })
    }

    public async getFavouriteMovies(category: "popular" | "top_rated" | "upcoming" | "search"): Promise<IMovies[]> {
        if (category === 'search') {
            return [];
        }
        const response = await this.axios.get(category, {
            params: {
                api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
                language: 'es',
                page: 1
            }
        });
        return response.data.results;
    }

    public async getMoviesByname(query?: string): Promise<IMovies[]> {
        if (!query) {
            return [];
        }
        const response = await this.axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
                language: 'es',
                page: 1,
                query
            }
        });
        debugger;
        return response.data.results;
    }

    public async getImageAndNameMovieByid(id: number): Promise<{ name: string, imagePath: string }> {
        if (id === 0) return { name: '', imagePath: '' }
        const response = await this.axios.get(id.toString(), {
            params: {
                api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
                language: 'es',
            }
        });
        return {
            name: response.data.title,
            imagePath: response.data.backdrop_path
        }
    }
}