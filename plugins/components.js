import Vue from 'vue'

import TitleList from '~/components/TitleList'
import TitleCard from '~/components/TitleCard'
import Header from '~/components/Header'
import TitleDescription from '~/components/TitleDescription'

export default () => {
  Vue.component('title-description', TitleDescription)
  Vue.component('title-list', TitleList)
  Vue.component('title-card', TitleCard)
  Vue.component('app-header', Header)
}
