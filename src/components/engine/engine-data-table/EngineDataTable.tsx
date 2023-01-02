import { Col, Row, Grid } from "react-native-easy-grid";
import { Text, StyleSheet, ScrollView } from "react-native";
import { grey, light_grey } from "../../../colors/Colors";
import { EngineDataTableType } from "./EngineDataTableType";
import EngineDataTableRow from "./row/EngineDataTableRow";
import EngineDataTableHeader from "./header/EngineDataTableHeader";
import { DataTable } from "react-native-paper";

const styles = StyleSheet.create({
  grid: {
    borderWidth: 1,
    borderColor: light_grey,
    padding: 5,
  },
  scrollView: {
    height: 250
  }
});

const EngineDataTable: React.FC<EngineDataTableType> = (props) => {
  return (
    <Grid style={[styles.grid, { ...props.style }]}>
      <Row>{props && <EngineDataTableHeader headers={props.headers} />}</Row>
      <ScrollView style={styles.scrollView}>
        {props &&
          props.rows.map((row, key) => {
            return <EngineDataTableRow key={key} columns={row.columns} />;
          })}
      </ScrollView>
      {/* <Row>
        <Col>
          <Text>id</Text>
        </Col>
        <Col>
          <Text>T°inc</Text>
        </Col>
        <Col>
          <Text>H°</Text>
        </Col>
        <Col>
          <Text>/</Text>
        </Col>
        <Col>
          <Text>A°</Text>
        </Col>
        <Col>
          <Text>T°salle</Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Text>1</Text>
        </Col>
        <Col>
          <Text>99,5 °F</Text>
        </Col>
        <Col>
          <Text>86</Text>
        </Col>
        <Col>
          <Text>2</Text>
        </Col>
        <Col>
          <Text>90 %</Text>
        </Col>
        <Col>
          <Text>28 °C</Text>
        </Col>
      </Row> */}
    </Grid>
  );
};
export default EngineDataTable;
