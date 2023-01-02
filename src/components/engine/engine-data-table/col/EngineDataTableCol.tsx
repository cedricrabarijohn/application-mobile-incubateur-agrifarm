import React from "react";
import { StyleSheet, Text } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { grey } from "../../../../colors/Colors";
import { EngineDataTableColType } from "./EngineDataTableColType";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 3,
    paddingHorizontal: 3
  },
  columnText: {
    color: "grey",
  },
});
const EngineDataTableCol: React.FC<EngineDataTableColType> = (props) => {
  return (
    <Col style={styles.container}>
      <Text style={styles.columnText}>
        {props.value}
        {props.suffix}
      </Text>
    </Col>
  );
};
export default EngineDataTableCol;
