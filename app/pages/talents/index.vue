<script setup lang="ts">
const { status, data } = await useLazyFetch("/api/talents");

const columns = [
{
    accessorKey: "id",
    header: "#",
  },
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

      <NuxtLink
        :to="`/talents/${row.getValue('id')}`"
        class="text-highlighted hover:underline"
      >{{ row.getValue("name") }}</NuxtLink>


      <!-- <Talent :type="row.getValue('talentTypeName')" :name="row.getValue('name')" /> -->
    </template>
    <template #description-cell="{ row }">
      <p class="whitespace-normal break-normal ">
        {{ row.getValue("description") }}
      </p>
    </template>
  </UTable>


  </div>
</template>
