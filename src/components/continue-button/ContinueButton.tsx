import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { light_green, main_green } from "../../colors/Colors";
import { Ionicons } from "@expo/vector-icons";
import { ContinueButtonProps } from "./ContinueButtonProps";

const styles = StyleSheet.create({
  continueButton: {
    backgroundColor: light_green,
    paddingVertical: 7,
    paddingHorizontal: 30,
    marginTop: 20,
    // borderWidth: 1,
    // borderColor: main_green,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  continueButtonText: {
    color: main_green,
    fontWeight: "900",
  },
});
const ContinueButton: React.FC<ContinueButtonProps> = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => props.handleContinue()}
      >
        <Text style={[styles.continueButtonText]}>Continuer</Text>
        {/* <Ionicons name="arrow-forward" /> */}
      </TouchableOpacity>
    </View>
  );
};
export default ContinueButton;
