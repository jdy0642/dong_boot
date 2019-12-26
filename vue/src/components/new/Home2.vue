<template>
<div style="display: grid; grid-template-rows: 30% 15% 50%; border: solid 1px;">
  <Header></Header>
  <searchBar></searchBar>
  <reservation></reservation>
</div>
</template>

<script>
import Header from './Header'
import SearchBar from './SearchBar'
import Reservation from './Reservation'
export default {
  components:{Header,SearchBar,Reservation},
  data(){
    return{

    }
  }
}
</script>
<style scoped>
.table{
	
	
	padding: 2px;
}
</style>
