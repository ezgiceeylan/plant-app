import type { Plan } from './components/PlanOption';

export const SUBSCRIPTION_PLANS: Plan[] = [
  {
    id: 'monthly',
    title: '1 Month',
    priceLabel: '$2.99/month, auto renewable',
  },
  {
    id: 'yearly',
    title: '1 Year',
    priceLabel: 'First 3 days free, then $529.99/year',
    badge: 'Save 50%',
  },
];

export const DEFAULT_PLAN_ID = 'yearly';

export const PAYWALL_NOTE =
  'After the 3-day free trial period you will be charged $529.99 per year unless you cancel before the trial ends. Yearly subscription is auto-renewable.';
