import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  buttonStyle: {
    backgroundColor: '#BABABA',
    padding: 10,
    bottom: 15,
    width: '80%',
    position: 'absolute',
    borderRadius: 20,
    alignSelf: 'center'
  },
  textStyle: {
    color: '#E8E8E8',
    textAlign: 'center'
  },
  bottomPanel: {
    height: 80,
    width: '100%',
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#E8E8E8'
  },
});
