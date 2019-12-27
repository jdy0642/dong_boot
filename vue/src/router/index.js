import Vue from 'vue'
import Router from 'vue-router'
import PreSidebar from '@/components/cmm/PreSidebar.vue'
import AdminSidebar from '@/components/cmm/AdminSidebar.vue'
import StudentSidebar from '@/components/cmm/StudentSidebar.vue'
import Layout from '@/components/cmm/Layout.vue'
import Join from '@/components/member/Join.vue'
import Login from '@/components/member/Login.vue'
import Admin from '@/components/member/Admin.vue'
import MyPage from '@/components/member/MyPage.vue'
import FutsalMypage from '@/components/member/FutsalMypage.vue'
import StudentList from '@/components/member/StudentList.vue'
import MyPageUpdate from '@/components/member/MyPageUpdate.vue'
import List from '@/components/board/List.vue'
import Remove from '@/components/board/Remove.vue'
import Search from '@/components/board/Search.vue'
import Update from '@/components/board/Update.vue'
import Write from '@/components/board/Write.vue'
import Futsal from '@/components/contents/Futsal.vue'
import Lol from '@/components/contents/Lol.vue'
import Home2 from '@/components/new/Home2.vue'
import StudentFindSome from '@/components/admin/StudentFindSome.vue'
import StudentFindId from '@/components/admin/StudentFindId.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{path:'/layout', name:'layout', component: Layout},
		{path:'/presidebar', name:'presidebar', component: PreSidebar},
		{path:'/adminsidebar', name:'adminsidebar', component: AdminSidebar},
		{path:'/studentsidebar', name:'studentsidebar', component: StudentSidebar},
		{path:'/join', name:'join', component: Join},
		{path:'/studentlist', name:'studentlist', component: StudentList},
		{path:'/admin', name:'admin', component: Admin},
		{path:'/mypage', name:'mypage', component: MyPage},
		{path:'/futsalmypage', name:'futsalmypage', component: FutsalMypage},
		{path:'/mypageupdate', name:'mypageupdate', component: MyPageUpdate},
		{path:'/studentfindsome', name:'studentfindsome', component: StudentFindSome},
		{path:'/studentfindid', name:'studentfindid', component: StudentFindId},
		{path:'/login', name:'login', component: Login},
		{path:'/list', name:'list', component: List},
		{path:'/search', name:'search', component: Search},
		{path:'/update', name:'update', component: Update},
		{path:'/write', name:'write', component: Write},
		{path:'/futsal', name:'futsal', component: Futsal},
		{path:'/lol', name:'lol', component: Lol},
		{path:'/home2', name:'home2', component: Home2},
		{path:'/remove', name:'remove', component: Remove},
		
	]	
})

