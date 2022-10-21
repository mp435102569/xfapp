import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/icon.less'


import { Button, NavBar, Icon, Form, Field, Tabbar, TabbarItem, Swipe, SwipeItem, Grid, GridItem } from 'vant';
import 'vant/lib/index.css';

Vue.use(Button);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Form);
Vue.use(Field);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
