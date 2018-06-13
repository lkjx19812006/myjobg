import Vue from 'vue'
// UI框架
import YDUI from 'vue-ydui' /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
// UI框架相关
import 'vue-ydui/dist/ydui.base.css'
import 'vue-ydui/dist/ydui.rem.css'
import '@/css/animate.css'
import '@/css/loaders.scss'
import '@/css/common.scss'

//自定义指令集
import anyiDirective from '@/libs/anyiDirective'

//微信标题
import VueWechatTitle from 'vue-wechat-title';
Vue.use(anyiDirective)
Vue.use(VueWechatTitle)
Vue.use(YDUI)


