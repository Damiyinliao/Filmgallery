import { createGlobalNode, removeGlobalNode } from "@/utils/dom";
import toast from './index.vue'
//函数式调用
export function Toast(options){
    let duration = options.duration;
    if(!options.message) return;
    options.duration = duration ? duration : 1000
    const {vnode, div} = createGlobalNode(toast, options);

    setTimeout(()=>{
        removeGlobalNode(div)
    }, options.duration + 300);

    return vnode
}

export default Toast