<template>
<div id="app">
<layout>

	<template #header="h">
  <div class="container">
    <div class="navbar-header">
      <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
      </button>
      <router-link to="/" class="navbar-brand"> Ship </router-link>
    </div>
    <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
      <ul class="nav navbar-nav navbar-right">
        <li>
          <router-link to="/join">join</router-link>
        </li>
        <li>
          <router-link to="/login">login</router-link>
        </li>
        <li>
          <router-link to="/admin">admin</router-link>
        </li>
        <li>
          <router-link to="/mypage">my page</router-link>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">About <b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li><a href="#">Footsal</a></li>
            <li><a href="#">Lol</a></li>
          </ul>
        </li>
        <li class="active">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
  <div></div> <div></div>
	</template>
	<template #sidebar="s">
		<ul class="menu">
			<li v-for="s of sides" :key="s.menu">
			<router-link :to="s.link"> {{s.menu}} </router-link>
			</li>
		</ul>
	</template>

	<template #content ="c" class="c">
     <router-view></router-view>
	</template>

	<template #footer ="f">
		<h1>{{f.title}} </h1>
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
		sides:[
			{menu: "홈 ", link:"/"},
			{menu: "글쓰기 ", link:"/write"},
			{menu: "목록 ", link:"/list"},
			{menu: "글 삭제 ", link:"/remove"},
			{menu: "글 검색 ", link:"/search"},
			{menu: "글 수정 ", link:"/update"}
      ],
      
		}
  }
}
</script>
<style scoped>
ul.menu {
    position:relative;
    padding: 5px 5px 5px 5px;
    list-style: none;
}
li {
   position:relative;
    padding: 5px 5px 5px 5px;
    list-style: none;
}
ul.menu a {
    text-decoration:none;
}

@import 'https://fonts.googleapis.com/css?family=Montserrat|Open+Sans';
header {
  height: 50px;
}
.navbar-brand {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
}

.navbar .nav {
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 1.2rem
}

.navbar-inverse {
  background-color: black;  
}

.navbar-inverse .navbar-nav>.active>a:hover,
.navbar-inverse .navbar-nav>li>a:hover,
.navbar-inverse .navbar-nav>li>a:focus {
  background-color: black;
}

.navbar-inverse .navbar-nav>.active>a,
.navbar-inverse .navbar-nav>.open>a,
.navbar-inverse .navbar-nav>.open>a,
.navbar-inverse .navbar-nav>.open>a:hover,
.navbar-inverse .navbar-nav>.open>a,
.navbar-inverse .navbar-nav>.open>a:hover,
.navbar-inverse .navbar-nav>.open>a:focus {
  background-color: #003300
}

.dropdown-menu {
  background-color: #006B00
}

.dropdown-menu>li>a:hover,
.dropdown-menu>li>a:focus {
  background-color: #002200
}

.navbar-inverse {
  background-image: none;
}

.dropdown-menu>li>a:hover,
.dropdown-menu>li>a:focus {
  background-image: none;
}

.navbar-inverse {
  border-color: #003300
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

.navbar-inverse .navbar-nav>.active>a:hover,
.navbar-inverse .navbar-nav>.active>a:focus {
  color: #FFCC00
}

.dropdown-menu>li>a {
  color: #FFFFFF
}

.dropdown-menu>li>a:hover,
.dropdown-menu>li>a:focus {
  color: #FFCC00
}

.navbar-inverse .navbar-nav>.dropdown>a .caret {
  border-top-color: #FFFFFF
}

.navbar-inverse .navbar-nav>.dropdown>a:hover .caret {
  border-top-color: #FFFFFF
}

.navbar-inverse .navbar-nav>.dropdown>a .caret {
  border-bottom-color: #FFFFFF
}

.navbar-inverse .navbar-nav>.dropdown>a:hover .caret {
  border-bottom-color: #FFFFFF
}
</style>