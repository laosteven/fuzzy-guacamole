<script setup>

</script>

<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">
        <NuxtLink to="/" class="navbar-link">
          {{ $t('pageTitles.about') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/resume" class="navbar-link">
          {{ $t('pageTitles.resume') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/portfolio" class="navbar-link">
          {{ $t('pageTitles.portfolio') }}
        </NuxtLink>
      </li>

      <!-- <li class="navbar-item">
        <NuxtLink to="/contact" class="navbar-link">
          {{ $t('pageTitles.contact') }}
        </NuxtLink>
      </li> -->

      <!-- <li class="navbar-item">
        <div class="icon-item">
          <ion-icon name="camera-outline" class="icon-item text-[20px] mx-auto" />
          <NuxtLink to="/snappybara" class="navbar-link">
            {{ $t('pageTitles.snappybara') }}
          </NuxtLink>
        </div>
      </li> -->
    </ul>
  </nav>
</template>

<style scoped>
a.router-link-active {
  font-weight: bold;
}
a.router-link-exact-active {
  color: var(--frost);
}
</style>
