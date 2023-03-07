import { reqCaptchaCode, reqUserInfo } from '@/api'

const state = () => ({
    captchaCode: '',
    token: localStorage.getItem('token'),
    userInfo: {
        _id: null,
        avatar:'http://img.filmgallery.cn/head-portrait/default-account-img.png'
    }
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
            localStorage.setItem('userInfo',JSON.stringify(res.data));
            commit("GETUSERINFO", res.data);
        }
        
    }
    // acquireUserInfo({commit}){
    //     let res = localStorage.getItem('userInfo');
    //     commit("GETUSERINFO", res);
    // }
}

const mutations = {
    GETCAPTCHACODE(state, data) {
        state.captchaCode = data;
    },
    GETUSERINFO(state, data) {
        state.userInfo = data;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}