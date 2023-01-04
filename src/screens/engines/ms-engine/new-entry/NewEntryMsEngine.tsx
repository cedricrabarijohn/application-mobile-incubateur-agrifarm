import { useState } from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import EngineNewEntryForm from "../../../../components/engine/engine-new-entry-form/EngineNewEntryForm";
import { EngineNewEntryFormProps } from "../../../../components/engine/engine-new-entry-form/EngineNewEntryFormProps";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

const NewEntryMsEngine = () => {
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

  const formDatas: EngineNewEntryFormProps = {
    fields: [
      {
        label: "Temperature de l'incubateur",
        value: incubatorTemperatureValue,
        setValue: setIncubatorTemperatureValue,
        error: incubatorError,
        setError: setIncubatorError,
        type: "number",
        min: 37.5,
        max: 38,
      },
      {
        label: "Humidite",
        value: humidityValue,
        setValue: setHumidityValue,
        error: humidityError,
        setError: setHumidityError,
        type: "number",
        min: 62,
        max: 66,
      },
      {
        label: "Retournement",
        value: returnmentValue,
        setValue: setReturnmentValue,
        error: returnmentError,
        setError: setReturnmentError,
        type: "number",
      },
      {
        label: "Aeration",
        value: aerationValue,
        setValue: setAerationValue,
        error: aerationError,
        setError: setAerationError,
        type: "number",
        min: 1,
        max: 4,
      },
      {
        label: "Temperature de la salle",
        value: roomTemperatureValue,
        setValue: setRoomTemperatureValue,
        error: roomTemperatureError,
        setError: setRoomTemperatureError,
        type: "number",
        min: 27,
        max: 30,
      },
    ],
  };
  return (
    <KeyboardAvoidingView style={styles.wrapper}>
      <EngineNewEntryForm fields={[...formDatas.fields]} />
    </KeyboardAvoidingView>
  );
};
export default NewEntryMsEngine;
