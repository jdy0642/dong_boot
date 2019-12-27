<template>
<div>
	{{timeToDate(time)}}  {{stadium}}
	<div v-for="match of stadiumSelect(stadium)" :key="match" style="display: grid; grid-template-columns: 20% 50% 30%; border: solid 1px;">
		<div v-for="(item,key) of match" :key="item" style="text-align: center">
			{{item}} {{key}}
		</div>
	</div>
</div>
</template>
<script>
export default({
	props: {
		time: {type: Number},
		stadium: {type: String}
	},
	data(){
		return{
			table:[
				{stadium:'신촌', start:'10', num:5},
				{stadium:'강남', start:'12', num:1},
				{stadium:'용인', start:'14', num:4},
				{stadium:'종각', start:'16', num:3},
				{stadium:'평양', start:'18', num:5},
				{stadium:'부산', start:'20', num:5}
			]
		}
	},
	methods:{
		timeToDate(time){
			const temp = new Date(time)
			return `${String(temp.getMonth()+1)}월 ${temp.getDate()}일 ${temp.getHours()}시`
		},
		stadiumSelect(stadium){
			return this.table.filter(i=> i!==stadium)
		}
	}
})
</script>
<style scoped>
</style>