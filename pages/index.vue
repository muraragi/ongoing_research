<template lang="pug">
  .index.container(:style="backgroundImage")
    anime-list(:animeList="animeList.data")
</template>

<script>
import { mapState } from 'vuex'

export default {

  async asyncData ({ app }) {
    return {
      animeList: await app.$animeRepository.index({ 'filter[status]': 'current', sort: 'popularityRank' })
    }
  },
  data () {
    return {
      animeList: []
    }
  },
  computed: {
    ...mapState({
      activeAnimeIndex: state => state.activeAnimeIndex
    }),
    backgroundImage () {
      let backgroundImage = ''
      if (this.activeAnime.attributes.coverImage && 'original' in this.activeAnime.attributes.coverImage) {
        backgroundImage = `url(${this.activeAnime.attributes.coverImage.original})`
      }
      return {
        backgroundImage
      }
    },
    activeAnime () {
      return this.animeList.data[this.activeAnimeIndex]
    }
  }
}
</script>

<style lang="scss" scoped>
  .index {
    position: relative;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100vh;
  }
</style>
