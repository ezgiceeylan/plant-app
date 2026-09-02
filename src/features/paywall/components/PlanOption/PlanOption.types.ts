export interface Plan {
  id: string;
  title: string;
  priceLabel: string;
  badge?: string;
}

export interface PlanOptionProps {
  plan: Plan;
  selected: boolean;
  onPress: () => void;
}
