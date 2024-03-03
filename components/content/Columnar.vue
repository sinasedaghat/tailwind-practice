<script setup lang="ts">
  //\\ TYPE //\\//\\//\\//\\//\\//\\//\\//\\
  type Subtitle = {
    text?: string
    linkText: string
    href: string
  }
  type Column = {
    id: number
    href: string
    title: string
    date: string
    image: {
      src: string
      alt: string
    }
  }
  //\\ INTERFACE //\\//\\//\\//\\//\\//\\//\\
  interface Props {
    type: '1' | '2' | '3'
  }
  interface Section {
    title: string
    subtitle: Subtitle
    columns: Array<Column>
  }
  //\\ PROP //\\//\\//\\//\\//\\//\\//\\//\\
  const props = defineProps<Props>()
  //\\ DATA //\\//\\//\\//\\//\\//\\//\\//\\
  const firstSection: Ref<Section> = ref({
    title: 'Latest updates',
    subtitle: {
      text: '',
      linkText: 'View all updates',
      href: 'https://openai.com/blog'
    },
    columns: [
      {
        id: 0,
        href: 'https://openai.com/blog/dall-e-3-is-now-available-in-chatgpt-plus-and-enterprise',
        image: {
          src: 'https://images.openai.com/blob/f698e023-3373-4385-93f3-f0e0a24adbf0/VALERIECloudAstronaut.png',
          alt: 'VALERIECloudAstronaut',
        },
        title: 'DALL·E 3 is now available in ChatGPT Plus and Enterprise',
        date: 'Oct 19, 2023'
      },
      {
        id: 1,
        href: 'https://openai.com/blog/chatgpt-can-now-see-hear-and-speak',
        image: {
          src: 'https://images.openai.com/blob/9c95036b-c2f5-4af8-a9c4-ed6c411f77e4/chatgpt-can-now-see-hear-and-speak-alt.jpg',
          alt: 'chatgpt-can-now-see-hear-and-speak-alt',
        },
        title: 'ChatGPT can now see, hear, and speak',
        date: 'Sep 25, 2023'
      },
      {
        id: 2,
        href: 'https://openai.com/dall-e-3',
        image: {
          src: 'https://images.openai.com/blob/b196df3a-6fea-4d86-87b2-f9bb50be64c7/leaf.png',
          alt: 'leaf',
        },
        title: 'DALL·E 3',
        date: 'Sep 20, 2023'
      },
      {
        id: 3,
        href: 'https://openai.com/blog/red-teaming-network',
        image: {
          src: 'https://images.openai.com/blob/71c1edf1-06f2-415c-826b-364f72fa74c1/red-teaming-network.png',
          alt: 'red-teaming-network',
        },
        title: 'OpenAI Red Teaming Network',
        date: 'Sep 19, 2023'
      },
    ]
  })
  const secondSection: Ref<Section> = ref({
    title: 'Research',
    subtitle: {
      text: 'We research generative models and how to align them with human values.',
      linkText: 'Learn about our research',
      href: 'https://openai.com/research/overview'
    },
    columns: [
      {
        id: 0,
        href: 'https://openai.com/research/dall-e-3-system-card',
        image: {
          src: 'https://images.openai.com/blob/de9e8dc2-a39b-46c9-b7a0-54dd5c56b1df/dall-e-3-system-card.png',
          alt: 'dall-e-3-system-card',
        },
        title: 'DALL·E 3 system card',
        date: 'Oct 3, 2023'
      },
      {
        id: 1,
        href: 'https://openai.com/research/gpt-4v-system-card',
        image: {
          src: 'https://images.openai.com/blob/96a6dba4-e46c-4f98-b718-915479d1c133/gpt-4vision-system-card.png',
          alt: 'gpt-4vision-system-card',
        },
        title: 'GPT-4V(ision) system card',
        date: 'Sep 25, 2023'
      },
      {
        id: 2,
        href: 'https://openai.com/research/confidence-building-measures-for-artificial-intelligence',
        image: {
          src: 'https://images.openai.com/blob/169a9863-5725-45cf-b096-6d2e5b6cebe9/confidence-building-measures-for-artificial-intelligence-workshop-proceedings.png',
          alt: 'confidence-building-measures-for-artificial-intelligence-workshop-proceedings',
        },
        title: 'Confidence-Building Measures for Artificial Intelligence: Workshop proceedings',
        date: 'Aug 1, 2023'
      },
      {
        id: 3,
        href: 'https://openai.com/research/frontier-ai-regulation',
        image: {
          src: 'https://images.openai.com/blob/d4f299e7-2084-43d6-80f5-40e9404f15e2/frontier-ai-regulation-managing-emerging-risks-to-public-safety.png',
          alt: 'frontier-ai-regulation-managing-emerging-risks-to-public-safety',
        },
        title: 'Frontier AI regulation: Managing emerging risks to public safety',
        date: 'July 6, 2023'
      },
    ]
  })
  const thirdSection: Ref<Section> = ref({
    title: 'Products',
    subtitle: {
      text: 'Our API platform offers our latest models and guides for safety best practices.',
      linkText: 'Explore our products',
      href: 'https://openai.com/product'
    },
    columns: [
      {
        id: 0,
        href: 'https://openai.com/blog/dall-e-3-is-now-available-in-chatgpt-plus-and-enterprise',
        image: {
          src: 'https://images.openai.com/blob/f698e023-3373-4385-93f3-f0e0a24adbf0/VALERIECloudAstronaut.png',
          alt: 'VALERIECloudAstronaut',
        },
        title: 'DALL·E 3 is now available in ChatGPT Plus and Enterprise',
        date: 'Oct 19, 2023'
      },
      {
        id: 1,
        href: 'https://openai.com/blog/chatgpt-can-now-see-hear-and-speak',
        image: {
          src: 'https://images.openai.com/blob/9c95036b-c2f5-4af8-a9c4-ed6c411f77e4/chatgpt-can-now-see-hear-and-speak-alt.jpg',
          alt: 'chatgpt-can-now-see-hear-and-speak-alt',
        },
        title: 'ChatGPT can now see, hear, and speak',
        date: 'Sep 25, 2023'
      },
      {
        id: 2,
        href: 'https://openai.com/blog/openai-partners-with-scale-to-provide-support-for-enterprises-fine-tuning-models',
        image: {
          src: 'https://images.openai.com/blob/c47c5a7d-b687-4656-baca-71754905ea26/openai-partners-with-scale-to-provide-support-for-enterprises-fine-tuning-models.png',
          alt: 'openai-partners-with-scale-to-provide-support-for-enterprises-fine-tuning-models',
        },
        title: 'OpenAI partners with Scale to provide support for enterprises fine-tuning models',
        date: 'Aug 24, 2023'
      },
      {
        id: 3,
        href: 'https://openai.com/blog/custom-instructions-for-chatgpt',
        image: {
          src: 'https://images.openai.com/blob/71bddfc7-a5ca-4c77-9b3d-96659356640c/custom-instructions-for-chatgpt.png',
          alt: 'custom-instructions-for-chatgpt',
        },
        title: 'Custom instructions for ChatGPT',
        date: 'Jul 20, 2023'
      },
    ]
  })
  //\\ COMPUTED //\\//\\//\\//\\//\\//\\//\\
  const content = computed<Section>(() => {
    console.log('prop from content computed in ColumnContent.vue component', props.type)
    // return firstSection ===> return TS error
    // return firstSection.value ===> correct output
    switch (props.type) {
      case '1':
        return firstSection.value
      case '2':
        return secondSection.value
      case '3':
        return thirdSection.value
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
      <p v-if="Boolean(content.subtitle.text)" class="text-3xl font-normal mb-8">
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

  <!-- columns section -->
  <div class="flex flex-row gap-4 mx-6">
    <div
      v-for="column in content.columns" 
      :key="column.id"
      class="basis-1/4"
    >
      <a 
        :href="column.href"
        class="flex flex-col text-white"
      >
        <!-- image -->
        <div>
          <img 
            :src="column.image.src" 
            :alt="column.image.alt"
            class="w-[348px] h-[348px] object-fill"
          >
        </div>
        <!-- title -->
        <div class="mt-1">
          <h3 class="font-semibold text-lg tracking-tight leading-snug hover:underline">{{ column.title }}</h3>
        </div>
        <!-- date -->
        <div class="mt-2">
          <p class="font-light">{{ column.date }}</p>
        </div>
      </a>
    </div>
  </div>
</template>