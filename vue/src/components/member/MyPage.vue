<template>

  <div class="back">
     <div align = "center" ><h2> {{person.name}} 님의 My Page</h2>
     <h3> <a href="#" @click="logout">로그아웃  </a><a href="#" @click.prevent="withdrawal">회원탈퇴</a></h3>
     </div>
      <div class="sub">
        <div  >
                <legend><h3>정보보기</h3></legend>
                <h4>아이디: {{person.id}}</h4>
                <h4>유저 아이디: {{person.userid}}</h4>
                <h4>비밀번호: {{person.passwd}}</h4>
                <h4>이름: {{person.name}}</h4>
                <h4>생일: {{person.birthday}}</h4>
                <h4>성: {{person.gender}}</h4>
                <h4>학년: {{person.hak}}</h4>
                <h4>반: {{person.ban}}</h4>
                <h4>점수: {{person.score}}</h4>
        </div>
             <br/><br/><button @click.prevent="update">수정</button><br/><br/>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import {store} from '../../store'
export default {
  data(){
    return{
      context:'http://localhost:8080',
      // id: store.state.person.id,
      // userid: store.state.person.userid,
      // passwd: store.state.person.passwd,
      // name: store.state.person.name,
      // birthday: store.state.person.birthday,
      // gender: store.state.person.gender,
      // hak:store.state.person.hak,
      // ban:store.state.person.ban,
      // score: store.state.person.score
      person: store.state.person
    }
  },
  methods:{
    logout(){
      alert('로그아웃')
      alert(store.state.person.name)
      store.state.person={}
      alert(store.state.person.name)
      this.$router.push({path: '/login'})

    },
    withdrawal(){
      alert('회원탈퇴')
      axios
      .delete(`${this.context}/withdrawal/${store.state.person.userid}`)
      .then(
        alert('회탈 성공2')
      )
      .catch(()=>{
        alert('악시오스 회탈 실패')
      })
      this.$router.push({path:'/'})
    },
    update(){
      alert('비번 변경')
      this.$router.push({path:'/mypageupdate'})
    }
  }
}
</script>
<style scoped>
    .back {width: 700px; margin: 0 auto;}
    .sub {width: 90%; height: 600px; margin: 0 auto; text-align: center;}
    .pull-left {float: left;}
    .pull-right {float: right;}
    .top {margin-top: 1%;}
    .rt {margin-right: 1%;}
    .size {width: 49.5%; height: 100%;}
</style>
