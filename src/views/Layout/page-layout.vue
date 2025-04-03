<script lang="ts" setup>
import { computed, ref } from 'vue';
import CardProfile from '../../components/CardProfile.vue';
import Content from './Content.vue';
import { useAuthStore } from '../../store/auth';
const authStore = useAuthStore();

const showProfileCard = ref<boolean>(false);

const currentUserName = computed(() => {
    return {
        name: authStore.$state.currentUser.nome,
        firstLetter: authStore.$state.currentUser.nome.charAt(0).toUpperCase(),
    }
})

function setShowProfileCard() {
    showProfileCard.value = !showProfileCard.value;
}

</script>

<template>
    <div class="h-screen w-full">
        <header class="w-full bg-slate-100 h-16 header px-10">
        <div class="flex justify-between items-center h-full">
            <div>
                {{ currentUserName.name }}
            </div>
            <div @click="setShowProfileCard">
            <span class="bg-red-400 text-zinc-50 w-[40px] h-[40px] flex justify-center items-center rounded-full cursor-pointer">
                {{ currentUserName.firstLetter }}
            </span>
            </div>
        </div>
        </header>
        <main class="min-h-screen w-full m-auto">
            <Content />
        </main>
    </div>
</template>