import store from "../store/store"
let axios = store.state.axios

store.subscribe(() => {
  axios = store.state.axios
})

export default {
  getSources: (params) => {
    return axios
      .get(`/sources`, {params})
      .then((response) => response.data)
  }
}
