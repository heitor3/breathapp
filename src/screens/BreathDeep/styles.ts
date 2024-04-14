import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('screen')

const value = height < 800 ? 10 : 60

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: value,
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
    fontWeight: 'normal',
  },
  bold: {
    lineHeight: 30,
    fontSize: 16,
    fontWeight: 'bold',
  },
});