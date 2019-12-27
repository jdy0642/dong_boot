<template>
<div>
	검색 : <input type="text" v-model="stadium"/>
	<v-btn @click="submit">눌러</v-btn>
</div>
</template>
<script>
export default({
	created(){
		this.$emit("send",this.stadium)
	},
	data(){
		return {
			stadium : ''
		}
	},
	methods:{
		submit(){
			this.$emit("send",this.stadium)
		}
	}
})
</script>
<style scoped>
div{
	text-align: center
}
input{
	border: solid
}
</style>