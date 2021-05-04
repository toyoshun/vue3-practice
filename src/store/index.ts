import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface Book {
  name: string;
  author: string;
}

// ストアの型を定義する
export interface State {
  books: Book[];
}

// InjectionKeyを定義する
export const key: InjectionKey<Store<State>> = Symbol();

// Storeを作成する
export const store = createStore<State>({
  state: {
    books: [
      { name: "hoge1", author: "fuga" },
      { name: "hoge2", author: "fuga" },
    ],
  },
  getters: {
    getFirstBook: (state) => {
      return state.books ? state.books[0] : ({} as Book);
    },
  },
  actions: {
    add({ commit }, book: Book) {
      commit("add", { book: book });
    },
  },
  mutations: {
    add(state, { book }) {
      state.books.push(book);
    },
  },
});

// 独自のuserStoreメソッドを定義する
export function useStore() {
  // InjectionKeyをuserStoreメソッドに渡す
  return baseUseStore(key);
}
