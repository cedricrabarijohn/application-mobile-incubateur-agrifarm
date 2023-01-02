import { View, StyleSheet, Image } from "react-native";
import agrifarm_image from "../../../assets/images/agrifarm.png";
import inviso_image from "../../../assets/images/logo_inviso.png";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 25,
    zIndex: 99,
    backgroundColor: "white",
  },
  imageContainer: {},
});
const Header = () => {
  return (
    <>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            source={agrifarm_image}
            style={{ width: 100, height: 50, resizeMode: "contain" }}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={inviso_image}
            style={{ width: 100, height: 50, resizeMode: "contain" }}
          />
        </View>
      </View>
    </>
  );
};

export default Header;
