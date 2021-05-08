import { Module, ActionTree, GetterTree, MutationTree } from "vuex";
import { RootState } from "../module_interfaces";

export interface User {
  name?: string | null;
  email?: string | null;
}

// ストアの型を定義する
export interface State {
  user: User;
}

const state: State = {
  user: { name: "", email: "" } as User,
};

const actions: ActionTree<State, RootState> = {
  // 認証
  signin({ commit }, user: User) {
    commit("signin", { user: user });
  },

  signout({ commit }) {
    commit("signout");
  },
};

const getters: GetterTree<State, RootState> = {};

const mutations: MutationTree<State> = {
  // 認証
  signin(state, { user }) {
    state.user = user;
  },

  signout(state) {
    state.user = { name: "", email: "" };
  },
};

export const auth: Module<State, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
