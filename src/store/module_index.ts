import { createStore } from "vuex";
import counterModule from './modules/counter/index';
import { CounterStateTypes } from "@/store/module_interfaces";
import { CounterStoreModuleTypes } from "./modules/counter/types";

type StoreModules = {
  counter: CounterStateTypes;
};

export type Store = CounterStoreModuleTypes<Pick<StoreModules, "counter">>


export const store = createStore({
modules: {counterModule}
});

/**
 * Returns Whole Store Object
 */
 export function useStore(): Store {
  return store as unknown as Store;
}