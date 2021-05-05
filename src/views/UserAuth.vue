<template>
  <div>
    <LoginButton />
    <p>Hello! {{ displayName }}</p>
    <p>e-Mail: {{ email }}</p>
    <LogoutButton />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import LoginButton from "@/components/UserAuth/LoginButton.vue";
import LogoutButton from "@/components/UserAuth/LogoutButton.vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "UserAuth",
  components: {
    LoginButton,
    LogoutButton,
  },
  setup() {
    // Storeを取得する
    const store = useStore();

    return {
      // Todo ログインしているかの判定に
      displayName: computed(() =>
        store.state.user.name ? store.state.user.name : "Guest"
      ), // ログインユーザー名取得
      email: computed(() =>
        store.state.user.email ? store.state.user.email : ""
      ), // メアド取得
    };
  },
});
</script>

<style scoped>
.header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px 0;
}
p {
  margin: 0 5px;
}
</style>