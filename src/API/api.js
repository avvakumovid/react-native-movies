import axios from 'axios';

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
        console.log(id)
        return id
    }

    static async Login(username, password) {
        try {
            const response = await axios.post('http://localhost:5000/auth/login', {
                username,
                password
            })
            return response.data
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    static async Auth() {
        try {
            const response = await axios.get('http://localhost:5000/auth/auth', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            return response.data
        } catch (e) {
            localStorage.removeItem('token')
        }
    }

    static async Registartion(username, password) {
        try {
            const response = await axios.post('http://localhost:5000/auth/registration', {
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
            const response = await axios.get('http://localhost:5000/api/usermovie',
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
        let response = await axios.post('http://localhost:5000/api/user/watchlist', {
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
        let response = await axios.delete(`http://localhost:5000/api/user/delete?userId=${userId}&movieId=${movieId}`)
        return response
    }
}