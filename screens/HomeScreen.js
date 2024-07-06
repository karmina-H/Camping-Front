import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, ScrollView, useNavigation } from 'react-native';
import { Text, useTheme, FAB, Portal } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

//일단 campsiteDetailScreen은 안씀

export default function HomeScreen({ navigation }) {
  const theme = useTheme();
  const [fabOpen, setFabOpen] = useState(false);


  const items = [
    { id: 1, name: 'Item 1', location: '상도동67-6' },
    { id: 2, name: 'Item 2', location: 'This is item 2' },
    { id: 3, name: 'Item 3', location: 'This is item 3' },
    { id: 4, name: 'Item 4', location: 'This is item 4' },
    { id: 5, name: 'Item 5', location: 'This is item 4' },
    { id: 6, name: 'Item 6', location: 'This is item 4' },
    { id: 7, name: 'Item 7', location: 'This is item 4' },
    { id: 8, name: 'Item 8', location: 'This is item 4' },
    { id: 9, name: 'Item 9', location: 'This is item 4' },
    { id: 10, name: 'Item 10', location: 'This is item 4' },
  ];

  const onStateChange = ({ open }) => setFabOpen(open);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.SelectContainer} >
        <TouchableOpacity style={styles.mainview} onPress={() => navigation.navigate('FindCamp')}>
          <Text>캠핑장 찾기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainview} onPress={() => navigation.navigate('LikedList')}>
          <Text>찜 해놓은 목록</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainview} onPress={() => navigation.navigate('VisitedList')}>
          <Text>방문했던 장소 목록</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomtext}>
          <Text style={styles.listheadtext}>실시간 인기 캠핑장 Top10</Text>
        </View>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          {items.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.listtext}>{item.id}. {item.name} : {item.location}asdcasd</Text>
              {/* 주소도 단위나 시단위 까지만 적기 */}
            </View>
          ))}
        </ScrollView>
      </View>

      <Portal>
        <FAB.Group
          open={fabOpen}
          visible
          icon={fabOpen ? 'close' : 'plus'}
          actions={[
            { icon: 'tent', label: '실시간 인기 캠핑장(도시별)', onPress: () => navigation.navigate('PopularList'), style: { backgroundColor: '#ccffcc' } },
            { icon: 'map', label: '캠핑장 위치', onPress: () => navigation.navigate('CampsiteDetail'), style: { backgroundColor: '#ccffcc' }},
            { icon: 'weather-sunny', label: '날씨 확인하기', onPress: () => navigation.navigate('CheckWeather'), style: { backgroundColor: '#ccffcc' } },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (fabOpen) {
              setFabOpen(false);
            }
          }}
          style={[styles.fab, fabOpen && styles.fabOpen]}
          fabStyle={styles.fabButton}
        />
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  bottomlist: {
    // borderColor: 'red',
    // borderWidth: 2,
  },
  listItem: {
    padding: 5,
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    height: height * 0.1,
  },
  mainview: {
    marginTop: height * 0.02,
    width: width * 0.9,
    height: height * 0.5 / 4,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  SelectContainer: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
  },
  listheadtext: {
    fontSize: 24,
  },
  bottomtext: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listtext: {
    fontSize: 18,
  },
  bottomContainer: {
    flex: 0.5,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 10,
  },
  fab: {
    position: 'absolute',
    margin: 0,
  },
  fabOpen: {
    height: 'auto',
    margin: 0,
  },
  fabButton: {
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccffcc',
  },
});
