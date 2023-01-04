import { StatusBar, Text, View } from "react-native";
import Login from "./src/screens/login/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/routing/RootStackParamList";
import React from "react";
import EngineChoice from "./src/screens/engine-choice/EngineChoice";
import EmkaEngine from "./src/screens/engines/emka-engine/EmkaEngine";
import MsEngine from "./src/screens/engines/ms-engine/MsEngine";
import NewEntryEmkaEngine from "./src/screens/engines/emka-engine/new-entry/NewEntryEmkaEngine";
import NewEntryMsEngine from "./src/screens/engines/ms-engine/new-entry/NewEntryMsEngine";

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} translucent />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EngineChoice"
            component={EngineChoice}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EmkaEngine"
            component={EmkaEngine}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MsEngine"
            component={MsEngine}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewEntryEmkaEngine"
            component={NewEntryEmkaEngine}
            options={{
              title: "Nouvelle saisie | EMKA",
            }}
          />
          <Stack.Screen
            name="NewEntryMsEngine"
            component={NewEntryMsEngine}
            options={{
              title: "Nouvelle saisie | MS",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
