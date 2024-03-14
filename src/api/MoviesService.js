import axios from 'axios';

const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzEyNjdlMmZmODhjOGUzN2EzYzNiNzMwMTkzOTE4OSIsInN1YiI6IjY1ZjM3ZTNhMjkzODM1MDE0YTI3YTI1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.saSYm1kCF1bz5tvsL07sMzHXGFPGxLr4nBSqUqQM3U4';
const BASE_URL = 'https://api.themoviedb.org/3';
const url = path => `${BASE_URL}/${path}`;
const axiosDefault = () => axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;

export class MoviesService {
    static getMoviesPopular() {
        axiosDefault();
        return axios(url('movie/popular?language=pt-BR'));
    }
}