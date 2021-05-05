import firebase from "firebase";
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

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
  count: number;
  user: User;
}

// InjectionKeyを定義する
export const key: InjectionKey<Store<State>> = Symbol();

// Storeを作成する
export const store = createStore<State>({
  state: {
    books: [],
    count: 0,
    user: { name: "", email: "" },
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
    resetCount({ commit }) {
      commit("resetCount");
    },
    // 認証
    signin({ commit }) {
      commit("signin");
    },
    signout({ commit }) {
      commit("signout");
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
    resetCount(state) {
      state.count = 0;
    },
    // 認証
    async signin(state) {
      // 認証先
      const provider = new firebase.auth.GoogleAuthProvider();

      // 認証実施
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
          state.user = {
            name: user?.displayName,
            email: user?.email,
          };
        })
        .catch((err) => {
          console.error(err);
          // エラー処理
        });
    },
    signout(state) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          state.user = { name: "", email: "" };
        });
    },
  },
});

// 独自のuserStoreメソッドを定義する
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useStore() {
  // InjectionKeyをuserStoreメソッドに渡す
  return baseUseStore(key);
}
