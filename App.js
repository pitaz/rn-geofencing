import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './src/components/screens/Home'
import MapScreen from './src/components/screens/MapScreen';

const AppStack = createStackNavigator({
  Home: Home,
  MapScreen: {
    screen: MapScreen,
    navigationOptions: {
      header:null,
      tabBarVisible: false,
    }
  },
});

export default createAppContainer(AppStack);
