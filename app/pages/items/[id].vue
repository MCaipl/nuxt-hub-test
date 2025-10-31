<script lang="ts" setup>
const route = useRoute();

const { status, data } = await useLazyFetch(`/api/items/${route.params.id}`);
</script>
<template>
  <UPage>
    <UPageHeader :title="data?.name" :headline="data?.itemSlotName"/>
    <UPageBody>




        Builds
        <UPageColumns>

            <UPageCard v-for="i in 7" :key="i"
                variant="outline"
                title="Cloudflare's Workers LaunchPad"
                description="NuxtHub is part of the Cloudflare's Workers Launchpad Cohort to make sure you get a first-class experience on top of Cloudflare's network."
            />

        </UPageColumns>


    </UPageBody>

    <template #right>

    </template>
  </UPage>
</template>

