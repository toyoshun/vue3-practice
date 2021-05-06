<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>著者</th>
          <th>名前</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in books" :key="index">
          <td>{{ index }}</td>
          <td>{{ book.name }}</td>
          <td>{{ book.author }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { Book } from "@/store";
import { db } from "@/scripts/firebase";

export default defineComponent({
  setup() {
    // // Storeを取得する
    // const store = useStore();

    // return {
    //   books: computed(() => store.state.books), // 本の一覧を返す
    // };

    // リアクティブにしないと初期表示されない
    const books: Book[] = reactive([]);

    // 全件取得
    db.collection("books")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id);
          books.push({name: doc.data().name, author: doc.data().author})
        });
      });

    return {
      books
    };
  },
});
</script>