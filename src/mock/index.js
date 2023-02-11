// 引入mockjs模块
import Mock from "mockjs";

//把JSON数据引入进来
import filmList from './filmList.json'
import fujifilmList from './fujifilmList'
//mock数据
// 胶片类型
Mock.mock("/mock/filmList", {code: 200, data: filmList});
// 胶片模拟类型
Mock.mock("/mock/fujifilmList", {code: 200, data: fujifilmList})