export default {
  namespaced: true,
  state: () => ({
    siderType: true
  }),
  mutations: {
    changeSiderType(state) {
      state.siderType = !state.siderType
    }
  }
}
