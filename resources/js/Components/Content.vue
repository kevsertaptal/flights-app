<script setup lang="ts">
import ContentCard from "@/Components/Content/ContentCard.vue";
</script>
<template>

    <div class="container flex flex-col gap-4 p-6">
        <div class=" text-2xl font-bold">Seyahatlerini Yönet</div>
        <div class="flex items-center justify-center gap-4 py-4 flex-col lg:flex-row ">
            <ContentCard iconClasses="fa-solid fa-plane-circle-check text-blue-500"
                         title="Online check-in"
                         description="Uçuşundan önce online check-in yap, havalimanında vakit kazan."/>
            <ContentCard iconClasses="fa-regular fa-calendar text-purple-500"
                         title="PNR sorgulama"
                         description="Uçak, otobüs bileti ve otel rezervasyonu durumunu sorgula."/>
            <ContentCard iconClasses="fa-regular fa-calendar-xmark text-red-500"
                         title="İptal / İade işlemleri"
                         description="Uçak ve otobüs bileti iptal iade işlemlerini kolayca yap."/>
        </div>
    </div>

</template>
