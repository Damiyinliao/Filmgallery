import { createStore } from "vuex";
import { reqFilmList, reqFujifilmList, reqNoteList, reqFilmInfo } from "@/api";
export default createStore({
    // 数据
    state:{
        filmList: [],
        fujifilmList: [],
        noteList: [],
        filmInfo:{}
    },
    //
    mutations:{
        GETFILMLIST(state, data){
            state.filmList = data;
        },
        GETFUJIFILMLIST(state, data){
            state.fujifilmList = data;
        },
        GETNOTELIST(state, data){
            state.noteList = data;
        },
        GETFILMINFO(state, data){
            state.filmInfo = data;
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
        },
        async getNoteList({commit}){
            let result = await reqNoteList();
            if(result.code == 200){
                commit("GETNOTELIST", result.data);
            }
        },
        async getFilmInfo({commit}, filmId){
            let result = await reqFilmInfo(filmId);
            if(result.code == 200){
                commit("GETFILMINFO", result.result);
            }
        }
    },
    //
    getters:{},
})