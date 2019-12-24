<template>
<div>
     <router-link to="/logout">로그아웃</router-link>
     <router-link to="/withdrawal">회원탈퇴</router-link>
</div>
</template>

<script>
import axios from 'axios'
import {store} from '../../store'
export default {
      data(){
    return{
      context:'http://localhost:8080',
      id: store.state.person.id,
      userid: store.state.person.userid,
      passwd: store.state.person.passwd,
      name: store.state.person.name,
      birthday: store.state.person.birthday,
      gender: store.state.person.gender,
      hak:store.state.person.hak,
      ban:store.state.person.ban,
      score: store.state.person.score
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
      let url = `${this.context}/update/${store.state.person.userid}`
      let data = {
        userid: store.state.person.userid,
        hak: store.state.person.hak,
        ban: store.state.person.ban,
        score: store.state.person.score
      }
      let headers = {
          'authorization': 'JWT fefege..',
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
      }
      axios
      .put(url, data, headers)
      .then(res=>{
        alert(res.data)
      })
      .catch(()=>{
        alert('악시오스 실패3')
      })
    }
  }
}
</script>

<style scoped>
</style>
