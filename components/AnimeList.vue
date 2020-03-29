<template lang="pug">
  .anime-list(:style="listOffset")
    anime-card(
      v-for="(anime, index) in animeList"
      :key="index" :anime="anime"
      :index="index"
    )
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    animeList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState({
      activeAnimeIndex: state => state.activeAnimeIndex
    }),
    listOffset () {
      return {
        left: `${this.activeAnimeIndex === 0 ? 30 : 130 - (this.activeAnimeIndex * 230)}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .anime-list {
    position: absolute;
    display: flex;
    align-items: flex-end;
    bottom: 60px;
    left: 30px;
    transition: left .2s ease;
  }
</style>
