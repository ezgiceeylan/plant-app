import type { Slide } from '../../types';

export const ONBOARDING_SLIDES: Slide[] = [
  {
    id: 'identify',
    titleLead: 'Take a photo to ',
    titleHighlight: 'identify',
    titleTrail: 'the plant!',
    hero: require('@/assets/images/onboarding/onboarding-step1-hero.png'),
    background: require('@/assets/images/onboarding/onboarding-step1-background.png'),
  },
  {
    id: 'care-guides',
    titleLead: 'Get plant ',
    titleHighlight: 'care guides',
    titleShadow: true,
    hero: require('@/assets/images/onboarding/onboarding-step2-hero.png'),
    heroLayout: 'device',
    background: require('@/assets/images/onboarding/onboarding-step2-background.png'),
    leaves: require('@/assets/images/onboarding/onboarding-step2-leaves.png'),
    badge: require('@/assets/images/onboarding/onboarding-step2-badge.png'),
    fadeBottom: true,
  },
];
