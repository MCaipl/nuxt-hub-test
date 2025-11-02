<script setup lang="ts">
const { status, data } = await useLazyFetch("/api/talents");

const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "talentTypeName",
    header: "Type",
  },
  {
    accessorKey: "groupName",
    header: "Group",
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
    <template #name-cell="{ row }">
      <Talent :type="row.getValue('talentTypeName')" :name="row.getValue('name')" />
    </template>
    <template #description-cell="{ row }">
      <p class="whitespace-normal break-normal ">
        {{ row.getValue("description") }}
      </p>
    </template>
  </UTable>


  </div>
</template>
