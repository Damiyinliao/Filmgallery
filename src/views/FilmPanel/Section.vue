<template>
  <section>
    <div class="photo-wrapper card">
      <div class="photo-title">
        <img src="./images/screenshot.png">
        <span>Example Photos</span>
      </div>
      <div class="photo-grid">
        <div v-for="item in props.card_id">
          <SCard :card_id="item.id" @click="toInfoCard(item.id)"></SCard>
        </div>
      </div>
    </div>
    <div class="review-wrapper card">
      <div class="review-title">
        <img src="./images/speech-bubble-with-dots.png">
        <span>用户评论</span>
      </div>
      <div class="review-submit">
        <p>What do you think about the <span style="font-weight: 700;">Fuji C200</span>?</p>
        <p style="font-size: 0.8em; opacity: 0.8;"> 🖼️ Want to submit a photo?</p>
      </div>
      <div class="review-box">
        <div class="comment-box">
          <Comment :config="config" :show-size="2" @submit="submit" @like="like" @remove="remove" @report="report">
          </Comment>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue"
import { useRoute, useRouter } from 'vue-router'
import emoji from "@/utils/emoji";
import Toast from "@/components/Toast";
const router = useRouter();
const props = defineProps(['card_id']);

const toInfoCard = (card_id) => {
  router.push({
    name: 'card2',
    params: { card_id }
  })
}
const config = reactive({
  user: {
    id: '1',
    username: 'user',
    avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
    // 评论id数组 建议:存储方式用户id和文章id和评论id组成关系,根据用户id和文章id来获取对应点赞评论id,然后加入到数组中返回
    likeIds: ['1', '2', '11']
  },
  emoji: emoji,
  comments: [
    // {
    //   id: '1',
    //   parentId: null,
    //   uid: '1',
    //   address: '来自上海',
    //   content:
    //     '缘生缘灭，缘起缘落，我在看别人的故事，别人何尝不是在看我的故事?别人在演绎人生，我又何尝不是在这场戏里?谁的眼神沧桑了谁?我的眼神，只是沧桑了自己[喝酒]',
    //   likes: 2,
    //   contentImg: '/static/img/program.gif, /static/img/normal.webp',
    //   createTime: '1分钟前',
    //   user: {
    //     username: '落🤍尘',
    //     avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
    //     level: 6,
    //     homeLink: '/1'
    //   }
    // },
    // {
    //   id: '2',
    //   parentId: null,
    //   uid: '2',
    //   address: '来自苏州',
    //   content: '知道在学校为什么感觉这么困吗？因为学校，是梦开始的地方。[脱单doge]',
    //   likes: 11,
    //   createTime: '1天前',
    //   user: {
    //     username: '悟二空',
    //     avatar: 'https://static.juzicon.com/user/avatar-bf22291e-ea5c-4280-850d-88bc288fcf5d-220408002256-ZBQQ.jpeg',
    //     level: 1,
    //     homeLink: '/2'
    //   },
    //   reply: {
    //     total: 2,
    //     list: [
    //       {
    //         id: '21',
    //         parentId: '2',
    //         uid: '3',
    //         address: '来自重庆',
    //         content: '说的对，所以，综上所述，上课睡觉不怪我呀💤',
    //         likes: 3,
    //         createTime: '1分钟前',
    //         user: {
    //           username: '别扰我清梦*ぁ',
    //           avatar:
    //             'https://static.juzicon.com/user/avatar-8b6206c1-b28f-4636-8952-d8d9edec975d-191001105631-MDTM.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
    //           level: 5,
    //           homeLink: '/21'
    //         }
    //       },
    //       {
    //         id: '22',
    //         parentId: '2',
    //         uid: '4',
    //         content:
    //           '回复 <span style="color: var(--u-color-success-dark-2);">@别扰我清梦*ぁ:</span> 看完打了一个哈切。。。会传染。。。[委屈]',
    //         address: '来自广州',
    //         likes: 9,
    //         createTime: '1天前',
    //         user: {
    //           username: 'Blizzard',
    //           avatar:
    //             'https://static.juzicon.com/user/avatar-3cb86a0c-08e7-4305-9ac6-34e0cf4937cc-180320123405-BCV6.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
    //           level: 3,
    //           homeLink: '/22'
    //         }
    //       }
    //     ]
    //   }
    // }
  ]
})
//获取文件url
function createObjectURL(blob) {
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
const submit = ({ content, parentId, files, finish }) => {
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
const remove = (id, finish) => {
  setTimeout(() => {
    finish()
    alert(`删除成功: ${id}`)
  }, 200)
}

//举报用户
const report = (id, finish) => {
  console.log(id)
  setTimeout(() => {
    finish()
    alert(`举报成功: ${id}`)
  }, 200)
}

// 点赞按钮事件
const like = (id, finish) => {
  console.log(id)
  setTimeout(() => {
    finish()
  }, 200)
}

config.comments = [
  {
    id: '1',
    parentId: null,
    uid: '1',
    address: '来自上海',
    content:
      '缘生缘灭，缘起缘落，我在看别人的故事，别人何尝不是在看我的故事?别人在演绎人生，我又何尝不是在这场戏里?谁的眼神沧桑了谁?我的眼神，只是沧桑了自己[喝酒]',
    likes: 2,
    contentImg: '/static/img/normal.webp',
    createTime: '1分钟前',
    user: {
      username: '落🤍尘',
      avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
      level: 6,
      homeLink: '/1'
    }
  },
  {
    id: '2',
    parentId: null,
    uid: '2',
    address: '来自苏州',
    content: '知道在学校为什么感觉这么困吗？因为学校，是梦开始的地方。[脱单doge]',
    likes: 11,
    createTime: '1天前',
    user: {
      username: '悟二空',
      avatar: 'https://static.juzicon.com/user/avatar-bf22291e-ea5c-4280-850d-88bc288fcf5d-220408002256-ZBQQ.jpeg',
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
          address: '来自重庆',
          content: '说的对，所以，综上所述，上课睡觉不怪我呀💤',
          likes: 3,
          createTime: '1分钟前',
          user: {
            username: '别扰我清梦*ぁ',
            avatar:
              'https://static.juzicon.com/user/avatar-8b6206c1-b28f-4636-8952-d8d9edec975d-191001105631-MDTM.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
            level: 5,
            homeLink: '/21'
          }
        },
        {
          id: '22',
          parentId: '2',
          uid: '4',
          content:
            '回复 <span style="color: var(--u-color-success-dark-2);">@别扰我清梦*ぁ:</span> 看完打了一个哈切。。。会传染。。。[委屈]',
          address: '来自广州',
          likes: 9,
          createTime: '1天前',
          user: {
            username: 'Blizzard',
            avatar:
              'https://static.juzicon.com/user/avatar-3cb86a0c-08e7-4305-9ac6-34e0cf4937cc-180320123405-BCV6.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
            level: 3,
            homeLink: '/22'
          }
        }
      ]
    }
  }
]
</script>

<style lang="less" scoped>
section {
  // height: 700px;
  // width: 670px;
  overflow: auto;

  .photo-wrapper {
    margin-top: 0px;
    padding-bottom: 25px;
    height: auto;
    // width: 670px;
    padding: 30px 20px 15px 30px;
    margin-bottom: 20px;
    color: #141414;
    font-weight: 400;

    .photo-title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #141414;
      font-weight: 400;

      img {
        width: 23px;
        margin-right: 10px;
        opacity: 0.8;
      }

      span {
        font-size: 1.2em;
      }
    }

    .photo-grid {
      margin-top: 20px;
      display: grid;
      grid-column-gap: 50px;
      grid-row-gap: 30px;
      grid-template-columns: repeat(3, 1fr);
      justify-content: space-between;
    }
  }

  .review-wrapper {
    margin-top: 30px;
    height: auto;
    padding: 30px 20px 15px 30px;
    margin-bottom: 80px;
    color: #141414;
    font-weight: 400;
    width: 800px;
    .review-title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 15px;

      img {
        width: 23px;
        margin-right: 10px;
        opacity: 0.8;
      }

      span {
        font-size: 1.2em;
      }
    }

    .review-submit {
      font-weight: 600;
      text-align: center;
      font-size: 1.1em;
    }

    .review-box {
      margin: auto;
      max-width: 100%;

      .comment-box {
        border-radius: 20px;
        box-shadow: 0px 2px 10px 1px rgb(0 52 102 / 11%);
        border: 0px solid #aaaaaa;
        background-color: #ffffff;
        color: #111111;
        margin: auto;
        margin-top: 20px;
      }
    }
  }
}
</style>
