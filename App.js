// App.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme, Button } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import CampsiteListScreen from './screens/CampsiteListScreen';
import CampsiteDetailScreen from './screens/CampsiteDetailScreen';
import FindCampScreen from './screens/FindCampScreen';
import VisitedListScreen from './screens/VisitedListScreen';
import LikedListScreen from './screens/LikedListScreen';
import CheckWeatherScreen from './screens/CheckWeatherScreen';
import PopularListScreen from './screens/PopularListScreen';

import { StateProvider } from './context/StateProvider';
import { reducer, initialState  } from './context/reducer';

const { width, height } = Dimensions.get('window');


const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4CAF50',
    accent: '#8BC34A',
    background: '#F5F5F5',
    surface: '#FFFFFF',
    text: '#212121',
  },
};

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{title}</Text>
    <TouchableOpacity onPress={() => alert('로그인')}>
      <Button mode="text" style={styles.headerButton} textColor='#FFFFFF'>로그인</Button>
    </TouchableOpacity>
  </View>
);

const screenOptions = {
  header: () => <Header title="Camping Site App" />
};

export default function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CampsiteList" component={CampsiteListScreen} />
          <Stack.Screen name="CampsiteDetail" component={CampsiteDetailScreen} />
          <Stack.Screen name="FindCamp" component={FindCampScreen} />
          <Stack.Screen name="VisitedList" component={VisitedListScreen} />
          <Stack.Screen name="LikedList" component={LikedListScreen} />
          <Stack.Screen name="CheckWeather" component={CheckWeatherScreen} />
          <Stack.Screen name="PopularList" component={PopularListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    height: height * 0.12,
    backgroundColor: '#4CAF50',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    flexDirection: 'row',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  headerButton: {
    borderColor: 'white',
    borderWidth: 2,
    marginRight: 10,
  },
});
