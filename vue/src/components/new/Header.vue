<template>
<div @click="msg">
header
</div>
</template>
<script>
import axios from "axios"
export default({
	data(){
		return{
		}
	},
	methods:{
		msg(){
			axios.post('http://localhost:8080/',
				{msg:'gss'},{
				'authorization': 'JWT fefege..',
				'Accept':'application/json',
				'Content-Type':'application/json'
			}).then(res=>{
				alert(res.data.msg)
			}).catch(()=>{
				alert('실패')
			})
		}
	}
})
</script>
<style scoped>
</style>