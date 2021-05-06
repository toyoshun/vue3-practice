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
        <tr v-for="(doc, index) in bookList" :key="index">
          <td>{{ doc.id }}</td>
          <td>{{ doc.book.name }}</td>
          <td>{{ doc.book.author }}</td>
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
    const bookList = reactive([{id: "", book: {} as Book}]);

    // 全件取得
    db.collection("books")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const book: Book = {name: doc.data().name, author: doc.data().author}
          bookList.push({id: doc.id, book: book})
        });
      });

    return {
      bookList
    };
  },
});
</script>