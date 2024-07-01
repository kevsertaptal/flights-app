<script setup lang="ts">
import {useStore} from "vuex";
import Flight from "@/Components/Flight.vue";
import Hotel from "@/Components/Hotel.vue";

const store = useStore()
</script>
<template>
    <div class="bg-white rounded-xl mx-auto w-[90vw] md:w-[80vw] lg:w-[70vw]">
        <Flight v-if="store.state.activeTab === 'flight'"/>
        <Hotel v-if="store.state.activeTab === 'hotel'"/>
    </div>
</template>
