import { atom } from 'recoil';

const eventsListState = atom({
  key: 'eventsList',
  default: [], // Initial empty array for events
});

const selectedEventState = atom({
  key: 'selectedEvent',
  default: null, // Initially no selected event
});

export { eventsListState, selectedEventState };
