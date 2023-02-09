// 引入mockjs模块
import Mock from "mockjs";

//把JSON数据引入进来
import filmList from './filmList.json'

//mock数据

Mock.mock("/mock/filmList", {code: 200, data: filmList})