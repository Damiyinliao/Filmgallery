import { reqAllCards } from '@/api'

const state = () => ({
    allCards: [],
})

const getters = {
    // 在allCards中找到匹配的数据
    getOneCardInfo: (state) => (id) => {
        return state.allCards.find(item => item._id == id)
    }
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
    messArray(state){
        state.allCards = state.allCards.sort(()=> Math.random() - 0.5)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}