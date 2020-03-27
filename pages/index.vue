<template lang="pug">
  .container
    | Hello
</template>

<script>
export default {
  async asyncData ({ app }) {
    return {
      anime: await app.$animeRepository.index()
    }
  },
  data () {
    return {
      anime: []
    }
  },
  mounted () {
    console.log(this.$axios)
  }
}
</script>

<style lang="scss" scoped>

</style>
