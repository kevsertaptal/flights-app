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
import {ref} from "vue";

const flightType = ref('oneWay')
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
            <label for="twoWay" class=" cursor-pointer">Gidis Donus</label>

        </div>
        <div class="">
            <div class="flex p-4 pt-0 gap-2">
                <Select>
                    <SelectTrigger>
                        <i class="fa-solid fa-crosshairs"></i>
                        <SelectValue placeholder="Nereden"/>
                    </SelectTrigger>
                    <SelectContent side="top">
                        <SelectGroup class="w-full">
                            <SelectItem class="flex items-center gap-2 " value="istanbul">
                                <i class="fa-solid fa-plane mr-2"></i>
                                <span> İstanbul Türkiye</span>
                            </SelectItem>
                            <SelectItem class="flex  items-center gap-2" value="ankara">
                                <i class="fa-solid fa-plane mr-2"></i>
                                <span>Ankara</span>
                            </SelectItem>
                            <SelectItem class="flex items-center gap-2 " value="izmir">
                                <i class="fa-solid fa-plane mr-2"></i>
                                <span>İzmir</span>
                            </SelectItem>
                            <SelectItem class="flex items-center gap-2 " value="antalya">
                                <i class="fa-solid fa-plane mr-2"></i>
                                <span>Antalya</span>
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger>
                        <i class="fa-solid fa-location-dot"></i>
                        <SelectValue placeholder="Nereye"/>
                    </SelectTrigger>
                    <SelectContent side="top">
                        <SelectGroup class="w-full">
                            <SelectItem class="flex items-center gap-2 " value="istanbul">
                                <i class="fa-solid fa-plane mr-2"></i>
                                <span> İstanbul Türkiye</span>
                            </SelectItem>
                            <SelectItem class="flex  items-center gap-2" value="ankara">
                                <i class="fa-solid fa-plane mr-2"></i>
                                <span>Ankara</span>
                            </SelectItem>
                            <SelectItem class="flex items-center gap-2 " value="izmir">
                                <i class="fa-solid fa-plane mr-2"></i>
                                <span>İzmir</span>
                            </SelectItem>
                            <SelectItem class="flex items-center gap-2 " value="antalya">
                                <i class="fa-solid fa-plane mr-2"></i>
                                <span>Antalya</span>
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <DatePicker/>
                <DatePicker v-if="flightType === 'twoWay'"/>

                <PassengerPicker/>

                <Button size="default" class="bg-[#2dc44d] text-white flex items-center justify-center gap-2">Uçak
                    Bileti Ara
                    <i
                        class="fa-solid fa-angle-right"></i>
                </Button>

            </div>
        </div>
    </div>
</template>
