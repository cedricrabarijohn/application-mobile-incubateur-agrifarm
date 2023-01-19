import React, { useState } from "react";
import { StyleSheet, ScrollView, TouchableOpacity, Text } from "react-native";
import EngineDetails from "../../../components/engine/engine-details/EngineDetails";
import { SingleEngineDetailsType } from "../../../components/engine/engine-details/EngineDetailsType";
import EngineTitle from "../../../components/engine/engine-title/EngineTitle";
import Footer from "../../../components/footer/Footer";
import { MsEngineScreenProps } from "./MsEngineScreenProps";
import EngineDataTable from "../../../components/engine/engine-data-table/EngineDataTable";
import { EngineDataTableRowType } from "../../../components/engine/engine-data-table/row/EngineDataTableRowType";
import { engineDatasMock } from "../mocks/engineDatasMock";
import Sidebar from "../../../components/sidebar/Sidebar";
import { checkSession } from "../../../services/check-session/checkSession";
import { grey, main_green } from "../../../colors/Colors";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "white",
  },
  newEntryButtonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  newEntryButtonIcon: {
    color: main_green,
    marginRight: 5,
  },
  newEntryButtonText: {
    color: grey,
    fontSize: 16,
  },
});
const engineDetailsDatas: Array<SingleEngineDetailsType> = [
  ...engineDatasMock.engineDetailsDatasMock,
];

const tableHeaders: Array<string> = [...engineDatasMock.tableHeadersMock];
const tableRows: Array<EngineDataTableRowType> = [
  ...engineDatasMock.tableRowsMock,
];
const MsEngine: React.FC<MsEngineScreenProps> = (props) => {
  React.useEffect(() => {
    if (!checkSession()) {
      props.navigation.navigate("Login");
    }
  }, []);

  return (
    <>
      <Sidebar props={props} backButton />
      <ScrollView style={styles.container}>
        <EngineTitle prefix="Machine" engineName="MS" />
        <EngineDetails details={[...engineDetailsDatas]} />
        <TouchableOpacity
          style={styles.newEntryButtonContainer}
          onPress={() => props.navigation.navigate("NewEntryMsEngine")}
        >
          <Ionicons
            name="add-circle"
            size={20}
            style={styles.newEntryButtonIcon}
          />
          <Text style={styles.newEntryButtonText}>Nouvelle saisie</Text>
        </TouchableOpacity>
        <EngineDataTable
          style={{ marginTop: 20 }}
          headers={[...tableHeaders]}
          rows={[...tableRows]}
        />
      </ScrollView>
      <Footer />
    </>
  );
};

export default MsEngine;
