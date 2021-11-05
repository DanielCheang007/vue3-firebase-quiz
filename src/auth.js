import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";

export default function () {
  const router = useRouter();
  const auth = getAuth();

  // console.log(auth);
  // console.log(auth.currentUser);

  // router.beforeEach(async (to, from, next) => {
  //   console.log("-- beforeEach");
  //   console.log(to);
  //   console.log(auth.currentUser);

  //   await new Promise((resolve, reject) => {
  //     onAuthStateChanged(auth, resolve, reject);
  //   });

  //   console.log(auth.currentUser);

  //   if (to.path !== "/login" && auth.currentUser === null) {
  //     next("/login");
  //   } else {
  //     next();
  //   }
  // });

  // onAuthStateChanged(auth, (user) => {
  //   console.log("-- auth state chagned");
  //   console.log(auth);
  //   console.log(user);
  //   if (route.path !== "/login" && user === null) {
  //     router.push("/");
  //   }
  // });
}
