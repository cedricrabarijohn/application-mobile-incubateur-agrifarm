import React from "react";
import { StyleSheet, ScrollView } from "react-native";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "white",
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
