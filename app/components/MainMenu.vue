<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Home',
    icon: 'i-lucide-house',
    to: '/'
  },
  {
    label: 'Guide',
    children: [
      {
        label: 'Items',
        icon: 'i-lucide-house',
         to: '/items'
      },
      {
        label: 'Builds',
        icon: 'i-lucide-house',
         to: '/builds'
      },
    ]
  },
  {
    label: 'Help',
    icon: 'i-lucide-circle-help',
    disabled: true
  }
])
</script>

<template>
  <UNavigationMenu :items="items" class="w-full justify-center z-60" />
</template>
