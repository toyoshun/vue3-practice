import { Module, ActionTree, GetterTree, MutationTree } from "vuex";
import { RootState } from "../module_interfaces";

// ストアの型を定義する
export type State = {
  counter: number;
}

const state: State = {
  counter: 0,
};

const actions: ActionTree<State, RootState> = {
  // 加算
  increment({ commit }) {
    commit("increment");
  },
  // 減算
  decrement({ commit }) {
    commit("decrement");
  },
  resetCount({ commit }) {
    commit("resetCount");
  },
};

const getters: GetterTree<State, RootState> = {
  // 2倍取得
  doubledCounter: (state: State) => {
    return state.counter * 2;
  },
};

const mutations: MutationTree<State> = {
  // カウンター
  increment(state) {
    state.counter++;
  },
  decrement(state) {
    state.counter--;
  },
  resetCount(state) {
    state.counter = 0;
  },
};

export const counter: Module<State, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
