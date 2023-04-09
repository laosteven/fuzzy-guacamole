<script setup>
import { fullName, githubHandle } from '../common/constants'

let isOpen = ref(false)

function toggleMenu() {
  isOpen = !isOpen
}
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="https://avatars.githubusercontent.com/u/10532491?v=4" :alt="fullName" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" :title="fullName">
          {{ fullName }}
        </h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <span>Software engineer</span>
        </p>
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>

        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <!-- <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="language-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Language
            </p>

            <div class="contact-link">
              English, French
            </div>
          </div>
        </li> -->

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Location
            </p>

            <address>Montreal, Canada</address>
          </div>
        </li>
      </ul>

      <div class="separator" />

      <ul class="social-list">
        <li class="social-item">
          <NuxtLink to="https://github.com/laosteven" class="social-link" target="_blank">
            <ion-icon name="logo-github" />
          </NuxtLink>
        </li>

        <li class="social-item">
          <NuxtLink to="https://linkedin.com/in/lao-a-steven" class="social-link" target="_blank">
            <ion-icon name="logo-linkedin" />
          </NuxtLink>
        </li>

        <li class="social-item">
          <NuxtLink to="https://www.instagram.com/lao.a.steven/" class="social-link" target="_blank">
            <ion-icon name="logo-instagram" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>
