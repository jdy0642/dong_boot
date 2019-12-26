<template>
<div>
  <h1> 학생 목록
  <br />
  <br />
  <table class="table">
    <tr>
      <th>No.</th> 
      <th>아이디</th>
      <th>비밀번호</th>
      <th>이름</th>
      <th>생년월일</th>
      <th>학년</th>
      <th>반</th>
      <th>점수 </th>
      <th>남녀 </th>
      <th>역할 </th>
    </tr>
    <tr v-for="(j, i) of list" :key="j.id">
      <td>{{i+1}}</td> 
      <td>{{j.userid}}</td>
      <td>{{j.passwd}}</td>
      <td>{{j.name}}</td>
      <td>{{j.birthday}}</td>
      <td>{{j.hak}}</td>
      <td>{{j.ban}}</td>
      <td>{{j.score}}</td>
      <td>{{j.gender}}</td>
      <td>{{j.role}}</td>
    </tr>
  </table>
  </h1>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      context:'http://localhost:8080',
      list:[]
    }
  },
  created(){
    axios
    .get(`${this.context}/students`)
    .then(res=>{
        this.list = res.data
    })
    .catch(()=>{
      alert('ax 실패')
    })
  }

}
</script>

<style scoped>
.table{
  border : 1px solid black;
  font-size: 20px;
  text-align: center;
}
.table tr{
  border : 1px solid black;
}
.table tr th{
  border : 1px solid black;
  text-align: center;
}
.table tr td{
  border : 1px solid black;
}
</style>
