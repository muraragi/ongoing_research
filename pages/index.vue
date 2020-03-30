<template lang="pug">
  .index.container
    title-list(:titleList="titleList.data")
</template>

<script>
import { mapState } from 'vuex'

export default {

  async asyncData ({ app, store }) {
    return {
      titleList: await app[`$${store.state.titleMode}Repository`].index({ 'filter[status]': 'current', sort: '-averageRating' })
    }
  },
  data () {
    return {
      titleList: []
    }
  },
  watch: {
    async titleMode (newValue) {
      console.log()
      this.titleList = await this[`$${newValue}Repository`].index({ 'filter[status]': 'current', sort: '-averageRating' })
    }
  },
  computed: {
    ...mapState({
      activeTitleIndex: state => state.activeTitleIndex,
      titleMode: state => state.titleMode
    }),
    // backgroundImage () {
    //   let backgroundImage = ''
    //   if (this.activeTitle.attributes.coverImage && 'original' in this.activeTitle.attributes.coverImage) {
    //     backgroundImage = `url(${this.activeTitle.attributes.coverImage.original})`
    //   }
    //   return {
    //     backgroundImage
    //   }
    // },
    activeTitle () {
      return this.titleList.data[this.activeTitleIndex]
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
