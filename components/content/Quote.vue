<script setup lang="ts">
  //\\ TYPE //\\//\\//\\//\\//\\//\\//\\//\\
  type Image = {
    src: string
    alt: string
  }
  //\\ INTERFACE //\\//\\//\\//\\//\\//\\//\\
  interface Props {
    type?: string
  }
  interface Section {
    text: string
    name: string
    role: string
    image: Image
  }

  //\\ PROP //\\//\\//\\//\\//\\//\\//\\//\\
  const props = withDefaults(defineProps<Props>(), {
    type: '1'
  })

  //\\ DATA //\\//\\//\\//\\//\\//\\//\\//\\
  const firstSection: Ref<Section> = ref({
    text: '    I encourage my team to keep learning. Ideas in different topics or fields can often inspire new ideas and broaden the potential solution space.',
    name: 'Lilian Weng',
    role: 'Applied AI at OpenAI',
    image: {
      src: 'https://images.openai.com/blob/734af367-24c1-4043-934c-269a6a3ec47e/stangel-2022-0484.jpg',
      alt: 'stangel-2022-0484'
    }
  })
  //\\ COMPUTED //\\//\\//\\//\\//\\//\\//\\
  const content = computed<Section> (() => {
    switch (props.type) {
      case '1':
        return firstSection.value
      default:
        return firstSection.value
    }
  })
</script>

<template>
  <div class="border-t border-slate-100/20 mt-28 mb-16 pt-5 mx-6 flex flex-row gap-2 justify-between text-white">
    <!-- quote -->
    <div class="basis-1/2">
      <blockquote>
        <h2 class="after:content-['”'] before:content-['“'] font-thin text-7xl">{{ content.text }}</h2> <!--  font-serif -->
      </blockquote>

      <h6 class="font-semibold text-xl mt-6">{{ content.name }}</h6>
      <h6 class="font-light text-xl mt-1">{{ content.role }}</h6>
    </div>
    <!-- image -->
    <div class="basis-1/2">
      <img
      :src="content.image.src"
      :alt="content.image.alt"
      class="h-auto w-full block"
    />
    </div>
  </div>

</template>