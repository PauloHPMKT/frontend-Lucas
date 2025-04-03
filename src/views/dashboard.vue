<script setup lang="ts">
import { onMounted, ref } from "vue";
import Doughnut from "../components/Doughnut/index.vue";
import MainButton from "../components/MainButton/index.vue";
import type { User } from "../types/User";
import { useUsersStore } from "../store/users";

const userStore = useUsersStore();

const users = ref<User[]>([]);
const listUsersMessage = ref<string>("Nenhum usuário encontrado");

async function mountUsersList() {
  await userStore.getAll()
  users.value = userStore.$state.users;
}

onMounted(async () => {
  await mountUsersList();
});
</script>

<template>
  <div class="mx-10 my-4">
    <div class="w-full mb-16 flex justify-between items-center">
      <div class="min-w-1/2 bg-white rounded-lg">
        <h3 class="my-4 ml-4">Total de usuários</h3>
        <div class=" h-56 rounded-b-lg border-t-2 border-slate-200 flex justify-center items-center">
          <Doughnut />
        </div>
      </div>
      <div>
        <MainButton>
          Deletar usuários
        </MainButton>
      </div>
    </div>
    <div
      v-if="!users.length"
      class="w-full h-full flex justify-center items-center"
    >
      <span class="text-slate-400 font-semibold">{{ listUsersMessage }}</span>
    </div>
    <ul v-else class="w-full h-full bg-slate-100 spacing">
      <li
        class="w-full h-16 bg-slate-50 border-b-2 border-slate-200 flex justify-between items-center px-4"
        v-for="user in users"
        :key="user.id"
      >
        <div>
          <div class="flex">
            <span class="bg-red-400 text-zinc-50 w-[40px] h-[40px] flex justify-center items-center rounded-full mr-4">
              {{ user.nome.charAt(0).toUpperCase() }}
            </span>
            <div class="flex items-center">
              {{ user.nome }} - {{ user.email }}
            </div>
          </div>
        </div>
        <div>ações</div>
      </li>
    </ul>
  </div>
</template>
