<script setup>
useHead({
  title: 'Resume',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>

        <h3 class="h3">
          Education
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            École de technologie supérieure
          </h4>

          <span>2012 — 2017</span>

          <p class="timeline-text">
            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
            quas molestias
            exceptur.
          </p>
        </li>
      </ol>
    </section>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>

        <h3 class="h3">
          Experience
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Senior Frontend Developer
          </h4>

          <span>2022 - Present</span>

          <p class="timeline-text">
            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
            quas molestias
            exceptur.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Senior Frontend Developer
          </h4>

          <span>2019 - 2022</span>

          <p class="timeline-text">
            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
            quas molestias
            exceptur.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Software Development Engineer
          </h4>

          <span>2018 - 2019</span>

          <p class="timeline-text">
            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
            quas molestias
            exceptur.
          </p>
        </li>
      </ol>
    </section>

    <section class="skill">
      <h3 class="h3 skills-title">
        My skills
      </h3>

      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Web development
            </h5>
            <data value="90">90%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Graphic design
            </h5>
            <data value="70">70%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 70%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Debugging
            </h5>
            <data value="80">80%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              DevOps
            </h5>
            <data value="50">50%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 50%;" />
          </div>
        </li>
      </ul>
    </section>
  </article>
</template>
