<script setup lang="ts">

import HeroTittle from "@/Components/Hero/HeroTittle.vue";
import HeroTabChanger from "@/Components/Hero/HeroTabChanger.vue";
import HeroTabs from "@/Components/Hero/HeroTabs.vue";
</script>

<template>
    <div class="bg-no-repeat relative bg-cover py-4"
         style="background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/backgroundhero.jpg')">

        <div class="!z-50 flex items-center justify-center flex-col gap-4">
            <HeroTittle/>
            <HeroTabChanger/>
            <HeroTabs/>
        </div>
    </div>

</template>
