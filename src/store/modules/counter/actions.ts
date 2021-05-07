import { ActionTree } from "vuex";
// import { RootState } from '@/store';
// import { State } from './state';
// import { Mutations } from './mutations';
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";
import {
  CounterActionsTypes,
  CounterStateTypes,
  RootState
} from "@/store/module_interfaces";

export const actions: ActionTree<CounterStateTypes, RootState> &
  CounterActionsTypes = {
  [ActionTypes.GET_COUNTER]({ commit }, payload: number) {
    commit(MutationTypes.SET_COUNTER, payload);
  }
};