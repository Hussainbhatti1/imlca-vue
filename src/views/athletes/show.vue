<template>
  <div class="app-container">
    <div class="mx-auto">
      <el-row>
        <el-col :sm="12">
          <div class="text-center">
          </div>
          <p class="heading-1 text-center mt-3">Athlete 30</p>
          <div class="text-center sub-heading-1">
            <p>Class of: 2020</p>
            <p>Darian</p>
            <p>NY</p>
          </div><br>

          <p class="heading-1 text-center">Player Facts</p>
          <div class="text-center sub-heading-1">
            <p>Height: 6.2</p>
            <p>Weight: 70</p>
            <p>Position: attack</p>
            <p>Dominant Hand: left</p>
          </div><br>

          <p class="heading-1 text-center">Contact</p>
          <div class="text-center sub-heading-1">
            <p>Phone: (34424)-543-456</p>
            <p>Email: something@gmail.com</p>
          </div><br>
        </el-col>

        <el-col :sm="12">
          <div class="text-center">
          </div>
          <p class="heading-1 text-center mt-3">Stats</p>
          <div class="text-center sub-heading-1">
            <p>Goals: 31</p>
            <p>Assissts: 8</p>
            <p>Saves: 3</p>
            <p>Turnovers: 0</p>
          </div><br>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import { getList } from '@/api/university'
  import ResizeText from 'vue-resize-text'

export default {
 directives: {
    ResizeText
 },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    addAthletes() {
      debugger
      this.$router.push({name: 'team_games', params: { game_id: 2, id: 1 }})
    },

    editGame() {
      debugger
      this.$router.push({name: 'edit_game', params: { id: 2 }})
    },
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        debugger
        this.list = response
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

