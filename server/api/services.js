import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 0,
      title: 'Web Development',
      description: {
        en: 'I use VueJS, a modern JavaScript framework, while making dynamic and static websites and applications.',
        fr: 'I use VueJS, a modern JavaScript framework, while making dynamic and static websites and applications.',
      },
      icon: 'terminal-outline',
      image: null,
    },
    {
      id: 1,
      title: 'Lorem Ipsum',
      description: {
        en: 'I use VueJS, a modern JavaScript framework, while making dynamic and static websites and applications.',
        fr: 'I use VueJS, a modern JavaScript framework, while making dynamic and static websites and applications.',
      },
      icon: 'terminal-outline',
      image: null,
    },
    {
      id: 2,
      title: 'Design',
      description: {
        en: 'I build modern and advanced websites and applications with Laravel, the PHP framework.',
        fr: 'I build modern and advanced websites and applications with Laravel, the PHP framework.',
      },
      icon: 'shirt-outline',
      image: null,
    },
    {
      id: 3,
      title: 'Photography',
      description: {
        en: 'I build modern and advanced websites and applications with Laravel, the PHP framework.',
        fr: 'I build modern and advanced websites and applications with Laravel, the PHP framework.',
      },
      icon: 'camera-outline',
      image: null,
    },
  ]
})
