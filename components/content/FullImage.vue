<script setup lang="ts">
  //\\ TYPE //\\//\\//\\//\\//\\//\\//\\//\\
  type Subtitle = {
    text: string
    linkText: string
    href: string
  }
  //\\ INTERFACE //\\//\\//\\//\\//\\//\\//\\
  interface Props {
    type: '1' | '2'
  }
  interface Section {
    title: string
    subtitle: Subtitle
    src: string
    alt: string
  }
  //\\ PROP //\\//\\//\\//\\//\\//\\//\\//\\
  const props = defineProps<Props>()
  //\\ DATA //\\//\\//\\//\\//\\//\\//\\//\\
  const firstSection: Ref<Section> = ref({
    title: 'Safety & responsibility',
    subtitle: {
      text: 'Our work to create safe and beneficial AI requires a deep understanding of the potential risks and benefits, as well as careful consideration of the impact.',
      linkText: 'Learn about safety',
      href: 'https://openai.com/safety'
    },
    src: 'https://images.openai.com/blob/971cb9d4-66e4-46b0-95d8-f3b57931b08e/stangel-2022-0052.jpg',
    alt: 'stangel-2022-0052'
  })
  const secondSection: Ref<Section> = ref({
    title: 'Careers at OpenAI',
    subtitle: {
      text: 'Developing safe and beneficial AI requires people from a wide range of disciplines and backgrounds.',
      linkText: 'View careers',
      href: 'https://openai.com/careers'
    },
    src: 'https://images.openai.com/blob/47e8bf4c-ffd5-4b80-b481-568ed1329f97/stangel-2022-1598.jpg',
    alt: 'stangel-2022-1598'
  })
  //\\ COMPUTED //\\//\\//\\//\\//\\//\\//\\
  const content = computed<Section> (() => {
    switch (props.type) {
      case '1':
        return firstSection.value
      case '2':
        return secondSection.value
      default:
        return firstSection.value
    }
  })
</script>

<template>
  <!-- head section -->
  <div class="border-t mt-28 mb-16 pt-4 mx-6 flex flex-row justify-between text-white">
    <!-- title -->
    <div class="w-1/2 justify-self-start">
      <h2 class="font-thin text-5xl font-serif">{{ content.title }}</h2>
    </div>
    <!-- subtitle -->
    <div class="w-1/2 justify-self-end">
      <p class="text-3xl font-normal mb-8">
        {{ content.subtitle.text }}
      </p>
      <a :href="content.subtitle.href" target="_blank">
        <p 
          class="inline-block text-lg font-light underline underline-offset-4 hover:decoration-slate-100/20"
        >
          {{ content.subtitle.linkText }}
        </p>
      </a>
    </div>
  </div>
  <!-- image -->
  <div class="bg-black">
    <img
      :src="content.src"
      :alt="content.alt"
      class="h-auto w-full block"
    />
  </div>
</template>