<template>
    <footer id="footer">
        <div class="top">
            <div class="navigation-bar-wrapper">
                <ul class="navigation-bar">
                    <li>用户协议</li>
                    <li>隐私政策</li>
                    <li>侵权投诉指引</li>
                    <li>社区规范</li>
                </ul>
            </div>
        </div>
        <div class="bottom">
            <div class="info">
                <span>
                    <a target="_blank" href="//beian.miit.gov.cn" title="胶片网_浙ICP备" >浙ICP备2022035828号-1 Copyright © 2022-2023</a>
                </span>
                <span>地址：浙江省舟山市临城街道海大南路1号</span>
                <span>联系电话：13567950783</span>
            </div>
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
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        padding-bottom: 30px;
        font-family: PingFang SC,Helvetica,Arial,sans-serif;
        padding-top: 50px;
        .top{
            text-align: center;
            .navigation-bar-wrapper{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin: 0 0 20px;
                .navigation-bar{
                    padding: 0 60px 0 45px;
                    width: 1080px;
                    margin: 0;
                    padding: 0 80px 0 60px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    list-style-type: none;
                    position: relative;
                    li{
                        cursor: pointer;
                    }
                }
            }
        }
        .bottom{
            width: 100%;
            height: 70px;
            .info{
                color: #999;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: 70px;
                font-size: 12px;
                line-height: 18px;
                font-weight: 400;
            }
        }
    }
</style>