import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export const ControlPanel = () => (
  <View style={styles.controlPanel}>
    <Icon
      name='md-globe'
      type='ionicon'
      color='#747474'
      containerStyle={styles.iconContainer}
    />
    <Icon
      name='md-locate'
      type='ionicon'
      color='#747474'
      containerStyle={styles.iconContainer}
    />
    <Icon
      name='md-remove'
      type='ionicon'
      color='#747474'
      containerStyle={styles.iconContainer}
    />
    <Icon
      name='md-add'
      type='ionicon'
      color='#747474'
      containerStyle={styles.iconContainer}
    />

  </View>
);

const styles = StyleSheet.create({
  controlPanel: {
    flexDirection: 'row',
    bottom: 90,
    position: 'absolute',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000000',
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    borderRadius: 10,
    elevation: 2,
    alignSelf: 'center',
    backgroundColor: '#E8E8E8'
  },
  iconContainer: {
    padding: 8,
    marginLeft: 5,
    marginRight: 5,
  }
});
