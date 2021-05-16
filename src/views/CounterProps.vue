<template>
  <div class="counter">
    <button @click="decrement">-</button>
    {{ state.counter }}
    <button @click="increment">+</button>
  </div>
  <div>
    <CountResetButton @resetCounter="resetCounter" />
    <DoubledCounterButton
      :counter="state.counter"
      @doubleCounter="state.counter = $event"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import CountResetButton from "@/components/CounterProps/CountResetButton.vue";
import DoubledCounterButton from "@/components/CounterProps/DoubledCounter.vue";

export default defineComponent({
  components: {
    CountResetButton,
    DoubledCounterButton,
  },

  setup() {
    const state = reactive({
      counter: 0,
    });

    const increment = () => {
      state.counter++;
    };

    const decrement = () => {
      state.counter--;
    };

    const resetCounter = (counter: number) => {
      state.counter = counter;
    };

    const doubledValue = (counter: number) => {
      state.counter = counter;
    };

    return { state, increment, decrement, resetCounter, doubledValue };
  },
});
</script>
