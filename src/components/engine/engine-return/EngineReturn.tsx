import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { grey } from "../../../colors/Colors";
import { EngineReturnType } from "./EngineReturnType";
const styles = StyleSheet.create({
  return: {
    position: "absolute",
    top: 2,
    padding: 3,
    left: 15
    // borderWidth: 1,
    // borderRadius: 10,
    // borderColor: grey,
  },
});

const EngineReturn = (props: EngineReturnType) => {
  return (
    // <TouchableOpacity
    //   style={styles.return}
    //   onPress={() => props.props.navigation.pop()}
    // >
    //   <AntDesign name="back" size={24} color={`${grey}`} />
    // </TouchableOpacity>
    <>
      <Ionicons
        style={styles.return}
        name="arrow-back"
        size={25}
        color={`${grey}`}
        onPress={() => props.props.navigation.pop()}
      />
    </>
  );
};

export default EngineReturn;
