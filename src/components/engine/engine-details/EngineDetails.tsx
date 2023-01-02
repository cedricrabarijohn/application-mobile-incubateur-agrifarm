import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { light_grey } from "../../../colors/Colors";
import { EngineDetailsType } from "./EngineDetailsType";

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  details: {
    flexDirection: "row",
  },
  detailsNotation: {
    marginRight: 5,
    color: light_grey,
  },
  detailsDefinition: {
    color: light_grey,
  },
});

const EngineDetails: React.FC<EngineDetailsType> = (props) => {
  return (
    <View style={styles.container}>
      {props.details &&
        props.details.map((details, key) => {
          return (
            <View key={key} style={styles.details}>
              <Text style={styles.detailsNotation}>{details.notation} :</Text>
              <Text style={styles.detailsDefinition}>
                {details.definition}
              </Text>
            </View>
          );
        })}
    </View>
  );
};
export default EngineDetails;
