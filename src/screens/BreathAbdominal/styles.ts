import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 260,
    marginTop: 50,
    paddingHorizontal: 26,
    display: 'flex',

  },
  textInfo: {
    color: "#FFF",
    lineHeight: 30,
    fontSize: 14,
    fontFamily: theme.fonts.textRegular
  },
  textModal: {
    color: "#FFF",
    lineHeight: 30,
    fontSize: 14,
    fontWeight: 'normal',
  },
  bold: {
    color: "#FFF",
    lineHeight: 30,
    fontSize: 16,
    fontWeight: 'bold',
  },
});