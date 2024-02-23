import { Dimensions, StyleSheet } from "react-native";


const width = Dimensions.get('screen').width
export const styles = StyleSheet.create({
  container: {
    minHeight: 260,
    maxHeight: 340
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
    padding: 6
  },
  title: {
    fontSize: 16,
    lineHeight: 18,
  },
  item: {
    display: 'flex',
    textAlign: 'justify',
    width: width - 80,
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  steps: {
    lineHeight: 20,
    textAlign: 'justify'
  },

});