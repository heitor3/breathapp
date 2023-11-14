import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 220,
    marginTop: 50,
    paddingHorizontal: 26,
    display: 'flex',
    fontFamily: theme.fonts.textRegular,
    textAlign: 'justify'
  },
  textInfo: {
    color: '#FFF',
    textAlign: 'justify',
    lineHeight: 26
  },
  text: {
    color: "#FFF",
    lineHeight: 30,
    fontSize: 14,
    fontFamily: theme.fonts.textRegular
  },
  bold: {
    color: "#FFF",
    lineHeight: 30,
    fontSize: 16,
    fontFamily: theme.fonts.textBold
  },
  countCycles: {
    width: '100%',
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
    fontFamily: theme.fonts.textRegular
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
    fontFamily: theme.fonts.textBold,
    lineHeight: 22,
    color: "#000"
  }
});