<template>
  <div class="app-container">
    <el-row class="user-menu">
      <el-col :span="24">
        <el-table
          v-loading="listLoading"
          :data="list"
          element-loading-text="Loading"
          fit
          border
          header-row-class-name="sub-heading-2"
          highlight-current-row>
          <el-table-column label="Team">
            <template slot-scope="scope">
              <span>{{ scope.row.title }}</span>
            </template>
          </el-table-column>
          <el-table-column label="W" width="110" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.updated_at }}</span>
            </template>
          </el-table-column>
          <el-table-column label="L" width="110" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.created_at }}</span>
            </template>
          </el-table-column>
          <el-table-column label="Pts" width="110" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.created_at }}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>  
  </div>
</template>

<script>
  import { getList } from '@/api/university'

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

