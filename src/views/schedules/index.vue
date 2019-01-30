<template>
  <div class="app-container">
    <div class="mx-auto" v-for="game in games" @click="onSlotSelection(game.id)" style="cursor: pointer;">
      <el-row type="flex" class="bottom-boarder-index">
        <el-col :span="10" class="my-auto text-center">
          <p class="heading-1" v-resize-text="{minFontSize: '30px'}">{{ game.first_team_title }}</p>
          <p class="heading-1">{{ game.first_team_goals }}</p>
        </el-col>

        <el-col :span="4" class="my-auto sub-heading-1 text-center">
          <span class="sub-heading-1">{{ game.game_time }}</span><br>
          <span class="mt-3">VS</span><br>
          <span class="sub-heading-1">{{ game.state_title }}</span>
        </el-col>

        <el-col :span="10" class="my-auto text-center">
          <p class="heading-1" v-resize-text="{minFontSize: '30px'}">{{ game.second_team_title }}</p>
          <p class="heading-1">{{ game.second_team_goals }}</p>
        </el-col>
      </el-row> 
    </div>  
  </div>
</template>

<script>
  import { getGames } from '@/api/coach/game'
  import ResizeText from 'vue-resize-text'

export default {
 directives: {
    ResizeText
 },
  data() {
    return {
      games: null,
      listLoading: true,
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    onSlotSelection(id) {
      debugger
      this.$router.push({name: 'show_game', params: { id: id }})
    },

    fetchData() {
      this.listLoading = true
      getGames().then(response => {
        debugger
        this.games = response
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
</style>

