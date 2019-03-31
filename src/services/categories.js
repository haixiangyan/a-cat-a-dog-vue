import store from "../store/store"

let axios = store.state.axios

store.subscribe(() => {
  axios = store.state.axios
})
export default {
  getCategories: () => {
    return axios
      .get(`/categories`)
      .then((response) => response.data)
  }
}
