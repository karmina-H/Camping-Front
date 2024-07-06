// screens/CampsiteDetailScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Paragraph, useTheme } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';

export default function CampsiteDetailScreen() {
  const theme = useTheme();

  // In a real app, you'd fetch this data from an API or database
  const campsite = { //여기다가 내 위치 정보 넣어주고 주변 캠핑장 검색하기 
    name: 'Pine Valley Campground',
    description: 'A beautiful campground surrounded by pine trees.',
    latitude: 37.7749,
    longitude: -122.4194,
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Card style={styles.card}>
        <Card.Title title={campsite.name} />
        <Card.Content>
          <Paragraph>{campsite.description}</Paragraph>
        </Card.Content>
      </Card>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: campsite.latitude,
          longitude: campsite.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: campsite.latitude,
            longitude: campsite.longitude,
          }}
          title={campsite.name}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    marginBottom: 20,
  },
  map: {
    width: '100%',
    height: 300,
  },
});