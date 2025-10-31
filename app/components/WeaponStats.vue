<script lang="ts" setup>
const {data = []} = defineProps<{data: unknown }>();
</script>


<template>
   <UPageCard
    title="Weapon Stats"
    variant="soft"
  >
    <dl class="grid grid-cols-2 gap-x-6 gap-y-4 ">
      <template v-for="entry in data" :key="entry.field">
        <dt class="text-sm text-pretty font-semibold text-highlighted">{{entry.field}}</dt>
        <dd class="text-[14px] text-pretty text-muted">{{entry.value}}</dd>
      </template>
    </dl>
  </UPageCard>
</template>
