<template>
<div style="display: grid; grid-template-columns: 11% 11% 11% 11% 11% 11% 11% 11% 11% ;border: solid 1px;">
  <div v-for="(time,index) in timeArray(now,selectIndex)" :key="index">
    <!-- <v-btn rounded @click="tableChange(time)" style="float: left">{{timeToDateAndWeek(time)}}</v-btn> -->
    <button @click="tableChange(index,time)" :class="selected(time==selectTime)">{{timeToDateAndWeek(time)}}</button>    
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      now : Date.now(),
      selectIndex : 0,
      selectTime : Date.now()
    }
  },
  methods: {
    timeArray(now,select){
      return ((i,j) => Array.from({length : 9},
      (_,k) => i + (j+k)*(1000*3600*24)
      ))(now,((select > 5) ? 5 : select))
    },
    timeToDateAndWeek(time){
      const temp = new Date(time)
      return `${temp.getDate()} ${["일","월","화","수","목","금","토"][temp.getDay()]}`
    },
    tableChange(index,time){
      this.selectTime = time
      this.selectIndex = index
      this.$emit("send",time)
    },
    selected(decide){
      return "vspButton " + (decide ? "selected" : "")
    }
  }
}
</script>
<style scoped>
.vspButton {
  max-width: 100px;
  min-width: 80px;
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
}
.selected{
  background-color: #31b0d5;
}
</style>