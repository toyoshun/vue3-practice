import { Module } from "vuex";
import { CounterStateTypes, RootState } from "@/store/module_interfaces";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";

// Module
const counterModule: Module<CounterStateTypes, RootState> = {
  state,
  getters,
  mutations,
  actions
};

export default counterModule;