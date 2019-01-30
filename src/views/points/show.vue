<template>
  <div class="app-container">
    <div class="mx-auto">
    <el-row class="min-height-65vh">
      <el-col :sm="10">
        <h2 class="text-center heading-1">Athletes</h2>
        <div class="text-center" v-for="(athlete,index) in athletes" style="display:block;">
          <label> Athlete: {{ index + 1 }} </label>
          <p>{{ athlete.first_name + ' ' + athlete.last_name }}</p>
        </div>
      </el-col>

      <el-col :sm="14">
        <h2 class="text-center heading-1">Team</h2>
        <el-row>
          <el-col :sm="24" class="text-center sub-heading-1">
            Title : {{ this.title }}
          </el-col>
        </el-row>

        <el-row>
          <el-col :sm="24" class="text-center sub-heading-1">
            School : {{ this.school }}
          </el-col>
        </el-row>

        <el-row>
          <el-col :sm="24" class="text-center sub-heading-1">
            Gender : {{ this.gender }}
          </el-col>
        </el-row>

        <el-row>
        <el-col :span="24" class="text-center m-top">
          <div class="mx-auto" @click="editTeam" style="cursor: pointer;">
            <el-button type="primary" round>Edit</el-button>
          </div>
        </el-col>
        </el-row>
      </el-col>
    </el-row>
    </div>
  </div>
</template>

<script>
  import { teamDetails } from '@/api/coach/team'
  import ResizeText from 'vue-resize-text'

export default {
 directives: {
    ResizeText
 },
  data() {
    return {
      listLoading: true,
      title: '',
      gender: '',
      school: '',
      athletes: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    editTeam() {
      this.$router.push({name: 'edit_team', params: { id: this.$route.params.id }})
    },
    fetchData() {
      teamDetails(this.$route.params.id).then(response => {
        this.title = response.title
        this.gender = response.gender
        this.school = response.school
        this.athletes = response.team_athletes
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

