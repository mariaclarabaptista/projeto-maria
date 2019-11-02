import HomeScreen from './screens/Home/menu';
import SustentabilidadeScreen from './screens/Sustentabilidade/sustentabilidade';

import { 
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
} from 'react-navigation';


export const SignedOutRoutes = createStackNavigator({
  Home: {
      screen: HomeScreen 
  },

  Sustentabilidade: {
      screen: SustentabilidadeScreen
  },

    initialRouteName: 'HomeScreen'
  
});