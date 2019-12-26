<template>
<div>
	{{timeToDate(time)}}
</div>
</template>
<script>
export default({
	props: {
		time: {type: Number}
	},
	data(){
		return{
		}
	},
	methods:{
		timeToDate(time){
			const temp = new Date(time)
			return `${String(temp.getMonth()+1)}월 ${temp.getDate()}일 ${temp.getHours()}시`
		}
	}
})
</script>
<style scoped>
</style>