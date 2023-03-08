import login from './index'
import { createGlobalNode, removeGlobalNode } from "@/utils/dom";
// 函数式调用
export function renderLogin( options ){
    // options是带给login的数据
    const {vnode, div} = createGlobalNode(login, options);
    return {vnode, div}
}
export default renderLogin