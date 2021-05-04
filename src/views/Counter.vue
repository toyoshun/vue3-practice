<template>
  <div class="counter">
    <button @click="decrementA()">-</button>
    {{ state.count }}
    <button @click="incrementA()">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      count: 0,
    });
    function incrementA() {
      state.count++;
    }
    function decrementA() {
      state.count--;
    }

    return {
      state,
      incrementA,
      decrementA,
    };
  },
});
</script>
