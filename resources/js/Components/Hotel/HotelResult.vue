<script setup lang="ts">
import {useUrlSearchParams} from "@vueuse/core";
import {useStore} from "vuex";
import {computed} from "vue";
import HotelCard from "@/Components/Hotel/HotelCard.vue";


const searchParams: {
    resultType: string,
    stayCity: string,
    stayDate: string,
    adultPassengerCount: number,
    childPassengerCount: number,
    babyPassengerCount: number,
} = useUrlSearchParams()

const store = useStore()
console.log(searchParams)
const isSearch = computed(() => Object.keys(searchParams).length > 0 && searchParams.resultType === 'hotel')
const isHotelTabSelected = computed(() => store.state.activeTab === 'hotel');
</script>

<template>

    <template v-if="isSearch && isHotelTabSelected">
        <div class="flex py-6 container w-full flex-col gap-6">
            <div class="bg-[#2dc44d] w-fit py-2 px-4 rounded-md text-white text-2xl  text-center "> Tüm Oteller
            </div>
            <div class="flex flex-col gap-4">
                <HotelCard :title="searchParams.stayCity" :comment="3" :comment-count="4"
                           location="Kizilagac, Manavgat, Antalya"/>

                <HotelCard :title="searchParams.stayCity" :comment="3" :comment-count="4"
                           location="Kizilagac, Manavgat, Antalya"/>
                <HotelCard :title="searchParams.stayCity" :comment="3" :comment-count="4"
                           location="Kizilagac, Manavgat, Antalya"/>
                <HotelCard :title="searchParams.stayCity" :comment="3" :comment-count="4"
                           location="Kizilagac, Manavgat, Antalya"/>
            </div>
        </div>


    </template>

</template>
