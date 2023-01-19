import { useEffect, useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import {
  grey,
  light_green,
  light_grey,
  main_green,
} from "../../../colors/Colors";
import ContinueButton from "../../continue-button/ContinueButton";
import {
  EngineNewEntryFormProps,
  FieldEngineNewEntryProps,
  FieldsEngineNewEntryProps,
} from "./EngineNewEntryFormProps";
import moment from "moment-timezone";

const styles = StyleSheet.create({
  wrapper: {
    minHeight: 400,
    paddingBottom: 50,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    color: grey,
  },
  inputInput: {
    width: 200,
    borderBottomWidth: 1,
    borderColor: light_grey,
    borderRadius: 5,
  },

  validateNewEntry: {
    borderWidth: 1,
    marginTop: 20,
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    backgroundColor: light_green,
    zIndex: -1,
  },
});
const isNumber = (str: string) => {
  return /^[-+]?\d*\.?\d+$/.test(str);
};
moment.locale("fr", {
  weekdays: "Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi".split("_"),
  months:
    "janvier_fevrier_mars_avril_mai_juin_juillet_aout_septembre_octobre_novembre_decembre".split(
      "_"
    ),
});
const EngineNewEntryForm: React.FC<EngineNewEntryFormProps> = (props) => {
  const [fields, setFields]: [FieldsEngineNewEntryProps, Function] = useState(
    props.fields
  );

  useEffect(() => {
    setFields(props.fields);
  }, [props]);

  const [formIsValid, setFormIsValid]: [boolean, Function] = useState(false);
  const [formatted_date, set_formated_date]: [any, Function] =
    useState(undefined);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const moment_obj = moment();
      const formatted = moment_obj
        .format("dddd DD MMMM yyyy||HH_:mm-:ss.")
        .replace(/_|-|\./g, (match) => {
          switch (match) {
            case "_":
              return "h";
            case "-":
              return "m";
            case ".":
              return "s";
            default:
              return "";
          }
        });
      set_formated_date(formatted);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const handleValidateField = (
    text: string,
    field: FieldEngineNewEntryProps
  ) => {
    field.setValue(text);
    let newError = "";
    let fieldIsValid = false;
    if (field.type === "number") {
      if (!isNumber(text)) {
        newError = "Un nombre est requis pour ce champ";
      }
      const numberAsFloat = parseFloat(text);
      if (field.min) {
        if (numberAsFloat < field.min) {
          newError = `Doit etre superieur à ${field.min}`;
        }
      }
      if (field.max) {
        if (numberAsFloat > field.max) {
          newError = `Doit etre inferieur à ${field.max}`;
        }
      }
    }
    fieldIsValid = newError === "" ? true : false;
    return {
      fieldIsValid: fieldIsValid,
      error: newError,
    };
  };
  const validateForm = () => {
    const incubatorTemperatureObj = fields.incubatorTemperature;
    const humidityObj = fields.humidity;
    const returnmentObj = fields.humidity;
    const aerationObj = fields.aeration;
    const roomTemperatureObj = fields.roomTemperature;

    let isValid: boolean = handleValidateField(
      incubatorTemperatureObj.value,
      incubatorTemperatureObj
    ).fieldIsValid;
    isValid = handleValidateField(humidityObj.value, humidityObj).fieldIsValid;
    isValid = handleValidateField(
      returnmentObj.value,
      returnmentObj
    ).fieldIsValid;
    isValid = handleValidateField(aerationObj.value, aerationObj).fieldIsValid;
    isValid = handleValidateField(
      roomTemperatureObj.value,
      roomTemperatureObj
    ).fieldIsValid;
    setFormIsValid(isValid);
  };

  type TYPE = "string" | "number";
  const handleChange = (text: string, field: FieldEngineNewEntryProps) => {
    const validationResults = handleValidateField(text, field);
    field.setError(validationResults.error);
  };

  const check_if_valid = (error: string, value: any) => {
    return error === "" && value;
  };
  useEffect(() => {
    validateForm();
  }, [fields]);

  const handleContinue = () => {
    console.log(
      `Temperature de l'incubateur : ${fields.incubatorTemperature.value}`
    );
    console.log(`Humidite : ${fields.humidity.value}`);
    console.log(`Retournement : ${fields.returnment.value}`);
    console.log(`Aeration : ${fields.aeration.value}`);
    console.log(`Temperature de la salle : ${fields.roomTemperature.value}`);
  };

  return (
    <View
      style={{
        paddingVertical: 20,
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "green",
          borderRadius: 10,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          marginBottom: 50,
        }}
      >
        {formatted_date && (
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            {formatted_date.split("||")[0]}
          </Text>
        )}
        {formatted_date && (
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            {formatted_date.split("||")[1]}
          </Text>
        )}
      </View>
      <View>
        {fields &&
          Object.keys(fields).map((element, key) => {
            if (fields[element]) {
              return (
                <View key={key} style={styles.inputContainer}>
                  <Text
                    style={[
                      styles.inputLabel,
                      fields[element].error !== "" && {
                        color: "red",
                      },
                      check_if_valid(
                        fields[element].error,
                        fields[element].value
                      ) && {
                        color: "green",
                      },
                    ]}
                  >
                    {fields[element].label}{" "}
                    {fields[element].min && fields[element].min}
                    {fields[element].max && ` - ${fields[element].max}`}
                  </Text>
                  <TextInput
                    keyboardType="numeric"
                    value={`${fields[element].value}`}
                    style={[
                      styles.inputInput,
                      fields[element].error !== "" && {
                        borderBottomColor: "red",
                        // color: "red",
                      },
                      check_if_valid(
                        fields[element].error,
                        fields[element].value
                      ) && {
                        borderBottomColor: "green",
                        // color:"green"
                      },
                    ]}
                    onChangeText={(text) => handleChange(text, fields[element])}
                  />
                  {fields[element].error && (
                    <Text style={{ color: "red" }}>
                      {fields[element].error}
                    </Text>
                  )}
                </View>
              );
            }
          })}
        <ContinueButton
          disabled={!formIsValid}
          handleContinue={() => {
            handleContinue();
          }}
          text="Valider la saisie"
        />
      </View>
    </View>
  );
};

export default EngineNewEntryForm;
