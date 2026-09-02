import { View } from 'react-native';

import { PlanOption } from '../PlanOption';

import { styles } from './PlanSelector.styles';
import type { PlanSelectorProps } from './PlanSelector.types';

export function PlanSelector({ plans, selectedId, onSelect }: PlanSelectorProps) {
  return (
    <View style={styles.list}>
      {plans.map((plan) => (
        <PlanOption
          key={plan.id}
          plan={plan}
          selected={plan.id === selectedId}
          onPress={() => onSelect(plan.id)}
        />
      ))}
    </View>
  );
}
