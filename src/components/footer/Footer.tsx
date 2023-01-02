import { View, StyleSheet, Text } from "react-native";
import { light_grey, main_green } from "../../colors/Colors";

const styles = StyleSheet.create({
  footer: {
    bottom: 0,
    width: "100%",
    alignItems: "center",
    backgroundColor: main_green,
    paddingVertical: 10,
  },
  footerText: {
    color: 'white',
    fontSize: 10
  },
});
const Footer = () => {
  return (
    <>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Copyright © 2022 - Agrifarm, Inviso group
        </Text>
      </View>
    </>
  );
};

export default Footer;
