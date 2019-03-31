import store from "../store/store"
let axios = store.state.axios

store.subscribe(() => {
  axios = store.state.axios
})

export default {
  getImages: (params) => {
    return axios
      .get(`/images/search`, {params})
      .then((response) => response.data)
  },
  getImageById: (imageId) => {
    return axios
      .get(`/images/${imageId}`)
      .then((response) => response.data)
  },
  getUploadedImages: (params) => {
    return axios
      .get(`/images`, {params})
      .then((response) => response.data)
  },
  uploadImage: (data) => {
    return axios
      .post(`/images/upload`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => response)
      .catch((error) => error.response)
  },
  deleteImage: (imageId) => {
    return axios
      .delete(`/images/${imageId}`)
      .then((response) => response.data)
  },
  analyzeImage: (imageId) => {
    return axios
      .get(`/images/${imageId}/analysis`)
      .then((response) => response.data)
  }
}
