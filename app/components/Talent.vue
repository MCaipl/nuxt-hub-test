<script lang="ts" setup>

const props = defineProps<{
  type: string;
  name: string
}>();

const color = computed(() => {

  switch (props.type) {
    case 'Ability':
      return 'primary'
    case 'Skill':
      return 'success'
    case 'Heroic Action':
      return 'warning'
    case 'Talent':
    case 'Common Talent':
      return 'info'
    default:
      return 'neutral'
  }
})

</script>

<template>
  <UPopover>
    <UBadge :color  variant="subtle" size="md">{{name}}</UBadge>
    <template #content>
      <div class="p-3 min-w-48">
        <div class="mb-2 font-semibold text-base">{{name}}</div>
        <p class="text-sm w-[300px]">

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare at lacus dignissim tempor. Praesent erat mi, fringilla non libero euismod, sollicitudin placerat lectus. Aliquam a dolor sagittis, vehicula velit eget, pretium arcu. Nullam interdum lobortis diam vitae porttitor. Etiam commodo consequat eros quis iaculis. Aliquam ullamcorper, risus in pharetra rutrum, est lorem tincidunt leo, quis luctus nulla tellus et tellus. Morbi pharetra auctor mauris non tristique. Aliquam efficitur euismod leo facilisis auctor. Etiam tristique eget nulla vel cursus. Sed placerat iaculis felis a dapibus.


        </p>
      </div>
    </template>
  </UPopover>
</template>

