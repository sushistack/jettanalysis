import { firebase } from '@firebase/app'

export const state = () => ({
  user: null,
  isAdmin: false
})

const getAndSetUser = (commit, user, callback, accessToken = null) => {
  commit('setUser', {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    accessToken: accessToken
  })
  callback && callback()
}

const handleError = (error, callback, message) => {
  callback && callback(`${message} (code: ${error && error.code}, ${error && error.message})`)
}

const getProvider = (providerType) => {
  switch (providerType) {
    case 'google': return new firebase.auth.GoogleAuthProvider()
    case 'facebook': return new firebase.auth.FacebookAuthProvider()
  }
}

export const actions = {
  registerUser ({state, commit}, {user, callback, errorCallback}) {
    state.user
      ? callback && callback()
      : this.$fire.auth.createUserWithEmailAndPassword(user.email, user.password)
          .then(() => {
            this.$fire.auth.currentUser.updateProfile({ displayName: user.username, photoURL: null })
              .then(() => { getAndSetUser(commit, this.$fire.auth.currentUser, callback) })
              .catch(e => handleError(e, errorCallback, '회원 정보등록에 실패했습니다.'))
          })
          .catch(e => handleError(e, errorCallback, '회원가입에 실패했습니다.'))
  },
  sininWithEmailPassword ({state, commit}, {user, callback, errorCallback}) {
    state.user
      ? callback && callback()
      : this.$fire.auth.signInWithEmailAndPassword(user.email, user.password)
          .then(() => { getAndSetUser(commit, this.$fire.auth.currentUser, callback) })
          .catch(e => handleError(e, errorCallback, '로그인에 실패했습니다.'))
  },
  signinWithSocial ({state, commit}, {providerType, callback, errorCallback}) {
    const provider = getProvider(providerType)
    state.user
      ? callback && callback()
      : firebase.auth().signInWithPopup(provider)
          .then(result => { getAndSetUser(commit, result.user, callback, result.credential.accessToken) })
          .catch(e => handleError(e, errorCallback, '로그인에 실패했습니다.'))
  },
  removeUser ({state, commit}) {
    commit('setUser', null)
  }
}

export const mutations = {
  setUser (state, user) {
    state.user = user
    state.isAdmin = false
  },
  setUserClaims (state, claims) {
    if (state.user) {
      state.user.displayName = claims.displayName
      state.user.photoURL = claims.photoURL
    }
  },
  setIsAdmin (state, role) {
    // state.isAdmin = role === 'ROLE_ADMIN'
  },
  ON_AUTH_STATE_CHANGED_MUTATION: async (state, { authUser, claims }) => {
    if (authUser) {
      state.user = {
        uid: authUser.uid,
        email: authUser.email,
        displayName: authUser.displayName,
        isAdmin: claims.admin
      }
    } else {
      state.user = null
    }
  }
}

export const getters = {
  user: state => state.user,
  isAdmin: state => state.isAdmin
}