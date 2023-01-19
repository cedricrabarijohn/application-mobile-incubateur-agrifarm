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
  return (
    <Row
      onPress={() => {
        if (props.onPress) props.onPress();
        set_modal_visible(true);
      }}
    >
      <>
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
              <EngineNewEntryForm
                handleValidate={() => {}}
                fields={{
                  ...{
                    incubatorTemperature: {
                      label: "Temperature de l'incubateur",
                      type: "number",
                      min: 99.5,
                      max: 100.4,
                      value: "",
                      error: "",
                    },
                    humidity: {
                      label: "Humidite",
                      type: "number",
                      min: 82,
                      max: 86,
                      value: "",
                      error: "",
                    },
                    returnment: {
                      label: "Retournement",
                      type: "number",
                      value: "",
                      error: "",
                    },
                    aeration: {
                      label: "Aeration",
                      type: "number",
                      min: 35,
                      max: 90,
                      value: "",
                      error: "",
                    },
                    roomTemperature: {
                      label: "Temperature de la salle",
                      type: "number",
                      min: 27,
                      max: 30,
                      value: "",
                      error: "",
                    },
                  },
                }}
              />
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
      </>
    </Row>
  );
};
export default EngineDataTableRow;
