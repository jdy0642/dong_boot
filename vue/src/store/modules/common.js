import * as types from '@/store/modules/mutation_types'
import axios from 'axios'
import Constant from '@/store/modules/mutation_types'

const state = {
	context: 'http://localhost:8080/',
	isAuth: '',
  errorState: '',
	sidebars : [
				{menu:"게시글 목록",link:"/list"},
				{menu:"게시글 검색",link:"/search"}
			]
}
const getters = {
	getErrorState: state => state.errorState,
  getIsAuth: state => state.isAuth,
  getContext: state => state.context,
  getSidebars: state => state.sidebars,
}
const actions = {
  async login(){
			let url = `${this.$store.state.context}/login`
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
					if(this.$store.state.person.role =="student"){
						this.$store.commit(Constant.SIDEBARS, 'studentsidebar')
						this.$router.push({path:'/mypage'})
					}else{
						this.$store.commit(Constant.SIDEBARS, 'adminsidebar')
						this.$router.push({path:'/admin'})
					}
					}else{
						alert(`로그인 실패 `)
						this.$router.push({path:'/login'})
					}
				})
			.catch(()=>{
				alert('axios 실패')
			})
		},
	async join(){
			let url = `${this.context}/join`
			let data = {
				userid: this.userid,
				passwd: this.passwd,
				name: this.name,
				birthday: this.birthday,
				ban:this.ban,
				male: this.male,
				hak: this.hak,
				score: this.score,
				role:this.role
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
                      this.$store.state.userid = res.data.person.userid
                      this.$store.state.passwd = res.data.person.passwd
                      this.$store.state.name = res.data.person.name
                      this.$store.state.birthday = res.data.person.birthday
                      this.$store.state.id = res.data.person.id
                      this.$router.push({path : '/mypage'})
                  }else{
            this.$router.push({path : '/join'})
          }
			})
			.catch(()=>{
				alert('악시오스 실패')
			})
		}
}
const mutations = {
  [types.ERROR_STATE] (state, errorState) {
    state.errorState = errorState
  },
  [types.IS_AUTH] (state, isAuth) {
    state.isAuth = isAuth
  },
  [types.CONTEXT] (state, context) {
    state.context = context
  },
  [types.SIDEBARS] (state, sidebars) {
    state.sidebars = sidebars
  },
  [types.HEADER_MESSAGE] (state, headingMessage) {
    state.headingMessage = headingMessage
  },
  LOGIN (state, person){
		state.person = person
	},
}
export default {
	name: 'common',
	namespaced : true,
	state,
	getters,
	actions,
	mutations
}