import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Breath478 } from '../screens/Breath478';
import { BreathConscious } from '../screens/BreathConscious';
import { BreathAbdominal } from '../screens/BreathAbdominal';
import { BreathDeep } from '../screens/BreathDeep';
import { BreathAlternate } from '../screens/BreathAlternate';
import { BreathSquare } from '../screens/BreathSquare';


const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer independent={true}>
      <Navigator screenOptions={{
        headerShown: false,
      }}>
        <Screen
          name="home"
          component={Home}
        />
        <Screen
          name="breathConscious"
          component={BreathConscious}
        />

        <Screen
          name="breath478"
          component={Breath478}
        />

        <Screen
          name="breathAbdominal"
          component={BreathAbdominal}
        />

        <Screen
          name="breathSquare"
          component={BreathSquare}
        />

        <Screen
          name="breathAlternate"
          component={BreathAlternate}
        />

        <Screen
          name="breathDeep"
          component={BreathDeep}
        />

      </Navigator>
    </NavigationContainer>
  );
}