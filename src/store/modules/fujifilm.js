import { reqSimulations, reqGetRecipes } from '@/api'

const state = () => ({
    simulations: [],    // 所有的胶片模拟
    recipes: []          // 一个胶片模拟对应的全部信息以及相关以此胶片模拟设置出来的配方(recipes)
})

const getters = {
    sortSimById: (state) => {
        const data = state.simulations.sort((a, b) => {
            const nameA = a.simulation_id.split("", 1);
            const nameB = b.simulation_id.split("", 1);
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1
            }
            return 0;
        });
        return data;
    }
}

const actions = {
    async getSimulations({ commit }) {
        let result = await reqSimulations();
        if (result.code == 200) {
            commit("GETSIMULATIONS", result.data);
        }
    },
    async getRecipes({ commit }, sim_id) {
        let result = await reqGetRecipes(sim_id);
        if (result.code == 200) {
            localStorage.setItem('recipes', JSON.stringify(result.data))
            commit("GETRECIPES", result.data)
        }
    }
}

const mutations = {
    GETSIMULATIONS(state, data) {
        state.simulations = data;
    },
    GETRECIPES(state, data) {
        state.recipes = data;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}