import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { useThemeControl } from '../stores/themeSetColor';


export function Routes() {
  const { toggleTheme } = useThemeControl()




  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}