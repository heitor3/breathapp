import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  back: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  headerContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 60,
  },
  headerTitle: {
    marginTop: 20,
    fontSize: 22,
    height: 60,
  },
  actionButton: {
    width: '100%',
    paddingHorizontal: 10,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  contentButton: {
    width: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  radioButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  flags: {
    marginBottom: 10,
  },
});
