// screens/CampsiteListScreen.js
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { List, useTheme } from 'react-native-paper';

const campsites = [
  { id: '1', name: 'Pine Valley Campground' },
  { id: '2', name: 'Mountain View RV Park' },
  { id: '3', name: 'Lakeside Retreat' },
];

export default function CampsiteListScreen({ navigation }) {
  const theme = useTheme();

  const renderItem = ({ item }) => (
    <List.Item
      title={item.name}
      onPress={() => navigation.navigate('CampsiteDetail', { campsiteId: item.id })}
      left={props => <List.Icon {...props} icon="tent" />}
      style={{ backgroundColor: theme.colors.surface }}
    />
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <FlatList
        data={campsites}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});