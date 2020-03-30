<template lang="pug">
  .header
    nav
      .mode(
        v-for="(titleMode, index) in titleModes"
        :key="index"
        :class="{ 'active': titleMode === currentTitleMode }"
        @click="setCurrentTitleMode(titleMode)"
      )
        | {{ titleMode }}
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      titleModes: ['anime', 'manga']
    }
  },
  computed: {
    ...mapState({
      currentTitleMode: state => state.titleMode
    })
  },
  methods: {
    ...mapMutations({
      setCurrentTitleMode: 'setCurrentTitleMode'
    })
  }
}
</script>

<style lang="scss" scoped>
  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 64px;
    z-index: 10;
    nav {
      height: 100%;
      font-size: 18px;
      line-height: 64px;
      letter-spacing: 0.4px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 2px solid #56586D;
      .mode {
        padding: 0 16px;
        cursor: pointer;
        &:first-of-type {
          margin-right: 30px;
        }
        &::first-letter {
          text-transform: uppercase;
        }
        &.active {
          border-bottom: 2px solid white;
        }
      }
    }
  }
</style>
