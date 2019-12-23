import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/cmm/Layout.vue'
import Join2 from '@/components/member/Join2.vue'
import Join from '@/components/member/Join.vue'
import Login2 from '@/components/member/Login2.vue'
import Login from '@/components/member/Login.vue'
import Admin from '@/components/member/Admin.vue'
import MyPage from '@/components/member/MyPage.vue'
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
		{path:'/admin', name:'admin', component: Admin},
		{path:'/mypage', name:'mypage', component: MyPage},
		{path:'/join2', name:'join2', component: Join2},
		{path:'/login', name:'login', component: Login},
		{path:'/login2', name:'login2', component: Login2},
		{path:'/list', name:'list', component: List},
		{path:'/search', name:'search', component: Search},
		{path:'/update', name:'update', component: Update},
		{path:'/write', name:'write', component: Write},
		{path:'/remove', name:'remove', component: Remove}
		
	]	
})

