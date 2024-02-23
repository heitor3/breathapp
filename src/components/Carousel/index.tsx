import { useState, useRef } from 'react';
import { FlatList, Text, View, Animated, ViewToken } from 'react-native';
import { styles } from './styles'
import { useThemeControl } from '../../stores/themeSetColor';
import { Paginator } from '../Paginator';

interface Step {
  id: string;
  steps: string[];
}

interface StepsComponentProps {
  steps: Step[];
}

export function Carousel({ steps }: StepsComponentProps) {
  const { theme } = useThemeControl();
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const scrollX = useRef(new Animated.Value(0)).current;
  const sliderRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    setCurrentIndex(viewableItems[0].index || 0);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

  return (
    <>
      <View style={styles.container}>
        <FlatList
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false
          })}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={sliderRef}
          horizontal
          bounces
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={steps}
          renderItem={({ item }) => (
            <View style={[styles.item, { backgroundColor: theme.colors.primaryColor }]}>
              <View style={styles.header}>
                <Text style={[styles.title, { color: theme.colors.textColor, fontFamily: theme.fonts.textMedium }]}>{item.id}</Text>
              </View>
              {item.steps.map((step, index) => (
                <Text key={Math.random()} style={[styles.steps, {
                  color: theme.colors.textColor,
                  fontFamily: theme.fonts.textRegular
                }]}>{step}</Text>
              ))}
            </View>
          )}
        />
      </View>
      <Paginator steps={steps} scrollX={scrollX} />
    </>
  );
}