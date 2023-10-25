import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQKn-ifYWXvBy39F5MSa6z7jMaLfRAWf8",
  authDomain: "coininfo-df5e0.firebaseapp.com",
  projectId: "coininfo-df5e0",
  storageBucket: "coininfo-df5e0.appspot.com",
  messagingSenderId: "971735969029",
  appId: "1:971735969029:web:04b7a2276349d463b05b6c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
