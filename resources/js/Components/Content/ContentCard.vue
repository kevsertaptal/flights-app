<script setup lang="ts">

interface ContentCardProps {
    iconClasses: string;
    title: string;
    description: string;
}


const props = defineProps<ContentCardProps>();

</script>

<template>
    <div
        class="border-2 rounded-md flex flex-col px-6 py-4 gap-6 hover:shadow-2xl transition-all duration-100 ease-in">
        <i
            class="fa-regular text-[25px] pt-4"
            :class="iconClasses"
        ></i>
        <div class="mb-4">
            <h2 class=" font-bold text-black">{{ title }}</h2>
            <p>{{ description }}</p>
        </div>
    </div>
</template>
