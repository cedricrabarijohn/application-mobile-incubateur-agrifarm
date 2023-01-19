import { useState } from "react";
import { StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import EngineNewEntryForm from "../../../../components/engine/engine-new-entry-form/EngineNewEntryForm";
import { EngineNewEntryFormProps } from "../../../../components/engine/engine-new-entry-form/EngineNewEntryFormProps";
import { NewEntryMsEngineScreenProps } from "./NewEntryMsEngineScreenProps";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
  },
});

const NewEntryMsEngine: React.FC<NewEntryMsEngineScreenProps> = (props) => {
  const [incubatorTemperatureValue, setIncubatorTemperatureValue]: [
    any,
    Function
  ] = useState("");
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

  const validateNewEntryMsEngine = () => {
    props.navigation.navigate("MsEngine")
  };
  const formDatas: EngineNewEntryFormProps = {
    handleValidate: () => {
      validateNewEntryMsEngine()
    },
    fields: {
      incubatorTemperature: {
        label: "Temperature de l'incubateur",
        value: incubatorTemperatureValue,
        setValue: setIncubatorTemperatureValue,
        error: incubatorError,
        setError: setIncubatorError,
        type: "number",
        min: 37.5,
        max: 38,
      },
      humidity: {
        label: "Humidite",
        value: humidityValue,
        setValue: setHumidityValue,
        error: humidityError,
        setError: setHumidityError,
        type: "number",
        min: 62,
        max: 66,
      },
      returnment: {
        label: "Retournement",
        value: returnmentValue,
        setValue: setReturnmentValue,
        error: returnmentError,
        setError: setReturnmentError,
        type: "number",
      },
      aeration: {
        label: "Aeration",
        value: aerationValue,
        setValue: setAerationValue,
        error: aerationError,
        setError: setAerationError,
        type: "number",
        min: 1,
        max: 4,
      },
      roomTemperature: {
        label: "Temperature de la salle",
        value: roomTemperatureValue,
        setValue: setRoomTemperatureValue,
        error: roomTemperatureError,
        setError: setRoomTemperatureError,
        type: "number",
        min: 27,
        max: 30,
      },
    },
  };
  return (
    <ScrollView style={styles.wrapper}>
      <EngineNewEntryForm
        handleValidate={formDatas.handleValidate}
        fields={{ ...formDatas.fields }}
      />
    </ScrollView>
  );
};
export default NewEntryMsEngine;
