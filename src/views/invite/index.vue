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
               <el-select v-model="form.state_id" class="w-100" placeholder="select state">
                  <el-option
                    v-for="state in form.states"
                    :label="state[0]"
                   :value="state[1]">
                  </el-option>
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
  import { newInvitation, createInvitation } from '@/api/coach/invite'

  export default {
    data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        jersey_no: '',
        states: [],
        school_id: ''
      }
    }
    },
    created() {
      this.fetchData()
    },
    methods: {
      onSubmit() {
        createInvitation(this.form)
        this.$message('submit!')
      },
      fetchData() {
        debugger
        newInvitation().then(response => {
          this.form.states = response.states
          this.form.school_id = response.school_id
        })
      },
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

