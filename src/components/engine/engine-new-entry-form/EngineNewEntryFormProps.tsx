type TYPE = "string" | "number";

export type FieldEngineNewEntryProps = {
  label: string;
  type: TYPE;
  value: any;
  error: any;
  min?: number;
  max?: number;
  unite?: string;
};

export type FieldsEngineNewEntryProps = {
  [key: string]: FieldEngineNewEntryProps,
  incubatorTemperature: FieldEngineNewEntryProps,
  humidity: FieldEngineNewEntryProps,
  returnment: FieldEngineNewEntryProps,
  aeration: FieldEngineNewEntryProps,
  roomTemperature: FieldEngineNewEntryProps
}

export type EngineNewEntryFormProps = {
  fields: FieldsEngineNewEntryProps,
  handleValidate: Function
};