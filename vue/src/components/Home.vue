<template>
<div id="app">
<layout>
	<template #header="h">
    <div class="container">
      <div class="navbar-header">
        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
        </button>
        <span class="glyphicon glyphicon-tint" aria-hidden="true"> 
        <router-link to="/" class="navbar-brand"> Ship </router-link>
        </span>
      </div>
      <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
        <ul class="nav navbar-nav navbar-right" >
          <li v-if="logined">
            <router-link to="/join">join</router-link>
          </li>
          <li v-else>
            <a href="#" @click.prevent="withdrawal">회원탈퇴</a>
          </li>
          <li v-if="logined">
            <router-link to="/login">login</router-link>
          </li>
          <li v-else>
            <a href="#" @click="logout">로그아웃  </a>
          </li>
          <li>
            <router-link to="/list">admin</router-link>
          </li>
          <li>
            <router-link to="/futsalmypage">my page</router-link>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Contents <b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li><router-link to="/futsal">futsal</router-link></li>
              <li><router-link to="/lol">lol</router-link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
	</template>

	<template #sidebar="s">
      <div v-switch="sidebarCheck">
        <h4 v-case="'presidebar'">
          <component :is="'pre-sidebar'"></component></h4>
        <h4 v-case="'adminsidebar'">
          <component :is="'admin-sidebar'"></component> </h4>
        <h4 v-case="'studentsidebar'">
          <component :is="'student-sidebar'"></component> </h4>
      </div>
  </template>

	<template #content ="c" class="c">
     <router-view></router-view>
	</template>

	<template #footer ="f">
	<h3>footer</h3>
  </template>

</layout>
</div>
</template>

<script>
import axios from 'axios'
import Layout from '@/components/cmm/Layout.vue'
import StudentSidebar from '@/components/cmm/StudentSidebar.vue'
import PreSidebar from '@/components/cmm/PreSidebar.vue'
import AdminSidebar from '@/components/cmm/AdminSidebar.vue'
import {store} from '@/store'

export default {
  components:{
    Layout, StudentSidebar, PreSidebar, AdminSidebar
  },
  data(){
    return{
      context:'http://localhost:8080'
		}
  },
  computed:{
    logined(){
      return store.state.person.name == undefined
    },
    sidebarCheck() {
      return store.state.sidebar
    }
  },
  methods:{
    logout(){
      store.state.person={},
      store.state.sidebar='presidebar'
      this.$router.push({path: '/login'})
    },
     withdrawal(){
      axios
      .delete(`${this.context}/withdrawal/${store.state.person.userid}`)
      .then(
        alert('회탈 성공2')
      )
      .catch(()=>{
        alert('악시오스 회탈 실패')
      })
      this.$router.push({path:'/'})
    }
  }
}
</script>
<style scoped>
li {
   position:relative;
    padding: 5px 5px 5px 5px;
    list-style: none;
}

@import 'https://fonts.googleapis.com/css?family=Montserrat|Open+Sans';
.glyphicon{
  color: white;
  width: 50px;
  top: 10px;
}
.dropdown-menu>li>a {
  color: #FFFFFF
}
.dropdown-menu>li>a:hover,
.dropdown-menu>li>a:focus {
  color: #FFCC00
}
.dropdown-menu {
  background-color: black
}
.dropdown-menu>li>a:hover,
.dropdown-menu>li>a:focus {
  background-color: black
}
header {
  height: 50px;
}
.collapse{
  bottom:500px;
}
.navbar-brand {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
}
.navbar .nav {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
}
.navbar-inverse .navbar-brand {
  color: #FFFFFF
}
.navbar-inverse .navbar-brand:hover {
  color: #FFCC00
}
.navbar-inverse .navbar-nav>li>a {
  color: #FFFFFF
}
.navbar-inverse .navbar-nav>li>a:hover,
.navbar-inverse .navbar-nav>li>a:focus {
  color: #FFCC00
}
.navbar-inverse .navbar-nav>.active>a,
.navbar-inverse .navbar-nav>.open>a,
.navbar-inverse .navbar-nav>.open>a:hover,
.navbar-inverse .navbar-nav>.open>a:focus {
  color: #FFCC00
}

</style>