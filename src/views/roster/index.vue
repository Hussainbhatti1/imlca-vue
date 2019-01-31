<template>
  <div class="app-container">
        <el-table
          v-loading="listLoading"
          :data="list"
          element-loading-text="Loading"
          fit
          border
          @row-click="rowClicked"
          header-row-class-name="sub-heading-2"
          highlight-current-row>
          <el-table-column label="Name">
            <template slot-scope="scope">
              <span>{{ scope.row.full_name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="Position"  align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.position }}</span>
            </template>
          </el-table-column>
          <el-table-column label="Goals"  align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.total_goals }}</span>
            </template>
          </el-table-column>
          <el-table-column label="Assists"  align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.total_assists }}</span>
            </template>
          </el-table-column>
          <el-table-column label="Turnovers"  align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.total_turnovers }}</span>
            </template>
          </el-table-column>
          <el-table-column label="Saves"  align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.total_saves }}</span>
            </template>
          </el-table-column>
          <el-table-column label="Action" align="center">
            <template slot-scope="scope">
              <el-button type="primary" size="small" icon="el-icon-edit" @click="onRowClick(scope.row)">Remove</el-button>
            </template>
          </el-table-column>
        </el-table>
  </div>
</template>

<script>
  import { getAthletes, removeAthlete } from '@/api/coach/athlete'

export default {
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
      getAthletes().then(response => {
        debugger
        this.list = response
        this.listLoading = false
      })
    },

    onRowClick(row) {
      if (row.id != null){
        removeAthlete(row.id).then(response => {
            row.id = null
            this.listLoading = false
          })
        this.$message({
          message: 'Athlete has been removed',
          type: 'success'
        })
      }
    },
  }
}
</script>

<style scoped>
.user-menu {
    margin-left:auto;
    margin-right:auto;
    width:100%;
}
.line{
  text-align: center;
}
</style>

