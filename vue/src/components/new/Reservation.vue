<template>
<div style="display: grid; grid-template-rows: 30% 80%; grid-template-columns: 11% 11% 11% 11% 11% 11% 11% 11% 11% ;border: solid 1px;">
  <slot name="currTime" :time="currTime"/>
  <div v-for="time in getTimes(currTime)" :key="time">
    <!-- <v-btn rounded @click="tableChange(time)" style="float: left">{{timeToDateAndWeek(time)}}</v-btn> -->
    <button @click="tableChange(time)" :class="vspbutton + (time == currTime ? ' ' + vspbuttonselected : '')">{{timeToDateAndWeek(time)}}</button>    
  </div>
  <reservationTable :time="currTime"></reservationTable>
</div>
</template>
<script>
import ReservationTable from './ReservationTable'
export default {
  components : {ReservationTable},
  props: {
    vspbutton: {
      type: String,
      default: 'vspButton'
    },
    vspbuttonselected: {
      type: String,
      default: 'vspButton-selected'
    }
  },
  data () {
    return {
      currTime : Date.now(),
    }
  },
  methods: {
    getTimes(time){
        return (start => Array.from({length : 9},
        (_,i) => start + i*(1000*3600*24)
        ))(time)
    },
    timeToDateAndWeek(time){
      const temp = new Date(time)
      return `${temp.getDate()} ${["일","월","화","수","목","금","토"][temp.getDay()]}`
    },
    tableChange(time){
      this.currTime = time
    }
  }
}
</script>
<style scoped>
div {
  text-align: center
}
 .vspButton {
    width: 100px;
    height: 50px;
    padding: 2px 7px;
    font-size: 12px;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid;
    border-radius: 4px;
    background-color: transparent;
    /* float: inherit; */
  }
  .vspButton-selected{
    background-color: #31b0d5;
  }
</style>