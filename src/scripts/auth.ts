import { useStore, User } from "@/store";
import { auth, authObject } from "@/scripts/firebase";
import { mapActions } from "vuex";


// const actions = {...mapActions("auth", ["signin"])}


// Storeを取得する
const store = useStore();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function signIn() {
  // Google認証
  const provider = new authObject.GoogleAuthProvider();

  const authAction = {...mapActions("auth", ["signin"])};


  // 認証実施
  auth
    .signInWithPopup(provider)
    .then((result) => {
      // firebaseから取得した情報
      const user = {
        name: result.user?.displayName,
        email: result.user?.email,
      } as User;

      // ユーザー情報保持
      authAction.signin(user);
    })
    .catch((err) => {
      console.error(err);
      // エラー処理
    });
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function signOut() {
  auth.signOut().then(() => {
    store.dispatch("signout"); // サインアウト
  });
}
