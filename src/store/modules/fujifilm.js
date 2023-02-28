import { reqSimulations } from '@/api'

const state = () => ({
    Simulations: [],
})

const getters = {

}

const actions = {
    async getSimulations({commit}){
        let result = await reqSimulations();
        if(result.code == 200){
            commit("GETSIMULATIONS", result.data);
        }
    },
}

const mutations = {
    GETSIMULATIONS(state, data){
        state.Simulations = data;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}