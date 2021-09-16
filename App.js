import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Clock from './components/clock';
import TimerComponent from './components/timer';
import StopWatchComponent from './components/stopwatch';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Clock"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#111' }}
    >
      <Tab.Screen
        name="Clock"
        component={Clock}
        options={{
          tabBarLabel: 'Clock'
        }}
      />
      <Tab.Screen
        name="Timer"
        component={TimerComponent}
        options={{
          tabBarLabel: 'Timer'
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        options={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={MyTabs}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;