<template>
  <div class="app-container">
    <h1 align="center" class="sub-heading-2">Edit Profile</h1>
    <el-row>
      <el-col :sm="12" :offset="5">
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
              <el-select v-model="form.gender" class="w-100" placeholder="select gender">
                <el-option label="M" value="male"/>
                <el-option label="F" value="female"/>
              </el-select>
            </el-form-item> 
          </div> 

          <div>  
            <el-form-item label="School"> 
              <el-select v-model="form.school" class="w-100" placeholder="select school">
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
          <div>
            <el-form-item label="Image">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :on-exceed="handleExceed"
                :file-list="fileList">
                <el-button size="small" class="upload-image" type="primary">Click to upload</el-button>
              </el-upload>
            </el-form-item>
          </div>
          <div class="text-center"> 
            <el-form-item>
              <el-button type="primary" @click="onSubmit" round>Create</el-button>
              <el-button type="danger" @click="onCancel" round>Cancel</el-button>
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
      fileList:  '',

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
     handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePreview(file) {
            console.log(file);
          },
          handleExceed(files, fileList) {
            this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
          },
          beforeRemove(file, fileList) {
            return this.$confirm(`Confirm removal ${ file.name } ？`);
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

.upload-image {
    background: #2283c4;
    border-radius: 12px;
    color: white;
    height: 47px;
    width: 100%;
    position: absolute;
    margin-top: -30px;
}
</style>

