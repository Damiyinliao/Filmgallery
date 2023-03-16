//获取文件url
export function createObjectURL(blob) {
    if (window.URL) {
        return window.URL.createObjectURL(blob)
    } else if (window.webkitURL) {
        return window.webkitURL.createObjectURL(blob)
    } else {
        return ''
    }
}
let temp_id = 100

// 提交评论事件
export const submit = ({ content, parentId, files, finish }) => {
    console.log('提交评论: ' + content, parentId, files)

    /**
     * 上传文件后端返回图片访问地址，格式以', '为分割; 如:  '/static/img/program.gif, /static/img/normal.webp'
     */
    let contentImg = files.map((e) => createObjectURL(e)).join(', ')

    let comment = {
        id: String((temp_id += 1)),
        parentId: parentId,
        uid: config.user.id,
        address: '来自江苏',
        content: content,
        likes: 0,
        createTime: '1分钟前',
        contentImg: contentImg,
        user: {
            username: config.user.username,
            avatar: config.user.avatar,
            level: 6,
            homeLink: `/${(temp_id += 1)}`
        },
        reply: null
    }
    setTimeout(() => {
        finish(comment)
        Toast({ message: '评论成功!', type: 'info' })
    }, 200)
}

// 删除评论
export const remove = (id, finish) => {
    setTimeout(() => {
        finish()
        alert(`删除成功: ${id}`)
    }, 200)
}

//举报用户
export const report = (id, finish) => {
    console.log(id)
    setTimeout(() => {
        finish()
        alert(`举报成功: ${id}`)
    }, 200)
}

// 点赞按钮事件
export const like = (id, finish) => {
    console.log(id)
    setTimeout(() => {
        finish()
    }, 200)
}
import emoji from "@/utils/emoji";
//评论信息数据
export const commentData = {
    user: {
        id: '1',
        username: 'user',
        avatar: 'http://img.filmgallery.cn/avatar/62ce6f5d8441eeb0f4b79fb3.webp',
        // 评论id数组 建议:存储方式用户id和文章id和评论id组成关系,根据用户id和文章id来获取对应点赞评论id,然后加入到数组中返回
        likeIds: ['1', '2', '11']
    },
    emoji: emoji,
    comments: [
        {
            id: '1',
            parentId: null,
            uid: '1',
            address: '来自舟山',
            content:
                '拍的好好看哇！没得有点东西',
            likes: 2,
            contentImg: '/static/img/normal.webp',
            createTime: '1分钟前',
            user: {
                username: '菜园小饼',
                avatar: 'http://img.filmgallery.cn/avatar/62ce6f5d8441eeb0f4b79fb3.webp',
                level: 6,
                homeLink: ''
            }
        },
        {
            id: '2',
            parentId: null,
            uid: '2',
            address: '来自宁波',
            content: '还是真胶片的味道正，喜欢！[脱单]',
            likes: 11,
            createTime: '1天前',
            user: {
                username: '果粒',
                avatar: 'http://img.filmgallery.cn/avatar/guoli.webp',
                level: 1,
                homeLink: '/2'
            },
            reply: {
                total: 2,
                list: [
                    {
                        id: '21',
                        parentId: '2',
                        uid: '3',
                        address: '来自杭州',
                        content: '大佬，期待你的作品',
                        likes: 3,
                        createTime: '1分钟前',
                        user: {
                            username: 'Bikabo~',
                            avatar:
                                'http://img.filmgallery.cn/avatar/bikabo.webp',
                            level: 5,
                            homeLink: '/21'
                        }
                    },
                    {
                        id: '22',
                        parentId: '2',
                        uid: '4',
                        content:
                            '回复 <span style="color: var(--u-color-success-dark-2);">@Bikabo~:</span> +1+1[委屈]',
                        address: '来自湖州',
                        likes: 9,
                        createTime: '1天前',
                        user: {
                            username: '魔法哪吒',
                            avatar:
                                'http://img.filmgallery.cn/avatar/mofa.webp',
                            level: 3,
                            homeLink: '/22'
                        }
                    }
                ]
            }
        }

    ]
}

// commentData.comments = [
//     {
//         id: '1',
//         parentId: null,
//         uid: '1',
//         address: '来自上海',
//         content:
//             '缘生缘灭，缘起缘落，我在看别人的故事，别人何尝不是在看我的故事?别人在演绎人生，我又何尝不是在这场戏里?谁的眼神沧桑了谁?我的眼神，只是沧桑了自己[喝酒]',
//         likes: 2,
//         contentImg: '/static/img/normal.webp',
//         createTime: '1分钟前',
//         user: {
//             username: '落🤍尘',
//             avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
//             level: 6,
//             homeLink: '/1'
//         }
//     },
//     {
//         id: '2',
//         parentId: null,
//         uid: '2',
//         address: '来自苏州',
//         content: '知道在学校为什么感觉这么困吗？因为学校，是梦开始的地方。[脱单doge]',
//         likes: 11,
//         createTime: '1天前',
//         user: {
//             username: '悟二空',
//             avatar: 'https://static.juzicon.com/user/avatar-bf22291e-ea5c-4280-850d-88bc288fcf5d-220408002256-ZBQQ.jpeg',
//             level: 1,
//             homeLink: '/2'
//         },
//         reply: {
//             total: 2,
//             list: [
//                 {
//                     id: '21',
//                     parentId: '2',
//                     uid: '3',
//                     address: '来自重庆',
//                     content: '说的对，所以，综上所述，上课睡觉不怪我呀💤',
//                     likes: 3,
//                     createTime: '1分钟前',
//                     user: {
//                         username: '别扰我清梦*ぁ',
//                         avatar:
//                             'https://static.juzicon.com/user/avatar-8b6206c1-b28f-4636-8952-d8d9edec975d-191001105631-MDTM.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
//                         level: 5,
//                         homeLink: '/21'
//                     }
//                 },
//                 {
//                     id: '22',
//                     parentId: '2',
//                     uid: '4',
//                     content:
//                         '回复 <span style="color: var(--u-color-success-dark-2);">@别扰我清梦*ぁ:</span> 看完打了一个哈切。。。会传染。。。[委屈]',
//                     address: '来自广州',
//                     likes: 9,
//                     createTime: '1天前',
//                     user: {
//                         username: 'Blizzard',
//                         avatar:
//                             'https://static.juzicon.com/user/avatar-3cb86a0c-08e7-4305-9ac6-34e0cf4937cc-180320123405-BCV6.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
//                         level: 3,
//                         homeLink: '/22'
//                     }
//                 }
//             ]
//         }
//     }
// ]
