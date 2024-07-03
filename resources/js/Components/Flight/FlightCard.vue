<script setup lang="ts">
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

const props = defineProps<{
    departureCity: string,
    arrivalCity: string,
}>()
</script>

<template>
    <div class="  bg-white border-2 rounded-md  p-2 lg:p-4 ">
        <div class="flex items-center justify-between flex-col lg:flex-row gap-2 lg:gap-4 flex-1">

            <div class="flex  items-center justify-between text-xl gap-2 w-full   text-black p-2 lg:p-6">
                <div class="flex flex-col">
                    <span class="text-lg lg:text-3xl font-bold">13:00 </span>
                    {{ capitalize(departureCity) }}
                    <span class="hidden lg:block">
                        Havalimani
                    </span>
                </div>
                <div class=" flex-col gap-0.5 px-4 hidden lg:flex ">
                    <div class="font-light text-center text-[20x] ">Direkt Ucus</div>
                    <div class="font-light text-[#2dc44d]">----------- <i class="fa-solid fa-plane"></i>
                        ----------
                    </div>
                    <div class="text-center text-[15px]">
                        1s 10dk
                    </div>
                </div>

                <div class=" flex flex-col">
                    <span class="text-lg lg:text-3xl font-bold"> 15:00</span>
                    {{ capitalize(arrivalCity) }}
                    <span class="hidden lg:block">
                        Havalimani
                    </span>
                </div>

            </div>
            <div class="flex justify-between gap-6 ">


            </div>

            <div class=" flex items-center justify-center gap-2 text-[#2dc44d]"><i
                class="fa-solid fa-circle-info"></i>Detay
            </div>
            <div class="font-bold text-xl">
                3.200,00 TRY
            </div>
        </div>
    </div>
</template>
