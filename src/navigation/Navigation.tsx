import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import SensorListScreen from '../screens/SensorListScreen';
import SensorDetailScreen from '../screens/SensorDetailScreen';
import ConfigScreen from '../screens/ConfigScreen';

export type RootStackParamList = {
  Splash: undefined;
  SensorList: undefined;
  SensorDetail: { sensorId: number; sensorName: string };
  Config: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SensorList"
          component={SensorListScreen}
          options={{ title: 'Sensores' }}
        />
        <Stack.Screen
          name="SensorDetail"
          component={SensorDetailScreen}
          options={({ route }) => ({ title: route.params.sensorName })}
        />
        <Stack.Screen
          name="Config"
          component={ConfigScreen}
          options={{ title: 'Configurações' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
