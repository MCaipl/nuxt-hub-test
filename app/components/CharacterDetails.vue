<script lang="ts" setup>
const {data = [], image = 'fff'} = defineProps<{data: unknown, image: string }>();
</script>


<template>
 <UPageCard
    variant="soft"
    class="p"
  >
    <img :src="`/img/${image}`" class="object-cover aspect-[1/1.5] rounded-2xl overflow-hidden" />
    <dl class="grid grid-cols-2 gap-x-6 gap-y-4 ">
      <template v-for="entry in data" :key="entry.field">
        <dt class="text-sm text-pretty font-semibold text-highlighted">{{entry.field}}</dt>
        <dd class="text-[14px] text-pretty text-muted">{{entry.value}}</dd>
      </template>
    </dl>
  </UPageCard>
</template>
