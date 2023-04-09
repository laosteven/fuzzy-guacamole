import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Web Development',
        fr: 'Web Development',
      },
    },
    {
      id: 2,
      title: {
        en: 'Application',
        fr: 'Application',
      },
    },
    {
      id: 3,
      title: {
        en: 'Web Design',
        fr: 'Web Design',
      },
    },
  ]
})
