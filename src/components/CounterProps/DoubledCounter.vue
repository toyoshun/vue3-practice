<template>
  <button @click="doubleCounter">double</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "doubleCounter",

  props: { counter: { type: Number, default: 0 } },

  setup(props, {emit}) {
    const doubleCounter = () => {
      emit('doubleCounter',props.counter * 2)
    };
    return {
      doubleCounter
    };
  },
});
</script>
