<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      header-row-class-name="sub-heading-2"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="position"
        label="Position"
        width="180">
      </el-table-column>
      <el-table-column
        prop="goals"
        label="Goals"
        width="180">
      </el-table-column>
      <el-table-column
        prop="assists"
        label="Assists"
        width="180">
      </el-table-column>
      <el-table-column
        prop="turnovers"
        label="Turnovers"
        width="180">
      </el-table-column>
      <el-table-column
        prop="saves"
        label="Saves"
        width="180">
      </el-table-column>
      <el-table-column
        prop="actions"
        label="Actions"
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { getList } from '@/api/college'

export default {
    data() {
      return {
        tableData: [{
          name: 'Trevor Baptiste',
          position: 'attack',
          goals: '0',
          assists:'0',
          turnovers:'0',
          saves:'0',
          actions:'Remove'

        },{
          name: 'Trevor Baptiste',
          position: 'attack',
          goals: '0',
          assists:'0',
          turnovers:'0',
          saves:'0',
          actions:'Remove'

        }, {
          name: 'Trevor Baptiste',
          position: 'attack',
          goals: '0',
          assists:'0',
          turnovers:'0',
          saves:'0',
          actions:'Remove'

        }, {
          name: 'Trevor Baptiste',
          position: 'attack',
          goals: '0',
          assists:'0',
          turnovers:'0',
          saves:'0',
          actions:'Remove'

        }, {
          name: 'Trevor Baptiste',
          position: 'attack',
          goals: '0',
          assists:'0',
          turnovers:'0',
          saves:'0',
          actions:'Remove'

        }, {
          name: 'Trevor Baptiste',
          position: 'attack',
          goals: '0',
          assists:'0',
          turnovers:'0',
          saves:'0',
          actions:'Remove'

        }, {
          name: 'Trevor Baptiste',
          position: 'attack',
          goals: '0',
          assists:'0',
          turnovers:'0',
          saves:'0',
          actions:'Remove'

        }, {
          name: 'Trevor Baptiste',
          position: 'attack',
          goals: '0',
          assists:'0',
          turnovers:'0',
          saves:'0',
          actions:'Remove'

        }, {
          name: 'Trevor Baptiste',
          position: 'attack',
          goals: '0',
          assists:'0',
          turnovers:'0',
          saves:'0',
          actions:'Remove'

        }]
      }
    },
  created() {
    this.fetchData()
  },
  methods: {
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
.line{
  text-align: center;
}
</style>

