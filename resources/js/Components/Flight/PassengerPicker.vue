<script setup lang="ts">
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/Components/ui/popover'
import {Button} from '@/Components/ui/button'
import {reactive} from "vue";

const passengerCounts = reactive({
    adult: 1,
    child: 0,
    baby: 0
})

const decrement = (key: 'adult' | 'baby' | 'child') => {
    if (passengerCounts[key] === 0) return
    if (passengerCounts[key] < 0) return passengerCounts[key] = 0
    if (key === 'adult' && passengerCounts[key] === 1) return

    passengerCounts[key]--
}
</script>
<template>
    <Popover>
        <PopoverTrigger as-child>

            <Button variant="outline" class="flex items-center justify-center gap-2"><i class="fa-solid fa-users"></i>Yolcu
                Sayisi
            </Button>
        </PopoverTrigger>
        <PopoverContent side="top" class="w-auto p-0">
            <div class="flex flex-col  gap-2 p-4 bg-white rounded-lg shadow-lg">
                <div class="flex items-center justify-between ">
                    <span>Yetişkin</span>
                    <div class="flex items-center gap-1">
                        <button
                            :class="passengerCounts.adult === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-black'"
                            @click="decrement('adult')">-
                        </button>
                        <span>{{ passengerCounts.adult }}</span>
                        <button
                            class="bg-[#2dc44d] text-white rounded-full"
                            @click="passengerCounts.adult++">+
                        </button>
                    </div>
                </div>
                <div class="flex items-center justify-between gap-2">
                    <span>Çocuk  (2-12 yas arasi)</span>
                    <div class="flex items-center gap-1">
                        <button @click="decrement('child')">-</button>
                        <span>{{ passengerCounts.child }}</span>
                        <button
                            class="bg-[#2dc44d] text-white rounded-full"
                            @click="passengerCounts.child++">+
                        </button>
                    </div>
                </div>
                <div class="flex items-center justify-between gap-2">
                    <span>Bebek (0-2 yas arasi) </span>
                    <div class="flex items-center gap-1">
                        <button @click="decrement('baby')">-</button>
                        <span>{{ passengerCounts.baby }}</span>
                        <button
                            class="bg-[#2dc44d] text-white rounded-full"
                            @click="passengerCounts.baby++">+
                        </button>
                    </div>
                </div>
            </div>
        </PopoverContent>
    </Popover>
</template>
