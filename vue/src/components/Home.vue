<template>
<div id="app">
<layout>
	<template #header="h">
    <div class="container">
      <div class="navbar-header">
        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
        </button>
        <span class="glyphicon glyphicon-globe" >
        </span>
        <router-link to="/" class="navbar-brand" > Ship </router-link>
      </div>
      <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
        <ul class="nav navbar-nav navbar-right"  >
          <li v-if="loginCheck">
            <router-link to="/join">join</router-link>
          </li>
          <li v-else>
            <a href="#" @click.prevent="withdrawal">회원탈퇴</a>
          </li>
          <li v-if="loginCheck">
            <router-link to="/login">login</router-link>
          </li>
          <li v-else>
            <a href="#" @click="logout">로그아웃  </a>
          </li>
          <li>
            <router-link to="/list">admin<span class="badge">5</span></router-link>
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

	<template #sidebar="sidebar">
      <!-- <div v-switch="sidebarCheck">
        <h4 v-case="'presidebar'">
          <component :is="'pre-sidebar'"></component></h4>
        <h4 v-case="'adminsidebar'">
          <component :is="'admin-sidebar'"></component> </h4>
        <h4 v-case="'studentsidebar'">
          <component :is="'student-sidebar'"></component> </h4>
      </div> -->
      <!-- <component :is="sidebarCheck"></component> -->
      <ul class="menu" >
				<li v-for="sidebar of sidebarCheck" :key="sidebar.menu">
					<router-link :to='sidebar.link'>{{sidebar.menu}}</router-link>
				</li>
			</ul>	
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
import Layout from '@/components/cmm/Layout.vue'
export default {
  components:{
    Layout
  },
  data(){
    return{
		}
  },
  methods:{
    logout(){
      this.$store.state.admin={}
      this.$store.state.admin.isAuth=''
      this.$router.push({path : '/'})
    }
  },
  computed:{
    loginCheck() {
      if(this.$store.state.admin.isAuth==''){
        return true
      }else{
        return false
        }
      },
		sidebarCheck(){
      if(this.$store.state.admin.isAuth==''){
        return this.$store.state.common.sidebars
      }else{
        return this.$store.state.admin.sidebars
      }
    },
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
  top: 20px;
  font-size: x-large;
}
.dropdown-toggle{
}
.dropdown-menu>li>a {
  color: #FFFFFF
}
.dropdown-menu>li>a:hover,
.dropdown-menu>li>a:focus {
  color: #FFCC00
}
.dropdown-menu {
  background-color: #101010
}
.dropdown-menu>li>a:hover,
.dropdown-menu>li>a:focus {
  background-color: #101010
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
  margin-top:6px;
  font-size: 17px;
}
.navbar .nav {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
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