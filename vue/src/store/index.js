import Vue from 'vue'
import Vuex from 'vuex'
import common from '@/store/modules/common'
import student from '@/store/modules/student'
import article from '@/store/modules/article'
import admin from '@/store/modules/admin'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
		student,
		article,
		common,
		admin
	},
	strict: true
})