import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index"
// import Yes from "../components/Yes"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    // {
    //   path: '/yes',
    //   name: 'Yes',
    //   component: Yes
    // }
  ]
})
