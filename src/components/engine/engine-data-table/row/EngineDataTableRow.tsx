import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Modal } from "react-native";
import { main_green } from "../../../../colors/Colors";
import EngineDataTableCol from "../col/EngineDataTableCol";
import { EngineDataTableRowType } from "./EngineDataTableRowType";
import { useState } from "react";
import NewEntryEmkaEngine from "../../../../screens/engines/emka-engine/new-entry/NewEntryEmkaEngine";
import EngineNewEntryForm from "../../engine-new-entry-form/EngineNewEntryForm";
import NewEntryMsEngine from "../../../../screens/engines/ms-engine/new-entry/NewEntryMsEngine";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

const EngineDataTableRow = (props: EngineDataTableRowType) => {
  const [modal_visible, set_modal_visible]: [boolean, Function] =
    useState(false);
    const [incubatorError, setIncubatorError]: [string, Function] = useState("");

    const [humidityValue, setHumidityValue]: [any, Function] = useState("");
    const [humidityError, setHumidityError]: [string, Function] = useState("");
  
    const [returnmentValue, setReturnmentValue]: [any, Function] = useState("");
    const [returnmentError, setReturnmentError]: [string, Function] =
      useState("");
  
    const [aerationValue, setAerationValue]: [any, Function] = useState("");
    const [aerationError, setAerationError]: [string, Function] = useState("");
  
    const [roomTemperatureValue, setRoomTemperatureValue]: [any, Function] =
      useState("");
    const [roomTemperatureError, setRoomTemperatureError]: [string, Function] =
      useState("");
  
  return (
    <Row
      onPress={() => {
        if (props.onPress) props.onPress();
        set_modal_visible(true);
      }}
    >
      <>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modal_visible}
          onRequestClose={() => {}}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Settings entry {props.columns[0].value}
              </Text>
              
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  set_modal_visible(false);
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        {props &&
          props.columns.map((column, key) => {
            return (
              <EngineDataTableCol
                key={key}
                value={column.value}
                suffix={column.suffix}
              />
            );
          })}
      </>
    </Row>
  );
};
export default EngineDataTableRow;
