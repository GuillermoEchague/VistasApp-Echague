import 'react-native-gesture-handler';
import {  Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigatorr';

export const App = () => {
  return (
    
    <NavigationContainer >
      <StackNavigator/>
    </NavigationContainer>
  );
}

export default App;
