<template>

<div>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal">회원가입</button>
    <div class="modal fade bs-example-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
     
            <h3>회원가입</h3>
                <article class="card-body mx-auto" style="max-width: 400px;">
                <div class="col">
                    <input v-model="userid" class="form-control" placeholder="아이디" type="text">
                </div> <!-- form-group// -->
                <br />
                <div class="col">
                    <input v-model="passwd" class="form-control" placeholder="비밀번호" type="text">
                </div> <!-- form-group// -->
                <br />
                <div class="col">
                    <input v-model="name" class="form-control" placeholder="이름" type="text">
                </div> <!-- form-group// -->
                <br />
                <div class="col">
                    <input v-model="birthday" class="form-control" placeholder="생일" type="text">
                </div> <!-- form-group// -->   
                <br />
                <div class="col">
                    <input v-model="gender" class="form-control" placeholder="성" type="text">
                </div> <!-- form-group// -->  
                <br /> 
                <div class="col">
                    <input v-model="hak" class="form-control" placeholder="학년" type="text">
                </div> <!-- form-group// -->  
                <br /> 
                <div class="col">
                    <input v-model="ban" class="form-control" placeholder="반" type="text">
                </div> <!-- form-group// -->   
                <br />
                <div class="col">
                    <input v-model="score" class="form-control" placeholder="점수" type="text">
                </div> <!-- form-group// --> 
                <br />  

                <div class="col" >
                    <select v-model="role" class="form-control" placeholder="role" aria-expanded="true">
                            <option ><li>선생님</li></option>
                            <option >학생</option>
                    </select>
                </div>

                <br />
                <div class="col">
                    <button type="submit" class="btn btn-primary btn-block" @click.prevent="join"> 계정 만들기  </button>
                </div> <!-- form-group// -->      
                <br />

                <p class="text-center"><router-link to="/login">이미 계정이 있다면? 로그인  </router-link></p>                                                                 
                </article>
            </div>
        </div>
    </div>
    
</div>
</template>
<script>

export default {
    name: 'join',
    data () {
		return {
		}
    },
    methods:{
    }
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Montserrat|Open+Sans';
.col{
    width:300px;
}
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
