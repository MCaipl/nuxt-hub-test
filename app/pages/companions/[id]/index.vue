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


const { data } = await useLazyFetch(`/api/companions/${route.params.id}`);
const { data: buildsData } = await useLazyFetch(`/api/builds?companionId`, {
  params: {
    companionId: route.params.id
  }
});


const stats = computed(() => [
  { field: 'Origin', value: data.value?.originName || '' },
  { field: 'Homeworld', value: data.value?.homeworldName || '' },
  { field: 'Archetype',  value: data.value?.baseArchetypeName || '' },
  { field: 'Starter Level', value: data.value?.starterLevel || '' },
  { field: 'Recruited in', value: data.value?.actName || '' },
]);



</script>
<template>
  <UPage>
    <UBreadcrumb :items="items" />
    <UPageHeader :title="data?.name" :headline="data?.originName" />
    <UPageBody>

      <div class="sm:grid sm:grid-cols-3 gap-6">

        <CharacterDetails :data="stats" :image="data?.smallPortait" />

        <div class="col-span-2 ">
          <h2 class="relative text-2xl text-highlighted font-bold mt-2 mb-6">Builds</h2>

          <UPageList divided v-if="buildsData && buildsData.length > 0">
            <UPageCard
              v-for="(build, index) in buildsData"
              :key="index"
              variant="soft"
              spotlight
              spotlight-color="primary"
              class="mb-4"
              :to="`/companions/${route.params.id}/build/${build.id}`"
            >
              <template #body>
                <div>
                  <p class="font-medium text-highlighted text-base">{{ build.name }}</p>
                  <p class="text-muted text-sm">{{ build.description }}</p>
                </div>
              </template>
            </UPageCard>
          </UPageList>
          <UEmpty
              v-else
              icon="i-lucide-file"
              title="No Builds found"
              description="No builds have been created for this companion yet."
            />
        </div>
      </div>
    </UPageBody>
  </UPage>
</template>

