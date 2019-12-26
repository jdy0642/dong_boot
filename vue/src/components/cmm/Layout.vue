<template>
  <div id="wrapper">
	<header class="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner">
		<slot name="header" :title="header"></slot>
	</header>
	<aside id="sidebar">
		<slot name="sidebar" :title="sidebar"></slot>
	</aside>
	<section id="content">
		<slot name="content" :title="content"></slot>
         
	</section>
	<footer>
		<slot name="footer" :title="footer"></slot>
	</footer>
  </div>
</template>
<script>
export default {
  data(){
    return{
		header:[
               {menu: "로그인", link:"/login"},
               {menu: "회원가입", link:"/join"}
               ],
		sidebar:'sidebar 입니다 ',
		content:'Content',
		footer:'Footer'
    }
  }
}
</script>
<style scoped>
#wrapper {
     padding: 5px;
     width: 1300px;
     margin: 20px auto;
}
header {
     height: 70px;
     padding: 0 15px;
     text-align: right;
}
#content {
     margin:50px 0px 0px 0px;
     width: 1000px;
     float: left;
     padding: 5px 15px;
    min-height: 300px;
}
#sidebar {
     margin:50px 0px 0px 0px;
     width: 200px;
     padding: 5px 15px;
     float: left;
}
footer {
     clear: both;
     padding: 0 15px;
     width:1200px;
}
/* 가로폭 980보다 작을 때 사용할 @media query */
@media screen and (max-width: 980px) {     
     #pagewrap {
           width: 94%;
     }
     #content {
           clear: both;
           padding: 1% 4%;
           width: auto;
           float: none;
     }
     #sidebar {
           clear: both;
           padding: 1% 4%;
           width: auto;
           float: none;
     }
     header, footer {
           padding: 1% 4%;
     }
}
/* 공통 */
#content {
     background: #f8f8f8;
}
#sidebar {
     background: #f0efef;
}
header, #content, #middle, #sidebar {
     margin-bottom: 5px;
}
#pagewrap, header, #content, #middle, #sidebar, footer {
     border: solid 1px #ccc;
}
</style>