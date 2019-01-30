import { login, register, getInfo } from '@/api/coach/login'
import { getToken, setToken, removeToken, setUser } from '@/utils/auth'


const user = {
  state: {
    token: getToken(),
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.email
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          debugger
          const data = response
          setUser(data)
          setToken(data.auth_token)
          commit('SET_TOKEN', data.auth_token)
          resolve()
        }).catch(error => {
          debugger
          reject(error)
        })
      })
    },

    Register({ commit }, userInfo) {
      const firstname = userInfo.first_name
      const lastname = userInfo.last_name
      const phone = userInfo.phone_no
      const email = userInfo.email
      const password = userInfo.password
      return new Promise((resolve, reject) => {
        register(firstname, lastname, phone, email, password).then(response => {
          const data = response
          setToken(data.auth_token)
          commit('SET_TOKEN', data.auth_token)
          resolve()
        }).catch(error => {
          debugger
          reject(error)
        })
      })
    },
    // 获取用户信息

    // 登出
    LogOut({ commit, state }) {
       return new Promise((resolve, reject) => {
          commit('SET_TOKEN', '')
          removeToken()
          localStorage.clear();
          resolve();
        });
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
