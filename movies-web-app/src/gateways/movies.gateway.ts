import Axios, { AxiosInstance } from 'axios';
import { IMovies } from './movies.interfaces';

export class MoviesGateway {
    private axios: AxiosInstance;
    constructor() {
        this.axios = Axios.create({
            baseURL: 'https://api.themoviedb.org/3/'
        })
    }

    public async getFavouriteMovies(): Promise<IMovies> {
        const response = await this.axios.get('movie/popular', {
            params: {
                api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
                language: 'es',
                page: 20
            }
        });
        return response.data;
    }
}