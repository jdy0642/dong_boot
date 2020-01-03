// import loginAPI from '@/api/loginAPI'
import Constant from '@/store/modules/mutation_types'
import axios from 'axios'
import router from '@/router'
import api from '@/api'
const state = {
	person: {},
	sidebars : [
				{menu:"내정보보기",link:"/mypage"},
				{menu:"비밀번호변경",link:"/change"},
				{menu:"글쓰기",link:"/write"},
				{menu:"목록",link:"/list"},
				{menu:"글수정",link:"/update"},
				{menu:"글삭제",link:"/remove"},
				{menu:"검색",link:"/search"}
			],
	userid:''
}
const getters = {
	getPerson : state => state.person,
	getIsAuth: state => state.isAuth,
  getContext: state => state.context,
  getSidebars: state => state.sidebars,
}
const actions = {
	async student_login({commit, state}){
            alert(`${this.userid} ,  ${this.passwd}`)
            api.login(state.userid, state.passwd)
            .then(data => commit('login', data.data))
            .then(()=>{router.push({name: 'home'})})
            let url = `${ this.$store.state.context}/login`
            let data = {
                userid: this.userid,
                passwd: this.passwd
            }
            let headers = {
                'authorization': 'JWT fefege..',
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
            axios
            .post(url, data, headers)
            .then(res=>{
                if(res.data.result === "SUCCESS"){
                  this.$store.commit(Constant.PERSON, res.data.person)
                  this.$store.commit(Constant.IS_AUTH, true)
                  
                  alert(`스토어에 저장성공 ${this.$store.state.authCheck}`)
                  if(this.$store.state.person.role !== 'student'){
                      this.$store.commit(Constant.SIDEBAR, 'managerSidebar')
                      this.$store.commit(Constant.HEADER_MESSAGE, '관리자화면')
                      this.$router.push({path: '/admin'})
                  }else{
                      this.$store.commit(Constant.SIDEBAR, 'studentSidebar')
                      this.$store.commit(Constant.HEADER_MESSAGE, '학생화면')
                      this.$router.push({path: '/myPage'})
                  }
                  
                }else{
                  alert(`로그인실패`)
                  this.$router.push({path: '/login'})
                }
            })
            .catch(()=>{
                alert('AXIOS 실패')
            })  
            
          },
      async join(){
              let url = `${this.context}/join`
              let data = {
                  userid : this.userid,
                  passwd : this.passwd,
                  name : this.name,
                  birthday : this.birthday
              }
              let headers = {
                      'authorization': 'JWT fefege..',
                      'Accept' : 'application/json',
                      'Content-Type': 'application/json'
              }
              axios
              .post(url, data, headers)
              .then(res=>{
                  if(res.data.result==="SUCCESS"){
                      this.$store.commit(Constant.PERSON, res.data.person)
                      this.$router.push({path : '/mypage'})
                  }else{
            this.$router.push({path : '/join'})
          }
              })
              .catch(()=>{
                  alert(`axios 실패!`)
              })
          }

}
const mutations = {
	LOGOUT (state){
		state.person = null
	},
	
}
export default { 
	name: 'student',
	namespaced:true,
	state,
	getters,
	actions,
	mutations,

}