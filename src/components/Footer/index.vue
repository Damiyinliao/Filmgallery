<template>
    <footer id="footer">
        <div class="main">
            <div class="word">
                <h2>film community</h2>
                <ul>
                    <li><img src="./images/film.png"> </li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="resources">
                <h2>资源</h2>
                <ul>
                    <li>物品</li>
                    <li>价格</li>
                    <li>登录</li>
                    <li>注册</li>
                </ul>
            </div>
            <div class="legal">
                <h2>法律</h2>
                <ul>
                    <li>Terms of use</li>
                    <li>Privacy policy</li>
                    <li>Legal notice</li>
                </ul>
            </div>
            <div class="links">
                <h2>联系</h2>
                <ul>
                    <li>微信</li>
                    <li>QQ</li>
                    <li>微博</li>
                </ul>
            </div>
            <div class="us">
                <h2>Subscribe to our newsletter</h2>
                <input type="text" class="">
                <img src="./images/filled-sent.png" alt="">
            </div>
        </div>
        <div class="copyright">
            Copyright © 2022-2023
            <span>|</span>
            胶片网
            <span>|</span>
            胶片社区网站
            <span>|</span>
            分享关于胶片的知识
            <span>|</span>
            浙ICP备2022035828号-1
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'

}
</script>

<style scoped lang="less">
    #footer{
        margin-top: 50px;
        height: 220px;
        padding-bottom: 50px;
        width: 100%;
        bottom: 0;
        opacity: 1;
        font-size: 10px;
        background-color: #f8f7fa;
        .main{
            padding-top: 30px;
            display: flex;
            justify-content: space-around;
            padding-bottom: 30px;
            h2{
                padding: 5px;
            }
            li{
                padding: 2px;
            }
            .word{
                height: 20px;
                line-height: 20px;
                img{
                    width: 20px;
                    height: 20px;
                }
                
            }
            .resource{

            }
            .legal{

            }
            .links{

            }
            .us{
                input{
                    width: 80%;
                    height: 38px;
                    border: 1px solid rgba(162,194,223,.6);
                    border-radius: 5px;
                    text-align: center;
                    font-size: 1.3em;
                    box-shadow: 0 2px 9px rgb(0 0 0 / 10%);
                    opacity: .8;
                    transition: transform .2s ease;
                }
                img{
                    width: 20%;
                }
            }
        }
        .copyright{
            width: 100%;
            height: 20px;
            border-top: 1px solid black;
            text-align: center;
            padding: 5px;
        }

    }
</style>