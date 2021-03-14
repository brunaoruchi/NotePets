import * as React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../../pages/Home';
import Pets from '../../pages/Pets';

const Drawer = createDrawerNavigator();
Icon.loadFont();
MaterialCommunityIcons.loadFont();

export default function Menu() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={styles.drawerStyle}
      drawerContentOptions={{labelStyle: {fontSize: 18}}}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({focused}) => (
            <Icon
              name="home"
              size={30}
              color={focused ? '#D76E33' : '#FBC072'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Pets"
        component={Pets}
        options={{
          drawerIcon: ({focused}) => (
            <Icon
              name="paw"
              size={30}
              color={focused ? '#D76E33' : '#FBC072'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <ProfileDrawer {...props} />
      <DrawerItemList
        {...props}
        activeTintColor="#D76E33"
        inactiveTintColor="#FBC072"
        activeBackgroundColor="#FEF5E7"
      />
      <LineDrawer />
      <DrawerItem
        label="Logout"
        labelStyle={{color: '#D40000', fontSize: 18}}
        onPress={() => {
          props.navigation.popToTop();
        }}
        icon={() => (
          <MaterialCommunityIcons name="logout" size={30} color="#D40000" />
        )}
      />
    </DrawerContentScrollView>
  );
}

function ProfileDrawer(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('Home');
      }}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/Icon.png')}
          style={styles.imageStyle}
        />
        <Image
          source={require('../../assets/NotePets.png')}
          style={styles.imageStyleLabel}
        />
      </View>
    </TouchableOpacity>
  );
}

function LineDrawer() {
  return (
    <View style={{backgroundColor: '#E0E0E0', height: 2, marginVertical: 8}} />
  );
}
const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: '#EDEBCB',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -5,
    paddingBottom: 20,
  },
  drawerStyle: {
    width: 250,
    backgroundColor: '#FFFFFF',
  },
  imageStyle: {
    width: 70,
    resizeMode: 'contain',
  },
  imageStyleLabel: {
    width: 100,
    marginTop: -30,
    resizeMode: 'contain',
  },
});
