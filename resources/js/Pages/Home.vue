<script setup lang="ts">
import {Head} from "@inertiajs/vue3";
import Header from "../Components/Header.vue";
import Hero from "@/Components/Hero.vue";
import Footer from "@/Components/Footer.vue";
import FlightResult from "@/Components/Flight/FlightResult.vue";
import HotelResult from "@/Components/Hotel/HotelResult.vue";
import Content from "@/Components/Content.vue";
</script>
<template>
    <Head title="Home"/>
    <Hero/>
    <Content/>
    <FlightResult/>
    <HotelResult/>
    <Footer/>
</template>
