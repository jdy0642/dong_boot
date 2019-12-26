<template>

<div>
<h3>Join</h3>
<br />
<form >
<article class="card-body mx-auto" style="max-width: 400px;">
	<form>
	<div class="form-group input-group">
        <input v-model="userid" class="form-control" placeholder="userid" type="text">
    </div> <!-- form-group// -->
    <div class="form-group input-group">
        <input v-model="passwd" class="form-control" placeholder="password" type="text">
    </div> <!-- form-group// -->
    <div class="form-group input-group">
        <input v-model="name" class="form-control" placeholder="name" type="text">
    </div> <!-- form-group// -->
    <div class="form-group input-group">
        <input v-model="birthday" class="form-control" placeholder="birthday" type="text">
    </div> <!-- form-group// -->   
    <div class="form-group input-group">
        <input v-model="gender" class="form-control" placeholder="gender" type="text">
    </div> <!-- form-group// -->   
    <div class="form-group input-group">
        <input v-model="hak" class="form-control" placeholder="hak" type="text">
    </div> <!-- form-group// -->   
    <div class="form-group input-group">
        <input v-model="ban" class="form-control" placeholder="ban" type="text">
    </div> <!-- form-group// -->   
    <div class="form-group input-group">
        <input v-model="score" class="form-control" placeholder="score" type="text">
    </div> <!-- form-group// -->   

    <div class="form-group input-group">
        <select v-model="role" class="form-control" placeholder="role">
                <option class="hidden" selected disabled>role</option>
                <option >teacher</option>
                <option >student</option>
        </select>
    </div>

<br />
    <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block" @click.prevent="join"> Create Account  </button>
    </div> <!-- form-group// -->      

    <p class="text-center"><router-link to="/login">Have an account? Log In </router-link></p>                                                                 
</form>
</article>
</form>
</div>
</template>
<script>

import axios from 'axios'
export default {
    data () {
		return {
			context:'http://localhost:8080',
			result:'',
			userid:'',
            passwd:'',
            name:'',
            birthday:'',
            ban:'',
            gender:'',
            hak:'',
            score:'',
            role:'',
            person:{}
		}
    },
    methods:{
        join(){
            alert(this.role)
            let url = `${this.context}/join`
            let data = {
				userid: this.userid,
                passwd: this.passwd,
                name: this.name,
                birthday: this.birthday,
                ban:this.ban,
                gender: this.gender,
                hak: this.hak,
                score: this.score,
                role:this.role
            }
            let headers = {
                'authorization': 'JWT fefege..',
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
            axios
            .post(url, data, headers)
            .then(res=>{
                   alert (res.data.result)
            })
            .catch(()=>{
                alert('악시오스 실패')
            })
        }
    }
}
</script>

<style scoped>
div{
    text-align: -webkit-center;
    
}
.divider-text {
    position: relative;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
}
.divider-text span {
    padding: 7px;
    font-size: 12px;
    position: relative;   
    z-index: 2;
}
.divider-text:after {
    content: "";
    position: absolute;
    width: 100%;
    border-bottom: 1px solid #ddd;
    top: 55%;
    left: 0;
    z-index: 1;
}

.btn-facebook {
    background-color: #405D9D;
    color: #fff;
}
.btn-twitter {
    background-color: #42AEEC;
    color: #fff;
}
</style>
