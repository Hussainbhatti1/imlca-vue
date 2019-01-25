<template>
  <div class="app-container">
    <div class="mx-auto">
      <el-row>
        <el-col :sm="12">
          <div class="text-center">
          </div>
          <p class="heading-1 text-center mt-3">{{ this.user.first_name }} {{ this.user.last_name }}</p>
          <div class="text-center sub-heading-1">
            <p>Class of: {{ this.user.graduation_year }}</p>
            <p>{{ this.user.school }}</p>
            <p>{{ this.user.state }}</p>
          </div><br>

          <p class="heading-1 text-center">Player Facts</p>
          <div class="text-center sub-heading-1">
            <p>Height: {{ this.user.height_in_feet }}.{{ this.user.height_in_inches }}</p>
            <p>Weight: {{ this.user.weight }}</p>
            <p>Position: {{ this.user.position }}</p>
            <p>Dominant Hand: {{ this.user.dominant_hand }}</p>
          </div><br>

          <p class="heading-1 text-center">Contact</p>
          <div class="text-center sub-heading-1">
            <p>Phone: {{ this.user.phone_number }}</p>
            <p>Email: {{ this.user.email }}</p>
          </div><br>
        </el-col>

        <el-col :sm="12">
          <div class="text-center">
          </div>
          <p class="heading-1 text-center mt-3">Stats</p>
          <div class="text-center sub-heading-1">
            <p>Goals: {{ this.user.goals }}</p>
            <p>Assissts: {{ this.user.assists }}</p>
            <p>Saves: {{ this.user.saves }}</p>
            <p>Turnovers: {{ this.user.turnovers }}</p>
          </div><br>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import { getUser } from '@/utils/auth'
  import { getList } from '@/api/college'
  import ResizeText from 'vue-resize-text'

export default {
 directives: {
    ResizeText
 },
  data() {
    return {
      list: null,
      listLoading: true,
      user: {
        first_name: '',
        last_name: '',
        graduation_year: '',
        email: '',
        state: '',
        school: '',
        height_in_feet: '',
        height_in_inches: '',
        weight: '',
        position: '',
        dominant_hand: '',
        phone_number: '',
        goals: '',
        assists: '',
        saves: '',
        turnovers: ''

      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    addAthletes() {
      this.$router.push({name: 'team_games', params: { game_id: 2, id: 1 }})
    },

    editGame() {
      this.$router.push({name: 'edit_game', params: { id: 2 }})
    },
    fetchData() {
      debugger
      var athlete = getUser()
      this.user.first_name = athlete.first_name
      this.user.last_name = athlete.last_name
      this.user.graduation_year = athlete.graduation_year
      this.user.email = athlete.email
      this.user.state = athlete.state
      this.user.school = athlete.school
      this.user.height_in_feet = athlete.height_in_feet
      this.user.height_in_inches = athlete.height_in_inches
      this.user.weight = athlete.weight
      this.user.position = athlete.position
      this.user.goals = athlete.goals
      this.user.assists = athlete.assists
      this.user.saves = athlete.saves
      this.user.turnovers = athlete.turnovers
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

