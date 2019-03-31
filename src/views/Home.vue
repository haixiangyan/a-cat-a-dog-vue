<template>
    <div class="home">
        <md-button>Default</md-button>
    </div>
</template>

<script>
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
    components: {}
  }
</script>
