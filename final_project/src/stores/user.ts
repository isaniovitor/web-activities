import { defineStore } from "pinia";
import api from "../services/api";
import { v4 as uuid } from "uuid";
import Cookie from "js-cookie";

export interface User {
  id: number;
  username: string;
  email: string;
  jwt: string;
  password: string;
}

interface State {
  user: User;
}

// const cookieName = "xbcAa-vG.HzbSh5.";
// const encryptionToken = Cookie.get(cookieName) || uuid();
// Cookie.set(cookieName, encryptionToken, { secure: true, expires: 180 });
// const safeLocalStorage = new SafeLocalStorageService(
//   window.localStorage,
//   encryptionToken
// );

const token: any = "";

export const userStore = defineStore("user", {
  state: (): State => ({
    user: {
      jwt: localStorage.getItem("zFJqsz757BscGHsg"),
    } as User,
  }),

  getters: {
    username(state) {
      return state.user.username;
    },
    isAuthenticated() {
      return token !== undefined;
    },
  },

  actions: {
    async authenticate(login: string, password: string) {
      try {
        const { data } = await api.post("/auth/local", {
          identifier: login,
          password: password,
        });

        const { user, jwt } = data;
        this.user = {
          id: user.id,
          username: user.username,
          email: user.email,
          password: "",
          jwt: jwt,
        };

        localStorage.setItem("zFJqsz757BscGHsg", jwt);
        return true;
      } catch (error) {
        console.log(error);
      }
      return false;
    },

    async register(username: string, email: string, password: string) {
      try {
        await api.post("/auth/local/register", {
          username: username,
          email: email,
          password: password,
        });

        return true;
      } catch (error) {
        return false;
      }
    },

    logout() {
      this.user = {} as User;
      localStorage.clear();
    },
  },
});
