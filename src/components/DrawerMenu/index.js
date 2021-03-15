import * as React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

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
      drawerContentOptions={{labelStyle: {fontSize: 16}}}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({focused}) => (
            <Icon
              name="home"
              size={24}
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
              size={24}
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
        label="Sair"
        labelStyle={{color: '#D40000', fontSize: 16}}
        onPress={() => {
          props.navigation.popToTop();
        }}
        icon={() => (
          <MaterialCommunityIcons name="logout" size={26} color="#D40000" />
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
  return <View style={styles.line} />;
}
