<template>
<el-menu text-color="white" class="footer" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">PLAYER POINTS</el-menu-item>
  <el-menu-item index="2">TEAM SCHEDULE</el-menu-item>
  <el-menu-item index="3">TEAM RANKINGS</el-menu-item>
  <el-menu-item class="copyright" index='5'>© 2019 Copyright NILCA, Privacy Policy | Terms & Conditions</el-menu-item>
</el-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.el-menu-item:hover {
    background-color: #1675b5 !important;
}
.footer {
  background-color: black;
  decoration: none;
  line-height: 40px;
  border-radius: 0px !important;
  .footer-container {
    line-height: 58px;
    height: 60px;
    float: left;
    padding: 0 10px;
  }

  .copyright {
    font-family: Raleway;
    font-size: 15px;
    letter-spacing: 0px;
    float:right;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    color: red;
  }
  .el-menu-item{
    font-family: Raleway;
  }

  .menu-container {
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;

      position: relative;
      line-height: initial;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
        color: white;
      }
    }
  }
}
</style>

