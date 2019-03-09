import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import {dash} from 'views/'
Vue.use(Router)

export default new Router({
  routes: [
    {
    	path  : '/',
		name  : 'resume',
		hidden: true,
		redirect(to){
			return '/dash/dashBoard'
		}
    },
    {
		path     : '/dash/dashBoard',
		name     : 'dashboard',
		hidden   : true,
		component: dash.dashBoard,
	},
  ]
})
