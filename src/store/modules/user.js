import { reqCaptchaCode, reqUserInfo } from '@/api'

const state = () => ({
    captchaCode: '',
    token: localStorage.getItem('token'),
    userInfo: {
        _id: null,
        username:'',
        avatar:'http://img.filmgallery.cn/head-portrait/default-account-img.png'
    },
    otherUserInfo:{}
})

const getters = {

}

const actions = {
    // 获取注册验证码
    async getCaptchCode({ commit }) {
        let result = await reqCaptchaCode();
        commit("GETCAPTCHACODE", result)
    },
    // 获取用户信息
    async getUserInfo({ commit }, username) {
        let res = await reqUserInfo(username);
        if (res.code == 200) {
            localStorage.setItem('userInfo',res.data._id);
            commit("GETUSERINFO", res.data);
        }        
    },
    // 当想查看别人首页时，获取别人的首页信息
    async getOtherUserInfo({ commit }, username){
        let res = await reqUserInfo(username);
        if(res.code == 200){
            commit("GETOTHERUSERINFO", res.data)
        }
    }
}

const mutations = {
    GETCAPTCHACODE(state, data) {
        state.captchaCode = data;
    },
    GETUSERINFO(state, data) {
        state.userInfo = data;
    },
    GETOTHERUSERINFO(state, data) {
        state.otherUserInfo = data;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}