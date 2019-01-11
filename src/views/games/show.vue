<template>
  <div class="app-container">
    <div class="mx-auto">
    <el-row class="min-height-65vh" >
      <el-col :span="24" class="my-auto">
        <el-row class="row">
          <el-col :sm="11"  class="mx-auto text-center">
            <p class="heading-1" v-resize-text="{minFontSize: '30px'}" style="margin-bottom: 30px;">Darian</p>
            <div @click="addAthletes" style="cursor: pointer;">
              <el-button type="primary">Add athletes</el-button>
            </div>
            <div class="show-goal">
              11
            </div>
          </el-col>

          <el-col :sm="1" class=" mx-auto text-center vs">VS</el-col>

          <el-col  :sm="11" class="mx-auto text-center">
            <p class="heading-1" v-resize-text="{minFontSize: '30px'}" style="margin-bottom: 30px;">Versity</p>
            <div @click="addAthletes" style="cursor: pointer;">
              <el-button type="primary">Add athletes</el-button>
            </div>
            <div class="show-goal">
              4
            </div>
          </el-col>
        </el-row>

        <el-row class="mt-5">
          <el-col :span="24" class="text-center bold-sub-heading-1 m-0">
            Venue : NY
          </el-col>

          <el-col :span="24" class="text-center bold-sub-heading-1 m-0">
            Time : 3/1/2019
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

