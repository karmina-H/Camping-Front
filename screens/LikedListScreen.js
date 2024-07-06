// screens/VisitedListScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useStateValue } from '../context/StateProvider';

const VisitedListScreen = () => {
  const [{ likedList }, dispatch] = useStateValue();
  console.log('likedList :', likedList);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>LikedList</Text>
      {/* visitedList의 내용을 표시 */}
      {likedList.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
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

export default VisitedListScreen;
