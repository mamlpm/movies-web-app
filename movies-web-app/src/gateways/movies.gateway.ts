import Axios, { AxiosInstance } from 'axios';
import { IMovies } from './movies.interfaces';

export class MoviesGateway {
    private axios: AxiosInstance;
    constructor() {
        this.axios = Axios.create({
            baseURL: 'https://api.themoviedb.org/3/movie/'
        })
    }

    public async getFavouriteMovies(category: "popular" | "top_rated" | "upcoming"): Promise<IMovies[]> {
        const response = await this.axios.get(category, {
            params: {
                api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
                language: 'es',
                page: 1
            }
        });
        return response.data.results;
    }

    public async getMoviesByname(query: string): Promise<IMovies[]> {
        const response = await this.axios.get('', {
            params: {
                api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
                language: 'es',
                page: 1,
                query
            }
        });
        return response.data.results;
    }
}