<template>
  <div class="app-container">
    <h1 align="center" class="sub-heading-2">New Invitation</h1>
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
            <el-form-item label="Jersey No">
              <el-input type="number" v-model="form.jersey_no" ></el-input>
            </el-form-item>
          </div> 
          <div>  
            <el-form-item label="Email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
          </div>
          <div> 
            <el-form-item label="State">
              <el-select v-model="form.state" class="w-100" placeholder="select state">
                <el-option label="NY" value="New York"/>
                <el-option label="CA" value="Los Angeles"/>
              </el-select>
            </el-form-item> 
          </div>
          <div class="text-center">  
            <el-form-item>
              <el-button type="primary" @click="onSubmit" round>Submit</el-button>
            </el-form-item>
          </div>  
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
        jersey_no: '',
        state: '',
      }
    }
    },
    methods: {
      onSubmit() {
        this.$message('submit!')
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

