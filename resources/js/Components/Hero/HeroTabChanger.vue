<script setup lang="ts">

import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()
const activeTab = computed(() => store.state.activeTab)

</script>


<template>
    <div class="flex items-center justify-center gap-12 mt-24 text-white text-lg ">
        <div
            @click="store.commit('setActiveTab','flight')"
            :class="{
            'bg-white text-black': activeTab === 'flight'
        }"
            class="flex items-center  p-2 px-4 rounded-full  justify-center gap-2">
            <i class="fas fa-plane"></i>
            <button class="hero-tab-button">Uçak Bileti</button>
        </div>
        <div
            @click="store.commit('setActiveTab','hotel')"
            :class="{
            'bg-white text-black': activeTab === 'hotel'
        }"
            class="flex justify-center p-2 px-4 rounded-full items-center gap-2">
            <i class="fa-solid fa-bed"></i>
            <button class="hero-tab-button">Otel</button>
        </div>
    </div>
</template>
