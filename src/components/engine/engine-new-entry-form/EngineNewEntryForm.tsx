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
  const [fields, setFields]: [FieldsEngineNewEntryProps, Function] = useState({
    ...props.fields,
  });

  useEffect(() => {
    setFields({ ...props.fields });
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

  const ERRORS = {
    NO_ERROR: "No error",
  };

  const check_field_if_valid = (field: FieldEngineNewEntryProps, add_error_message: boolean) => {
    const new_field = field;
    if (!new_field.value) {
      if(add_error_message) new_field.error = "Ce champ ne peut pas etre vide."
      return {
        is_valid: false,
        field_error: new_field.error,
      };
    } else {
      new_field.error = "";
    }
    if (new_field.type === "number") {
      const min = new_field.min;
      const max = new_field.max;
      if (min !== undefined) {
        if (parseFloat(new_field.value) < min) {
          if(add_error_message) new_field.error = `Le champ ne peut pas etre inferieur a ${min}`;
          return {
            is_valid: false,
            field_error: new_field.error,
          };
        } else {
          new_field.error = "";
        }
      }
      if (max !== undefined) {
        if (parseFloat(new_field.value) > max) {
          if(add_error_message) new_field.error = `Le champ ne peut pas etre superieur a ${max}`;
          return {
            is_valid: false,
            field_error: new_field.error,
          };
        } else {
          new_field.error = "";
        }
      }
    }
    return {
      is_valid: true,
      field_error: new_field.error,
    };
  };

  type TYPE = "string" | "number";
  const handleChange = (text: string, field_key: string) => {
    let updatedFields = { ...fields };
    updatedFields[field_key].value = text;
    setFormIsValid(validate_form())
    setFields(updatedFields);
    const { field_error, is_valid } = check_field_if_valid(
      updatedFields[field_key],
      true
    );
    updatedFields[field_key].error = field_error;
  };
  const check_if_valid = (error: string, value: any) => {
    return error === "" && value;
  };
  const validate_form = () => {
    let form_is_valid: boolean = true;
    Object.keys(fields).map((element_key) => {
      const field = fields[element_key];
      const { is_valid } = check_field_if_valid(field, false);
      if (form_is_valid === true) {
        form_is_valid = is_valid;
      }
    });
    return form_is_valid;
  };

  useEffect(() => {
    setFormIsValid(validate_form())
  }, []);

  const handleContinue = () => {
    if (props.handleValidate) {
      props.handleValidate(fields);
    }
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
                    value={fields[element].value}
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
                    onChangeText={(text) => {
                      handleChange(text, element);
                    }}
                  />
                  {fields[element].error &&
                    !check_if_valid(
                      fields[element].error,
                      fields[element].value
                    ) && (
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
