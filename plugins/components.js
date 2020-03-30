import Vue from 'vue'

import TitleList from '~/components/TitleList'
import TitleCard from '~/components/TitleCard'
import Header from '~/components/Header'

export default () => {
  Vue.component('title-list', TitleList)
  Vue.component('title-card', TitleCard)
  Vue.component('app-header', Header)
}
