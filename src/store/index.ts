import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface Book {
  name: string;
  author: string;
}

// ストアの型を定義する
export interface State {
  books: Book[],
  count: number;
}

// InjectionKeyを定義する
export const key: InjectionKey<Store<State>> = Symbol();

// Storeを作成する
export const store = createStore<State>({
  state: {
    books: [],
    count: 0,
  },
  getters: {
    getFirstBook: (state) => {
      return state.books ? state.books[0] : ({} as Book);
    },
    // 回数取得
    getCount: (state) => {
      return state.count;
    },
  },
  actions: {
    add({ commit }, book: Book) {
      commit("add", { book: book });
    },
    // 加算
    increment({ commit }) {
      commit("increment");
    },
    // 減算
    decrement({ commit }) {
      commit("decrement");
    },
  },
  mutations: {
    add(state, { book }) {
      state.books.push(book);
    },
    // カウンター
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
});

// 独自のuserStoreメソッドを定義する
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useStore() {
  // InjectionKeyをuserStoreメソッドに渡す
  return baseUseStore(key);
}
