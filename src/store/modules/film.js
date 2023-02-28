import { reqAllFilms, reqFilmInfo } from '@/api'

const state = () => ({
    filmList: [],
    filmInfo:{},
    allFilms:[],
})

const getters = {

}

const actions = {
    async getFilmList({ commit }) {
        let result = await reqAllFilms();
        if (result.code == 200) {
            commit("GETFILMLIST", result.data);
        }
    },
    async getFilmInfo({commit}, filmId){
        let result = await reqFilmInfo(filmId);
        if(result.code == 200){
            commit("GETFILMINFO", result.data);
        }
    },
}

const mutations = {
    GETFILMLIST(state, data) {
        state.filmList = data;
    },
    GETFILMINFO(state, data){
        state.filmInfo = data;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}