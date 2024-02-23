import React from 'react';
import { Animated, View, useWindowDimensions } from 'react-native';

import { styles } from './styles';


interface Step {
  id: string;
  steps: string[];
}

interface StepsComponentProps {
  steps: Step[];
  scrollX: Animated.Value;
}

export function Paginator({ steps, scrollX }: StepsComponentProps) {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      {
        steps.map((item, index) => {
          const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 16, 10],
            extrapolate: "clamp",
          })

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp"
          })

          return <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} key={index.toString()} />
        })
      }
    </View>
  );
}