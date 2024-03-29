import { StyleSheet } from 'react-native';
import { themeStyles } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  contentInfo: {
    width: '100%',
    paddingHorizontal: 26,
    marginTop: 50
  },
  text: {
    lineHeight: 26,
    fontSize: 14,
    textAlign: 'justify'
  },
  bold: {
    lineHeight: 30,
    fontSize: 16,
    fontWeight: 'bold',
  },
  boxStopWatch: {
    display: 'flex',
    width: '90%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    marginTop: 20
  },
  watch: {
    fontSize: 72
  },
  containerButton: {
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  play: {
    backgroundColor: "#00FF7F",
    height: 40,
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  stop: {
    backgroundColor: "#B22222"
  },
  title: {
    fontWeight: 'bold',
    lineHeight: 20,
    fontSize: 16
  },
  titleButton: {
    lineHeight: 22,
  }
});