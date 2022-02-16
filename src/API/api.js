import axios from 'axios';
import {
    addMoviesByGenreId, fetchGenre,
    fetchMovieById,
    fetchMoviesByGenreId
} from '../store/reducers/actionCreators/movieActionCreators';

export class Api {
    static async FetchMovieTrailer(id) {
        // let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=1486f93506979fa9f8385b5200d028ee&language=en-US`;
        let response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=1486f93506979fa9f8385b5200d028ee&language=en-US`);
        if (response) {
            let data = response.data;
            let treilerId =
                data.results.find((e) => e.name.includes('Official Trailer'))
                    ?.key ?? data.results[0]?.key;

            return treilerId;
        } else {
            console.log('Ошибка HTTP:');
            return ''
        }
    }

    static async Test(id) {
        return id
    }

    static async Login(username, password) {
        try {
            const response = await axios.post('https://avvakumov-movies-backend.herokuapp.com/auth/login', {
                username,
                password
            })
            return response.data
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    static async Auth(token) {
        try {
            const response = await axios.get('https://avvakumov-movies-backend.herokuapp.com/auth/auth', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data
        } catch (e) {

        }
    }

    static async Registration(username, password) {
        try {
            const response = await axios.post('https://avvakumov-movies-backend.herokuapp.com/auth/registration', {
                username,
                password
            })
            alert('Пользователь создан')
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    static async FetchWatchList(token){
        try {
            const response = await axios.get('https://avvakumov-movies-backend.herokuapp.com/api/usermovie',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            return response
        }catch (e) {
            console.log(e)
        }

    }

    static async AddMovieToWatchList(userId, movieId){
        if(!userId){
            return 'Пользователь не найден'
        }
        let response = await axios.post('https://avvakumov-movies-backend.herokuapp.com/api/user/watchlist', {
            userId,
            movieId
        })
        alert(response.data.message)
        return response
    }

    static async DeleteMovieFromWatchList(userId, movieId){
        if(!userId){
            return 'Пользователь не найден'
        }
        let response = await axios.delete(`https://avvakumov-movies-backend.herokuapp.com/api/user/delete?userId=${userId}&movieId=${movieId}`)
        return response
    }

    static async FetchMovieById(id){
        try {
            const movie =  await axios.get(`https://avvakumov-movies-backend.herokuapp.com/api/movie/${id}`)
            return movie
        }catch (e) {
            console.log(e.data.message)
        }
    }

    static async AddMoviesByGenreId(page, id){
        try {
            const movies =  await axios.get('https://avvakumov-movies-backend.herokuapp.com/api/movies', {
                params: {
                    page: page,
                    genreId: id
                }})
            return movies
        }catch (e) {
            console.log(e.data.message)
        }
    }
    static async FetchMoviesByGenreId(page, id){
        try {
            const movies = await axios.get('https://avvakumov-movies-backend.herokuapp.com/api/movies', {
                params: {
                    page: page,
                    genreId: id
                }
            })
            return movies
        }catch (e) {
            console.log(e.data.message)
        }
    }
static async FetchGenres(){
        try {
            const genres = await axios.get('https://avvakumov-movies-backend.herokuapp.com/api/genres')
            return genres
        }catch (e) {
            console.log(e.data.message)
        }
    }

}