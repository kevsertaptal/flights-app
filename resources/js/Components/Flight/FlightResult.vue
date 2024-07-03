<script setup lang="ts">
import {useUrlSearchParams} from "@vueuse/core";
import {computed} from "vue";
import FlightCard from "@/Components/Flight/FlightCard.vue";
import {useStore} from "vuex";

const searchParams: {
    resultType: string,
    flightType: string,
    adultPassengerCount: number,
    childPassengerCount: number,
    babyPassengerCount: number,
    departureDate: string,
    returnDate: string,
    departureCity: string,
    arrivalCity: string,

} = useUrlSearchParams()

const store = useStore()
const isSearch = computed(() => Object.keys(searchParams).length > 0 && searchParams.resultType === 'flight')
const isFlightTabSelected = computed(() => store.state.activeTab === 'flight');
</script>
<template>
    <template v-if="isSearch && isFlightTabSelected">
        <div class="flex py-6 container w-full flex-col gap-6">
            <div
                class="bg-[#2dc44d] w-fit py-2 px-4 rounded-md text-white text-2xl  text-center hover:shadow-2xl transition-all duration-100 ease-in ">
                Tüm Uçuşlar
            </div>
            <div class=" flex flex-col gap-4 ">
                <FlightCard :departure-city="searchParams.departureCity" :arrival-city="searchParams.arrivalCity"
                            class="hover:shadow-2xl transition-all duration-100 ease-in"/>
                <FlightCard :departure-city="searchParams.departureCity" :arrival-city="searchParams.arrivalCity"
                            class="hover:shadow-2xl transition-all duration-100 ease-in"/>

            </div>
        </div>
    </template>
</template>
