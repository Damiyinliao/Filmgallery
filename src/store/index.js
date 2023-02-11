import { createStore } from "vuex";
import { reqFilmList, reqFujifilmList } from "@/api";
export default createStore({
    // 数据
    state:{
        filmList: [],
        fujifilmList: []
    },
    //
    mutations:{
        GETFILMLIST(state, data){
            state.filmList = data;
        },
        GETFUJIFILMLIST(state, data){
            state.fujifilmList = data;
        }
    },
    actions:{
        async getFilmList({commit}){
            let result = await reqFilmList();
            if(result.code == 200){
                commit("GETFILMLIST", result.data);
            }
        },
        async getFujifilmList({commit}){
            let result = await reqFujifilmList();
            if(result.code == 200){
                commit("GETFUJIFILMLIST", result.data);
            }
        }
    },
    //
    getters:{},
})