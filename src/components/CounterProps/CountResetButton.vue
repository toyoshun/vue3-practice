<template>
  <button @click="resetCounter">Reset</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ResetCount",

  setup(props, { emit }) {
    const resetCounter = () => {
      emit("resetCounter", 0);
    };
    return {
      resetCounter,
    };
  },
});
</script>
