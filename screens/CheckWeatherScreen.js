// screens/VisitedListScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CheckWeatherScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CheckWeatherScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CheckWeatherScreen;
