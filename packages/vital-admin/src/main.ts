/*
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-08-18 16:57:42
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-08-22 09:33:50
 * @FilePath: \vital-admin\packages\vital-admin\src\main.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import 'virtual:uno.css'
import '@whr2349/vital-material/style:style.css'
// import '@/assets/style.css'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
