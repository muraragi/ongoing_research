export const state = () => ({
  counter: 0,
  activeTitleIndex: 0,
  titleMode: 'anime'
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  setActiveTitleIndex (state, index) {
    state.activeTitleIndex = index
  },
  setCurrentTitleMode (state, titleMode) {
    state.titleMode = titleMode
  }
}
