import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入字体图标
import './assets/fonts/iconfont.css'

import GButton from './components/button.vue'
import GDialog from './components/dialog.vue'
import GInput from './components/input.vue'
import GSwitch from './components/switch.vue'
import GTag from './components/tag.vue'

Vue.config.productionTip = false

Vue.component(GButton.name, GButton)
Vue.component(GDialog.name, GDialog)
Vue.component(GInput.name, GInput)
Vue.component(GSwitch.name, GSwitch)
Vue.component(GTag.name, GTag)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
