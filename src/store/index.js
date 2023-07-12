import { createStore } from "vuex";

export default createStore({
  state: {
    isOpen: false,
    login: "",
    password: "",
  },
  getters: {
    MODAL: (state) => {
      return state.isOpen;
    },
    LOGIN: (state) => {
      return state.login;
    },
    PASSWORD: (state) => {
      return state.password;
    },
  },
  mutations: {
    SET_MODAL: (state, payload) => {
      state.isOpen = payload;
    },
    SET_LOGIN: (state, payload) => {
      state.login = payload;
    },
    SET_PASSWORD: (state, payload) => {
      state.password = payload;
    },
  },
  actions: {
    OPEN_MODAL: (context) => {
      context.commit("SET_MODAL", true);
    },
    CLOSE_MODAL: (context) => {
      context.commit("SET_MODAL", false);
    },
    PUT_LOGIN: (context, payload) => {
      context.commit("SET_LOGIN", payload);
    },
    PUT_PASSWORD: (context, payload) => {
      context.commit("SET_PASSWORD", payload);
    },
  },
  modules: {},
});
