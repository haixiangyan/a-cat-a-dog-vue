import store from "../store/store"
let axios = store.state.axios

store.subscribe(() => {
  axios = store.state.axios
})

export default {
  getFavourites: (params) => {
    return axios
      .get(`/favourites`, {params})
      .then((response) => response.data)
  },
  getFavouriteById: (favouriteId) => {
    return axios
      .get(`/favourites/${favouriteId}`)
      .then((response) => response.data)
  },
  addFavourite: (data) => {
    return axios
      .post(`/favourites`, data)
      .then((response) => response.data)
  },
  deleteFavourite: (favouriteId) => {
    return axios
      .delete(`/favourites/${favouriteId}`)
      .then((response) => response.data)
  }
}
