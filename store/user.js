export const state = () => ({
  user: null,
  isAdmin: false
})

export const actions = {
  fetchUser ({state, commit}, callback) {
    state.user
      ? callback && callback()
      : this.$api.getUser(
        body => {
          commit('setUser', body.user)
          commit('setIsAdmin', body.user.role)
          callback && callback()
        }
      )
  }
}

export const mutations = {
  setUser (state, user) {
    state.user = user
    state.isAdmin = false
  },
  setIsAdmin (state, role) {
    state.isAdmin = role === 'ROLE_ADMIN'
  }
}

export const getters = {
  user: state => state.user,
  isAdmin: state => state.isAdmin
}