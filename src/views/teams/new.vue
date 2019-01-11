<template>
  <div class="app-container">
    <h1 align="center" class="sub-heading-2">Add Team</h1>
    <el-row>
      <el-col :sm="12" :offset="5">
        <el-form ref="form" :model="form" label-width="150px">
          <div>
            <el-form-item label="Title">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
          </div>

          <div>
            <el-form-item label="Gender">
              <el-select v-model="form.gender" class="w-100" placeholder="select gender">
                <el-option label="M" value="Male"/>
                <el-option label="F" value="Female"/>
              </el-select>
            </el-form-item>
          </div>

          <el-form-item label="Athlete" v-for="(input, index) in inputs">
            <el-button type="primary" @click="deleteRow(index)" size="mini">Delete</el-button>
            <el-select v-model="input.one" class="w-100" placeholder="select athlete">
              <el-option label="Athlete 1" value="athlete 1"/>
              <el-option label="Athlete 2" value="athlete 2"/>
              <el-option label="Athlete 3" value="athlete 3"/>
            </el-select>
          </el-form-item>
          <el-button type="primary" @click="addRow" round>Add athlete</el-button>

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
        gender: '',
        title: '',
      },

       inputs: []
    }
    },
    methods: {

     addRow() {
          this.inputs.push({
            one: '',
            two: ''
          })
        },
        deleteRow(index) {
          this.inputs.splice(index,1)
        },

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

