<template>
  <div class="app-container">
    <h1 align="center" class="sub-heading-2">Edit Team</h1>
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
                <el-option label="Male" value="male"/>
                <el-option label="Female" value="female"/>
              </el-select>
            </el-form-item>
          </div>

          <el-form-item label="Athlete" v-for="(team_athlete, index) in form.team_athletes">
            <el-button type="primary" @click="deleteRow(index)" size="mini">Delete</el-button>
            <el-select v-model="team_athlete.athlete_id" class="w-100" placeholder="select athlete">
              <el-option
                v-for="athlete in form.athletes"
                :label="athlete[0]"
               :value="athlete[1]">
              </el-option>
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
  import { teamDetails, editTeam } from '@/api/coach/team'

  export default {
    data() {
    return {
      form: {
        gender: '',
        title: '',
        athletes: [],
        team_athletes: []
      },

       inputs: []
    }
    },
    created() {
      this.fetchData()
    },
    methods: {

     addRow() {
          debugger
          this.form.team_athletes.push({
          })
        },

        fetchData() {
          teamDetails(this.$route.params.id).then(response => {
            debugger
            this.form.title = response.title
            this.form.gender = response.gender
            this.form.athletes = response.athletes
            this.form.team_athletes = response.athlete_teams
          })
        },

        deleteRow(index) {
          this.form.team_athletes.splice(index,1)
        },

      onSubmit() {
        debugger
        editTeam(this.$route.params.id, this.form)
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

