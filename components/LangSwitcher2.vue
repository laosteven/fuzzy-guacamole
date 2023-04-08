<script setup>
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from '../composables/locale'
const { locale } = useI18n({ useScope: 'global' })

const cookieLocale = useLocaleStore()

onMounted(() => {
  useLocaleStore()
})

function changeLang() {
  if (locale.value === 'tr') {
    cookieLocale.setLocale('en')
    locale.value = 'en'
  }
  else {
    cookieLocale.setLocale('fr')
    locale.value = 'fr'
  }
}
</script>

<template>
  <div class="cursor-pointer transition-all fade" @click="changeLang()">
    {{ locale.value }}
  </div>
</template>

<style scoped>
    .p-dropdown {
        border: none!important;
    }
</style>
