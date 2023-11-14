import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'
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
    color: "#FFF",
    marginTop: 10,
    fontSize: 22,
    fontFamily: theme.fonts.textBold
  },
});