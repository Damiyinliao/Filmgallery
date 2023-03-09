import login from './login.vue'
import { createGlobalNode, removeGlobalNode } from "@/utils/dom";
// 函数式调用
export function RenderLogin() {
    const { vnode, div } = createGlobalNode(login);
    return { vnode, div }
}
export default RenderLogin