<template>
<div id="app">
<layout>

	<template #header="h">
      <li v-for="h of header" :key="h.menu">
			<router-link :to="h.link"> {{h.menu}} </router-link>
			</li>
	</template>

	<template #sidebar="s">
		<ul class="menu">
			<li v-for="s of sides" :key="s.menu">
			<router-link :to="s.link"> {{s.menu}} </router-link>
			</li>
		</ul>
	</template>

	<template #content ="c" class="c">
		<h1>{{c.title}} </h1>
     <router-view></router-view>
	</template>

	<template #footer ="f">
		<h1>{{f.title}} </h1>
	</template>

</layout>
</div>
</template>

<script>
import Layout from '@/components/cmm/Layout.vue'
export default {
  components:{
    Layout
  },
  data(){
	return{
		sides:[
			{menu: "홈 ", link:"/"},
			{menu: "글쓰기 ", link:"/write"},
			{menu: "목록 ", link:"/list"},
			{menu: "글 삭제 ", link:"/remove"},
			{menu: "글 검색 ", link:"/search"},
			{menu: "글 수정 ", link:"/update"}
      ],
    header:[
      {menu: "로그인", link:"/login"},
      {menu: "회원가입", link:"/join"}
               ]
      
		}
  }
}
</script>
<style scoped>
ul.menu {
    position:relative;
    padding: 5px 5px 5px 5px;
    list-style: none;
}
li {
   position:relative;
    padding: 5px 5px 5px 5px;
    list-style: none;
}
ul.menu a {
    text-decoration:none;
}
</style>