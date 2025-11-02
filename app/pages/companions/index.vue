<script setup lang="ts">

const { status, data } = await useLazyFetch("/api/companions");

const items = computed(() =>[
  {
    label: 'Companions',
    to: '/companions'
  }
])


const columns = [
  {
    accessorKey: "name",
    header: "Character",
  },
  {
    accessorKey: "actName",
    header: "Act",
  },
  {
    accessorKey: "baseArchetypeName",
    header: "Archetype",
  },
  {
    accessorKey: "originName",
    header: "Origin",
  },
  {
    accessorKey: "homeworldName",
    header: "Homeworld",
  },
];
</script>
<template>
  <UPage>

    <UBreadcrumb :items="items" />
      <UPageHeader title="Companions"/>
    <UPageBody>

    <UTable :data="data" :columns="columns" class="flex-1" >
      <template #name-cell="{ row }">
        <div class="flex items-center gap-3">
          <UAvatar :src="`/img/${row.original.smallPortait}`" :alt="row.original.name" size="2xl"/>
          <ULink :to="`/companions/${row.original.id}`">{{ row.original.name }}</ULink>
        </div>
      </template>
    </UTable>

    </UPageBody>

  </UPage>
</template>
