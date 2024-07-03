<script setup lang="ts">
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import DatePicker from "@/Components/DatePicker.vue";
import PassengerPicker from "@/Components/Flight/PassengerPicker.vue";
import {Button} from "@/Components/ui/button";
import {Label} from "radix-vue";
import {computed, ref} from "vue";
import {DateValue} from "@internationalized/date";
import {useStore} from "vuex";
import {router} from "@inertiajs/vue3";

const flightType = ref('oneWay')
const adultPassengerCount = ref(1)
const childPassengerCount = ref(0)
const babyPassengerCount = ref(0)
const departureDate = ref<DateValue>()
const returnDate = ref<DateValue>()
const departureCity = ref('')
const arrivalCity = ref('')

const totalPassengerCount = computed(() => adultPassengerCount.value + childPassengerCount.value + babyPassengerCount.value)

function handleSubmit() {
    const searchParams = {
        resultType: 'flight',
        flightType: flightType.value,
        adultPassengerCount: adultPassengerCount.value,
        childPassengerCount: childPassengerCount.value,
        babyPassengerCount: babyPassengerCount.value,
        departureDate: departureDate.value?.toString(),
        returnDate: returnDate.value?.toString(),
        departureCity: departureCity.value,
        arrivalCity: arrivalCity.value,
    }

    router.get('/', searchParams)
}

</script>
<template>
    <div class="flex flex-col gap-2">
        <div class=" flex items-center gap-2 p-4 pb-0">
            <input
                id="oneWay"
                name="flightType"
                class="checked:bg-[#2dc44d] checked:hover:bg-[#2dc44d] checked:active:bg-[#2dc44d] checked:focus:bg-[#2dc44d] focus:bg-[#2dc44d] focus:outline-none focus:ring-1 focus:ring-[#2dc44d]"
                type="radio"
                :checked="flightType === 'oneWay'"
                @click="flightType = 'oneWay'"
            >
            <label for="oneWay" class=" cursor-pointer">Tek Yön</label>
            <input
                id="twoWay"
                name="flightType"
                class="checked:bg-[#2dc44d] checked:hover:bg-[#2dc44d] checked:active:bg-[#2dc44d] checked:focus:bg-[#2dc44d] focus:bg-[#2dc44d] focus:outline-none focus:ring-1 focus:ring-[#2dc44d]"
                type="radio"
                :checked="flightType === 'twoWay'"
                @click="flightType = 'twoWay'"
            >
            <label for="twoWay" class=" cursor-pointer">Gidiş-Dönüş</label>

        </div>
        <div class="">
            <div class="flex flex-col lg:flex-row p-4 pt-0 gap-2">
                <Select v-model="departureCity">
                    <SelectTrigger class="text-lg">
                        <i class="fa-solid fa-crosshairs"></i>
                        <SelectValue placeholder="Nereden "/>
                    </SelectTrigger>
                    <SelectContent side="top">
                        <SelectGroup class="w-full">
                            <SelectItem class="flex items-center gap-2 " value="İstanbul">
                                <i class="fa-solid fa-plane-departure mr-2"></i>
                                <span> İstanbul Türkiye</span>
                            </SelectItem>
                            <SelectItem class="flex  items-center gap-2" value="Ankara">
                                <i class="fa-solid fa-plane-departure mr-2"></i>
                                <span>Ankara</span>
                            </SelectItem>
                            <SelectItem class="flex items-center gap-2 " value="İzmir">
                                <i class="fa-solid fa-plane-departure mr-2"></i>
                                <span>İzmir</span>
                            </SelectItem>
                            <SelectItem class="flex items-center gap-2 " value="Antalya">
                                <i class="fa-solid fa-plane-departure mr-2"></i>
                                <span>Antalya</span>
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select v-model="arrivalCity">
                    <SelectTrigger class="text-lg flex ">
                        <i class="fa-solid fa-location-dot"></i>
                        <SelectValue placeholder="Nereye"/>
                    </SelectTrigger>
                    <SelectContent side="top">
                        <SelectGroup class="w-full">
                            <SelectItem class="flex items-center gap-2 " value="istanbul">
                                <i class="fa-solid fa-plane-arrival mr-2"></i>
                                <span> İstanbul Türkiye</span>
                            </SelectItem>
                            <SelectItem class="flex  items-center gap-2" value="ankara">
                                <i class="fa-solid fa-plane-arrival mr-2"></i>
                                <span>Ankara</span>
                            </SelectItem>
                            <SelectItem class="flex items-center gap-2 " value="izmir">
                                <i class="fa-solid fa-plane-arrival mr-2"></i>
                                <span>İzmir</span>
                            </SelectItem>
                            <SelectItem class="flex items-center gap-2 " value="antalya">
                                <i class="fa-solid fa-plane-arrival mr-2"></i>
                                <span>Antalya</span>
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <DatePicker v-model="departureDate" placeholder="Gidiş Tarihi"/>
                <DatePicker v-model="returnDate" placeholder="Dönüş Tarihi" v-if="flightType === 'twoWay'"/>

                <PassengerPicker
                    v-model:adult="adultPassengerCount"
                    v-model:child="childPassengerCount"
                    v-model:baby="babyPassengerCount"
                    placeholder="Yolcu Sayısı"/>

                <Button @click="handleSubmit" size="default"
                        class="bg-[#2dc44d] text-white flex items-center justify-center gap-2">Uçak
                    Bileti Ara
                    <i
                        class="fa-solid fa-angle-right"></i>
                </Button>

            </div>
        </div>
    </div>
</template>
