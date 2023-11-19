import { create } from 'zustand';
import { themeStyles } from '../global/styles/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ThemeStyle {
  colors: {
    primaryColor: string;
    textColor: string;
    statusBarColor: string;
  };
  fonts: {
    textRegular: string;
    textMedium: string;
    textBold: string;
  };
  bar: 'light' | 'dark';
}

export interface ThemeStore {
  theme: ThemeStyle;
  toggleTheme: (newTheme: 'light' | 'dark') => void;
}

export const useThemeControl = create<ThemeStore>((set) => ({
  theme: themeStyles.light,
  toggleTheme: async (newTheme: 'light' | 'dark') => {
    await AsyncStorage.setItem('theme', newTheme);
    set({
      theme: newTheme === 'light' ? themeStyles.light : themeStyles.dark,
    });
  },
}));