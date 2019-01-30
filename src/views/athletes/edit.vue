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
                <el-option label="LSM" value="lsm"/>
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
              <el-input type="number" v-model="form.height_in_feet" ></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="Height (in)">
              <el-input type="number" v-model="form.height_in_inches" ></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="Weight (lbs)">
              <el-input type="number" v-model="form.weight" ></el-input>
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
                <el-option label="Male" value="male"/>
                <el-option label="Female" value="female"/>
              </el-select>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="School"> 
               <el-select v-model="form.school_id" class="w-100" placeholder="select school">
                  <el-option
                    v-for="school in form.schools"
                    :label="school[0]"
                   :value="school[1]">
                  </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="State">
              <el-select v-model="form.state_id" class="w-100" placeholder="select state">
                <el-option
                  v-for="state in form.states"
                  :label="state[0]"
                 :value="state[1]">
                </el-option>
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
          <div>
            <el-form-item label="Image">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :on-exceed="handleExceed"
                :file-list="fileList">
                <el-button size="small" type="primary">Click to upload</el-button>
              </el-upload>
            </el-form-item>
          </div>
          <div class="text-center">
            <el-form-item>
              <el-button type="primary" @click="onSubmit" round>Update</el-button>
            </el-form-item>
          </div>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import { editUser, getUser } from '@/api/athlete/profile'

  export default {
    data() {
    return {
      fileList:  '',
      form: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirm: false,
        password_current: '',
        gender: '',
        schools:'',
        school:'',
        school_id:'',
        state:'',
        states:'',
        state_id:'',
        position: '',
        city: '',
        dominant_hand: '',
        height_in_feet: '',
        height_in_inches: '',
        weight: '',
        graduation_year: '',
        phone_number: '',
        link: '',
      }
    }
    },
    created() {
      this.fetchData()
    },
    methods: {

      handleRemove(file, fileList) {
            console.log(file, fileList);
          },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`Confirm removal ${ file.name } ？`);
      },
      onSubmit() {
        editUser(this.form)
        this.$message('submit!')
      },
      fetchData() {
        debugger
        getUser().then(response => {
          debugger
          this.form.first_name = response.first_name
          this.form.last_name = response.last_name
          this.form.password = response.password
          this.form.city = response.city
          this.form.gender = response.gender
          this.form.graduation_year = response.graduation_year
          this.form.email = response.email
          this.form.state = response.state
          this.form.schools = response.schools
          this.form.school = response.school
          this.form.school_id = response.school_id
          this.form.states = response.states
          this.form.state = response.state
          this.form.state_id = response.state_id
          this.form.height_in_feet = response.height_in_feet
          this.form.height_in_inches = response.height_in_inches
          this.form.weight = response.weight
          this.form.position = response.position
          this.form.link = response.link
          this.form.phone_number = response.phone_number
        })
      },
      onCancel() {
        this.$message({
          message: 'cancel!',
          type: 'warning'
        })
      }
    },
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

.upload-image {
    background: #2283c4;
    border-radius: 12px;
    color: white;
    height: 47px;
    width: 100%;
    position: absolute;
    margin-top: -30px;
}
</style>

