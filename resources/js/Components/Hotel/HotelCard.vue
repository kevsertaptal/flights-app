<script setup lang="ts">

import {computed} from "vue";
import {Button} from "@/Components/ui/button";

const props = defineProps<{
    title: string,
    comment: number,
    commentCount: number,
    location: string,
}>()
</script>
<template>

    <div
        class="flex bg-white border-2 rounded-md overflow-hidden  hover:shadow-2xl transition-all duration-100 ease-in">
        <!-- IMAGE  -->
        <div class="w-[100px] lg:w-[330px]">
            <img src="/weingart.jpg" alt="">
        </div>
        <!-- CONTENT -->
        <div class="flex-1 h-full flex flex-col gap-2 p-2 lg:p-4">
            <!-- DISCOUNT  -->
            <div class="w-full p-2 hidden lg:block">
                <div class="bg-[#9966ff] text-white w-fit px-1 rounded-md py-0.5">
                    10.000,00 TL uzeri rezervasyonlar icin <span class="font-medium"> %50 indirim</span>
                </div>
            </div>
            <!-- TITLE & COMMENTS -->
            <div class="flex flex-col lg:flex-row w-full items-center justify-between">
                <div class=" text-[10px] lg:text-2xl font-bold">{{ title }}</div>
                <div class="flex gap-1 flex-col items-end justify-center">
                    <div class="hidden lg:block py-1 px-2 rounded-lg font-medium bg-[#021141] text-white">
                        {{ comment.toFixed(1) }}
                    </div>
                    <div class=" hidden lg:block text-[10px] lg:text-sm text-gray-400">
                        {{ commentCount }} Yorum
                    </div>
                </div>
                <div class="lg:hidden">
                    <div class="flex flex-col gap-1 items-end justify-end">
                        <div class="text-gray-500 font-medium text-[8px]">3 gece icin toplam tutar</div>
                        <div class=" font-bold text-[10px]">34.555 TL</div>
                        <Button
                            size="xs"
                            class="bg-[#2dc44d]  text-white flex items-center rounded-sm justify-center text-[10px] ">

                            <span>Rezervasyon Yap</span>
                            <i class="fas fa-chevron-right transform translate-y-[10%]"></i>
                        </Button>
                    </div>
                </div>
            </div>
            <!-- LOCATION -->
            <div class="text-blue-500  items-center  gap-2 hidden lg:block">
                <i class="fa-solid fa-map text-blue-700"></i>
                {{ location }}
            </div>
            <div class=" w-full justify-between  hidden lg:flex">
                <div class="p-2 px-0 flex flex-col gap-2 ">
                    <div class=" flex items-center text-gray-500 gap-2">
                        <i class="fa-solid fa-clock text-gray-700"></i>
                        Denize 3 dk yurume mesafesinde
                    </div>
                    <div class=" items-center text-gray-500 gap-2 hidden lg:block">
                        <i class="fa-solid fa-child-reaching text-gray-700"></i>
                        0 - 12 Yas arasi cocuk kabul edilir
                    </div>
                </div>
                <div class="flex flex-col gap-1 items-end justify-end">
                    <div class="text-gray-500 font-medium text-sm">3 gece icin toplam tutar</div>
                    <div class=" font-bold text-xl">34.555 TL</div>
                    <Button class="bg-[#2dc44d] text-white flex items-center justify-center gap-2">
                        <span>Rezervasyon Yap</span>
                        <i class="fas fa-chevron-right transform translate-y-[10%]"></i>
                    </Button>
                </div>
            </div>

        </div>
    </div>

</template>
