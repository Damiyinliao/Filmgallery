//当前这个模块：API进行统一管理
import requests from './request';
import mockRequests from "./mockRequest";

// 获取胶片类型列表
export const reqFilmList = () => mockRequests.get("/filmList");
// 获取胶片模拟列表
export const reqFujifilmList = () => mockRequests.get("/fujifilmList");
// 获取笔记内容
export const reqNoteList = () => mockRequests.get("/noteList");

// 注册获取验证码
export const reqCaptchaCode = () => requests({ url: "/user/captcha", method: 'get' });
// 用户注册
export const reqUserRegister = (data) => requests({ url: "/user/register", data, method: 'post' });
// 用户登录
export const reqUserLogin = (data) => requests({ url: "/auth/login", data, method: 'post' })
// 拿到用户信息
export const reqUserInfo = (username) => requests({ url: `/user/login/${username}`, method: 'get' })

// 请求获取所有Cards
export const reqAllCards = () => requests({ url: "/card", method: 'get' })
// 请求单个Card信息
export const reqCardInfo = (id) => requests({ url: `/card/${id}`, method: 'get' })
// 获取全部胶片内容
export const reqAllFilms = () => requests({ url: "/films", method: 'get' })
// 获取film的详细内容
export const reqFilmInfo = (filmid) => requests({ url: `/films/${filmid}`, method: 'get' });
// 获取所有胶片模拟
export const reqSimulations = () => requests({ url: "/simulation", method: 'get' });
// 获取所有Camera相机型号数据
export const reqAllCameras = () => requests({ url: "/camera", method: 'get' });
// 查询某一个相机数据
export const reqCameraInfo = (name) => requests({ url: `/camera/${name}`, method: 'get' });
// 获取某一个胶片模拟所对应的所有Recipes
export const reqGetRecipes = (simid) => requests({ url: `/recipe/${simid}`, method: 'get' })