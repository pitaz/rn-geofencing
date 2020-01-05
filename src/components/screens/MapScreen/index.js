import React, { Component, useEffect, useState } from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import MapView,
{ PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle }
  from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { requestLocationPermission } from '../../../helpers/requestPermission';
import { OptionsPanel } from '../../OptionsPanel';
import { ControlPanel } from '../../ControlPanel';
import { styles } from './styles';

const MapScreen = () => {
  const [coordinates, setCoordinates] = useState(
    [
      { latitude: 37.8025259, longitude: -122.4351431 },
      { latitude: 37.7946386, longitude: -122.421646 },
      { latitude: 37.7665248, longitude: -122.4165628 },
      { latitude: 37.7834153, longitude: -122.4527787 },
      { latitude: 37.7948105, longitude: -122.4596065 },
    ]
  );

  const [markers, setMarkers] = useState([]);
  const [initialPosition, setInitialPosition] = useState();
  const [displayPolygon, setDisplayPolygon] = useState(false);
  const [displayCircle, setDisplayCircle] = useState(false);
  const [displaySquare, setDisplaySquare] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    requestLocationPermission(locateCurrentPosition);
  }, [])


  const locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log('current position', JSON.stringify(position));

        let newPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035
        }
        setInitialPosition(newPosition);
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
    )
  }

  const renderPolygon = () => (
    <Polygon
      coordinates={coordinates}
      fillColor={'rgba(100, 100, 200, 0.3)'}
    />
  );

  const renderCircle = () => (
    <Circle
      center={{ latitude: 37.8025259, longitude: -122.4351431 }}
      radius={1000}
      fillColor={'rgba(100, 100, 200, 0.3)'}
    />
  );

  const handlePolygon = () => {
    setSelected('polygon');
    setDisplayPolygon(true);
    setDisplayCircle(false);
    setDisplaySquare(false);
  }

  const handleCircle = () => {
    setSelected('circle');
    setDisplayPolygon(false);
    setDisplayCircle(true);
    setDisplaySquare(false);
  }

  const handleSquare = () => {
    setSelected('square');
    setDisplayPolygon(false);
    setDisplayCircle(false);
    setDisplaySquare(true);
  }
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={map => _map = map}
        showsUserLocation={true}
        style={styles.map}
        initialRegion={initialPosition && initialPosition}
        zoomControlEnabled={true}
      >
        {displayPolygon && renderPolygon()}
        {displayCircle && renderCircle()}
        {
          coordinates.map((item) => (
            <Marker
              draggable
              coordinate={{ latitude: item.latitude, longitude: item.longitude }}
            >
            </Marker>
          ))
        }

      </MapView>
      <OptionsPanel
        handlePolygon={handlePolygon}
        handleCircle={handleCircle}
        handleSquare={handleSquare}
        selected={selected}
      />
      <ControlPanel />

      <View style={styles.bottomPanel}>
        <TouchableOpacity
          onPress={() => { }}
          style={styles.buttonStyle}
        >
          <Text style={styles.textStyle}>
            Select Location
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MapScreen;
