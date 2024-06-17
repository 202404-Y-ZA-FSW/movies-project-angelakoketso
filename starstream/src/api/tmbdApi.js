import axiosClient from "./axioaClient";

export const category = {
    movie : 'movie'
}

export const movieType = {
    upcoming : 'upcoming',
    popular : 'popular',
    top_rated : 'top_rated',
    now_playing : 'now_playing'
}

const tmdbApi = {
    getMovies : (type , params) => {
        const url = 'movies/' + movieType[type]
        return axiosClient.get(url, params)
    },
    getVideos : (cate , id) => {
        const url =category[cate] + '/' + id + 'videos'
        return axiosClient.get(url, {params: {}})
    },
    search : (cate , params) => {
        const url ='search' + category[cate];
        return axiosClient.get(url, params)
    },
    search : (cate , params) => {
        const url ='search' + category[cate];
        return axiosClient.get(url, params)
    },
    detail : (cate ,id ,params) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, params)
    },
    credits : (cate ,id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}})
    },
    similar : (cate ,id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, {params: {}})
    }
}

export default tmdbApi;