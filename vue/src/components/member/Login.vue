<template>
	<div class="login-form">
    <form>
        <h2 class="text-center">Login</h2>       
        <div class="form-group">
            <input v-model="userid" type="text" class="form-control" placeholder="Username" required="required">
        </div>
        <div class="form-group">
            <input v-model="passwd" type="password" class="form-control" placeholder="Password" required="required">
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block" @click.prevent="login">Log in</button>
        </div>
        <div class="clearfix">
            <label class="pull-left checkbox-inline"><input type="checkbox"> Remember me</label>
            <a href="#" class="pull-right">Forgot Password?</a>
        </div>        
    </form>
    <p class="text-center"><router-link to="/join">Create an Account</router-link></p>
</div>
</template>
<script>
import axios from 'axios'
import {store} from '../../store'
export default {
	data () {
		return {
			context:'http://localhost:8080',
			result:'',
			userid:'',
            passwd:'',
            person:{}
		}
	},
	methods:{
		login(){
			let url = `${this.context}/login`
			let data = {
				userid: this.userid,
				passwd: this.passwd
			}
			let headers = {
                'authorization': 'JWT fefege..',
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
			axios
			.post(url, data, headers)
			.then(res=>{
                if(res.data.result === "SUCCESS"){
                    store.state.person = res.data.person
                    store.state.authCheck = true
                    alert(`스토어에 저장성공 ${store.state.authCheck}`)
                    this.$router.push({path:'/mypage'})
                }else{
                    alert(`로그인 실패 `)
                    this.$router.push({path:'/login'})
                }
			})
			.catch(()=>{
                alert('axios 실패')
			})
                    
		}
	}
}
</script>
<style scoped>
.login-form {
	width: 340px;
    margin: 50px auto;
	}
    .login-form form {
    margin-bottom: 15px;
    background: #f7f7f7;
    box-shadow:  2px 2px 2px 2px rgba(0, 0, 0, 0.5);
    padding: 30px;
    }
    .login-form h2 {
        margin: 0 0 15px;
    }
    .form-control, .btn {
        min-height: 38px;
        border-radius: 2px;
    }
    .btn {        
        font-size: 15px;
        font-weight: bold;
    }
</style>