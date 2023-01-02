import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SettingsScreenProps } from "./SettingsScreenProps";

const SettingsScreen: React.FC<SettingsScreenProps> = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
      <Text>Test!</Text>
      <TouchableOpacity onPress={()=>props.navigation.pop()}>
        <Text>Retour</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;