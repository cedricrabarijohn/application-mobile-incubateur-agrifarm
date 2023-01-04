import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { grey, light_green, light_grey } from "../../../colors/Colors";
import ContinueButton from "../../continue-button/ContinueButton";
import { EngineNewEntryFormProps } from "./EngineNewEntryFormProps";

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

const EngineNewEntryForm: React.FC<EngineNewEntryFormProps> = (props) => {
  type TYPE = "string" | "number";
  const handleChange = (
    text: string,
    setValue: Function,
    type: TYPE,
    setError: Function,
    min?: number,
    max?: number
  ) => {
    const isNumber = (str: string) => {
      return /^[-+]?\d*\.?\d+$/.test(str);
    };
    setValue(text);
    if (type === "number") {
      if (!isNumber(text)) {
        return setError("Un nombre est requis pour ce champ");
      } else {
        setError("");
      }

      const numberAsFloat = parseFloat(text);
      if (min) {
        if (numberAsFloat < min) {
          return setError(`Doit etre superieur à ${min}`);
        } else {
          setError("");
        }
      }
      if (max) {
        if (numberAsFloat > max) {
          return setError(`Doit etre inferieur à ${max}`);
        } else {
          setError("");
        }
      }
    }
  };

  const check_if_valid = (error: string, value: any) => {
    return error === "" && value;
  };

  return (
    <>
      <View>
        {props.fields &&
          props.fields.map((element, key) => (
            <View key={key} style={styles.inputContainer}>
              <Text
                style={[
                  styles.inputLabel,
                  element.error !== "" && {
                    color: "red",
                  },
                  check_if_valid(element.error, element.value) && {
                    color: "green",
                  },
                ]}
              >
                {element.label} {element.min && element.min}
                {element.max && ` - ${element.max}`}
              </Text>
              <TextInput
                keyboardType="numeric"
                value={`${element.value}`}
                style={[
                  styles.inputInput,
                  element.error !== "" && {
                    borderBottomColor: "red",
                    // color: "red",
                  },
                  check_if_valid(element.error, element.value) && {
                    borderBottomColor: "green",
                    // color:"green"
                  }
                ]}
                onChangeText={(text) =>
                  handleChange(
                    text,
                    element.setValue,
                    element.type,
                    element.setError,
                    element.min,
                    element.max
                  )
                }
              />
              {element.error && (
                <Text style={{ color: "red" }}>{element.error}</Text>
              )}
            </View>
          ))}
        <ContinueButton
          // disabled
          handleContinue={() => {
            console.log(props.fields)
          }}
          text="Valider la saisie"
        />
      </View>
    </>
  );
};

export default EngineNewEntryForm;
