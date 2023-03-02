isRef():检查是否是 ref 对象
isReactive():检查是否是 reactive 对象
isReadonly():检查是否是 readonly 对象
isProxy():检查是否是 proxy 对象
Teleport：将其插槽内容渲染到 DOM 中的另一个位置，比如在多层组件嵌套做弹窗时，使用<teleport to="body"></teleport>，这样 teleport 里的内容就会转移到 body 下第一层

vue3 相对 vue2 作出的 api 调整：
Vue.conflg.xxx => app.conflg.xxx
Vue.conflg.productionTip => 移除
Vue.component => app.component
Vue.directive => app.directive
Vue.mixin => app.mixin
Vue.use => app.use
Vue.prototype => app.conflg.globalProperties

不明白可以上https://juejin.cn/post/7030992475271495711#comment看讲解
