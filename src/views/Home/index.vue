<template>
  <div id="main">
    <div class="intro">
        <div class="intro-left">
            <!-- <h1>探索胶片魅力</h1> -->
        </div>
        <div class="intro-right">
            <!-- <h1>探索胶片魅力</h1> -->
        </div>
    </div>
    <div class="explore">
        <div class="title">
            <h2>探索</h2>
            <a href="">更多</a>
        </div>
        <ul class="explore-item">
            <li>
                <img src="./images/fujic2001.jpg" alt="">
                <div class="describe">
                    <h1>悠闲的午后</h1>
                    <p>吃完饭一起晒太阳</p>
                </div>
            </li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    <div class="news">
        <div class="title">
            <h2>Film News</h2>
            <a href="#">更多</a>
        </div>
        <ul class="news-item">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    <div class="learn">
        <div class="learn-img"><img src="" alt=""></div>
        <div class="learn-right"></div>
    </div>
    <div class="skill">
        <div class="title">
            <h2>技能</h2>
            <a href="">更多</a>
        </div>
        <ul class="skill-item">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Home',
    setup() {

    }
}
</script>

<style scoped lang="less">
    #main{
        margin-top: 70px;
        width: 100%;
        // height: 1000px;
        // border: 1px solid black;
        box-sizing: border-box;
        .intro{
            width: 100%;
            height: 600px;
            //background: #E6AE8C;  /* fallback for old browsers */
            //background: -webkit-linear-gradient(to right, #A8CECF, #E6AE8C);  /* Chrome 10-25, Safari 5.1-6 */
            //background: linear-gradient(to right, #A8CECF, #E6AE8C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            display: flex;
            justify-content: space-between;
            padding: 0 80px;
            background-image: url(./images/shotfilm.jpg);
            .intro-left{

            }
            .intro-right{

            }
        }
        .explore{
            margin-top: 50px;
            padding-left: 80px;
            padding-right: 80px;
            .title{
                display: flex;
                justify-content: space-between;
            }
            .explore-item{
                margin-top: 20px;
                display: flex;
                justify-content: space-between;
                li{
                    border-radius: 10px;
                    // background-color: #E6AE8C;
                    background-color: #FFF;
                    height: 300px;
                    width: 300px;
                    overflow: hidden;
                    img{
                        width: 300px;
                    }
                    .describe{
                        h1{
                            padding: 10px 0 0 10px;
                        }
                        P{
                            font-size: 14px;
                            color: #a6a6a6;
                            padding-top: 5px;
                            padding-left: 10px;
                        }
                    }
                }
            }
           
        }
        .news{
            padding-left: 80px;
            padding-right: 80px;
            margin-top: 50px;
            .title{
                display: flex;
                justify-content: space-between;
            }
            .news-item{
                margin-top: 20px;
                display: flex;
                justify-content: space-between;
                li{
                    border-radius: 10px;
                    background-color: #E6AE8C;
                    height: 300px;
                    width: 300px;
                }
            }
        }
        .learn{
            .learn-img{
                img{
                    
                }
            }
            .learn-right{

            }
        }
        .skill{
            padding-left: 80px;
            padding-right: 80px;
            margin-top: 50px;
            .title{
                display: flex;
                justify-content: space-between;
            }
            .skill-item{
                margin-top: 20px;
                display: flex;
                justify-content: space-between;
                li{
                    border-radius: 10px;
                    background-color: #E6AE8C;
                    height: 300px;
                    width: 300px;
                }
            }
        }
    }
</style>