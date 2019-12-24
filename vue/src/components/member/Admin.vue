<template>
  <div id="section-top-border">
  <br />
				<div class="progress-table-wrap" :style="{backgroundImage:'url(https://res.cloudinary.com/valuechampion/image/upload/c_lfill,dpr_1.0,f_auto,h_1600,q_auto,w_1600/v1/lol_skin)'}">
					<div class="progress-table">
						<div class="table-head">
						</div>
						<div class="table-row">
							<div class="serial">01</div>
							<div class="room">사람구함</div>
							<div class="tier"><img id="silver" v-bind:src="silver"/>실버4</div>
						</div>
						<div class="table-row">
							<div class="serial">02</div>
							<div class="room">사람구함</div>
							<div class="tier"><img id="gold" v-bind:src="gold"/>골드3</div>
						</div>
						<div class="table-row">
							<div class="serial">03</div>
							<div class="room">사람구함</div>
							<div class="tier"><img id="master" v-bind:src="master"/>마스터</div>
						</div>
						<div class="table-row">
							<div class="serial">04</div>
							<div class="room">사람구함</div>
							<div class="tier"><img id="silver" v-bind:src="silver"/>실버1</div>
						</div>
						<div class="table-row">
							<div class="serial">05</div>
							<div class="room">사람구함</div>
							<div class="tier"><img id="gold" v-bind:src="gold"/>골드2</div>
						</div>
						<div class="table-row">
							<div class="serial">06</div>
							<div class="room">사람구함</div>
							<div class="tier"><img id="pla" v-bind:src="pla"/>플레2</div>
						</div>
						<div class="table-row">
							<div class="serial">07</div>
							<div class="room">사람구함</div>
							<div class="tier"><img id="dia" v-bind:src="dia"/>다이아3</div>
						</div>
						<div class="table-row">
							<div class="serial">08</div>
							<div class="room">사람구함</div>
							<div class="tier"><img id="gold" v-bind:src="gold"/>골드2</div>
						</div>
						<button class="page" v-for="j of buttons" :key="j.name">{{j.name}}</button>
						<div id="btns">
						<button id="btn1">팀원구하기</button>
						<button id="btn2">참여하기</button>
						</div>
					</div>
				</div>
			</div>
</template>
<script>
export default {
	data(){
		return {
			buttons : [
				{name:1},
				{name:2},
				{name:3},
				{name:4},
				{name:5}
			],
			silver: 'http://www.흑우팀.com/data/file/class/thumb-3552849856_leRrPahM_fa9a6e6047e0e889e7a1847ff68ff413f8d776ed_400x229.png',
			gold : 'http://mblogthumb1.phinf.naver.net/MjAxOTAyMTJfMjQ4/MDAxNTQ5OTYwNTcyNTc0.GagwKwXIJG8CjWRt94kaNNRJRjTY3mhrxcg82vYDlZYg.y1Vye3r5fLurs3joZDJRV_4khLqlOXahs3tciCmIN44g.PNG.rrhk327/%EC%BA%A1%EC%B2%98.PNG?type=w800',
			pla : 'https://file.namu.moe/file/c293bb9b0395e29954fd50d51f239cce456d5eeee14d6c8a8417ef1af1b06060',
			dia : 'http://www.흑우팀.com/data/file/solorank/thumb-3552849856_0IHiB8kx_e95b44dde61c0b6dd59c2ebee062322cd173a590_400x229.png',
			master : 'http://www.leagueoflegends.co.kr/upload/EditorImages/20181127151314_xSTAnyia.jpg'
		}
	}
}
</script>
<style scoped>
.table-row{
  width: 80%;
  border: 1px solid black;
  text-align: center;
  margin:0 auto;
  }
#silver{
	width:30px;
}
#gold{
	width:30px;
}
#pla{
	width:30px;
}
#dia{
	width:30px;
}
#master{
	width:30px;
}
.serial{
	float:left;
	color:#727272;
}
.percentage{
	color: black;
}
.progress-table-wrap{
	margin:0 auto;
}
.room{
	color:green;
}
#btn1{
	margin-right:5px;
	}
#btn2{
	margin-left:-3px;
	}
#btns button{
	border: 1px solid skyblue;
	background-color: rgba(0,0,0,0);
	color: skyblue; padding: 5px;
	position: relative;
	left:1300px;
	margin-top:10px;
	}
.page{
	border: 1px solid skyblue;
	background-color: rgba(0,0,0,0);
	color: skyblue; padding: 5px;
	position: relative;
	left:800px;
	margin-top:20px;
}
</style>