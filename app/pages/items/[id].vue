<script lang="ts" setup>
const route = useRoute();

const { status, data } = await useLazyFetch(`/api/items/${route.params.id}`);

const stats = [
  { field: 'Damage', value: '3-4' },
  { field: 'Armor Penetration', value: '5' },
  { field: 'Rate of Fire', value: '6' },
  { field: 'Recoil', value: '' },
  { field: 'Range', value: '5-10' },
  { field: 'Ammo Capacity', value: '12' },
  { field: 'Type', value: 'Solid' },
];

const drop = [
  { field: 'Act', value: '2' },
  { field: 'Type', value: 'Unique' },
  { field: 'Source', value: 'Merchant' },
  { field: 'Faction', value: 'Kasballica' },
  { field: 'Reputation', value: '2' },
  { field: 'Profit Factor', value: '27' },
];

</script>
<template>
  <UPage>
    <UPageHeader :title="data?.name" :headline="data?.itemSlotName"/>
    <UPageBody>
      <div class="grid grid-cols-2 gap-6">
        <!-- <WeaponStats v-if="data" :data="stats"/> -->
        <DropLocation v-if="data" :data="drop"/>
      </div>

      <h2 class="relative text-2xl text-highlighted font-bold mt-12 mb-6">Description</h2>
      <p class="leading-7 text-pretty">{{ data?.description }}</p>

     <h2 class="relative text-2xl text-highlighted font-bold mt-12 mb-6">Builds</h2>
      <!-- <UPageColumns>
        <UPageCard v-for="i in 7" :key="i"
            variant="outline"
            title="Cloudflare's Workers LaunchPad"
            description="NuxtHub is part of the Cloudflare's Workers Launchpad Cohort to make sure you get a first-class experience on top of Cloudflare's network."
        />
      </UPageColumns> -->
    </UPageBody>

  </UPage>
</template>

