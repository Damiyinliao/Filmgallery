<template>
    <div id="container">
        <div class="carousel-bg">
            <img src="https://www.filmtypes.com/_nuxt/img/bg_hero-comp.1ef8ec7.jpg" alt="首页图片">
        </div>
        <div class="content">
            <div class="middle-wrapper">
                <div class="big-logo"></div>
                <div class="description">
                    <h2>Filmgallery</h2>
                    <h2>胶片社区网</h2>
                    <div class="explore">
                        <router-link to="/explore">探索胶片世界</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped lang="less">
#container {
    margin-top: 70px;
    width: 100%;
    box-sizing: border-box;

    .carousel-bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        img {
            width: 100%;
        }
    }

    .content {
        width: 100%;
        height: 100%;

        .middle-wrapper {
            top: 50%;
            left: 50%;
            transform: translate(-60%, -60%);
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            position: absolute;

            .big-logo {}

            .description {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                h2 {
                    white-space: nowrap;
                    color: #fff;
                    font-size: 48px;
                    font-weight: 500;
                    margin: 13px 0 0;
                }

                .explore {
                    margin-top: 18px;
                    color: #fff;
                    font-size: 20px;
                    font-weight: 500;
                    padding: 10px;
                    border: 1px solid grey;
                    border-radius: 30px;
                    transition: all .5s ease;
                }

                .explore:hover {
                    transform: scale(1.04);
                    background-color: #fff;
                }
            }
        }
    }
}
</style>