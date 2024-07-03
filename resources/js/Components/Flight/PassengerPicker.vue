<script setup lang="ts">
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/Components/ui/popover'
import {Button} from '@/Components/ui/button'

const props = defineProps<{
    placeholder: string
}>()

const adult = defineModel<number>('adult')
const child = defineModel<number>('child')
const baby = defineModel<number>('baby')

</script>
<template>
    <Popover>
        <PopoverTrigger as-child>

            <Button variant="outline" class="flex items-center justify-center gap-2"><i
                class="fa-solid fa-users"></i>
                {{ placeholder }}
            </Button>
        </PopoverTrigger>
        <PopoverContent side="top" class="w-auto p-0">
            <div class="flex flex-col  gap-2 p-4 bg-white rounded-lg shadow-lg">
                <div v-if="adult !== undefined" class="flex items-center justify-between ">
                    <span>Yetişkin</span>
                    <div class="flex items-center gap-1">
                        <Button
                            class="rounded-full p-0"
                            variant="outline"
                            size="icon"
                            :class="adult === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-black'"
                            @click="adult--">
                            <i class="fa fa-minus"></i>
                        </Button>
                        <span>{{ adult }}</span>
                        <Button
                            class="bg-[#2dc44d] text-white rounded-full"
                            size="icon"
                            variant="outline"
                            @click="adult++">
                            <i class="fa fa-plus"></i>
                        </Button>
                    </div>
                </div>
                <div v-if="child !== undefined" class="flex items-center justify-between gap-2">
                    <span>Çocuk  (2-12 yaş arası)</span>
                    <div class="flex items-center gap-1">
                        <Button
                            class="rounded-full p-0"
                            variant="outline"
                            size="icon"
                            @click="child--">
                            <i class="fa fa-minus"></i>
                        </Button>
                        <span>{{ child }}</span>
                        <Button
                            class="bg-[#2dc44d] text-white rounded-full"
                            size="icon"
                            variant="outline"
                            @click="child++">
                            <i class="fa fa-plus"></i>
                        </Button>
                    </div>
                </div>
                <div v-if="baby !== undefined" class="flex items-center justify-between gap-2">
                    <span>Bebek (0-2 yaş arası) </span>
                    <div class="flex items-center gap-1">
                        <Button
                            class="rounded-full p-0"
                            variant="outline"
                            size="icon"
                            @click="baby--">
                            <i class="fa fa-minus"></i>
                        </Button>
                        <span>{{ baby }}</span>
                        <Button
                            class="bg-[#2dc44d] text-white rounded-full"
                            size="icon"
                            variant="outline"
                            @click="baby++">
                            <i class="fa fa-plus"></i>
                        </Button>
                    </div>
                </div>
            </div>
        </PopoverContent>
    </Popover>
</template>
