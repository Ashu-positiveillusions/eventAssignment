import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable, ScrollView } from "react-native";
import { useRecoilValue } from "recoil";
import { selectedEventState } from "@/recoil/atoms";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const EventDetails = () => {
  const selectedEvent = useRecoilValue(selectedEventState);
  const [isVisible, setIsVisible] = useState(true); // Action sheet visibility state
  const navigation = useNavigation();
  const handleBuyTicket = () => {
    // Implement logic for handling ticket purchase (e.g., navigate to a ticket purchase screen)
    console.log("Buy Ticket clicked!");
    navigation.navigate("claimTicket");
  };

  const renderActionSheetContent = () => {
    const { name, by, area, day, date, scheduledTime, details, price, ticketsLeft, address } = selectedEvent;
    return (
      <ScrollView style={{padding: 20}}>
      <Pressable style={{backgroundColor:"#ccc", width:'20%', height:6, borderRadius:6, alignSelf:'center', marginBottom:6}}>

      </Pressable>
      <View style={{paddingBottom: 20}}>
        <Text style={styles.actionSheetTitle}>{name}</Text>
        <Text style={{fontSize: 14}}>by {by}</Text>
      </View>
      <View style={{}}>
        <Text style={styles.actionSheetDetails}>{day}, {date}</Text>
        <Text style={{fontSize:14}}>{scheduledTime}</Text>
      </View>
        <View style={[styles.actionSheetDetails, { flexDirection: "row" }]}>
          <Text>Details: </Text>
          <Text>{details}</Text>
        </View>
        <View style={[styles.actionSheetDetails, { flexDirection: "row" }]}>
          <Text>Price: </Text>
          <Text>{price}</Text>
        </View>
        <View style={[styles.actionSheetDetails, { flexDirection: "row" }]}>
          <Text>Tickets Left: </Text>
          <Text>{ticketsLeft}</Text>
        </View>
        <View style={[styles.actionSheetDetails, { flexDirection: "row" }]}>
          <Text>Address: </Text>
          <Text>{address}</Text>
        </View>
        <View style={[styles.actionSheetDetails, { flexDirection: "row" }]}>
          <Text>Details: </Text>
          <Text>{details}</Text>
        </View>
        <View style={[styles.actionSheetDetails, { flexDirection: "row" }]}>
          <Text>Details: </Text>
          <Text>{details}</Text>
        </View>
        <View style={[styles.actionSheetDetails, { flexDirection: "row" }]}>
          <Text>Details: </Text>
          <Text>{details}</Text>
        </View>
        <View style={[styles.actionSheetDetails, { flexDirection: "row" }]}>
          <Text>Details: </Text>
          <Text>{details}</Text>
        </View>
        <View style={[styles.actionSheetDetails, { flexDirection: "row" }]}>
          <Text>Details: </Text>
          <Text>{details}</Text>
        </View>
        <View style={[styles.actionSheetDetails, { flexDirection: "row" }]}>
          <Text>Details: </Text>
          <Text>{details}</Text>
        </View>

        <TouchableOpacity
          style={styles.buyTicketButton}
          onPress={handleBuyTicket}
        >
          <Text style={styles.buyTicketButtonText}>Buy ticket</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      {selectedEvent && (
        <>
          <Image
            source={{ uri: selectedEvent.image }}
            style={styles.eventImage}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <MaterialIcons name="arrow-back-ios" size={24} color="white" />
            </TouchableOpacity>
            {/* <Text style={styles.eventName}>{selectedEvent.name}</Text> */}
            <Text style={styles.eventName}>Event Details</Text>
          </View>
          {/* <Text style={styles.eventName}>{selectedEvent.name}</Text> */}
          {/* <TouchableOpacity
            style={styles.detailsButton}
            onPress={handleShowActionSheet}
          >
            <Text style={styles.detailsButtonText}>Details of the Event</Text>
          </TouchableOpacity> */}
        </>
      )}
      {isVisible && (
        <View style={styles.actionSheetContainer}>
          {renderActionSheetContent()}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor:'red'
  },
  eventImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Adjust as needed
  },
  eventName: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 10,
    color: "white",
  },
  detailsButton: {
    backgroundColor: "aqua",
    padding: 15,
    borderRadius: 5,
    flexDirection: "row", // Arrange button text and icon (if needed)
    alignItems: "center", // Center elements vertically
    width: "50%",
  },
  detailsButtonText: {
    fontSize: 16,
    color: "#000",
    flex: 1, // Allow text to grow within available space
  },
  actionSheetContainer: {
    flex: 1,
    justifyContent: "space-between",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    padding: 30,
    maxHeight: "80%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    minHeight: "50%",
  },
  actionSheetTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  actionSheetDetails: {
    marginBottom: 10,
  },
  actionSheetDetail: {
    fontSize: 16,
    marginBottom: 5,
  },
  buyTicketButton: {
    backgroundColor: "#6C63FF",
    padding: 10,
    marginTop: 10,
    borderRadius: 30,
    height:'12%'
  },
  buyTicketButtonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center", // Center text horizontally within button
  },
  backButton: {
    position: "relative",
    // top: 10,
    right: 90,
  },
});

export default EventDetails;
