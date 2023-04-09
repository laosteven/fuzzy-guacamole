<script setup>
import { useI18n } from 'vue-i18n'

useHead({
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })

/* Services */
const { data: services } = await useFetch('/api/services')
</script>

<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.about') }}
      </h2>
    </header>

    <section class="about-text">
      <p>
        I'm a passionate software engineer with a strong focus on web development and front-end development.
        With a strong foundation in computer science and a creative flair, I approach web development as
        a perfect blend of art and science.
      </p>

      <p>
        I believe that effective web development not only requires
        robust technical skills but also an understanding of user behavior and design principles.
        I enjoy collaborating with cross-functional teams, turning ideas into reality, and constantly pushing
        the boundaries of what's possible in web development.
      </p>
    </section>

    <!-- service -->

    <section class="service">
      <h3 class="h3 service-title">
        What i'm doing?
      </h3>

      <ul class="service-list">
        <ServiceItem v-for="service in services" :key="service.id" :service="service" />
      </ul>
    </section>
  </article>
</template>
