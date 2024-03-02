import React, { useEffect, useRef, ReactNode } from 'react';
import { Animated, Easing } from 'react-native';

import { styles } from './styles';

type TimerCicleAimatedProps = {
  children?: ReactNode;
  startStop: boolean;
  inhale: number;
  hold: number;
  exhale: number;
  color: string;
}

export function TimerCircleAnimated({ children, startStop, exhale, hold, inhale, color }: TimerCicleAimatedProps) {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const animationRef = useRef<Animated.CompositeAnimation>();

  useEffect(() => {
    const scaleAnimation = Animated.timing(
      scaleValue,
      {
        toValue: 1.3, // Aumentar o tamanho para o dobro
        duration: inhale, // Duração da animação em milissegundos
        easing: Easing.linear, // Tipo de animação (linear neste caso)
        useNativeDriver: true // Usa o driver nativo para a animação
      }
    );

    const holdAnimation = Animated.timing(
      scaleValue,
      {
        toValue: 1.3, // Aumentar o tamanho para o dobro
        duration: hold, // Duração da animação em milissegundos
        easing: Easing.linear, // Tipo de animação (linear neste caso)
        useNativeDriver: true // Usa o driver nativo para a animação
      }
    );

    const resetAnimation = Animated.timing(
      scaleValue,
      {
        toValue: 1, // Reduzir o tamanho para o original
        duration: exhale,
        easing: Easing.linear,
        useNativeDriver: true
      }
    );

    // Criar a sequência de animação
    const sequenceAnimation = Animated.sequence([
      Animated.delay(0), // Aguardar 3 segundos antes de iniciar a animação
      scaleAnimation,
      Animated.delay(0),
      holdAnimation,
      Animated.delay(0), // Aguardar 3 segundos antes de iniciar a próxima animação
      resetAnimation
    ]);

    animationRef.current = Animated.loop(sequenceAnimation);
    // Iniciar a animação
    if (startStop) {
      animationRef.current.start();
    } else {
      // Se startStop for false, resetar a animação e parar
      animationRef.current.stop();
      scaleValue.setValue(1); // Resetar o valor da escala para 1
    }

    // Limpar a animação quando o componente for desmontado
    return () => {
      sequenceAnimation.stop();
    };
  }, [scaleValue, startStop]);

  return (
    <Animated.View style={[styles.circle, { transform: [{ scale: scaleValue }], backgroundColor: color }]}>
      {children}
    </Animated.View>
  );
} 