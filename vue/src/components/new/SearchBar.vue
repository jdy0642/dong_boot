<template>
<div>
	<div class="row">
		<div class="col-lg-6">
			<div style="margin: auto; width: 40%;" class="input-group">
			<input type="text" class="form-control" placeholder="Search for...">
			<span class="input-group-btn">
				<button @click="submit" class="btn btn-default" type="button">Go!</button>
			</span>
			</div>
		</div>
	</div>
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
</style>