<template>
  <div>
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
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  setup() {
    // Storeを取得する
    const store = useStore();

    return {
      books: computed(() => store.state.books), // 本の一覧を返す
    };
  },
});
</script>