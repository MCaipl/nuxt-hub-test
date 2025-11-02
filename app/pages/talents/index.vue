<script setup lang="ts">
const { status, data } = await useLazyFetch("/api/talents");

const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];
</script>
<template>
  <div>

  <UTable :data="data" :columns="columns" class="flex-1" >
    <template #description-cell="{ row }">
      <p class="whitespace-normal break-normal ">
        {{ row.getValue("description") }}
      </p>
    </template>
  </UTable>


  </div>
</template>
