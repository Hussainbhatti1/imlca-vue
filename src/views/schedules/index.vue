<template>
  <div class="app-container">
    <div class="mx-auto" v-for="n in 5" @click="onSlotSelection(2)" style="cursor: pointer;">
      <el-row type="flex" class="bottom-boarder-index">
        <el-col :span="10" class="my-auto text-center">
          <p class="heading-1" v-resize-text="{minFontSize: '30px'}">YorkTown</p>
          <p class="heading-1">11</p>
        </el-col>

        <el-col :span="4" class="my-auto sub-heading-1 text-center">
          <span class="sub-heading-1">3/3/2019</span><br>
          <span class="mt-3">VS</span><br>
          <span class="sub-heading-1">NY</span>
        </el-col>

        <el-col :span="10" class="my-auto text-center">
          <p class="heading-1" v-resize-text="{minFontSize: '30px'}">Versity</p>
          <p class="heading-1">4</p>
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
    onSlotSelection(id) {
      debugger
      this.$router.push({name: 'games', params: { id: id }})
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
</style>

