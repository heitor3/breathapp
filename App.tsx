import React, {useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import {useThemeControl} from './src/stores/themeSetColor';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Routes} from './src/routes';
import {ThemeStyle} from './src/global/styles/theme';
import SplashScreen from 'react-native-splash-screen';
import {Platform} from 'react-native';
import useTranslateControl from './src/stores/translateControl';
import {useTranslation} from 'react-i18next';
import './src/utils/i18n';
import {Settings} from './src/screens/Settings';

const getStatusBarStyle = (barStyle: ThemeStyle['bar']): 'light' | 'dark' => {
  return barStyle === 'dark' ? 'light' : 'dark';
};

export default function App() {
  const {theme, toggleTheme} = useThemeControl();
  const {setTranslate} = useTranslateControl();
  const {i18n} = useTranslation();

  useEffect(() => {
    const splashScreenTime = 3000;

    if (Platform.OS === 'android') {
      setTimeout(function () {
        SplashScreen.hide();
      }, splashScreenTime);
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

    const getTrasnlation = async () => {
      try {
        const newtranslate = await AsyncStorage.getItem('translate');
        if (newtranslate) {
          setTranslate(newtranslate);
        }
        i18n.changeLanguage(newtranslate!).then(() => {});
      } catch (error) {
        console.error('Error reading translate from AsyncStorage:', error);
      }
    };

    getTrasnlation();
    getTheme();
  }, [toggleTheme]);

  const barStyle = getStatusBarStyle(theme.bar);

  return (
    <>
      <StatusBar style={barStyle} translucent />
      <Settings />
      {/* <Routes /> */}
    </>
  );
}
