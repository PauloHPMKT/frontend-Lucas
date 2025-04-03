<script lang="ts" setup>
// import { ref } from 'vue';
// import CardProfile from './components/CardProfile.vue'

// const showProfileCard = ref<boolean>(false)

// function setShowProfileCard() {
//   showProfileCard.value = !showProfileCard.value
// }
</script>

<template>
  <!-- <div class="h-screen">
    <header class="w-full bg-slate-100 h-16 header">
      <div class="flex justify-between items-center h-full">
        <div>
          Nome do usuario logado
        </div>
        <div @click="setShowProfileCard">
          <span class="bg-red-400 text-zinc-50 w-[40px] h-[40px] flex justify-center items-center rounded-full cursor-pointer">
            L
          </span>
        </div>
      </div>
      <CardProfile v-if="showProfileCard" />
    </header>
  </div> -->
  <RouterView></RouterView>
</template>

<style scoped>
.header {
  padding: 0 20px;
}
</style>

