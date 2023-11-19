import { StyleSheet } from 'react-native';
import { themeStyles } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 220,
    marginTop: 50,
    paddingHorizontal: 26,
    display: 'flex',
    textAlign: 'justify'
  },
  textInfo: {
    textAlign: 'justify',
    lineHeight: 26
  },
  text: {
    lineHeight: 30,
    fontSize: 14,
  },
  bold: {
    lineHeight: 30,
    fontSize: 16,
    fontWeight: 'bold',
  },
  countCycles: {
    width: '100%',
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonsCount: {
    width: '100%',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 60
  },
  button: {
    backgroundColor: "#00FF7F",
    height: 40,
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  titleButton: {
    lineHeight: 22,
  }
});