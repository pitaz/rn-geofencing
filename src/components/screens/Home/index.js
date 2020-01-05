import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.body}>Redundant Home screen</Text>
        <Button
          title='View map'
          onPress={() => { this.props.navigation.navigate('MapScreen') }} />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    marginBottom: 32
  },
  body: {
    fontSize: 22
  }
});

export default Home;
