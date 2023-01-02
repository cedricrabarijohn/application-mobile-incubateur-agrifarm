import { Text } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import EngineDataTableCol from "../col/EngineDataTableCol";
import { EngineDataTableRowType } from "./EngineDataTableRowType";

const EngineDataTableRow = (props: EngineDataTableRowType) => {
    return (
        <Row>
            {props && props.columns.map((column, key) => {
                return (
                    // <Col>
                    //     <Text>{column.value} {column.suffix}</Text>
                    // </Col>
                    <EngineDataTableCol key={key} value={column.value} suffix={column.suffix}/>
                )
            })}
        </Row>
    )
}
export default EngineDataTableRow;