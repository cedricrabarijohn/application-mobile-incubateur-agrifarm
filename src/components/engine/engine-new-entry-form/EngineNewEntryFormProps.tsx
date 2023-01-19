type TYPE = "string" | "number";

export type FieldEngineNewEntryProps = {
  label: string;
  value: any;
  setValue: Function;
  type: TYPE;
  error: string;
  setError: Function;
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