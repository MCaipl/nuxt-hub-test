<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const { status, data } = await useLazyFetch('/api/items')

const columns = [
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'itemSlotName',
    header: 'Slot'
  },
  {
    accessorKey: 'actName',
    header: 'Act'
  }
]



</script>

<template>
  <UTable :data="data" :columns="columns" class="flex-1" >
    <template #name-cell="{ row }">
      <ULink :to="`/items/${row.original.id}`">{{ row.original.name }}</ULink>
    </template>
  </UTable>
</template>
