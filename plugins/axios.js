export default function({ $axios, store }) {
  $axios.onRequest((config) => {
    const token = store.state.auth.token
    if (token) {
      $axios.setToken(store.state.auth.token, 'Bearer')
    } else {
      $axios.setToken(false)
    }
  })
}