<template>
  <div class="app-container">
    <h1 align="center" class="sub-heading-2">Edit Profile</h1>
    <el-row>
      <el-col :span="12" :offset="5">
        <el-form ref="form" :model="form" label-width="150px">
          <div>
            <el-form-item label="First Name">
              <el-input v-model="form.first_name"></el-input>
            </el-form-item>
          </div> 
          <div> 
            <el-form-item label="Last Name">
              <el-input v-model="form.last_name"></el-input>
            </el-form-item>
          </div> 
          <div>  
            <el-form-item label="Email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
          </div>  
          <div>
            <el-form-item label="Password">
              <el-input type="password" v-model="form.password" ></el-input>
            </el-form-item>
          </div> 
          <div>  
            <el-form-item label="Confirm Password">
              <el-input type="password" v-model="form.password_confirm"></el-input>
            </el-form-item>
          </div>
          <div> 
            <el-form-item label="Gender">
              <el-select v-model="form.gender" placeholder="select gender">
                <el-option label="M" value="male"/>
                <el-option label="F" value="female"/>
              </el-select>
            </el-form-item> 
          </div> 

          <div>  
            <el-form-item label="School"> 
              <el-select v-model="form.school" placeholder="select school">
                <el-option label="Darain" value="darain"/>
                <el-option label="Yorktown" value="yorktown"/>
                <el-option label="Westhill" value="westhill"/>
              </el-select>
            </el-form-item>
          </div>  
          <div> 
            <el-form-item label="Password">
              <el-input type="password" v-model="form.password_current"></el-input>
            </el-form-item>
          </div>  
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button @click="onCancel">Cancel</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirm: false,
        password_current: '',
        gender: '',
        school:'',
      }
    }
    },
    methods: {
      onSubmit() {
        this.$message('submit!')
      },
      onCancel() {
        this.$message({
          message: 'cancel!',
          type: 'warning'
        })
      }
    }
  }
</script>

<style scoped>
.user-menu {
    margin-left:auto;
    margin-right:auto;
    width:50%;
}

.input-group-text {
  color: white;
  font-family: Raleway;
}
</style>

