import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import {dash,table,sum} from 'views/'
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
	{
		path     : '/table/list',
		name     : 'table',
		hidden   : true,
		component: table,
	},{
		path     : '/sum',
		name     : 'sum',
		hidden   : true,
		component: sum,
	},
  ]
})
