// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

const RouterConfig = {
  routes: routes
};

export const router = new Router(RouterConfig);

