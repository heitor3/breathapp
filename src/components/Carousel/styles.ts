import { Dimensions, StyleSheet } from "react-native";


const width = Dimensions.get('screen').width

const { height } = Dimensions.get('screen')

const value = height < 800 ? 180 : 260

export const styles = StyleSheet.create({
  container: {
    height: value
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