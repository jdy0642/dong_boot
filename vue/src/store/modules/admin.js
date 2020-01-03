// import loginAPI from '@/api/loginAPI'
import Constant from '@/store/modules/mutation_types'
import axios from 'axios'

const state = {
	admin: {},
	sidebars : [
      {menu:"학생성적수정",link:"/mypageupdate"},
			{menu:"학생목록",link:"/studentlist"},
			{menu:"조건별 학생 검색",link:"/studentfindsome"},
			{menu:"ID 학생 검색",link:"/studentfindid"},
			{menu:"학생만검색",link:"/studentsearch"}
      ],
  isAuth: '',
}
const getters = {
	getAdmin : state => state.admin,
	getIsAuth: state => state.isAuth,
}
const actions = {
	login({commit},{context, userid, passwd}){
            
            let url = `${context}login`
            let headers = {
                'authorization': 'JWT fefege..',
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
            axios
            .post(url, {userid, passwd}, headers)
            .then(({data})=>{commit('LOGIN',data)})
            .catch(()=>{
                alert('AXIOS 실패')
            })
          },
  logout(){
    return this.$store.state.admin.person={},
    this.$router.push({path : '/'})
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
  LOGIN (state, data) {
        state.isAuth = true
        state.admin = data.person
    },
	LOGOUT (state){
		state.person = null
	},
}
export default { 
	name: 'admin',
	namespaced:true,
	state,
	getters,
	actions,
	mutations,

}