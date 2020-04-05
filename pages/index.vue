<template lang="pug">
  .index.container
    title-description(:title="activeTitle.attributes")
    title-list(
      :class="{ 'hidden' : !titleListActive }"
      :titleList="titleList.data"
      v-click-outside="hideTitleList"
      :key="0"
    )
    transition(name="slide-in")
      .show-title-list(
        v-if="!titleListActive"
        @click.prevent="showTitleList"
      )
        svg-icon(name="collapse-arrow")
</template>

<script>
import { mapState } from 'vuex'

export default {

  async asyncData ({ app, store }) {
    return {
      titleList: await app[`$${store.state.titleMode}Repository`].index({ 'filter[status]': 'current', sort: '-averageRating' }),
      titleListActive: true
    }
  },
  data () {
    return {
      titleList: []
    }
  },
  computed: {
    ...mapState({
      activeTitleIndex: state => state.activeTitleIndex,
      titleMode: state => state.titleMode
    }),
    activeTitle () {
      return this.titleList.data[this.activeTitleIndex]
    }
  },
  watch: {
    async titleMode (newValue) {
      this.titleList = await this[`$${newValue}Repository`].index({ 'filter[status]': 'current', sort: '-averageRating' })
    }
  },
  methods: {
    hideTitleList () {
      this.titleListActive = false
    },
    showTitleList () {
      setTimeout(() => {
        this.titleListActive = true
      }, 10)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/mixins.scss';

  .index {
    position: relative;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100vh;
    padding-top: 128px;
    .show-title-list {
      cursor: pointer;
      position: absolute;
      bottom: 64px;
      display: flex;
      justify-content: center;
      left: calc(50% - 32px);
      width: 64px;
      height: 64px;
      transition: transform .2s ease;
      &:hover {
        transform: translateY(-5px);
      }
    }
  }
  @include slide-in();

</style>
