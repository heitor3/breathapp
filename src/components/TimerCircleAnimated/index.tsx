import React, { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet } from "react-native";

type TimerCircleAnimatedProps = {
  color: string;
  colorTop: string;
  spinInit: boolean;
};

export function TimerCircleAnimated({ colorTop, color, spinInit }: TimerCircleAnimatedProps) {
  const spinValue = useRef(new Animated.Value(0)).current;
  let animation: Animated.CompositeAnimation | null = null;

  useEffect(() => {

    const startAnimation = () => {
      animation = Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      );

      animation.start();
    };

    const stopAnimation = () => {
      if (animation) {
        animation.reset();
        animation.stop();
      }
    };

    if (spinInit) {
      startAnimation();
    } else {
      stopAnimation();
    }

    return () => {
      stopAnimation();
    };
  }, [spinInit]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View
      style={[
        styles.circle,
        { transform: [{ rotate: spin }] },
        {
          borderRightColor: color,
          borderLeftColor: color,
          borderBottomColor: color,
          borderTopColor: colorTop,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 130,
    height: 130,
    borderRadius: 100,
    borderWidth: 10
  },
});
