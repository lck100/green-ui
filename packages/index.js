// 整个包的入口
/**
 * 1.将所有的组件和字体图标引入到index.js文件中
 */
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Switch from './switch'
import Tag from './tag.vue'
import './fonts/iconfont.css'

/**
 * 2.声明conpoments数组，将组件全部放到这个数组中
 */
const components = [
  Button,
  Dialog,
  Input,
  Switch,
  Tag
]

/**
 * 3.定义install方法，在Vue中注册所有的组件
 */
const install = function (Vue) {
  // 注册所有的组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

/**
 * 4.判断是否直接引入了文件，如果引入了，则不需要调用Vue.use()方法
 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/**
 * 5.导出install对象
 */
export default {
  install
}
