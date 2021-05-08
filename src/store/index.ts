import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { RootState } from "./module_interfaces";
import { counter } from "./modules/counter";
import { auth } from "./modules/auth";

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
  state: {
    version: '1.0.0',
  },
  modules: {
    counter,
    auth
  }
});

// 独自のuserStoreメソッドを定義する
export function useStore(): Store<RootState> {
  // InjectionKeyをuserStoreメソッドに渡す
  return baseUseStore(key);
}
