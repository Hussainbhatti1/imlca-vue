<template>
  <div class="app-container">
    <h1 align="center" class="sub-heading-2">Edit Profile</h1>
    <el-row class="user-menu">
      <el-col :span="20" :offset="2">
        <el-form ref="form" :model="form" label-width="120px">
          <div class="input-group input-group-text">
            <el-form-item label="First Name" class="input-group-prepend input-group-prepend-right">
              <el-input v-model="form.first_name"></el-input>
            </el-form-item>
          </div> 
          <div class="input-group input-group-text"> 
            <el-form-item label="Last Name" class="input-group-prepend input-group-prepend-right">
              <el-input v-model="form.last_name"></el-input>
            </el-form-item>
          </div> 
          <div class="input-group input-group-text">  
            <el-form-item label="Email" class="input-group-prepend input-group-prepend-right">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
          </div>  
          <div class="input-group input-group-text"> 
            <el-form-item label="Password" class="input-group-prepend input-group-prepend-right">
              <el-input type="password" v-model="form.password" ></el-input>
            </el-form-item>
          </div> 
          <div class="input-group input-group-text">  
            <el-form-item label="Confirm Password" class="input-group-prepend input-group-prepend-right" label-width="150px">
              <el-input type="password" v-model="form.password_confirm"></el-input>
            </el-form-item>
          </div>

          <div class="input-group input-group-text"> 
            <el-form-item label="Gender" class="input-group-prepend input-group-prepend-right">
              <el-select v-model="form.gender" placeholder="select gender">
                <el-option label="M" value="male"/>
                <el-option label="F" value="female"/>
              </el-select>
            </el-form-item> 
          </div> 

          <div class="input-group input-group-text">  
            <el-form-item label="School" class="input-group-prepend input-group-prepend-right"> 
              <el-select v-model="form.school" placeholder="select school">
                <el-option label="Darain" value="darain"/>
                <el-option label="Yorktown" value="yorktown"/>
                <el-option label="Westhill" value="westhill"/>
              </el-select>
            </el-form-item>
          </div>  
          <div class="input-group input-group-text"> 
            <el-form-item label="Current Password" class="input-group-prepend input-group-prepend-right" label-width="150px">
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
.line{
  text-align: center;
}

.custom-select select {
    display: inline-block;
    padding: 4px 3px 3px 5px;
    margin: 0;
    font: inherit;
    outline:none; /* remove focus ring from Webkit */
    line-height: 1.2;
    background: #000;
    color:white;
    border:0;
}


.input-group-text {
  color: white;
  padding-left: 30px;
  font-family: Raleway;
}
</style>

