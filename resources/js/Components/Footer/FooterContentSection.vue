<template>
    <div class="flex-1 w-full bg-[#111111] flex flex-col gap-6 items-center justify-center py-10 text-gray-200">
        <div class="flex gap-6">
            <FooterSocialMediaIcon link="https://www.facebook.com/">
                <i class="fa-brands fa-facebook text-[30px]"></i>
            </FooterSocialMediaIcon>
            <FooterSocialMediaIcon link="https://www.twitter.com/">
                <i class="fa-brands fa-twitter text-[30px]"></i>
            </FooterSocialMediaIcon>
            <FooterSocialMediaIcon link="https://www.instagram.com/">
                <i class="fa-brands fa-instagram text-[30px]"></i>
            </FooterSocialMediaIcon>
            <FooterSocialMediaIcon link="https://www.linkedin.com/">
                <i class="fa-brands fa-linkedin text-[30px]"></i>
            </FooterSocialMediaIcon>


        </div>
        <div class="flex gap-6 text-gray-400">
            <FooterNavLink link="/about">About</FooterNavLink>
            <FooterNavLink link="/services">Services</FooterNavLink>
            <FooterNavLink link="/contact">Contact</FooterNavLink>

        </div>
    </div>
</template>
<script setup lang="ts">
import FooterSocialMediaIcon from "@/Components/Footer/FooterSocialMediaIcon.vue";
import FooterNavLink from "@/Components/Footer/FooterNavLink.vue";
</script>
