import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useThemeControl } from './src/stores/themeSetColor';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Routes } from './src/routes';
import { ThemeStyle } from './src/global/styles/theme';
import SplashScreen from 'react-native-splash-screen'
import { Platform } from 'react-native';

const getStatusBarStyle = (barStyle: ThemeStyle['bar']): 'light' | 'dark' => {
  return barStyle === 'dark' ? 'light' : 'dark';
};

export default function App() {
  const { theme, toggleTheme } = useThemeControl();

  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }

    const getTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem('theme');

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
