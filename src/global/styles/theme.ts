// styles.ts
interface ThemeColors {
  primaryColor: string;
  textColor: string;
  statusBarColor: string;
}

interface ThemeFonts {
  textRegular: string;
  textMedium: string;
  textBold: string;
}

export type ThemeStyleName = 'light' | 'dark';

export interface ThemeStyle {
  colors: ThemeColors;
  fonts: ThemeFonts;
  bar: ThemeStyleName; // Alteração aqui
}

export interface ThemeStyles {
  light: ThemeStyle;
  dark: ThemeStyle;
}

const themeStyles: ThemeStyles = {
  light: {
    colors: {
      primaryColor: "#e8e7e9ff",
      textColor: "#000000",
      statusBarColor: "dark"
    },
    fonts: {
      textRegular: "Roboto-Regular",
      textMedium: "Roboto-Medium",
      textBold: "Roboto-Bold"
    },
    bar: "light"
  },
  dark: {
    colors: {
      primaryColor: "#181818",
      textColor: "#FFFFFF",
      statusBarColor: "light"
    },
    fonts: {
      textRegular: "Roboto-Regular",
      textMedium: "Roboto-Medium",
      textBold: "Roboto-Bold"
    },
    bar: "dark"
  },
};

export { themeStyles };
