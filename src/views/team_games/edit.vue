<template>
  <div class="app-container">
    <h1 align="center" class="sub-heading-2">{{ this.form.team_title }}</h1>
    <div class="mx-auto" v-for="n in 10">
      <el-row>
        <el-col :span="24">
          <el-form ref="form" :model="form" label-width="80px">
            <el-col :sm="6">
              <el-form-item label="Athlete">
                <el-select v-model="form.athlete" placeholder="select athlete">
                  <el-option label="A-1" value="athlete 1"/>
                  <el-option label="A-2" value="athlete 2"/>
                </el-select>
              </el-form-item>
            </el-col>  

            <el-col :sm="6" class="heading-1">
              <div>
                <el-form-item label="Turnovers">
                  <el-input type="number" v-model="form.turnovers"></el-input>
                </el-form-item>
              </div> 
            </el-col>

            <el-col :sm="4" class="heading-1">
              <div>
                <el-form-item label="Goals">
                  <el-input type="number" v-model="form.goals"></el-input>
                </el-form-item>
              </div> 
            </el-col>

            <el-col :sm="4" class="heading-1">
              <div>
                <el-form-item label="Assists">
                  <el-input type="number" v-model="form.assists"></el-input>
                </el-form-item>
              </div> 
            </el-col>

            <el-col :sm="4" class="heading-1">
              <div>
                <el-form-item label="Saves">
                  <el-input type="number" v-model="form.saves"></el-input>
                </el-form-item>
              </div> 
            </el-col>
          </el-form>
        </el-col>    
      </el-row>
    </div>
    <el-col :span="24" class="text-center mb-3">
      <div class="mx-auto" @click="onSubmit" style="cursor: pointer;">
        <el-button type="primary" round>Edit</el-button>
      </div>
    </el-col>
  </div>
</template>

<script>
  import { editTeamGame } from '@/api/coach/team_game'

  export default {
    data() {
    return {
      form: {
        game: [],
        team_game: [],
        team_title: '',
        athletes: []
      }
    }
    },
    created() {
      this.fetchData()
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
      },
      fetchData() {
        this.listLoading = true
        editTeamGame(this.$route.params.id, this.$route.params.game_id).then(response => {
          debugger
          this.form.game = response.game
          this.form.team_game = response.team_game
          this.form.divisions = response.divisions
          this.form.team_title = response.team_title
          this.form.athletes = response.athletes
          this.listLoading = false
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