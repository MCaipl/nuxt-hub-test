<script setup lang="ts">
import { h, resolveComponent } from 'vue'
import type { TableColumn } from '@nuxt/ui'
import type { Row } from '@tanstack/vue-table'
import { useClipboard } from '@vueuse/core'

const UButton = resolveComponent('UButton')
const UBadge = resolveComponent('UBadge')
const UDropdownMenu = resolveComponent('UDropdownMenu')

const toast = useToast()
const { copy } = useClipboard()

type Items = {
  id: string
  name: string
}

const data = ref<Items[]>([
  {
    id: 'pm_1N2bY2L3a4b5c6d7e8f9g0h1',
    name: 'Pneumo Boots',
  },
  {
    id: 'pm_1N2bY2L3a4b5c6d7e8f9g0h1',
    name: 'Skirmisher Boots',
  },
  {
    id: 'pm_1N2bY2L3a4b5c6d7e8f9g0h1',
    name: 'Warrior Boots',
  }
])

const columns: TableColumn<Items>[] = [
  {
    accessorKey: 'name',
    header: 'Name'
  }
]
</script>

<template>
  <UTable :data="data" :columns="columns" class="flex-1" >
    <template #name-cell="{ row }">
      <ULink :to="`/items/${row.original.name}`">{{ row.original.name }}</ULink>
      
    </template>
  </UTable>
</template>
