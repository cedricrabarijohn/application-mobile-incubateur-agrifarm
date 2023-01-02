import { EngineDataTableRowType } from "./row/EngineDataTableRowType";

export type EngineDataTableType = {
  headers: Array<string>;
  rows: Array<EngineDataTableRowType>;
  style?: any
};
