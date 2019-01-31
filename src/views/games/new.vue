<template>
  <div class="app-container">
    <h1 align="center" class="sub-heading-2">Add Game</h1>
    <el-row>
      <el-col :sm="12" :offset="5">
        <el-form ref="form" :model="form" label-width="150px">
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

          <div> 
            <el-form-item label="Division">
              <el-select v-model="form.division_id" class="w-100" placeholder="select division">
                  <el-option
                    v-for="division in form.divisions"
                    :label="division[0]"
                   :value="division[1]">
                  </el-option>
              </el-select>
            </el-form-item> 
          </div>

          <div> 
            <el-form-item label="Tournament">
              <el-select v-model="form.tournament_id" class="w-100" placeholder="select tournament">
                  <el-option
                    v-for="tournament in form.tournaments"
                    :label="tournament[0]"
                   :value="tournament[1]">
                  </el-option>
              </el-select>
            </el-form-item> 
          </div>

          <div> 
            <el-form-item label="Conference">
              <el-select v-model="form.conference_id" class="w-100" placeholder="select conference">
                  <el-option
                    v-for="conference in form.conferences"
                    :label="conference[0]"
                   :value="conference[1]">
                  </el-option>
              </el-select>
            </el-form-item> 
          </div>

          <div> 
            <el-form-item label="School Team">
              <el-select v-model="form.school_team.team_id" class="w-100" placeholder="select team">
                <el-option
                  v-for="school_team in form.school_teams"
                  :label="school_team[0]"
                 :value="school_team[1]">
                </el-option>
              </el-select>
            </el-form-item> 
          </div>

          <div> 
            <el-form-item label="Game Time">
              <el-date-picker type="date" style="width: 100%" placeholder="Pick a date" v-model="form.game_time"></el-date-picker>
            </el-form-item>
          </div> 

          <div>  
            <el-form-item label="Goal">
              <el-input type="number" v-model="form.school_team.goal"></el-input>
            </el-form-item>
          </div>

          <div>  
            <el-form-item label="Oppoent Team"> 
              <el-select v-model="form.opponent_team.team_id" class="w-100" placeholder="select team">
                <el-option
                  v-for="opponent_team in form.opponent_teams"
                  :label="opponent_team[0]"
                 :value="opponent_team[1]">
                </el-option>
              </el-select>
            </el-form-item>
          </div>

          <div>  
            <el-form-item label="Goal">
              <el-input type="number" v-model="form.opponent_team.goal"></el-input>
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
  import { newGames, createGame } from '@/api/coach/game'

  export default {
    data() {
    return {
      form: {
        states: [],
        state_id: '',
        divisions: [],
        division_id: '',
        tournaments: [],
        tournament_id: '',
        conferences: [],
        conference_id: '',
        opponent_goals: '',
        school_teams: [],
        school_team: [],
        opponent_teams: [],
        opponent_team: [],
        game_time: new Date(),
      }
    }
    },
    created() {
      this.fetchData()
    },
    methods: {
      onSubmit() {
        createGame(this.form)
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
        newGames().then(response => {
          debugger
          this.form.states = response.states
          this.form.state_id = response.state_id
          this.form.divisions = response.divisions
          this.form.division_id = response.division_id
          this.form.game_time = response.game_time
          this.form.tournaments = response.tournaments
          this.form.tournament_id = response.tournament_id
          this.form.conferences = response.conferences
          this.form.conference_id = response.conference_id
          this.form.school_team = response.first_team
          this.form.opponent_team = response.second_team
          this.form.school_teams = response.school_teams
          this.form.opponent_teams = response.opponent_teams
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

