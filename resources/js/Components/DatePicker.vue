<script setup lang="ts">
import {ref} from 'vue'
import {
    DateFormatter,
    type DateValue,
    getLocalTimeZone,
} from '@internationalized/date'

import {CalendarIcon} from '@radix-icons/vue'
import {Calendar} from '@/Components/ui/calendar'
import {Button} from '@/Components/ui/button'
import {Popover, PopoverContent, PopoverTrigger} from '@/Components/ui/popover'
import {cn} from '@/lib/utils'

const df = new DateFormatter('tr-TR', {
    dateStyle: 'long',
})

const value = ref<DateValue>()
</script>
<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button
                variant="outline"
                :class="cn(
          'w-[280px] justify-start text-left font-normal',
          !value && 'text-muted-foreground',
        )"
            >
                <CalendarIcon class="mr-2 h-4 w-4"/>
                {{ value ? df.format(value.toDate(getLocalTimeZone())) : "Gidiş Tarihi" }}
            </Button>
        </PopoverTrigger>
        <PopoverContent side="top" class="w-auto p-0">
            <Calendar v-model="value" initial-focus/>
        </PopoverContent>
    </Popover>

</template>
