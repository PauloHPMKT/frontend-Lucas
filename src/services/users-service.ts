import type { Account } from "../types/Account";
import api from "./api";

export default {
    login: (data: Account.Login) => {
        return api.post('/auth', data);
    },
    getAll: () => {
        return api.get('/users');
    },
    removeAll: () => {
        return api.delete('/remove');
    }
}