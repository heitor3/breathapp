import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1,
    flexDirection: 'row',
  },
  dropdownHeader: {
    borderRadius: 5,
    marginRight: 2,
  },
  selectedOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownList: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  option: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  transleteIcon: {
    width: 26,
    height: 26,
  },
  image: {
    width: 30,
    height: 19,
  },
});
