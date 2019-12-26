<template>
<div style="padding-left: 20px">
   <div id="admin-header">
      <legend><h2 align="center">관리자 {{state.person.name}}님 환영합니다</h2></legend>
   </div>
   <div style=" height: 300px">
      <div style=" width: 300px; height: 300px; margin-right: 1%; margin-bottom: 20px; float: right; border: 1px solid #bcbcbc;">
         <a href="#" style="text-align: center;"><h3>날씨</h3></a>
      </div>
      <div style=" height: 30px">
         <div style=" width: 430px; height: 300px; margin-right: 1%; margin-bottom: 20px; float: left; border: 1px solid #bcbcbc;">
         <legend><h3>관리자 정보</h3></legend>
         <h4>이름: {{state.person.name}}</h4>
         <h4>직위: {{state.person.role}}</h4>
         <h4>성별: {{state.person.gender}}</h4>
         <h4>생년월일: {{state.person.birthday}}</h4>
         <h4>관리 구장: {{state.person.hak}}</h4>
         <h4>연락처: {{state.person.ban}}</h4>
         <h4>이메일: {{state.person.score}}</h4>
         
         </div>
      </div>
      <div style=" width: 350px; height: 300px; margin-right: 1%; margin-bottom: 20px; float: right; border: 1px solid #bcbcbc;">
         <a href="#" style="text-align: center;"><h3>구장 사진 </h3></a>
      </div>
      <div style=" height: 30px">
         <div style=" width: 370px; height: 300px; margin-right: 1%; margin-bottom: 20px; float: left; border: 1px solid #bcbcbc;">
         <a href="#" style="text-align: center;"><h3>구장  정보</h3></a>
         </div>
      </div>
   </div>
</div>
</template>
<script>
import {store} from '@/store'
export default{
   data(){
      return{
         state:store.state
      }
   }
}
</script>
<style scoped></style>