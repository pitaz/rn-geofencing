import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Tooltip } from 'react-native-elements';

export const OptionsPanel = (props) => {
  return (
    <View style={styles.optionsPanel}>
      <Tooltip
        popover={
          <Text style={{}}>Choose a shape to draw a geofence over a location</Text>}
        backgroundColor="#ffffff"
        withOverlay={false}
        width={200}
        height={60}
      >
        <Icon
          onPress={props.handleCircle}
          reverse
          name='circle'
          type='font-awesome'
          color='#ffffff'
          iconStyle={props.selected === 'circle' ? { color: 'black' } : { color: 'grey' }}
          containerStyle={styles.iconContainer}
        />
      </Tooltip>

      <Icon
        onPress={props.handleSquare}
        reverse
        name='square'
        type='font-awesome'
        color='#ffffff'
        iconStyle={props.selected === 'square' ? { color: 'black' } : { color: 'grey' }}
        containerStyle={styles.iconContainer}
      />

      <Icon
        onPress={props.handlePolygon}
        reverse
        name='label'
        type='material'
        color='#ffffff'
        iconStyle={props.selected === 'polygon' ? { color: 'black' } : { color: 'grey' }}
        containerStyle={styles.iconContainer}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  optionsPanel: {
    flexDirection: 'row',
    top: 30,
    position: 'absolute',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    borderRadius: 10,
    elevation: 2,
    alignSelf: 'center',
  },
  iconContainer: {
    padding: 2,
    marginLeft: 2,
    marginRight: 2,
  }
});
