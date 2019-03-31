<template>
    <div class="home">
        <Header></Header>
        <div class="home-image-wrapper">
            <img class="home-image" :src="images[0].url" alt="image">
        </div>
        <div class="home-actions">
            <el-button @click="vote" class="vote-button" icon="el-icon-caret-top" circle></el-button>
            <el-button class="upload-button" size="small" icon="el-icon-upload" circle></el-button>
            <el-button @click="favourite" class="favourite-button" icon="el-icon-star-on" circle></el-button>
            <el-button @click="toggleAnalysis" class="analyze-button" size="small" icon="el-icon-info" circle></el-button>
            <el-button @click="updateImage" class="next-button" icon="el-icon-refresh" circle></el-button>
        </div>
        <Analysis v-if="isShowAnalysis" :imageAnalysis="imageAnalysis[0]"></Analysis>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Header from '../components/Header'
  import Analysis from '../components/Analysis'
  // Services
  import imagesService from '../services/images'
  import favouritesService from '../services/faviourites'
  import votesService from '../services/votes'

  export default {
    name: 'home',
    data() {
      return {
        images: [{url: ''}],
        imageAnalysis: [],
        isShowAnalysis: false
      }
    },
    computed: {
      ...mapState(["user"])
    },
    mounted() {
      this.updateImage()
    },
    methods: {
      updateImage: async function () {
        const images = await imagesService.getImages()
        const imageAnalysis = await this.analyze(images)
        this.images = images
        this.imageAnalysis = imageAnalysis
      },
      vote: async function () {
        await votesService.addVote({
          sub_id: this.user.subId,
          image_id: this.images[0].id,
          value: 1
        })
        this.$message.success('Voted it')
      },
      favourite: async function () {
        await favouritesService.addFavourite({
          sub_id: this.user.subId,
          image_id: this.images[0].id
        })
        this.$message.success('Added to favourite')
      },
      analyze: async function (images) {
        if (images.length === 0) {
          return
        }
        return await imagesService.analyzeImage(images[0].id)
      },
      toggleAnalysis() {
        this.isShowAnalysis = !this.isShowAnalysis
      }
    },
    components: {
      Header,
      Analysis
    }
  }
</script>

<style scoped lang="scss">
    @mixin buttonStyles($color) {
        color: $color;
        border-color: lighten($color, 20%);
        background-color: lighten($color, 45%)
    }
   .home {
       margin: 0 auto;
       width: 100%;
       .home-image-wrapper {
           display: flex;
           align-items: center;
           justify-content: center;
           width: 100%;
           height: 510px;
           overflow: hidden;
           border-radius: 12px;
           .home-image {
               width: 100%;
               vertical-align: top;
               border-radius: 8px;
           }
       }

       &-actions {
           margin-top: 4px;
           padding-top: 16px;
           display: flex;
           align-items: center;
           justify-content: space-around;
           border-top: 1px solid #ddd;
           .vote-button {
               &.el-button:focus, &.el-button:hover {
                   @include buttonStyles(#dd0031)
               }
           }
           .favourite-button {
               &.el-button:focus, &.el-button:hover {
                   @include buttonStyles(#fadb14)
               }
           }
           .analyze-button {
               &.el-button:focus, &.el-button:hover {
                   @include buttonStyles(#909399)
               }
           }
           .next-button {
               &.el-button:focus, &.el-button:hover {
                   @include buttonStyles(#67C23A)
               }
           }
           .el-button {
               transform: scale(1.2);
           }
       }
   }
</style>
