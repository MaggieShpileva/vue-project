import { createStore } from "vuex";

export default createStore({
  state: {
    isOpen: false,
  },
  getters: {
    MODAL: (state) => {
      return state.isOpen;
    },
  },
  mutations: {
    SET_MODAL: (state, payload) => {
      state.isOpen = payload;
    },
  },
  actions: {
    OPEN_MODAL: (context) => {
      context.commit("SET_MODAL", true);
    },
    CLOSE_MODAL: (context) => {
      context.commit("SET_MODAL", false);
    },
  },
  modules: {},
});
