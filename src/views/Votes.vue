<template>
    <div class="votes">
        <Header></Header>
        <h3>Voted Images</h3>
        <div class="image-list">
            <div class="image-item" v-for="image in imagesWithVote" :key="image.id">
                <el-card class="image-wrapper">
                    <img class="image" :src="image.url" alt="Image">
                    <div style="padding: 14px;">
                        <div class="image-action clearfix">
                            <time class="time">{{formatDate(image.vote.created_at)}}</time>
                            <el-button
                                    @click="deletingVote(image.vote.id)"
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
                <el-button type="primary" @click="deleteVote">Remove</el-button>
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
  import votesService from '../services/votes'

  export default {
    name: "Votes",
    data() {
      return {
        imagesWithVote: [],
        deletingVoteId: '',
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
        const votes = await votesService.getVotes({sub_id: this.user.subId})
        let imagesWithVote = []

        for (let i = 0; i < votes.length; i++) {
          const image = await imagesService.getImageById(votes[i].image_id)
          const imageWithVote = {...image, vote: votes[i]}
          imagesWithVote.push(imageWithVote)
        }

        this.imagesWithVote = imagesWithVote
      },
      deletingVote(id) {
        this.deletingVoteId = id
        this.isShowDialog = true
      },
      deleteVote: async function () {
        // Remove locally
        this.imagesWithVote = this.imagesWithVote.filter(image => image.vote.id !== this.deletingVoteId)
        // Send request to remove
        await votesService.deleteVote(this.deletingVoteId)
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
    .votes {
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
