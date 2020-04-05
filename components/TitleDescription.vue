<template lang="pug">
  .title-description
    .left
      h2 Description:
      p {{ title.synopsis }}
    .right
      h2 {{ title.canonicalTitle }}
      img(
        v-if="title.coverImage"
        :src="title.coverImage.original"
      )
      img(
        v-else
        :src="title.posterImage.original"
      )
</template>

<script>
export default {
  props: {
    title: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .title-description {
    width: 100%;
    max-width: 1404px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    p {
      max-width: 600px;
    }
    h2 {
      margin-top: 0;
    }
    .left {
      width: 50%;
      margin-right: 64px;
    }
    .right {
      display: flex;
      flex-direction: column;
      width: 50%;
      max-height: 730px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
</style>
