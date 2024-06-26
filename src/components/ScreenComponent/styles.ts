import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  children: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  buttonModal: {
    alignItems: 'center',
    height: 50,
  },
});
