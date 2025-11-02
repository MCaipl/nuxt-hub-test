<script lang="ts" setup>
const route = useRoute();


const items = computed(() =>[
  {
    label: 'Companions',
    to: '/companions'
  },
  {
    label: data?.value?.name,
    to: `/companions/${route.params.id}`
  }
])


const { status, data } = await useLazyFetch(`/api/talents/${route.params.id}`);

</script>
<template>
  <UPage>

    <UPageHeader :title="data?.name" :headline="`${data?.talentTypeName}`"/>
    <UPageBody>
      <h2 class="relative text-2xl text-highlighted font-bold mt-2 mb-6">Description</h2>
      <p>{{ data?.description }}</p>
    </UPageBody>
  </UPage>
</template>

