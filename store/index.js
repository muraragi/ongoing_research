export const state = () => ({
  counter: 0,
  activeAnimeIndex: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  setActiveAnimeIndex (state, index) {
    state.activeAnimeIndex = index
  }
}
