import { StyleSheet } from 'react-native';
import { themeStyles } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  children: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  buttonModal: {
    alignItems: 'center',
    height: 80,
  }
})