import type { Plan } from '../PlanOption';

export interface PlanSelectorProps {
  plans: Plan[];
  selectedId: string;
  onSelect: (id: string) => void;
}
