<template>
  <div id="container"></div>
</template>

<script setup>
import { shallowRef } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader'

let map = shallowRef(null)

const initMap = () => {
  AMapLoader.load({
    key: '947c763bfcd33cd68ba6211e117725db', // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [''] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      map = new AMap.Map('container', {
        //设置地图容器id
        viewMode: '3D', //是否为3D地图模式
        zoom: 5, //初始化地图级别
        center: [105.602725, 37.076636] //初始化地图中心点位置
      })
    })
    .catch((e) => {
      console.log(e)
    })
}
initMap()
</script>

<style lang="scss" scoped>
#container {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 800px;
}
</style>
