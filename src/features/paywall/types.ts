export type BillingPeriod = 'monthly' | 'yearly';

export interface Plan {
  id: string;
  title: string;
  priceLabel: string;
  period: BillingPeriod;
  trialDays?: number;
  badge?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
}

export type PurchaseStatus = 'idle' | 'loading' | 'purchasing' | 'restoring' | 'error';
