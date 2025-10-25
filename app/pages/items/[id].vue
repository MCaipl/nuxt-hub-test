<script lang="ts" setup>

const route = useRoute()

const { status, data } = await useLazyFetch(`/api/items/${route.params.id}`)



</script>
<template>
  <UCard>
    <template #header>
      <div class="flex flex-col gap-2">
        <div class="text-xl font-medium">Pneumo Boots</div>
        <div class="flex gap-2">
          <UBadge size="lg" color="primary" variant="subtle">{{data?.itemSlotName}}</UBadge>
          <UBadge size="lg" color="success" variant="subtle">{{data?.actName}}</UBadge>
          <UBadge size="lg" color="secondary" variant="subtle">Rykad Minoris</UBadge>
        </div>
      </div>
    </template>

    <div class="space-y-4">
      <p>{{ data?.description }}</p>
    </div>

    <template #footer>

    </template>
  </UCard>
</template>

