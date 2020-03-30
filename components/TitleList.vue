<template lang="pug">
  .title-list(:style="listOffset")
    title-card(
      v-for="(title, index) in titleList"
      :key="index" :title="title"
      :index="index"
    )
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    titleList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState({
      activeTitleIndex: state => state.activeTitleIndex
    }),
    listOffset () {
      return {
        left: `${this.activeTitleIndex === 0 ? 30 : 130 - (this.activeTitleIndex * 230)}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .title-list {
    position: absolute;
    display: flex;
    align-items: flex-end;
    bottom: 60px;
    left: 30px;
    transition: left .2s ease;
  }
</style>
