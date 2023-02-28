import { reqAllCards } from '@/api'

const state = () => ({
    allCards: [],
})

const getters = {

}

const actions = {
    async getAllCards({commit}){
        let result = await reqAllCards();
        if(result.code == 200){
            localStorage.setItem("allCards", result.data)
            commit("GETALLCARDS", result.data);
        }
    },
}

const mutations = {
    GETALLCARDS(state, data){
        state.allCards = data;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}