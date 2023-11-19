import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    paddingHorizontal: 30
  },
  welcome: {
    fontWeight: '600',
    fontSize: 32,
  },
  text: {
    marginTop: 40,
    textAlign: 'justify',
    lineHeight: 20,
  },
  boxCollection: {
    marginTop: 100,
    width: '100%',
    height: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  boxConente: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 160
  },
  footerInfo: {
    width: '100%',
    paddingHorizontal: 30,
    marginTop: -20,
    textAlign: 'justify'
  }

});