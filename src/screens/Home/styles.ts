import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('screen')

const value = height < 800 ? 120 : 200

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    paddingHorizontal: 30,
  },
  welcome: {
    fontWeight: '600',
    fontSize: 28,
  },
  text: {
    marginTop: 30,
    textAlign: 'justify',
    lineHeight: 20,
  },
  boxCollection: {
    marginTop: value,
    width: '100%',
    gap: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  boxConente: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 90
  },
  footerInfo: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: -20,
    textAlign: 'justify'
  }

});