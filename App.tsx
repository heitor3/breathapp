import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useThemeControl } from './src/stores/themeSetColor';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Routes } from './src/routes';
import { ThemeStyle } from './src/global/styles/theme';

const getStatusBarStyle = (barStyle: ThemeStyle['bar']): 'light' | 'dark' => {
  return barStyle === 'dark' ? 'light' : 'dark';
};

export default function App() {
  const { theme, toggleTheme } = useThemeControl();

  useEffect(() => {
    const getTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem('theme');
        console.log('Stored Theme:', storedTheme);

        if (storedTheme === 'dark') {
          toggleTheme('dark');
        } else {
          toggleTheme('light');
        }
      } catch (error) {
        console.error('Error reading theme from AsyncStorage:', error);
      }
    };

    getTheme();
  }, [toggleTheme]);

  const barStyle = getStatusBarStyle(theme.bar);

  return (
    <>
      <StatusBar
        style={barStyle}
        translucent
      />
      <Routes />
    </>
  );
}
