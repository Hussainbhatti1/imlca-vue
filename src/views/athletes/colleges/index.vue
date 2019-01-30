<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      header-row-class-name="sub-heading-2"
      element-loading-text="Loading"
      highlight-current-row>
      <el-table-column align="center" label="College">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions">
        <template slot-scope="scope">
          <el-button v-if="scope.row.athlete_college_id" type="danger" size="small" icon="el-icon-circle-check-outline" @click="cancelEdit(scope.row)">Unfollow</el-button>
          <el-button v-else type="primary" size="small" icon="el-icon-edit" @click="followCollege(scope.row)">Follow</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { getList, collegeFollow, collegeUnfollow } from '@/api/athlete/college'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
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
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.list = response
        this.listLoading = false
      })
    },
    cancelEdit(row) {
      if (row.athlete_college_id != null){
        collegeUnfollow(row.id, row.athlete_college_id).then(response => {
            row.athlete_college_id = null
            this.listLoading = false
          })
        this.$message({
          message: 'The college has been Un-followed',
          type: 'warning'
        })
      }
    },

    followCollege(row) {
      if (row.athlete_college_id == null){
        collegeFollow(row.id).then(response => {
            row.athlete_college_id = response.athlete_college_id
            this.listLoading = false
          })
        this.$message({
          message: 'The college has been followed',
          type: 'success'
        })
      }
    },
  }
}
</script>
