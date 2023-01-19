import { useState } from "react";
import { StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import EngineNewEntryForm from "../../../../components/engine/engine-new-entry-form/EngineNewEntryForm";
import { EngineNewEntryFormProps } from "../../../../components/engine/engine-new-entry-form/EngineNewEntryFormProps";
import { NewEntryEmkaEngineScreenProps } from "./NewEntryEmkaEngineScreenProps";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
  },
});

const NewEntryEmkaEngine: React.FC<NewEntryEmkaEngineScreenProps> = (props) => {
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

  const validateNewEntryEmkaEngine = () => {
    props.navigation.navigate("EmkaEngine");
  };

  const formDatas: EngineNewEntryFormProps = {
    handleValidate: () => {
      validateNewEntryEmkaEngine()
    },
    fields: {
      incubatorTemperature: {
        label: "Temperature de l'incubateur",
        value: incubatorTemperatureValue,
        setValue: setIncubatorTemperatureValue,
        error: incubatorError,
        setError: setIncubatorError,
        type: "number",
        min: 99.5,
        max: 100.4,
      },
      humidity: {
        label: "Humidite",
        value: humidityValue,
        setValue: setHumidityValue,
        error: humidityError,
        setError: setHumidityError,
        type: "number",
        min: 82,
        max: 86,
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
        min: 35,
        max: 90,
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
export default NewEntryEmkaEngine;
