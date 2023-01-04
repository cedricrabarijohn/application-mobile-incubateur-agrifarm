import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { grey, light_green, main_green } from "../../colors/Colors";
import { Ionicons } from "@expo/vector-icons";
import { ContinueButtonProps } from "./ContinueButtonProps";

const styles = StyleSheet.create({
  continueButton: {
    backgroundColor: light_green,
    paddingVertical: 7,
    paddingHorizontal: 30,
    marginTop: 20,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  continueButtonText: {
    color: main_green,
  },
  disabledContinueButton: {
    backgroundColor: "#E5ECEE",
    paddingVertical: 7,
    paddingHorizontal: 30,
    marginTop: 20,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  disabledContinueButtonText: {
    color: "#B8BFC1",
  },
});
const ContinueButton: React.FC<ContinueButtonProps> = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={()=>props.handleContinue()} disabled={props.disabled} style={[props.disabled ? styles.disabledContinueButton : styles.continueButton]}>
        <Text style={[props.disabled ? styles.disabledContinueButtonText : styles.continueButtonText]}>
          {props.text ? props.text : "Continuer"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default ContinueButton;
