import React from "react";
import { StyleSheet, Text } from "react-native";
import { Col, Row } from "react-native-easy-grid";
import { grey, light_grey } from "../../../../colors/Colors";
import { EngineDataTableHeaderType } from "./EngineDataTableHeaderType";

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.2,
    borderBottomColor: light_grey,
    paddingVertical: 5,
  },
  headerText: {
    color: grey,
    fontWeight: "bold"
  },
  column: {
    alignItems: "center",
  },
});
const EngineDataTableHeader: React.FC<EngineDataTableHeaderType> = (props) => {
  return (
    <Row style={styles.container}>
      {props &&
        props.headers.map((header, key) => {
          return (
            <Col style={styles.column} key={key}>
              <Text style={styles.headerText}>{header}</Text>
            </Col>
          );
        })}
    </Row>
  );
};

export default EngineDataTableHeader;
