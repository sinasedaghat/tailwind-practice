<script setup lang="ts">
  const mainRow = ref({
    src: 'https://images.openai.com/blob/1a9c00bc-8f3a-4601-b901-1f1e0c3c0984/stangel-2022-0527.jpg?trim=522,0,201,0&width=3200',
    title: 'Creating safe AGI that benefits all of humanity',
    button: {
      text: 'Learn about OpenAI',
      href: ''
    }
  })
  const columns = ref([
    {
      id: 0,
      text: 'Pioneering research on the path to AGI',
      subtext: 'Learn about our research',
      href: 'https://openai.com/research/overview',
      target:'_blank'
    },
    {
      id: 1,
      text: 'Transforming work and creativity with AI',
      subtext: 'Explore our products',
      href: 'https://openai.com/product',
      target:'_blank'
    },
    {
      id: 2,
      text: 'Join us in shaping the future of technology',
      subtext: 'View careers',
      href: 'https://openai.com/careers',
      target:'_blank'
    },
  ])
</script>

<template>
  <!-- image banner -->
  <div class="relative mb-16">
    <div class="w-screen h-screen brightness-50 bg-black">
      <img
        :src="mainRow.src"
        class="h-full w-full"
        alt="Open Ai baner"
      />
    </div>
    <div class="absolute w-4/6 bottom-0 left-0 right-0 mx-auto mb-10 text-white">
      <h1 class="text-[4.6rem] leading-none mb-20">{{ mainRow.title }}</h1>
      <button 
        class="border border-white hover:bg-white hover:text-black hover:cursor-pointer py-1 px-3"
      >
        {{ mainRow.button.text }}
      </button>
    </div>
  </div>
  <!-- baner links -->
  <div class="flex flex-row flex-wrap justify-around text-white">
    <div 
      v-for="column in columns"
      class="basis1/3 w-1/3 ps-6 last:ps-0 last:pe-24 pe-20"
    >
      <a 
        :href="column.href" 
        :target="column.target"
        >
        <!-- class="underline underline-offset-4 hover:decoration-slate-100/20" -->
        <h3 class="no-underline text-3xl font-semibold mb-3">{{ column.text }}</h3>
        <p class="inline-block text-sm font-light underline underline-offset-4 hover:decoration-slate-100/20">{{ column.subtext }}</p>
      </a>
    </div>
  </div>
</template>