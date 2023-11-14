import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '33.33%',
    padding: 10,
    alignItems: 'center',
    height: 150,
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#c6c6c6"
  },
  titleBreath: {
    color: '#FFF',
    textAlign: 'center',
    width: '100%',
    marginTop: 8,
    fontFamily: theme.fonts.textMedium
  }

});