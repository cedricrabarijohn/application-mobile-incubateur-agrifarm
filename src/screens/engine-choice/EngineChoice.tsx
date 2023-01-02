import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { EngineChoiceScreenProps } from "./EngineChoiceScreenProps";
import Footer from "../../components/footer/Footer";
import { grey, main_green } from "../../colors/Colors";
import Sidebar from "../../components/sidebar/Sidebar";
import { checkSession } from "../../services/check-session/checkSession";
import ContinueButton from "../../components/continue-button/ContinueButton";

type choiceSyleType = {
  backgroundColor: string;
  textColor: string;
};
const CHOICE_STYLES = {
  CHOOSED: {
    backgroundColor: main_green,
    textColor: "white",
  },
  NOT_CHOOSED: {
    backgroundColor: "transparent",
    textColor: main_green,
  },
};
const ENGINES = {
  EMKA: "emka",
  MS: "ms",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
    backgroundColor: "white",
  },
  engineChoiceText: {
    fontSize: 25,
    fontWeight: "bold",
    color: main_green,
  },
  engineChoiceTextBar: {
    width: 150,
    borderTopWidth: 1,
    borderColor: main_green,
    marginTop: 10,
  },
  choices: {},
  ekmaChoice: {
    alignItems: "center",
    borderWidth: 1,
    marginVertical: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: grey,
    borderRadius: 5,
  },
  ekmaChoiceText: {},
  msChoice: {
    alignItems: "center",
    borderWidth: 1,
    marginVertical: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: grey,
    borderRadius: 5,
  },
  msChoiceText: {},
});

const EngineChoice: React.FC<EngineChoiceScreenProps> = (props) => {
  React.useEffect(() => {
    if (!checkSession()) {
      props.navigation.navigate("Login");
    }
  }, []);
  const [choosedEngine, setChoosedEngine] = React.useState("");

  const [ekmaStyle, setEkmaStyle]: [choiceSyleType, Function] = React.useState(
    CHOICE_STYLES.NOT_CHOOSED
  );
  const [msStyle, setMsStyle]: [choiceSyleType, Function] = React.useState(
    CHOICE_STYLES.NOT_CHOOSED
  );

  const handleEngineChoice = (engine: string) => {
    if (engine === ENGINES.EMKA || engine === ENGINES.MS) {
      setChoosedEngine(engine);
    }
  };

  const handleContinue = () => {
    if (choosedEngine === ENGINES.EMKA) {
      props.navigation.navigate("EmkaEngine");
    } else if (choosedEngine === ENGINES.MS) {
      props.navigation.navigate("MsEngine");
    } else {
      alert("Veuillez choisir une machine");
    }
  };

  React.useEffect(() => {
    if (choosedEngine === ENGINES.EMKA) {
      setEkmaStyle(CHOICE_STYLES.CHOOSED);
      setMsStyle(CHOICE_STYLES.NOT_CHOOSED);
    } else if (choosedEngine === ENGINES.MS) {
      setMsStyle(CHOICE_STYLES.CHOOSED);
      setEkmaStyle(CHOICE_STYLES.NOT_CHOOSED);
    }
  }, [choosedEngine]);

  return (
    <>
      <Sidebar props={props} logoutButton />
      <View style={styles.container}>
        <Text style={styles.engineChoiceText}>Choix de la machine</Text>
        <Text style={styles.engineChoiceTextBar}></Text>
        <View style={styles.choices}>
          <View
            style={[
              styles.ekmaChoice,
              {
                backgroundColor: ekmaStyle.backgroundColor,
              },
            ]}
            onTouchStart={() => handleEngineChoice(ENGINES.EMKA)}
          >
            <Text
              style={[
                styles.ekmaChoiceText,
                {
                  color: ekmaStyle.textColor,
                },
              ]}
            >
              Machine EMKA
            </Text>
          </View>
          <View
            style={[
              styles.msChoice,
              {
                backgroundColor: msStyle.backgroundColor,
              },
            ]}
            onTouchStart={() => handleEngineChoice(ENGINES.MS)}
          >
            <Text
              style={[
                styles.msChoiceText,
                {
                  color: msStyle.textColor,
                },
              ]}
            >
              Machine MS
            </Text>
          </View>
        </View>
        <ContinueButton handleContinue={handleContinue} />
      </View>
      <Footer />
    </>
  );
};

export default EngineChoice;
