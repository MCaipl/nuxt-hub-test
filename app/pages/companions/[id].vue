<script lang="ts" setup>
const route = useRoute();

const links = ref([
  {
    label: 'Companions',
    color: 'primary',
    size: 'xl',
    variant: 'outline',
    icon: 'fa6-solid:chevron-left',
    to: '/companions'
  }
])



const { status, data } = await useLazyFetch(`/api/companions/${route.params.id}`);

const stats = computed(() => [
  { field: 'Origin', value: data.value?.originName || '' },
  { field: 'Homeworld', value: data.value?.homeworldName || '' },
  { field: 'Archetype',  value: data.value?.archetypeName || '' },
  { field: 'Starter Level', value: '2' },
  { field: 'Recruited in', value: 'Prologe' },
]);


</script>
<template>
  <UPage>
    <UPageHeader :title="data?.name" :headline="data?.originName"
    :links="links"/>
    <UPageBody>

      <div class="grid grid-cols-3 gap-6">

        <CharacterDetails :data="stats" :image="data?.smallPortait" />

        <div class="col-span-2 ">x
        </div>

      </div>


    </UPageBody>
  </UPage>
</template>

