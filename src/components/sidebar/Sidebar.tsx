import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { grey, light_green, light_grey, main_green } from "../../colors/Colors";
import React, { useEffect } from "react";
import { SidebarProps } from "./SidebarProps";
import { version } from "../../../version";
import { ROUTES } from "../../routing/RootStackParamList";

const sidebarWidth: number = 270;
let sidebaIsOpened = false;
const sidebarTranslateXValue: any = new Animated.Value(-sidebarWidth);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
    position: "absolute",
    zIndex: 900,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: main_green,
    borderBottomWidth: 0,
    flex: 1,
    height: "100%",
    width: sidebarWidth,
    transform: [{ translateX: sidebarTranslateXValue }],
  },
  openSidebar: {
    zIndex: 901,
    position: "absolute",
    top: Dimensions.get("window").height / 2 - 50,
    right: -60,
    color: main_green,
  },
  menuButtonContainer: {
    top: 0,
    zIndex: 900,
    height: 75,
    width: "100%",
    backgroundColor: main_green,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  background: {
    position: "absolute",
    backgroundColor: "transparent",
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
    zIndex: 899,
  },
  versionText: {
    color: grey,
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 50,
  },
  menu: {
    fontSize: 17,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: main_green,
    paddingBottom: 10,
    marginBottom: 30,
  },
  menuIcon: {
    marginRight: 10,
  },
  menuText: {
    color: grey,
    fontSize: 15,
  },
  logout: {
    backgroundColor: light_green,
    width: "100%",
    textAlign: "center",
    position: "absolute",
    bottom: 20,
    left: 20,
    borderWidth: 1,
    borderColor:main_green,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  logoutIcon: {
    color: main_green,
  },
  logoutText: {
    color: main_green,
    fontSize: 14,
  },
});

const DISPLAY = {
  FLEX: "flex",
  NONE: "none",
};

const Sidebar: React.FC<SidebarProps> = (props) => {
  const [backgroundDisplay, setBackgroundDisplay]: [any, Function] =
    React.useState(DISPLAY.NONE);

  const toggleSidebar = () => {
    const newTranslateXValue = sidebaIsOpened ? -sidebarWidth : -10;
    Animated.spring(sidebarTranslateXValue, {
      toValue: newTranslateXValue,
      useNativeDriver: true,
    }).start();
    sidebaIsOpened = !sidebaIsOpened;
  };
  const toggleBackgroundDisplay = () => {
    const newBackgroundDisplay =
      backgroundDisplay === DISPLAY.NONE ? DISPLAY.FLEX : DISPLAY.NONE;
    setBackgroundDisplay(newBackgroundDisplay);
  };
  const handleToggleSidebar = () => {
    toggleSidebar();
    toggleBackgroundDisplay();
  };

  const initializeSidebarDefaultStates = () => {
    sidebaIsOpened = false;
    Animated.spring(sidebarTranslateXValue, {
      toValue: -sidebarWidth,
      useNativeDriver: true,
    }).start();
    setBackgroundDisplay(DISPLAY.NONE);
  };
  useEffect(() => {
    initializeSidebarDefaultStates();
  }, []);

  const goBack = () => {
    try {
      initializeSidebarDefaultStates();
      props.props.navigation.pop();
    } catch (e) {}
  };

  const handleLogout = () => {
    initializeSidebarDefaultStates();
    props.props.navigation.navigate(ROUTES.LOGIN);
  };
  const goToHomePage = () => {
    initializeSidebarDefaultStates();
    props.props.navigation.navigate(ROUTES.EngineChoice);
  };

  return (
    <>
      <View style={styles.menuButtonContainer}>
        <Ionicons
          onPress={() => handleToggleSidebar()}
          name="ios-options"
          color={"white"}
          size={35}
        />
        {props.backButton && (
          <Ionicons
            onPress={() => goBack()}
            name="ios-arrow-undo-sharp"
            color={"white"}
            size={25}
          />
        )}
        {props.logoutButton && (
          <Ionicons
            onPress={() => handleLogout()}
            name="log-out"
            color={"white"}
            size={25}
          />
        )}
      </View>
      <Animated.View style={[styles.container]}>
        <Text style={styles.versionText}>Version {version}</Text>
        <TouchableOpacity
          onPress={() => {
            goToHomePage();
          }}
        >
          <View style={[styles.menu]}>
            <Ionicons
              name="home"
              size={15}
              color={main_green}
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Accueil</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.menu]}>
            <Ionicons
              name="help-circle"
              size={15}
              color={main_green}
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>A propos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.menu]}>
            <Ionicons
              name="book"
              size={15}
              color={main_green}
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Notes de patch</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.menu]}>
            <Ionicons
              name="md-document-attach"
              size={15}
              color={main_green}
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Politiques legales</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.menu]}>
            <MaterialCommunityIcons
              name="account-question"
              size={15}
              color={main_green}
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>FAQ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.menu]}>
            <Text style={styles.menuText}>
              <Ionicons name="bug" size={15} color="red" /> Signaler un bug{" "}
              <Ionicons name="bug" size={15} color="red" />
            </Text>
          </View>
        </TouchableOpacity>
        <View
          onTouchStart={() => {
            handleLogout();
          }}
          style={styles.logout}
        >
          <Ionicons name="log-out" size={20} style={styles.logoutIcon} />
          <Text style={styles.logoutText}>Deconnexion</Text>
        </View>
      </Animated.View>
      <View
        onTouchStart={() => handleToggleSidebar()}
        style={[
          styles.background,
          {
            display: backgroundDisplay,
          },
        ]}
      ></View>
    </>
  );
};
export default Sidebar;
