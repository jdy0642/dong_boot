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
				{menu:"남학생목록",link:"/malelist"},
				{menu:"여학생목록",link:"/femalelist"},
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