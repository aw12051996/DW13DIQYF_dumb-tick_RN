import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './src/Screen/Home';
import CategoryPage from './src/Screen/CategoryPage';
import DetailEvent from './src/Screen/DetailEvent';

const AppNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    CategoryPage: {screen: CategoryPage},
    DetailEvent: {screen: DetailEvent},
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
