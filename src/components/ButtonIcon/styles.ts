import { StyleSheet } from 'react-native';
import { themeStyles } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '33.33%',
    padding: 10,
    alignItems: 'center',
    height: 150,
  },
  icon: {
    width: 64,
    height: 64,
    borderRadius: 10,
    borderWidth: 1,

  },
  titleBreath: {
    textAlign: 'center',
    width: '100%',
    marginTop: 8,
    lineHeight: 18,
  }

});