<script lang="ts" setup>
import { reactive } from 'vue';
import InputField from '../components/InputField/index.vue';
import MainButton from '../components/MainButton/index.vue';
import type { Account } from '../types/Account';
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const accountData = reactive<Account.Login>({
    email: '',
    senha: '',
})

async function handleLogin() {
    try {
        const { data, status } = await authStore.login(accountData);
        if (status === 200) {
            const { token, user } = data;
            authStore.getCurrentUser(user)
            localStorage.setItem('access_token', token);

            router.push({ name: 'dashboard' });
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Erro ao fazer login. Verifique suas credenciais.');
    }
}
</script>

<template>
    <div class="w-full flex justify-center items-center h-screen">
        <div class="w-[400px] flex items-center flex-col justify-center">
            <h1 class="font-bold text-3xl text-slate-600 mb-8">
                <"DevLucasJP"/>
            </h1>
            <form @submit.prevent="handleLogin" class="w-full flex flex-col gap-4">
                <InputField 
                    placeholder="Email"
                    v-model="accountData.email"
                />

                <InputField 
                    placeholder="Senha"
                    v-model="accountData.senha"
                    :is-password="true"
                />
                <MainButton type="submit">
                    Entrar
                </MainButton>
            </form>
        </div>
    </div>
</template>