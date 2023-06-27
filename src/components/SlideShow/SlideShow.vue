<template>
  <div
    class="main-header"
    style="
      background: url('https://api.biuioi.com/random-picture/index.php') center
        center / cover no-repeat rgb(34, 34, 34);
    "
  >
    <div class="vertical">
      <div class="main" style="display: flex">
        <div class="text">
          <h1 class="page-title" id="homeTopTitle">
            <span>BelovedVscode</span>
          </h1>
          <h2 class="page-description" style="display: -webkit-box">
            Vue3+TypeScript+Navite+Node++Redis+aliyunOss---LYC
          </h2>
          <h3 class="page-author" id="hitokotoAuthor" style="display: block">
            A Boy who likes front-end development
          </h3>
          <h3 class="page-author" id="hitokotoAuthor" style="display: block">
            There's still glory on the other side
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
@media only screen and (max-width: 720px) {
  .main-header {
    height: 40vh;
    margin-bottom: 0.9375rem /* 15/16 */;
    max-height: 40vh;
  }
}

@media only screen and (max-width: 960px) {
  .main-header {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    height: 50vh;
    max-height: 50vh;
    min-height: 15rem /* 240/16 */;
  }
}

@media only screen and (max-width: 1200px) {
  .main-header {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    height: 60vh;
    max-height: 60vh;
    min-height: 15rem /* 240/16 */;
  }
}

.main-header {
  background-size: cover;
  background: #333;
  box-shadow: 0 1px 2px #969696b3;
  display: flex;
  height: 100vh;
  left: 0;
  max-height: 100vh;
  overflow: hidden;
  text-align: center;
  top: 0;
  width: 100%;
}

@media only screen and (max-width: 720px) {
  .page-description {
    -webkit-line-clamp: 2;
    font-size: 1.6rem;
  }
}

@media only screen and (max-width: 1200px) {
  .page-description {
    -webkit-line-clamp: 4;
    font-size: 2rem;
    line-height: 2rem;
  }
}

@media only screen and (max-width: 1200px) {
  .page-author {
    font-size: 1.3rem !important;
    line-height: 1.3em;
  }
}

@media only screen and (max-width: 720px) {
  .page-author {
    font-size: 1rem !important;
  }
}

.page-author,
.page-description {
  color: #fffc;
  display: none;
  font-weight: 400;
  letter-spacing: 0.01rem;
  margin: 0;
  text-shadow: 0 0.1875rem /* 3/16 */ 0.375rem /* 6/16 */ #00000080;
  font-family: Long Cang, cursive;
  animation: fade-in-down 0.9s both;
  animation-delay: 0.3s;
}

.page-title {
  font-size: 5rem;
  font-size: 4rem;
  letter-spacing: -1px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  mix-blend-mode: screen;
  color: #fff;
  font-weight: 200;
  text-shadow: 0 3px 6px #0000004d;
}
</style>
