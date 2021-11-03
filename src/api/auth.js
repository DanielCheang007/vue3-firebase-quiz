import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export function login({ email, password }) {
  const auth = getAuth();

  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  const auth = getAuth();

  return signOut(auth);
}
