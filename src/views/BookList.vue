<template>
  <div class="home">
    <div>
      <input v-model="book.name" />
      <input v-model="book.author" />
      <button v-on:click="add">追加</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>著者</th>
          <th>名前</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.name">
          <td>{{ book.author }}</td>
          <td>{{ book.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from "vue";
import { useStore, Book } from "@/store";

export default defineComponent({
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
      books: computed(() => store.state.books), // 本の一覧を返す
      add: () =>
        store.dispatch("add", { name: book.name, author: book.author } as Book), // 本を追加する
    };
  },
});
</script>