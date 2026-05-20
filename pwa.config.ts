import type { Config } from './types';

export default {
  name: 'CEE NEXUS',
  shortName: 'CEE NEXUS',
  description: 'Medical Entrance Preparation Platform for Nepalese Students',
  themeColor: '#0ea5e9',
  backgroundColor: '#ffffff',
  origin: 'https://ceenexus.blogspot.com',
  id: '/',
  direction: 'auto',
  language: 'en-US',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  pwa: {
    logs: true,
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  shortcuts: [
    {
      name: 'Physics Notes',
      shortName: 'Physics',
      description: 'Quick access to Physics notes',
      url: '/search/label/Physics?utm_source=homescreen',
    },
    {
      name: 'Chemistry Notes',
      shortName: 'Chemistry',
      description: 'Quick access to Chemistry notes',
      url: '/search/label/Chemistry?utm_source=homescreen',
    },
    {
      name: 'Biology Notes',
      shortName: 'Biology',
      description: 'Quick access to Biology notes',
      url: '/search/label/Biology?utm_source=homescreen',
    },
    {
      name: 'Practice MCQs',
      shortName: 'MCQs',
      description: 'Practice medical entrance MCQs',
      url: '/search/label/MCQ?utm_source=homescreen',
    },
  ],
} satisfies Config;
