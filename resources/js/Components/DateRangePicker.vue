<script setup lang="ts">
import {ref} from 'vue'
import {
    DateFormatter, DateValue,

    getLocalTimeZone,
} from '@internationalized/date'

import {CalendarIcon} from '@radix-icons/vue'

import {Button} from '@/Components/ui/button'
import {Popover, PopoverContent, PopoverTrigger} from '@/Components/ui/popover'
import {cn} from '@/lib/utils'
import {RangeCalendar} from "@/Components/ui/range-calendar";
import {DateRange} from "radix-vue";

const df = new DateFormatter('tr-TR', {
    dateStyle: 'long',
})


const props = defineProps<{
    placeholder: string
}>()
const model = defineModel<DateRange>()

</script>
<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button
                variant="outline"
                :class="cn(
          ' justify-start text-left font-normal',
          !model && 'text-muted-foreground',
        )"
            >
                <CalendarIcon class="mr-2 h-4 w-4"/>
                {{
                    model && model.start && model.end ? df.format(model.start.toDate(getLocalTimeZone())) + ' - ' + df.format(model.end.toDate(getLocalTimeZone())) : placeholder
                }}
            </Button>
        </PopoverTrigger>
        <PopoverContent side="top" class="w-auto p-0">
            <RangeCalendar v-model="model" initial-focus/>
        </PopoverContent>
    </Popover>


</template>
