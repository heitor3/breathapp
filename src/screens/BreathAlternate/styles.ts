import { StyleSheet } from 'react-native';
import { themeStyles } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: 50,
    paddingHorizontal: 10,
    display: 'flex',
    alignItems: 'center'
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
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonsCount: {
    width: '100%',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20
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