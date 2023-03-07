<template>
    <section>
        <div class="photo-wrapper card">
            <div class="photo-title">
                <img src="@/assets/screenshot.png">
                <span>Example Photos</span>
            </div>
            <div class="photo-grid">
                <slot></slot>
            </div>
        </div>
        <div class="review-wrapper card">
            <div class="review-title">
                <img src="@/assets/speech-bubble-with-dots.png">
                <span>用户评论</span>
            </div>
            <div class="review-submit">
                <p>What do you think about the <span style="font-weight: 700;">Fuji C200</span>?</p>
                <p style="font-size: 0.8em; opacity: 0.8;"> 🖼️ Want to submit a photo?</p>
            </div>
            <div class="review-box">
                <div class="comment-box">

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { } from "vue"
</script>

<style lang="less" scoped>
section {
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
