<template>
  <div class="home">
    <div>
      <input v-model="book.name" />
      <input v-model="book.author" />
      <button v-on:click="add">追加</button>
    </div>
    <List />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore, Book } from "@/store";
import List from "@/components/Books/BookList.vue";

export default defineComponent({
  components: {
    // eslint-disable-next-line vue/no-unused-components
    List,
  },

  setup() {
    // 追加する本の入力蘭のv-model
    const book = reactive({
      name: "",
      author: "",
    });

    // Storeを取得する
    const store = useStore();

    return {
      book, // v-model
      add: () =>
        store.dispatch("add", { name: book.name, author: book.author } as Book), // 本を追加する
    };
  },
});
</script>