import Vue from 'vue'

import AnimeList from '~/components/AnimeList'
import AnimeCard from '~/components/AnimeCard'

export default () => {
  Vue.component('anime-list', AnimeList)
  Vue.component('anime-card', AnimeCard)
}
