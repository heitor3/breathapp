import { StyleSheet } from 'react-native';
import { themeStyles } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%'
  },
  content: {
    marginTop: 40,
    paddingHorizontal: 26,
    height: 300,
  },
  text: {
    lineHeight: 30,
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'justify'
  },
  bold: {
    lineHeight: 30,
    fontSize: 16,
    fontWeight: 'bold',
  },
});