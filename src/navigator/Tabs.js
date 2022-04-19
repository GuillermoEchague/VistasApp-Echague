import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
import {StackNavigator} from './StackNavigator';
import { colors } from '../theme/appTeme';
import { Text } from 'react-native';


const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
    sceneContainerStyle={{
      backgroundColor:'white'
    }}
      tabBarOptions = {{
        activeTintColor: colors.primary,
        style: {
          borderTopColor: colors.primary,
          borderTopWidth:0,
          elevation:0,
        }
        
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {

          let iconName;
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1'
              break;
              case 'Tab2Screen':
              iconName = 'T2'
              break;
              case 'StackNavigator':
              iconName = 'ST'
              break;
          
            default:
              break;
          }

          return <Text style={{color}}>{iconName}</Text>
        }
      })}
    
    >
      <Tab.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={Tab2Screen} />
      <Tab.Screen name="StackNavigator" component={StackNavigator} />
    </Tab.Navigator>
  );
}