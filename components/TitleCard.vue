<template lang="pug">
  .title-card(
    :style="cardStyles"
    :class="{ 'active': index === activeTitleIndex }"
    @click="setActiveTitleIndex(index)"
  )
    .description
      .title {{ title.attributes.canonicalTitle }}
      .score {{ title.attributes.averageRating }} / 100
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    title: {
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
      activeTitleIndex: state => state.activeTitleIndex
    }),
    cardStyles () {
      const cardStyles = {}
      if (this.title.attributes.posterImage && 'medium' in this.title.attributes.posterImage) {
        cardStyles.backgroundImage = `url(${this.title.attributes.posterImage.medium})`
      } else {
        cardStyles.backgroundColor = '#FFF'
      }
      return cardStyles
    }
  },
  methods: {
    ...mapMutations({
      setActiveTitleIndex: 'setActiveTitleIndex'
    })
  }
}
</script>

<style lang="scss" scoped>
  .title-card {
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
    display: flex;
    &.active {
      width: 260px;
      height: 364px;
    }
    .description {
      width: 100%;
      background-color: rgba(0,0,0,0.3);
      background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 60%);
      padding: 12px;
      align-self: flex-end;
      .title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>
