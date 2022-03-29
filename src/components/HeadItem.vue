<template>
  <header>
    <div class="data data-two">
      {{data}}
    </div>
    <div class="title">
      {{ title }}
    </div>
    <div class="data data-one">{{curDate}}</div>
 </header>
</template>

<script>
import dayjs from 'dayjs'
var curDate = dayjs().format('YYYY-MM-DD HH:mm ')
setInterval(() => {
  curDate = dayjs().format('YYYY-MM-DD HH:mm ')
  console.log(1)
}, 15000)

const data = curDate.slice(0, 8).split('-').join('')
export default {
  props: {
    title: {
      type: String,
      default: '社保缴费分析'
    }
  },
  name: 'headItem',
  data () {
    return {
      curDate,
      data
    }
  }
}
</script>

<style lang='scss' scoped>
header {
  height: 62px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: url("../assets/header.png") no-repeat center center;
  div {
    width: 140px;
    height: 28px;
    // background-color: blanchedalmond;
  }
  .title {
    width: 180px;
    height: 40px;
    font-family: SourceHanSansSC-Bold;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    // line-height: 40px;
    margin-bottom: 10px;
    letter-spacing: 2px;
    color: #fefefe;
    background-color: "";
  }
  .data {
    font-family: PingFang-SC-Bold;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 40px;
    letter-spacing: 0px;
    color: #ffffff;
    border: 1px solid #1851ab;

  }
  .data-one {
    letter-spacing: 0px;
    color: #1b67de;
    border: none;
    margin-right: 40px;
  }
  .data-two{
    margin-left: 30px;
    display: flex;
    align-items: center;
     background: url("../assets/jiao2.png") no-repeat  right center ;
  }
}
</style>
