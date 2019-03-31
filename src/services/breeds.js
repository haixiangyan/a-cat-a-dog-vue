import store from "../store/store"

let axios = store.state.axios

store.subscribe(() => {
  axios = store.state.axios
})

export default {
  getBreeds: (params) => {
    return axios
      .get(`/breeds`, {
        params
      })
      .then((response) => response.data)
  },
  getBreedById: (breedId) => {
    return axios
      .get(`/breeds/${breedId}`)
      .then((response) => response.data)
  }
}
