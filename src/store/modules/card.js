import { reqCardInfo } from "@/api"

const state = () => ({
    cardInfo:{}
})

const getters = {}

const actions = {
    async getCardInfo({commit}, id) {
        let result = await reqCardInfo(id);
        // console.log(result);
        if(result.code == 200){
            commit("GETCARDINFO", result.data)
        }
    } 
}
const mutations = {
    GETCARDINFO(state, data){
        state.cardInfo = data;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}