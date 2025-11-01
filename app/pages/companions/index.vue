<script setup lang="ts">
import type { TableColumn } from "@nuxt/ui";

const { status, data } = await useLazyFetch("/api/companions");

const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "origin",
    header: "Origin",
  },
  {
    accessorKey: "homeworld",
    header: "Homeworld",
  },
];
</script>
<template>
  <div>

  <UTable :data="data" :columns="columns" class="flex-1" >
    <template #name-cell="{ row }">
      <div class="flex items-center gap-3">
        <UAvatar :src="`/img/${row.original.smallPortait}`" :alt="row.original.name" size="2xl"/>
        <ULink :to="`/companions/${row.original.id}`">{{ row.original.name }}</ULink>
      </div>
    </template>
  </UTable>


  </div>
</template>
