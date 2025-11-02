<script lang="ts" setup>
import type { AccordionItem } from '@nuxt/ui'

const route = useRoute();


const items = computed(() =>[
  {
    label: 'Companions',
    to: '/companions'
  },
  {
    label: data?.value?.name,
    to: `/companions/${route.params.id}`
  },
  {

    label: 'Builds',
  },
  {
    label: 'Build Details',
    to: `/companions/${route.params.id}/build/${route.params.buildId}`
  }
])


const { status, data } = await useLazyFetch(`/api/companions/${route.params.id}`);

const stats = computed(() => [
  { field: 'Origin', value: data.value?.originName || '' },
  { field: 'Homeworld', value: data.value?.homeworldName || '' },
  { field: 'Archetype',  value: data.value?.baseArchetypeName || '' },
  { field: 'Starter Level', value: data.value?.starterLevel || '' },
  { field: 'Recruited in', value: data.value?.actName || '' },
]);

const foo = [
  [{ name: 'Charge', type: 'Ability' }],
  [{ name: 'Medicae', type: 'Skill'}],
  [{ name: 'Endure', type: 'Ability' }],
  [{ name: 'Daring Breach', type: 'Heroic Action' },{ name: 'Defense Stance', type: 'Talent' }],
  [{ name: 'Thick Skin', type: 'Talent' }, { name: 'Weapon Skill', type: 'Stats'}],
  [{ name: 'Taunting Scream', type: 'Ability' }, { name: 'Athletics', type: 'Skill'}],
  [{ name: 'Weapon Skill', type: 'Stats'}, { name: 'Fleet Combat Training', type: 'Common Talent'}],
  [{ name: 'Athletics', type: 'Skill'}, { name: 'Hardened Scars', type: 'Talent' }],
  [{ name: 'Daring Breach II', type: 'Heroic Action' }],
  [{ name: 'Impetus', type: 'Talent'}, { name: 'Toughness', type: 'Stats' }],
  [{ name: 'Reckless Strike', type: 'Ability'}, { name: 'Get off me!', type: 'Common Talent' }],
  [{ name: 'Toughness', type: 'Stats'}, { name: 'Carouse', type: 'Skill' }],
  [{ name: 'Ramming Speed	', type: 'Talent'}, { name: 'Carouse', type: 'Skill' }],
  [{ name: 'Perception', type: 'Stats'}, { name: 'Dual-Weapon Combat	', type: 'Common Talent' }],
  [{ name: 'Daring Breach IV', type: 'Heroic Action' }],
]

const bar = [
  [{ name: 'Versitility', type: 'Ability' }],
  [{ name: 'Wildfire', type: 'Ability' }],
  [{ name: 'Always Ready', type: 'Talent' }],
  [{ name: 'Steady Superiority', type: 'Heroic Action' }],
  [{ name: 'AP+1', type: 'none' },{ name: 'Weapon Skill', type: 'Stats'}],
  [{ name: 'Dependable', type: 'Talent' },{ name: 'Weapon Skill', type: 'Stats'}],
]

const baz = [
  [{ name: 'Charge', type: 'Ability' }],
]

const itemss: AccordionItem[] = [
  { label: 'Soldier', levels: foo  },
  { label: 'Arch-Militant', levels: bar },
  { label: 'Exemplar', levels: baz },
]

const active = ref('0')



</script>
<template>
  <UPage>
    <UBreadcrumb :items="items" />
    <UPageHeader :title="data?.name" :headline="data?.originName" />
    <UPageBody>

      <div class="sm:grid sm:grid-cols-3 gap-6">

        <CharacterDetails :data="stats" :image="data?.smallPortait" />

        <div class="sm:col-span-2 ">
          <h2 class="relative text-2xl text-highlighted font-bold mt-2 mb-6">Build Breakdown</h2>
          <UAccordion :items="itemss" v-model="active" >
            <template #body="{ item }">
              <table class="w-full table-auto ">
                <tbody class="[&>tr]:data-[selectable=true]:hover:bg-elevated/50 [&>tr]:data-[selectable=true]:focus-visible:outline-primary divide-y divide-default">
                  <tr v-for="(value, index) in item.levels" :key="index" >
                    <td class="w-32 text-sm text-muted whitespace-nowrap">Level {{index + 1}} </td>
                    <template v-if="value.length === 1">
                      <td class="p-4 text-sm text-muted whitespace-nowrap" colspan="2">
                        <Talent :type="value[0]?.type" :name="value[0]?.name" />
                      </td>
                    </template>

                    <template v-else>
                      <td class="p-4 text-sm text-muted whitespace-nowrap">
                        <Talent :type="value[0]?.type" :name="value[0]?.name" />
                      </td>
                      <td class="p-4 text-sm text-muted whitespace-nowrap">
                        <Talent :type="value[1]?.type" :name="value[1]?.name" />
                      </td>
                    </template>
                  </tr>
                </tbody>
              </table>


            </template>
          </UAccordion>
          <h2 class="relative text-2xl text-highlighted font-bold mt-12 mb-6">Items</h2>
            <table class="min-w-full overflow-clip">
              <tbody class="[&>tr]:data-[selectable=true]:hover:bg-elevated/50 [&>tr]:data-[selectable=true]:focus-visible:outline-primary divide-y divide-default">
                <tr>
                  <td class="w-32 text-sm text-muted whitespace-nowrap">Helmet</td>
                  <td class="p-4 text-sm text-muted whitespace-nowrap">The Guardian Crown / Tactical Genius / Retinal analyser</td>
                </tr>
                <tr>
                  <td class="w-32 text-sm text-muted whitespace-nowrap">Armor</td>
                  <td class="p-4 text-sm text-muted whitespace-nowrap">Invincible Onsalught Armour / Sanguine Judgement / Adherent of Mainkind</td>
                </tr>
                <tr>
                  <td class="w-32 text-sm text-muted whitespace-nowrap">Necklace</td>
                  <td class="p-4 text-sm text-muted whitespace-nowrap">Invigorating Resolve / Solid Shield Enarmes</td>
                </tr>
                <tr>
                  <td class="w-32 text-sm text-muted whitespace-nowrap">Trinket 1</td>
                  <td class="p-4 text-sm text-muted whitespace-nowrap"> - </td>
                </tr>
                <!-- <tr>
                  <td class="w-32">Trinket 2</td>
                  <td class="p-4"> - </td>
                </tr>
                <tr>
                  <td class="w-32">Glove</td>
                  <td class="p-4">Adaptive Gloves / Relish Anguish / Metal Claw Gloves</td>
                </tr>
                <tr>
                  <td class="w-32">Cloak</td>
                  <td class="p-4"> Malpain Shroud / Swashbuckler cloak </td>
                </tr>
                <tr>
                  <td class="w-32">Boots</td>
                  <td class="p-4">Pneumo Boots / Void Veteran Boots / Enforcer's Light boots</td>
                </tr>
                <tr>
                  <td class="w-32">Pet</td>
                  <td class="p-4"></td>
                </tr> -->
              </tbody>
            </table>

        </div>
      </div>
    </UPageBody>
  </UPage>
</template>

