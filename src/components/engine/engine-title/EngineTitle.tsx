import { StyleSheet, Text, View } from "react-native";
import { grey, main_green } from "../../../colors/Colors";
import { EngineTitleType } from "./EngineTitleType";
const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  prefix: {
    color: grey,
    fontSize: 25,
    fontWeight: "bold",
  },
  engineName: {
    color: main_green,
    fontSize: 25,
    fontWeight: "bold",
  },
  bar: {
    width: 150,
    borderTopWidth: 1,
    borderColor: main_green,
    marginTop: 25,
    marginBottom: 10,
  },
});
const EngineTitle = (props: EngineTitleType) => {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.prefix}>{props.prefix} </Text>
        <Text style={styles.engineName}>{props.engineName}</Text>
      </Text>
      <Text style={styles.bar} />
    </View>
  );
};
export default EngineTitle;
