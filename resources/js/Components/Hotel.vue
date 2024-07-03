<script setup lang="ts">
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

import {Button} from "@/Components/ui/button";
import PassengerPicker from "@/Components/Flight/PassengerPicker.vue";
import {RangeCalendar} from "@/Components/ui/range-calendar";

import DateRangePicker from "@/Components/DateRangePicker.vue";
import {computed, ref} from "vue";
import {DateValue} from "@internationalized/date";
import {DateRange} from "radix-vue";
import {router} from "@inertiajs/vue3";


const stayCity = ref('')
const stayDate = ref<DateRange>()
const adultPassengerCount = ref(1)
const childPassengerCount = ref(0)
const babyPassengerCount = ref(0)
const totalPassengerCount = computed(() => adultPassengerCount.value + childPassengerCount.value + babyPassengerCount.value)

function handleSubmit() {
    const searchParams = {
        resultType: 'hotel',
        stayCity: stayCity.value,
        stayDate: stayDate.value?.toString(),
        adultPassengerCount: adultPassengerCount.value,
        childPassengerCount: childPassengerCount.value,
        babyPassengerCount: babyPassengerCount.value,
    }

    router.get('/', searchParams)
}

</script>


<template>

    <div class="flex flex-col lg:flex-row  gap-2 p-6 ">

        <Select v-model="stayCity">
            <SelectTrigger class="text-lg">
                <i class="fa-solid fa-magnifying-glass"></i>
                <SelectValue placeholder=" Şehir, ilçe, tema veya otel adı "/>
            </SelectTrigger>
            <SelectContent side="top">
                <SelectGroup class="w-full">
                    <SelectItem class="flex items-center gap-4 " value="Weingart Port Hotel">
                        <i class="fa-solid fa-hotel"></i>
                        <span> Weingart Port Hotel</span>
                    </SelectItem>
                    <SelectItem class="flex  items-center gap-4" value="Anatolia Luxury Hotel">
                        <i class="fa-solid fa-hotel"></i>
                        <span> Anatolia Luxury Hotel</span>
                    </SelectItem>
                    <SelectItem class="flex items-center gap-4 " value="Hilton Garden Inn İzmir Bayraklı">
                        <i class="fa-solid fa-hotel"></i>
                        <span> Hilton Garden Inn İzmir Bayraklı</span>
                    </SelectItem>
                    <SelectItem class="flex items-center gap-4 " value="Pearly Hotel">
                        <i class="fa-solid fa-hotel"></i>
                        <span> Pearly Hotel</span>
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>

        <DateRangePicker v-model="stayDate" placeholder="Giriş-Çıkış Tarihleri"/>
        <PassengerPicker
            v-model:adult="adultPassengerCount"
            v-model:child="childPassengerCount"
            v-model:baby="babyPassengerCount"
            placeholder="Konuk Sayısı"/>
        <Button @click="handleSubmit()" size="default"
                class="bg-[#2dc44d] text-white flex items-center justify-center gap-2">Otel Bul
            <i
                class="fa-solid fa-angle-right"></i>
        </Button>
    </div>


</template>
