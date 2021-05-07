import { GetterTree } from "vuex";
import {
  CounterGettersTypes,
  CounterStateTypes,
  RootState
} from "../../module_interfaces";

export const getters: GetterTree<CounterStateTypes, RootState> &
  CounterGettersTypes = {
  counterValue: (state: CounterStateTypes) => {
    return state.counter || 0;
  },
  doubledCounter: (state: CounterStateTypes) => {
    return state.counter || 0 * 2;
  }
};