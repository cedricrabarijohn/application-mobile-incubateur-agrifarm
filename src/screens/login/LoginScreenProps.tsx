import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { RootStackParamList } from "../../routing/RootStackParamList";

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Login"
>;
