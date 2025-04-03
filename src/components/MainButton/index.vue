<script lang="ts" setup>
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
    class?: string;
}

const props = defineProps<ButtonProps>();
</script>

<template>
    <button
        v-bind="$attrs"
        :class="twMerge(
            `bg-slate-600 w-full h-12 rounded-lg text-slate-100 font-semibold cursor-pointer`,
            props.class,
        )"
    >
        <slot></slot>
    </button>
</template>