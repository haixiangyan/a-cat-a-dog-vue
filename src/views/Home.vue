<template>
    <div class="home">
        <Header></Header>
    </div>
</template>

<script>
  import Header from '../components/Header'
  import imagesService from '../services/images'

  export default {
    name: 'home',
    mounted() {
      imagesService
        .getImages()
        .then(images => {
          console.log(images)
        })
    },
    components: {
      Header
    }
  }
</script>
