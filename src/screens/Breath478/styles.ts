import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  contentInfo: {
    width: '100%',
    paddingHorizontal: 26,
    marginTop: 50
  },
  text: {
    lineHeight: 30,
    fontSize: 14,
  },
  boxStopWatch: {
    display: 'flex',
    width: '90%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    marginTop: 30,
  },
  watch: {
    fontSize: 72,
  },
  containerButton: {
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 20,
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
  textModal: {
    lineHeight: 18,
    textAlign: 'justify',
    marginTop: 20
  },
  titleButton: {
    lineHeight: 22,
  }
});