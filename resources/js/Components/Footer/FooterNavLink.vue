<script setup lang="ts">
interface FooterNavLinkProps {
    link: string;
}

const props = defineProps<FooterNavLinkProps>();

</script>
<template>

    <li class="list-none">
        <a :href="link">
            <slot/>
        </a>
    </li>


</template>
