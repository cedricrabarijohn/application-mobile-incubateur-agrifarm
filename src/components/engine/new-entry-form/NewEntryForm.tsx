import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { grey, light_green, light_grey } from "../../../colors/Colors";
import { NewEntryFormProps } from "./NewEntryFormProps";

const mock = [
  {
    label: "Temperature de l'incubateur",
    notation: "T°inc",
    value: "",
    onChange: () => alert("changed"),
  },
  {
    label: "Humidite",
    notation: "H°",
    value: "",
    onChange: () => alert("changed"),
  },
  {
    label: "Retournement",
    notation: "/",
    value: "",
    onChange: () => alert("changed"),
  },
  {
    label: "Aeration",
    notation: "A°",
    value: "",
    onChange: () => alert("changed"),
  },
  {
    label: "Temperature de la salle",
    notation: "T°salle",
    value: "",
    onChange: () => alert("changed"),
  },
];

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
    marginBottom: 10,
  },
  validateNewEntry: {
    borderWidth: 1,
    marginTop: 20,
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    backgroundColor: light_green,
    zIndex: -1
  },
});

const NewEntryForm: React.FC<NewEntryFormProps> = (props) => {
  return (
    <View style={styles.wrapper}>
      {mock &&
        mock.map((element, key) => {
          return (
            <View key={key}>
              <Text style={styles.inputLabel}>{element.label}</Text>
              <TextInput style={[styles.inputInput]} />
            </View>
          );
        })}
      <TouchableOpacity style={styles.validateNewEntry}>
        <Text>Valider la saisie</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewEntryForm;
