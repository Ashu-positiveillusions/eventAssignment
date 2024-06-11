// EventsList.tsx
import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, ActivityIndicator, Dimensions, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { eventsListState, selectedEventState } from '../../recoil/atoms';
import {  useNavigation } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";


const EventsList = () => {
  const navigation = useNavigation();   
  const events = useRecoilValue(eventsListState);
  const setSelectedEvent = useSetRecoilState(selectedEventState);

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
      handleEventSelect(item);
      navigation.navigate('eventsDetails');
    }}>
      <LinearGradient
        colors={["#A5A3FF", "gray"]}
        // style={styles.container}
        start={{ x: 0, y: 0.1 }} // Change direction (right to left)
        end={{ x: 1, y: 0.25 }}
      >
      <View style={styles.eventItem}>
        <Text style={styles.eventHeading}>{item.name}</Text>
        <Text style={styles.eventText}>{item.area}</Text>
        <Text style={styles.eventText}>{item.date}</Text>
      </View>
    </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Events near You</Text>
      </View>
      {events.length ? (
        <FlatList
          data={events}
          renderItem={renderItem}
          keyExtractor={(item) => item.name} // Key extractor using event name (assuming it's unique)
        />
      ) : (
        <ActivityIndicator style={styles.activityIndicator} size="large" color="blue" />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Light background color
  },
  header: {
    backgroundColor: '#000',
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  eventItem: {
    padding: 10,
    margin: 5, 
    borderRadius: 10, 
    backgroundColor: '#ffff', 
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
    alignItems:'center',
    // justifyContent:'space-around'
  },
  eventHeading: {
    fontSize: 16,
    color: '#6C63FF',
    fontWeight:'700'
  },
  eventText: {
    fontSize: 14,
    color: 'black',
    padding:4,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EventsList;
