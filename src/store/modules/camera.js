import { reqAllCameras, reqCameraInfo } from "@/api"

const state = () => ({
    cameras:[],
    cameraInfo:{}
})

const getters = {}

const actions = {
    async getAllCameras({commit}) {
        let result = await reqAllCameras();
        if(result.code == 200){
            // localStorage.setItem('cameras', result.data)
            commit("GETCAMERAS", result.data)
        }
    },
    async getCameraInfo({commit}, name) {
        let result = await reqCameraInfo(name);
        if(result.code == 200){
            // localStorage.setItem('cameras', result.data)
            commit("GETINFO", result.data)
        }
    }
}
const mutations = {
    GETCAMERAS(state, data){
        state.cameras = data;
    },
    GETINFO(state, data){
        state.cameraInfo = data;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}