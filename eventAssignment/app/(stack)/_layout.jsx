import { Stack } from 'expo-router';
import React, { useEffect } from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {fetchEventsApi} from '../../services/eventApi';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { eventsListState } from '../../recoil/atoms';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const setEvents = useSetRecoilState(eventsListState);
  useEffect(() => {
    const updateEventsList = async () => {
      const eventsData = await fetchEventsApi();
      setEvents(eventsData);
    };
    updateEventsList();
  },[]);
  return (
    <Stack
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Events',
          
        }}
      />
      <Stack.Screen
        name="eventsDetails"
        options={{
          title: 'Details',
          
        }}
      />
      <Stack.Screen
        name="claimTicket"
        options={{
          title: '',
          
        }}
      />
    </Stack>
  );
}
