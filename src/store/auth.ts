import { defineStore } from "pinia";
import type { User } from "../types/User";
import type { Account } from "../types/Account";
import usersService from "../services/users-service";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        currentUser: {} as User
    }),
    persist: true,
    actions: {
        async login(accountData: Account.Login) {
            const response = await usersService.login(accountData);
            return response;
        },
        getCurrentUser(user: User) {
            this.$state.currentUser = user;
        },
    }
})