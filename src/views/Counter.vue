<template>
  <div class="counter">
    <button @click="decrement">-</button>
    {{ counter }}
    <button @click="increment">+</button>
{{ doubledCounter }}
  </div>
  <div>
    <CountResetButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import CountResetButton from "@/components/Counter/CountResetButton.vue";
import { mapActions, mapGetters, mapState } from 'vuex'

export default defineComponent({
  components: {
    CountResetButton,
  },

  setup() {
    // Storeを取得する
    const store = useStore();

    return {
      // count: computed(() => store.state.counter),
      // increment: () => store.dispatch("increment"),
      // decrement: () => store.dispatch("decrement"),
    };
  },
  computed: {
    ...mapState('counter', ['counter']),
    ...mapGetters('counter', ['doubledCounter']),
  },
  methods: {
  ...mapActions('counter', [
    'increment',
    'decrement'
  ])
}
});
</script>
