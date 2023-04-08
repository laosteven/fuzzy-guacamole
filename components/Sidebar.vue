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
        <img src="/images/my-avatar.png" :alt="fullName" width="80">
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
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Github
            </p>

            <a :href="`https://github.com/${githubHandle}`" class="contact-link" target="_blank">{{ githubHandle }}</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Linkedin
            </p>

            <a href="https://tr.linkedin.com/in/lao-a-steven" class="contact-link" target="_blank">{{ fullName }}</a>
          </div>
        </li>

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
    </div>
  </aside>
</template>
