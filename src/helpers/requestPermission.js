import { request, PERMISSIONS } from 'react-native-permissions';

export const requestLocationPermission = async (locateCurrentPosition) => {
  if (Platform.OS === 'ios') {
    let response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

    if (response === 'granted') {
      locateCurrentPosition();
    }
  } else {
    let response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

    if (response === 'granted') {
      locateCurrentPosition();
    }
  }
}
