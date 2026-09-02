import type { FeatureItem } from './components/FeatureCard';

const identifyIcon = require('@/assets/images/paywall/feature-identify.png');
const speedIcon = require('@/assets/images/paywall/feature-speed.png');

export const PREMIUM_FEATURES: FeatureItem[] = [
  {
    id: 'identify',
    icon: identifyIcon,
    title: 'Unlimited',
    subtitle: 'Plant identify',
  },
  {
    id: 'speed',
    icon: speedIcon,
    title: 'Faster',
    subtitle: 'Process results',
  },
  {
    id: 'guides',
    icon: identifyIcon,
    title: 'Detailed',
    subtitle: 'Care guides',
  },
];
