<template>
  <div class="app-container">
    <div class="mx-auto">
    <el-row class="min-height-65vh" >
      <el-col :span="24" class="my-auto">
        <el-row class="row">
          <el-col :sm="11"  class="mx-auto text-center">
            <p class="heading-1" v-resize-text="{minFontSize: '30px'}" style="margin-bottom: 30px;">{{ this.first_team_title }}</p>
            <div @click="firstteamAthletes" style="cursor: pointer;">
              <el-button type="primary">Add athletes</el-button>
            </div>
            <div class="show-goal">
              {{ this.first_team_goals }}
            </div>
          </el-col>

          <el-col :sm="1" class=" mx-auto text-center vs">VS</el-col>

          <el-col  :sm="11" class="mx-auto text-center">
            <p class="heading-1" v-resize-text="{minFontSize: '30px'}" style="margin-bottom: 30px;">{{ this.second_team_title }}</p>
            <div @click="secondteamAthletes" style="cursor: pointer;">
              <el-button type="primary">Add athletes</el-button>
            </div>
            <div class="show-goal">
              {{ this.second_team_goals }}
            </div>
          </el-col>
        </el-row>

        <el-row class="mt-5">
          <el-col :span="24" class="text-center bold-sub-heading-1 m-0">
            Venue : {{ this.state_title }}
          </el-col>

          <el-col :span="24" class="text-center bold-sub-heading-1 m-0">
            Time : {{ this.game_time }}
          </el-col>
        </el-row>
        <el-col :span="24" class="text-center m-top">
          <div class="mx-auto" @click="editGame" style="cursor: pointer;">
            <el-button type="primary" round>Edit</el-button>
          </div>
        </el-col>
      </el-col>
    </el-row>
    </div>
  </div>
</template>

<script>
  import { gameDetails } from '@/api/coach/game'
  import ResizeText from 'vue-resize-text'

export default {
 directives: {
    ResizeText
 },
  data() {
    return {
      listLoading: true,
      first_team: [],
      first_team_title: '',
      first_team_goals: '',
      game_time: '',
      state_title: '',
      second_team: [],
      second_team_title: '',
      second_team_goals: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    firstteamAthletes() {
      this.$router.push({name: 'edit_team_game', params: { id: this.first_team.id, game_id: this.$route.params.id }})
    },

    secondteamAthletes() {
      this.$router.push({name: 'edit_team_game', params: { id: this.second_team.id, game_id: this.$route.params.id }})
    },

    editGame() {
      this.$router.push({name: 'edit_game', params: { id: 2 }})
    },
    fetchData() {
      this.listLoading = true
      gameDetails(this.$route.params.id).then(response => {
        debugger
        this.first_team = response.first_team
        this.first_team_title = response.first_team_title
        this.first_team_goals = response.first_team_goals
        this.game_time = response.game_time
        this.state_title = response.state_title
        this.second_team = response.second_team
        this.second_team_title = response.second_team_title
        this.second_team_goals = response.second_team_goals
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
    width:100%;
}
.bottom-boarder-index {
  border-bottom: solid black 1px;
}

.m-top {
  margin-top: 10px;
}
</style>

