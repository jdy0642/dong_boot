<template>
	<div>
		<ul class="menu">
			<li v-for="i of sidebars" :key="i.menu">
				<router-link :to="i.link">{{i.menu}}</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	data(){
		return {
			sidebars : [
        {menu:"학생성적수정",link:"/mypageupdate"},
				{menu:"학생목록",link:"/studentlist"},
				{menu:"조건별 학생 검색",link:"/studentfindsome"},
				{menu:"ID 학생 검색",link:"/studentfindid"},
				{menu:"학생만검색",link:"/studentsearch"}
			]
		}
	}
}
</script>
<style scoped>
li {
  margin:10px 0px 10px;
}
</style>