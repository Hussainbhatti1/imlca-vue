<template>
  <div class="app-container">
    <h1 align="center" class="sub-heading-2">Edit Profile</h1>
    <el-row>
      <el-col :sm="12" :offset="5">
        <el-form ref="form" :model="form" label-width="150px">
          <div>
            <el-form-item label="First Name">
              <el-input v-model="form.first_name"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="Last Name">
              <el-input v-model="form.last_name"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="Email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="Password">
              <el-input type="password" v-model="form.password" ></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="Confirm Password">
              <el-input type="password" v-model="form.password_confirm"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="City">
              <el-input v-model="form.city"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="Position">
              <el-select v-model="form.position" class="w-100" placeholder="select position">
                <el-option label="Attack" value="attack"/>
                <el-option label="Midfield" value="midfield"/>
                <el-option label="Defence" value="defence"/>
                <el-option label="Face_off" value="face_off"/>
                <el-option label="Goalie" value="goalie"/>
              </el-select>
            </el-form-item> 
          </div>
          <div>
            <el-form-item label="Dominant hand">
              <el-select v-model="form.dominant_hand" class="w-100" placeholder="select position">
                <el-option label="Left" value="left"/>
                <el-option label="Right" value="right"/>
              </el-select>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="Height (ft)">
              <el-input type="number" v-model="form.height_ft" ></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="Height (in)">
              <el-input type="number" v-model="form.height_in" ></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="Weight (lbs)">
              <el-input type="number" v-model="form.weight_lbs" ></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="Graduation Year">
              <el-select v-model="form.graduation_year" class="w-100" placeholder="select gender">
                <el-option label="2019" value="2019"/>
                <el-option label="2020" value="2020"/>
              </el-select>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="Phone Number">
              <el-input type="number" v-model="form.phone_number" ></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="Gender">
              <el-select v-model="form.gender" class="w-100" placeholder="select gender">
                <el-option label="M" value="male"/>
                <el-option label="F" value="female"/>
              </el-select>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="School"> 
              <el-select v-model="form.school" class="w-100" placeholder="select school">
                <el-option label="Darain" value="darain"/>
                <el-option label="Yorktown" value="yorktown"/>
                <el-option label="Westhill" value="westhill"/>
              </el-select>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="State">
              <el-select v-model="form.state" class="w-100" placeholder="select state">
                <el-option label="NY" value="new york"/>
                <el-option label="CA" value="log angeles"/>
              </el-select>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="Link">
              <el-input v-model="form.link"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="Current Password">
              <el-input type="password" v-model="form.password_current"></el-input>
            </el-form-item>
          </div>
          <div class="text-center">
            <el-form-item>
              <el-button type="primary" @click="onSubmit" round>Update</el-button>
              <el-button type="danger" @click="onCancel" round>Cancel my account</el-button>
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
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirm: false,
        password_current: '',
        gender: '',
        school:'',
        position: '',
        city: '',
        dominant_hand: '',
        height_ft: '',
        height_in: '',
        weight_lbs: '',
        graduation_year: '',
        phone_number: '',
        link: '',
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

