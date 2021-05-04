<template>
  <div class="counter">
    <button @click="decrement">-</button>
    {{ count }}
    <button @click="increment">+</button>
  </div>
  <div>
    <CountResetButton />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";
import CountResetButton from "@/components/CountResetButton.vue";

export default defineComponent({
  components: {
    CountResetButton,
  },

  setup() {
    // const state = reactive({
    //   count: 0,
    // });

    // function incrementA() {
    //   state.count++;
    // }
    // function decrementA() {
    //   state.count--;
    // }

    // Storeを取得する
    const store = useStore();

    return {
      count: computed(() => store.state.count),
      increment: () => store.dispatch("increment"),
      decrement: () => store.dispatch("decrement"),
    };
  },
});
</script>
