// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
// import { State } from "@/store";
import { RootState } from "./module_interfaces";

declare module "@vue/runtime-core" {
  // this.$storeの型を宣言
  interface ComponentCustomProperties {
    // $store: Store<State>;
    $store: Store<RootState>;
  }
}
