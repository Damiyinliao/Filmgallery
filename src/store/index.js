import { createStore } from "vuex";
import { reqFilmList } from "@/api";
export default createStore({
    // 数据
    state:{
        filmList:[]
    },
    //
    mutations:{
        GETFILMLIST(state, data){
            state.filmList = data
        }
    },
    actions:{
        async getFilmList({commit}){
            let result = await reqFilmList();
            if(result.code == 200){
                commit("GETFILMLIST", result.data);
            }
        }
    },
    //
    getters:{},
})