<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { User } from '../types/User';
import usersService from '../services/users-service';

const users = ref<User[]>([])


async function getUsers() {
    try {
        const response = await usersService.getAll()
        if (!response) {
            alert('Erro ao buscar usuarios')
            return 
        }

        users.value = response.data
    } catch (error) {
        return error
    }
}

async function removeUsers() {
    alert('Deletar usuarios')
    try {
        const response = await usersService.removeAll()
        console.log(response)
        if (!response) {
            alert('Erro ao deletar usuarios')
            return 
        }

        getUsers()
    } catch (error) {
        return error   
    }
}

onMounted(() => {
    getUsers()
})
</script>

<template>
    <div>
        <div>
            <button 
                @click="removeUsers"
                class="bg-slate-200 w-32 h-10 rounded-lg text-slate-600 font-semibold cursor-pointer">
                Deletar usuários
            </button>
        </div>
        <div v-if="!users.length" class="w-full h-full flex justify-center items-center">
            <span class="text-slate-400 font-semibold">Nenhum usuário encontrado</span>
        </div>
        <ul v-else class="w-full h-full bg-slate-100 spacing">
            <li 
                class="w-full h-16 bg-slate-50 border-b-2 border-slate-200 flex justify-between items-center px-4"
                v-for="user in users" :key="user.id"
            >
                <div>
                    {{ user.nome }} - {{ user.email }}
                </div>
                <div>
                    ações
                </div>
            </li> 
        </ul>
    </div>
</template>

<style scoped>
.spacing {
    margin: 0 20px;
}
</style>