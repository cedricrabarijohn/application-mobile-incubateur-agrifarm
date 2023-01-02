import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { EmkaEngineNewEntryPopupType } from "./EmkaEngineNewEntryPopupType";
import { Ionicons } from "@expo/vector-icons";
import { main_green } from "../../../../../colors/Colors";
import NewEntryForm from "../../../new-entry-form/NewEntryForm";

const DISPLAYS = {
  FLEX: "flex",
  NONE: "none",
};
const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    height: "80%",
    width: "100%",
    zIndex: 1,
    top:50,
    justifyContent: "center",
  },
  closePopup: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 1
  },
  container: {
    width: "100%",
    minHeight: 450,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 20
  },
  titleIcon: {
    marginRight: 10,
    fontSize: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
const EmkaEngineNewEntryPopup: React.FC<EmkaEngineNewEntryPopupType> = (
  props
) => {
  type displays = "flex" | "none";
  const [openedDisplay, setOpenedDisplay]: [displays, Function] =
    useState("none");

  useEffect(() => {
    const newDisplay = props.opened ? DISPLAYS.FLEX : DISPLAYS.NONE;
    setOpenedDisplay(newDisplay);
  }, [props.opened]);

  return (
    <View
      style={[
        styles.wrapper,
        {
          display: openedDisplay,
        },
      ]}
    >
      <TouchableOpacity
        style={styles.closePopup}
        onPress={() => props.onClose()}
      >
        <Ionicons name="close-circle" size={20} color={"red"} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator style={[styles.container]}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Nouvelle saisie | MACHINE{" "}
            <Text style={{ color: main_green }}>EMKA</Text>
          </Text>
        </View>
        <NewEntryForm />
      </ScrollView>
    </View>
  );
};

export default EmkaEngineNewEntryPopup;
