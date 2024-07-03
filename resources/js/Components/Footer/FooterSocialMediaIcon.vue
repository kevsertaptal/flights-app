<script setup lang="ts">
interface FooterSocialMediaIconProps {
    link: string;
}

const props = defineProps<FooterSocialMediaIconProps>();
</script>
<template>

    <div class="rounded-full text-black bg-white p-2">
        <a :href="link">
            <slot/>
        </a>
    </div>

</template>
