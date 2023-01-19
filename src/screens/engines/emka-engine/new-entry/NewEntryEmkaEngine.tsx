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

  const validateNewEntryEmkaEngine = (e:any) => {
    console.log(e)
    // props.navigation.navigate("EmkaEngine");
  };

  const formDatas: EngineNewEntryFormProps = {
    handleValidate: (e:any) => {
      validateNewEntryEmkaEngine(e)
    },
    fields: {
      incubatorTemperature: {
        label: "Temperature de l'incubateur",
        type: "number",
        min: 99.5,
        max: 100.4,
        value: '',
        error:''
      },
      humidity: {
        label: "Humidite",
        type: "number",
        min: 82,
        max: 86,
        value: '',
        error:''
      },
      returnment: {
        label: "Retournement",
        type: "number",
        value: '',
        error:''
      },
      aeration: {
        label: "Aeration",
        type: "number",
        min: 35,
        max: 90,
        value: '',
        error:''
      },
      roomTemperature: {
        label: "Temperature de la salle",
        type: "number",
        min: 27,
        max: 30,
        value: '',
        error:''
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
