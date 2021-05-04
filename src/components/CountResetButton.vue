<template>
    <button @click="resetCount">Reset</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: 'ResetCount',

  setup() {
    // Storeを取得する
    const store = useStore();

    return {
      resetCount: () => store.dispatch("resetCount"),
    };
  },
});
</script>
