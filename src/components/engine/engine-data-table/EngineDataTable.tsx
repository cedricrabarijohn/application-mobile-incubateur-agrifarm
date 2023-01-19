import { Col, Row, Grid } from "react-native-easy-grid";
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Modal,
  Pressable,
} from "react-native";
import { grey, light_grey } from "../../../colors/Colors";
import { EngineDataTableType } from "./EngineDataTableType";
import EngineDataTableRow from "./row/EngineDataTableRow";
import EngineDataTableHeader from "./header/EngineDataTableHeader";
import { DataTable } from "react-native-paper";
import { useState } from "react";

const styles = StyleSheet.create({
  grid: {
    borderWidth: 1,
    borderColor: light_grey,
    padding: 5,
  },
  scrollView: {
    height: 250,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

const EngineDataTable: React.FC<EngineDataTableType> = (props) => {
  return (
    <>
      <Grid style={[styles.grid, { ...props.style }]}>
        <Row>{props && <EngineDataTableHeader headers={props.headers} />}</Row>
        <ScrollView style={styles.scrollView}>
          {props &&
            props.rows.map((row, key) => {
              return (
                <EngineDataTableRow
                  key={key}
                  columns={row.columns}
                />
              );
            })}
        </ScrollView>
      </Grid>
    </>
  );
};
export default EngineDataTable;
