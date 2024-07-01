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
</script>
<template>
    <div class="flex flex-col gap-2">
        <div class=" flex items-center gap-2 p-4 pb-0">
            <input type="radio">Tek Yon
            <input type="radio">Gidiş Dönüş
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
