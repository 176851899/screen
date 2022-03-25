<template>
  <div class="container" v-if="obj">
    <head-item></head-item>
    <nav>
      <list-item
        v-for="(item, index) in obj"
        :key="index"
        :title="item.title"
        :url="item.url"
        :desc="item.desc"
        :des="item.des"
      ></list-item>
    </nav>
    <main>
      <chart-item width="420px" style="margin-right: 15px">
        <template #item>
          <div id="main" style="width: 420px; height: 440px" ref="ma"></div>
        </template>
      </chart-item>
      <chart-item
        title="各险种缴费明细"
        width="960px"
        style="margin-right: 15px"
        :show="false"
      >
      <template #nav>
        <ul>
  <li>5252</li>
  <li>852</li>
  <li>52</li>
  <li>52</li>
  <li>552</li>
        </ul>
      </template>

      </chart-item>
      <chart-item width="420px" title="各险种缴费补缴/退缴情况" :show="false"></chart-item>
      <chart-item width="600px" title="缴费趋势分析" option="全部"></chart-item>
       <chart-item width="600px" title="征缴趋势分析" :show="false" style="margin-left:11px;margin-right:11px;" ></chart-item>
        <chart-item width="600px" title="补缴/退缴趋势分析" option="全部"></chart-item>
    </main>
  </div>
</template>
<script>
import { item } from '../utils/echars'
import HeadItem from '../components/HeadItem.vue'
import ListItem from '../components/ListItem.vue'
import ChartItem from '../components/ChartItem.vue'
export default {
  name: 'home',
  data () {
    return {
      obj: [
        {
          url: 'img/01_70.7cab7527.png',
          title: '个人缴费金额',
          desc: '34.56',
          des: '+2.5%'
        },
        {
          url: 'img/01_75.df301d87.png',
          title: '单位缴费金额',
          desc: '86.56',
          des: '-0.2%'
        },
        {
          url: 'img/01_7.3990e9c4.png',
          title: '征缴总金额',
          desc: '234.5',
          des: '+2.5%'
        },
        {
          url: 'img/01_75.df301d87.png',
          title: '缴费总人数',
          desc: '34.56',
          des: '+2.5%'
        },
        {
          url: 'img/01_44.ac8d50f5.png',
          title: '征缴率',
          desc: '96',
          des: '+2.5%'
        },
        {
          url: 'img/01_62.7bb5b58e.png',
          title: '补缴金额',
          desc: '243.6',
          des: '+2.5%'
        },
        {
          url: '',
          title: '退费金额金额',
          desc: '34.56',
          des: '+2.5%'
        }
      ]
    }
  },
  components: {
    HeadItem,
    ListItem,
    ChartItem
  },
  mounted () {
    item(this.$refs.ma)
  }
}
</script>

<style lang='scss' scoped>
.container {
  width: 1920px;
  height: 1080px;
  background-color: #10171f;
  nav {
    width: 1840px;
    height: 100px;
    border: solid 1px #2564ae;
    margin: auto;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }
  main {
    width: 1840px;
    height: 829px;
    overflow: hidden;
    margin: auto;
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    ul{
      width: 300px;
      display: flex;
      li{

      }
    }
  }
}
</style>
