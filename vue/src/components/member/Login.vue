<template>
<div>

<!-- <button type="button" class="btn btn-primary btn" data-toggle="modal" data-target="#myModal"> 로그인 </button>

<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>

        <h4 class="modal-title" id="myModalLabel">login</h4>
      </div>
      <div class="modal-body"> -->
      
                <div class="login-form">
                    <form method="post" @submit.prevent="onSubmit(userid, passwd)">
                        <h2 class="text-center">Login</h2>
                        <div class="form-group">
                            <input v-model="userid" type="text" class="form-control" placeholder="Username" required="required">
                        </div>
                        <div class="form-group">
                            <input v-model="passwd" type="password" class="form-control" placeholder="Password" required="required">
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block"  >Log in</button>
                        </div>
                        <div class="clearfix">
                            <label class="pull-left checkbox-inline"><input type="checkbox"> Remember me</label>
                            <a href="#" class="pull-right">Forgot Password?</a>
                        </div>        
                    </form>
                    <p class="text-center"><router-link to="/join">Create an Account</router-link></p>
                </div>

      <!-- </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary" >로그인 하기</button>
        <button type="button" class="btn btn-default" data-dismiss="modal" >Close</button>
      </div>
    </div>
  </div>
</div> -->

</div>
</template>
<script>
// import { mapActions } from 'vuex'
export default {
    name: 'login',
	data () {
		return {
            ctx: this.$store.state.common.context,
            userid:'',
            passwd:'',
            msg: ''
		}
	},
	methods : {
        onSubmit(uid, pwd){
            this.$store.dispatch('admin/login', {userid:uid, passwd:pwd, context: this.ctx})
            .then(()=>this.redirect())
            .catch(({message})=>this.msg = message)
        },
        /* ...mapActions('admin/login') */
        redirect(){
            this.$router.push(`/admin`)
        }
        
    }
}
</script>
<style scoped>
@import 'https://fonts.googleapis.com/css?family=Montserrat|Open+Sans';
.login-form {
	width: 340px;
    margin: 50px auto;
	}
    .login-form form {
    margin-bottom: 15px;
    padding: 30px;
    }
    .login-form h2 {
        margin: 0 0 15px;
    }
    .form-control, .btn {
        min-height: 38px;
        border-radius: 2px;
    }
    .btn {        
        font-size: 15px;
    }
</style>