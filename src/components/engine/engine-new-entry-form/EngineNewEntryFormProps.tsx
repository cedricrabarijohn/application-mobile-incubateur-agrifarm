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
export type EngineNewEntryFormProps = {
  fields: FieldEngineNewEntryProps[];
};
