<template>
    <div class="favourites">
        <Header></Header>
        <h3>Favourite Images</h3>
        <div class="image-list">
            <div class="image-item" :span="12" v-for="image in imagesWithFavourite" :key="image.id">
                <el-card class="image-wrapper">
                    <img class="image" :src="image.url" alt="Image">
                    <div style="padding: 14px;">
                        <div class="image-action clearfix">
                            <time class="time">{{formatDate(image.favourite.created_at)}}</time>
                            <el-button
                                @click="deletingFavourite(image.favourite.id)"
                                type="danger"
                                icon="el-icon-delete"
                                circle plain>
                            </el-button>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>

        <el-dialog
            title="Removing"
            :visible.sync="isShowDialog"
            width="240px"
            :before-close="closeDialog">
                <span>Sure to remove?</span>
                <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="deleteFavourite">Remove</el-button>
                <el-button type="default" @click="closeDialog">Cancel</el-button>
          </span>
        </el-dialog>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {formatDate} from "../utils/utils"
  import Header from '../components/Header'
  import imagesService from '../services/images'
  import favouritesService from '../services/faviourites'

  export default {
    name: "Favourites",
    data() {
      return {
        imagesWithFavourite: [],
        deletingFavouriteId: '',
        isShowDialog: false
      }
    },
    computed: {
      ...mapState(["user"])
    },
    mounted() {
      this.fetchImages()
    },
    methods: {
      formatDate,
      closeDialog() {
        this.isShowDialog = false
      },
      fetchImages: async function () {
        const favourites = await favouritesService.getFavourites({sub_id: this.user.subId})
        let imagesWithFavourite = []

        for (let i = 0; i < favourites.length; i++) {
          const image = await imagesService.getImageById(favourites[i].image_id)
          const imageWithFavourite = {...image, favourite: favourites[i]}
          imagesWithFavourite.push(imageWithFavourite)
        }

        this.imagesWithFavourite = imagesWithFavourite
      },
      deletingFavourite(id) {
        this.deletingFavouriteId = id
        this.isShowDialog = true
      },
      deleteFavourite: async function () {
        // Remove locally
        this.imagesWithFavourite = this.imagesWithFavourite.filter(image => image.favourite.id !== this.deletingFavouriteId)
        // Send request to remove
        await favouritesService.deleteFavourite(this.deletingFavouriteId)
        // Close dialog
        this.isShowDialog = false
        this.$message.success('Remove successfully')
      },
    },
    components: {
      Header
    }
  }
</script>

<style scoped lang="scss">
    .favourites {
        h3 {
            text-align: center;
        }

        .image-list {
            column-count: 2;
            column-gap: 0;
            .image-item {
                break-inside: avoid;
                .image-wrapper {
                    margin-bottom: 4px;

                    .image {
                        width: 100%;
                    }

                    .image-action {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                }
            }
        }
    }
</style>
