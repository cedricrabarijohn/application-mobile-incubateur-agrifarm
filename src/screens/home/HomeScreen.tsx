import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { HomeScreenProps } from "./HomeScreenProps";

const styles = StyleSheet.create({
  linkContainerStyle: {
    backgroundColor: "red",
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  linkTextStyle: {
    color: "white",
    fontSize: 20,
  },
});

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <View>
        <TouchableOpacity
          style={styles.linkContainerStyle}
          onPress={() => props.navigation.push("Profile")}
        >
          <Text style={styles.linkTextStyle}>Profile page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.linkContainerStyle}
          onPress={() => props.navigation.push("Settings")}
        >
          <Text style={styles.linkTextStyle}>Settings</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default HomeScreen;