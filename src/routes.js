import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './pages/Login';
import Register from './pages/Register';
import CreatePet from './pages/CreatePet';
import UpdatePet from './pages/UpdatePet';
import CreateNote from './pages/CreateNote';
import UpdateNote from './pages/UpdateNote';
import History from './pages/History';
import Menu from './components/DrawerMenu';

export default function Routes() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CreatePet"
            component={CreatePet}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UpdatePet"
            component={UpdatePet}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CreateNote"
            component={CreateNote}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UpdateNote"
            component={UpdateNote}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="History"
            component={History}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
