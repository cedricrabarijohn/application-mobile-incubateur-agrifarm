import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { grey, main_green } from "../../../../colors/Colors";
import EmkaEngineNewEntryPopup from "./new-entry-popup/EmkaEngineNewEntryPopup";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
  newEntryButtonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  newEntryButtonIcon: {
    color: main_green,
    marginRight: 5,
  },
  newEntryButtonText: {
    color: grey,
    fontSize: 16,
  },
});

/**
 * @deprecated
 */
const EmkaEngineNewEntry = () => {
  const [newEntryOpened, setNewEntryOpened]: [boolean, Function] =
    useState(false);

  const handleToggleOpenPopup = (isOpened: boolean) => {
    setNewEntryOpened(isOpened);
  };

  useEffect(()=>{
  },[newEntryOpened])
  return (
    <>
      <TouchableOpacity
        style={styles.newEntryButtonContainer}
        onPress={() => handleToggleOpenPopup(true)}
      >
        <Ionicons
          name="add-circle"
          size={20}
          style={styles.newEntryButtonIcon}
        />
        <Text style={styles.newEntryButtonText}>Nouvelle saisie</Text>
      </TouchableOpacity>
      <EmkaEngineNewEntryPopup
        opened={newEntryOpened}
        onClose={() => handleToggleOpenPopup(false)}
      />
    </>
  );
};

export default EmkaEngineNewEntry;
