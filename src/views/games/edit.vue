<template>
  <div class="app-container">
    <h1 align="center" class="sub-heading-2">Edit Game</h1>
    <el-row>
      <el-col :sm="12" :offset="5">
        <el-form ref="form" :model="form" label-width="150px">
          <div> 
            <el-form-item label="State">
              <el-select v-model="form.state" class="w-100" placeholder="select state">
                <el-option label="NY" value="New York"/>
                <el-option label="CA" value="Los angeles"/>
              </el-select>
            </el-form-item> 
          </div>

          <div> 
            <el-form-item label="Division">
              <el-select v-model="form.division" class="w-100" placeholder="select division">
                <el-option label="L" value="L"/>
              </el-select>
            </el-form-item> 
          </div>

          <div> 
            <el-form-item label="Tournament">
              <el-select v-model="form.tournament" class="w-100" placeholder="select tournament">
                <el-option label="t1" value="T-1"/>
              </el-select>
            </el-form-item> 
          </div>

          <div> 
            <el-form-item label="Conference">
              <el-select v-model="form.conference" class="w-100" placeholder="select conference">
                <el-option label="c1" value="C-1"/>
              </el-select>
            </el-form-item> 
          </div>

          <div> 
            <el-form-item label="School Team">
              <el-select v-model="form.school_team" class="w-100" placeholder="select team">
                <el-option label="Darian" value="Darian"/>
              </el-select>
            </el-form-item> 
          </div>

          <div> 
            <el-form-item label="Game Time">
              <el-date-picker type="date" style="width: 100%" placeholder="Pick a date" v-model="form.date1"></el-date-picker>
            </el-form-item>
          </div> 

          <div>  
            <el-form-item label="Goal">
              <el-input type="number" v-model="form.school_goals"></el-input>
            </el-form-item>
          </div>

          <div>  
            <el-form-item label="Oppoent Team"> 
              <el-select v-model="form.opponent_team" class="w-100" placeholder="select team">
                <el-option label="Yorktown" value="yorktown"/>
                <el-option label="Westhill" value="westhill"/>
              </el-select>
            </el-form-item>
          </div>

          <div>  
            <el-form-item label="Goal">
              <el-input type="number" v-model="form.opponent_goals"></el-input>
            </el-form-item>
          </div>
        </el-form>
      </el-col>
    </el-row>

    <h1 align="center" class="sub-heading-2">Result</h1>
    <el-row>
      <el-col :sm="12" :offset="5">
        <el-form ref="form" :model="form" label-width="150px">
          <div> 
            <el-form-item label="Result">
              <el-select v-model="form.result" class="w-100">
                <el-option label="Completed" value="completed"/>
                <el-option label="Draw" value="draw"/>
                <el-option label="Canceled" value="canceled"/>
                <el-option label="Scheduled" value="scheduled"/>
              </el-select>
            </el-form-item> 
          </div>

          <div> 
            <el-form-item label="Winner">
              <el-select v-model="form.winner" class="w-100">
                <el-option label="Darian" value="Drain"/>
                <el-option label="Versity" value="Versity"/>
              </el-select>
            </el-form-item> 
          </div>
          <div class="text-center">
            <el-form-item>
              <el-button type="primary" @click="onSubmit" round>Create</el-button>
            </el-form-item>
          </div>  
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
    return {
      form: {
        state: '',
        division: '',
        tournament: '',
        conference: '',
        school_goals: '',
        opponent_goals: '',
        school_team:'',
        opponent_team:'',
        date1: '',
        result:'',
      }
    }
    },
    methods: {
      onSubmit() {
        this.$message('submit!')
      },
      onCancel() {
        this.$message({
          message: 'cancel!',
          type: 'warning'
        })
      }
    }
  }
</script>

<style scoped>
.user-menu {
    margin-left:auto;
    margin-right:auto;
    width:50%;
}

.input-group-text {
  color: white;
  font-family: Raleway;
}
</style>

