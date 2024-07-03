<script setup lang="ts">


import Logo from "@/Components/Header/Logo.vue";
import SignButton from "@/Components/Header/SignButton.vue";
</script>

<template>
    <div class="w-full bg-transparent flex items-center p-2 justify-center">
        <div class="flex items-center justify-between w-[80%]">
            <Logo/>
            <SignButton/>
        </div>
    </div>
</template>
