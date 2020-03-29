<template lang="pug">
  .anime-card(
    :style="cardStyles"
    :class="{ 'active': index === activeAnimeIndex }"
    @click="setActiveAnimeIndex(index)"
  )
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    anime: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapState({
      activeAnimeIndex: state => state.activeAnimeIndex
    }),
    cardStyles () {
      const cardStyles = {}
      if (this.anime.attributes.posterImage && 'medium' in this.anime.attributes.posterImage) {
        cardStyles.backgroundImage = `url(${this.anime.attributes.posterImage.medium})`
      } else {
        cardStyles.backgroundColor = '#FFF'
      }
      return cardStyles
    }
  },
  methods: {
    ...mapMutations({
      setActiveAnimeIndex: 'setActiveAnimeIndex'
    })
  }
}
</script>

<style lang="scss" scoped>
  .anime-card {
    width: 200px;
    height: 280px;
    border-radius: 6px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 30px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    transition: width .2s ease, height .2s ease;
    transform-origin: bottom left;
    &.active {
      width: 260px;
      height: 364px;
    }
  }
</style>
