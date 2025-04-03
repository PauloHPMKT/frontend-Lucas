import { defineStore } from "pinia";
import type { User } from "../types/User";
import usersService from "../services/users-service";

export const useUsersStore = defineStore("users", {
    state: () => ({
        users: [] as User[],
    }),
    persist: true,
    actions: {
        async getAll() {
            const response = await usersService.getAll();
            this.$state.users = response.data;
        }
    }
})