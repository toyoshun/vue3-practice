import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { RootState } from "./module_interfaces";
import { counter } from "./counter";

export interface Book {
  name: string;
  author: string;
}

export interface User {
  name?: string | null;
  email?: string | null;
}

// ストアの型を定義する
export interface State {
  books: Book[];
  // count: number;
  user: User;
}

// InjectionKeyを定義する
// export const key: InjectionKey<Store<State>> = Symbol();
export const key: InjectionKey<Store<RootState>> = Symbol();

// Storeを作成する
export const store = createStore<RootState>({
  // state: {
  //   books: [],
  //   count: 0,
  //   user: { name: "", email: "" } as User,
  // },
  state: {
    version: '1.0.0',
  },

  // getters: {
  //   getFirstBook: (state) => {
  //     return state.books ? state.books[0] : ({} as Book);
  //   },
  //   // 回数取得
  //   getCount: (state) => {
  //     return state.count;
  //   },
  // },
  // actions: {
  //   add({ commit }, book: Book) {
  //     commit("add", { book: book });
  //   },
  //   // 加算
  //   increment({ commit }) {
  //     commit("increment");
  //   },
  //   // 減算
  //   decrement({ commit }) {
  //     commit("decrement");
  //   },
  //   resetCount({ commit }) {
  //     commit("resetCount");
  //   },
  //   // 認証
  //   signin({ commit }, user: User) {
  //     commit("signin", { user: user });
  //   },
  //   signout({ commit }) {
  //     commit("signout");
  //   },
  // },
  // mutations: {
  //   add(state, { book }) {
  //     state.books.push(book);
  //   },
  //   // カウンター
  //   increment(state) {
  //     state.count++;
  //   },
  //   decrement(state) {
  //     state.count--;
  //   },
  //   resetCount(state) {
  //     state.count = 0;
  //   },
  //   // 認証
  //   signin(state, { user }) {
  //     state.user = user;
  //   },
  //   signout(state) {
  //     state.user = { name: "", email: "" };
  //   },
  // },
  modules: {
    counter
  }
});

// 独自のuserStoreメソッドを定義する
export function useStore(): Store<RootState> {
  // InjectionKeyをuserStoreメソッドに渡す
  return baseUseStore(key);
}
