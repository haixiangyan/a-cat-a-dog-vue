import store from "../store/store"

let axios = store.state.axios

store.subscribe(() => {
  axios = store.state.axios
})

export default {
  getVotes: (params) => {
    return axios
      .get(`/votes`, {params})
      .then((response) => response.data)
  },
  getVoteById: (voteId) => {
    return axios
      .get(`/votes/${voteId}`)
      .then((response) => response.data)
  },
  addVote: (data) => {
    return axios
      .post(`/votes`, data)
      .then((response) => response.data)
  },
  deleteVote: (voteId) => {
    return axios
      .delete(`/votes/${voteId}`)
      .then((response) => response.data)
  }
}
