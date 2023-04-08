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
      <h3 class="h3 service-title">
        Hi. I'm Steven.
      </h3>

      <p>
        I'm a passionate software engineer from Montreal, Canada, with a strong focus on web development and front-end development.
        With a keen eye for detail and a deep understanding of user experience, I create seamless and visually
        appealing web applications that engage users and drive results.
      </p>

      <p>
        With a strong foundation in computer science and a creative flair, I approach web development as
        a perfect blend of art and science. I believe that effective web development not only requires
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

      <ul class="service-list has-scrollbar">
        <ServiceItem v-for="service in services" :key="service.id" :service="service" />
      </ul>
    </section>

    <!-- clients -->

    <section class="clients">
      <h3 class="h3 clients-title">
        Clients
      </h3>

      <ul class="clients-list has-scrollbar">
        <li class="clients-item">
          <a href="#">
            <img src="images/logo-1-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="images/logo-2-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="images/logo-3-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="images/logo-4-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="images/logo-5-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="images/logo-6-color.png" alt="client logo">
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>
