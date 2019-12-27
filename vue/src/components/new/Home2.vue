<template>
<div style="display: grid; grid-template-rows: 35% 5% 10% 50%; border: solid 1px; height: 1000px;">
  <Header></Header>
  <searchBar @send="setStadium"></searchBar>
  <reservation @send="setTime"></reservation>
  <reservationTable :time="time" :stadium="stadium" ></reservationTable>
</div>
</template>

<script>
import Header from './Header'
import SearchBar from './SearchBar'
import Reservation from './Reservation'
import ReservationTable from './ReservationTable'
export default {
  components:{Header,SearchBar,Reservation,ReservationTable},
  data(){
    return{
      stadium : '',
      time : 0
    }
  },
  methods:{
    setTime(time){
      this.time = time
    },
    setStadium(stadium){
      this.stadium = stadium
    }
  }
}
</script>
<style scoped>
.table{
	padding: 2px;
}
div{
}
</style>
