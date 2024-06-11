import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useRecoilValue } from "recoil";
import { selectedEventState } from "@/recoil/atoms";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";
const ClaimTicket = () => {
  const selectedEvent = useRecoilValue(selectedEventState);
  const [questionCounter, setQuestionCounter] = useState(0);
  const [inputText, setInputText] = useState("");
  const [optionSelected, setOptionSelected] = useState([]);
  const handleButtonPress = () => {
    if (questionCounter + 1 < selectedEvent.questions.length) {
      setQuestionCounter((questionCounter) => questionCounter + 1);
    } else {
    }
  };

  const handleOptionPress = (index) => {
    // console.log("option selection", index, optionSelected, selectedEvent.questions[index].multipleAllowed);
    if (!optionSelected.includes(index)) {
      if (
        optionSelected.length > 0 &&
        selectedEvent.questions[questionCounter].multipleAllowed
      ) {
        setOptionSelected([...optionSelected, index]);
      } else if (optionSelected.length === 0) {
        setOptionSelected([...optionSelected, index]);
      }
    } else {
      setOptionSelected(optionSelected.filter((item) => item !== index));
    }
  };
  return (
    <LinearGradient
      colors={["#A5A3FF", "white"]}
      style={styles.container}
      start={{ x: 0, y: 0.1 }} // Change direction (right to left)
      end={{ x: 1, y: 0.75 }}
    >
      {/* Your claim ticket button or other content here */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ width: "70%" }}>
          <Text style={{ fontSize: 10, color: "#6C63FF", fontWeight: "600" }}>
            QUESTION {questionCounter + 1} OF {selectedEvent?.questions?.length}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            {selectedEvent?.questions[questionCounter].question}
          </Text>
          {selectedEvent?.questions[questionCounter].type === "input" && (
            <View
              style={{
                //   backgroundColor: "white",
                //   height: "40%",
                borderRadius: 8,
                marginTop: 10,
              }}
            >
              <TextInput
                style={styles.textInput}
                value={inputText}
                onChangeText={setInputText}
                placeholder="Write your answer here"
                placeholderTextColor={"#A5A3FF"}
              />
            </View>
          )}

          {selectedEvent?.questions[questionCounter].type === "options" && (
            <View style={{ marginVertical: 20 }}>
              {selectedEvent?.questions[questionCounter].options.map(
                (option, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        handleOptionPress(index);
                      }}
                      key={index.toString()}
                      style={{
                        marginTop: 20,
                        padding: 20,
                        backgroundColor: "white",
                        borderRadius: 8,
                        alignItems: "center",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Text
                          style={{
                            color: "#A5A3FF",
                            fontSize: 18,
                            fontWeight: "800",
                          }}
                        >
                          {option}
                        </Text>
                        {optionSelected.includes(index) && (
                          <View style={{ position: "relative", left: 50 }}>
                            <AntDesign
                              name="checkcircle"
                              size={24}
                              color="#A5A3FF"
                            />
                          </View>
                        )}
                      </View>
                    </TouchableOpacity>
                  );
                }
              )}
            </View>
          )}
          <TouchableOpacity
            style={styles.claimTicketButton}
            onPress={handleButtonPress}
          >
            <Text style={styles.claimTicketButtonText}>
              {questionCounter + 1 < selectedEvent?.questions?.length
                ? "Next Question"
                : "Claim ticket"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    height: "50%",
    // borderColor: 'gray',
    // borderWidth: 1,
    padding: 10,
    fontWeight: "bold",
    color: "#A5A3FF",
    // backgroundColor:'red'
  },
  claimTicketButton: {
    backgroundColor: "#6C63FF",
    padding: 10,
    marginTop: 20,
    borderRadius: 30,
    // height:'12%'
    // width:'80%'
  },
  claimTicketButtonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center", // Center text horizontally within button
  },
});

export default ClaimTicket;
