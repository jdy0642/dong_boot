import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/cmm/Layout.vue'
import Join from '@/components/member/Join.vue'
import Login from '@/components/member/Login.vue'
import List from '@/components/board/List.vue'
import Remove from '@/components/board/Remove.vue'
import Search from '@/components/board/Search.vue'
import Update from '@/components/board/Update.vue'
import Write from '@/components/board/Write.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{path:'/layout', name:'layout', component: Layout},
		{path:'/join', name:'join', component: Join},
		{path:'/login', name:'login', component: Login},
		{path:'/list', name:'list', component: List},
		{path:'/search', name:'search', component: Search},
		{path:'/update', name:'update', component: Update},
		{path:'/write', name:'write', component: Write},
		{path:'/remove', name:'remove', component: Remove}
		
	]	
})

