//当前这个模块：API进行统一管理
import requests from './request';
import mockRequests from "./mockRequest";

// 获取胶片类型列表
export const reqFilmList = () => mockRequests.get("/filmList");
// 获取胶片模拟列表
export const reqFujifilmList = () => mockRequests.get("/fujifilmList");
// 获取笔记内容
export const reqNoteList = () => mockRequests.get("/noteList");
// 获取film的详细内容
export const reqFilmInfo = (filmId) => requests({ url:`/films/${filmId}`, method: 'get'});
