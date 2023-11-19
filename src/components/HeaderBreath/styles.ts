import { StyleSheet } from 'react-native';
import { themeStyles } from '../../global/styles/theme'
export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  logo: {
    width: 40,
    height: 40
  },
  title: {
    marginTop: 10,
    fontSize: 22,
    color: themeStyles.light.colors.textColor,
    fontFamily: themeStyles.light.fonts.textBold
  },
});