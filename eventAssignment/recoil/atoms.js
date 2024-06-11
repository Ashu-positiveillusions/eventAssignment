import { atom } from "recoil";

const eventsListState = atom({
  key: "eventsList",
  default: [],
});

const selectedEventState = atom({
  key: "selectedEvent",
  default: null,
});

export { eventsListState, selectedEventState };
