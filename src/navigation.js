import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/')
      // links: [
      //   {
      //     text: 'SaaS',
      //     href: getPermalink('/homes/saas'),
      //   },
      //   {
      //     text: 'Startup',
      //     href: getPermalink('/homes/startup'),
      //   },
      //   {
      //     text: 'Mobile App',
      //     href: getPermalink('/homes/mobile-app'),
      //   },
      //   {
      //     text: 'Personal',
      //     href: getPermalink('/homes/personal'),
      //   },
      // ],
    },
    {
      text: 'Events',
      links: [
        {
          text: 'Coming Events'
        },
        {
          text : 'Onging Events'
        },
        {
          text : 'Past Events'
        }
      ]
      // links: [
      //   {
      //     text: 'Features (Anchor Link)',
      //     href: getPermalink('/#features'),
      //   },
      //   {
      //     text: 'Services',
      //     href: getPermalink('/services'),
      //   },
      //   {
      //     text: 'Pricing',
      //     href: getPermalink('/pricing'),
      //   },
      //   {
      //     text: 'About us',
      //     href: getPermalink('/about'),
      //   },
      //   {
      //     text: 'Contact',
      //     href: getPermalink('/contact'),
      //   },
      //   {
      //     text: 'Terms',
      //     href: getPermalink('/terms'),
      //   },
      //   {
      //     text: 'Privacy policy',
      //     href: getPermalink('/privacy'),
      //   },
      // ],
    },
    {
      text: 'Projects',
      links : [
        {
          text : 'Ongoing Projects'
        },
        {
          text : 'Completed Projects'
        }
      ]
    },
    {
      text: 'Blog',
      links : [
        {
          text : 'Space News Letter',
          href: getBlogPermalink(),
        },
        {
          text : 'Tech News Letter',
          href: getBlogPermalink(),
        }
      ]
      // links: [
      //   {
      //     text: 'Blog List',
      //     href: getBlogPermalink(),
      //   },
      //   {
      //     text: 'Article',
      //     href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
      //   },
      //   {
      //     text: 'Article (with MDX)',
      //     href: getPermalink('markdown-elements-demo-post', 'post'),
      //   },
      //   {
      //     text: 'Category Page',
      //     href: getPermalink('tutorials', 'category'),
      //   },
      //   {
      //     text: 'Tag Page',
      //     href: getPermalink('astro', 'tag'),
      //   },
      // ],
    },
    {
      text: 'Achievements',
      href: '#',
    },
    {
      text: 'Our Team',
      href: '#',
    },
    {
      text: 'Contact Us',
      href: getPermalink('#'),
      // href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Collaborations',
      links: [
        { text: 'IUCAA Pune', href: 'https://www.iucaa.in/en/'},
        { text: 'Celestic, IISER Tirupati', href: 'https://www.instagram.com/celestic_iisertpt/' },
        { text: 'Space India', href: 'https://space-india.com/' },
        { text: 'Idea Square', href: 'https://www.linkedin.com/company/idea-squared'},
        { text: 'Space Technology & Aeronautical Rocketry (STAR)', href: 'https://www.starlabsurat.com/' },
      ],
    },
    {
      title: 'Past Events',
      links: [
        { text: 'Star Gazing', href: '#' },
        { text: 'Regional Science Center Visit', href: '#' },
        { text: 'Aethereum 2022', href: '#' },
        { text: 'Gravitational Waves Workshop', href: '#' },
        { text: 'Astrophotography Workshop', href: '#' },
      ],
    },
    {
      title: 'Projects',
      links: [
        { text: 'ISS Overhead Discord Bot', href: 'https://github.com/astroclubiitt/ISS-Overhead-Checker' },
        { text: 'Rocket Modelling', href: 'https://github.com/astroclubiitt/Rocket-Modelling' },
      ],
    },
    {
      title: 'Achievements',
      links: [
        { text: 'Silver Medal🥈 - Cosmic Innovation Challenge, Shaastra 2023', href: '#' },
        {text: '14th Rank, Inter IIT Tech Meet 10.0 - ISRO Problem Statement', href: '#' },
      ]
    },
  ],
  secondaryLinks: [
    { text: 'Consitutuion', href: 'https://docs.google.com/document/d/1ek_Yr0NhK66p9L_JbXlCGWYDDn4dvJG8ZEHCEdhRtYg/edit?usp=sharing' },
    { text: 'Institute Website', href: 'https://www.iittp.ac.in' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x-filled', href: 'https://twitter.com/astroclubiitt' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/astroclubiitt' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook-filled', href: '#' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord-filled', href: 'https://discord.gg/m6uZQXJX3k' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github-filled', href: 'https://github.com/astroclubiitt' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/astroclubiitt' },
    { ariaLabel: 'Mail', icon: 'tabler:mail-filled', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=astronomyclub@iittp.ac.in' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg]">&#169; </span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/scienmanas"> Manas</a> · Gagan Vedhi · All rights reserved.
  `,
};
