<template>
  <div class="app-container">
    <h1 align="center" class="sub-heading-2">{{ this.form.team_title }}</h1>
    <div class="mx-auto" v-for="game_athlete in form.game_team_athletes">
      <el-row>
        <el-col :span="24">
          <el-form ref="form" :model="form" label-width="85px">
            <el-col :sm="6">
              <el-form-item label="Athlete"> 
                 <el-select v-model="game_athlete.athlete_team_id" class="w-100" placeholder="select athlete">
                    <el-option
                      v-for="athlete in form.athletes"
                      :label="athlete[0]"
                     :value="athlete[1]">
                    </el-option>
                </el-select>
              </el-form-item>
            </el-col>  

            <el-col :sm="6" class="heading-1">
              <div>
                <el-form-item label="Turnovers">
                  <el-input type="number" v-model="game_athlete.turnovers"></el-input>
                </el-form-item>
              </div> 
            </el-col>

            <el-col :sm="4" class="heading-1">
              <div>
                <el-form-item label="Goals">
                  <el-input type="number" v-model="game_athlete.goals"></el-input>
                </el-form-item>
              </div> 
            </el-col>

            <el-col :sm="4" class="heading-1">
              <div>
                <el-form-item label="Assists">
                  <el-input type="number" v-model="game_athlete.assists"></el-input>
                </el-form-item>
              </div> 
            </el-col>

            <el-col :sm="4" class="heading-1">
              <div>
                <el-form-item label="Saves">
                  <el-input type="number" v-model="game_athlete.saves"></el-input>
                </el-form-item>
              </div> 
            </el-col>
          </el-form>
        </el-col>    
      </el-row>
    </div>
    <el-col :span="24" class="text-center m-bottom">
      <div class="mx-auto" @click="onSubmit" style="cursor: pointer;">
        <el-button size="large" type="primary" round>Update</el-button>
      </div>
    </el-col>
  </div>
</template>

<script>
  import { editTeamGame, updateTeamGame } from '@/api/coach/team_game'

  export default {
    data() {
    return {
      form: {
        game: [],
        game_id: '',
        team_id: '',
        team_title: '',
        athletes: [],
        game_team_athletes: []
      }
    }
    },
    created() {
      this.fetchData(this.$route.params.id, this.$route.params.game_id)
    },
    methods: {
      onSubmit() {
        updateTeamGame(this.$route.params.id, this.$route.params.game_id, this.form)
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
          this.form.game_id = response.game_id
          this.form.team_id = response.team_id
          this.form.team_title = response.team_title
          this.form.athletes = response.athletes
          this.form.game_team_athletes = response.game_team_athletes
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

.m-bottom {
  margin-bottom: 10px;
}

.input-group-text {
  color: white;
  font-family: Raleway;
}
</style>