import type { Plan } from './components/PlanOption';

export const SUBSCRIPTION_PLANS: Plan[] = [
  {
    id: 'monthly',
    title: '1 Month',
    priceLabel: '$2.99/month,',
    priceNote: 'auto renewable',
  },
  {
    id: 'yearly',
    title: '1 Year',
    priceLabel: 'First 3 days free, then $529.99/year',
    badge: 'Save 50%',
  },
];

export const DEFAULT_PLAN_ID = 'yearly';
