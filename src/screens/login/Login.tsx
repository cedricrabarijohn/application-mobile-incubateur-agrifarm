import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { grey, light_green, light_grey, main_green } from "../../colors/Colors";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { LoginScreenProps } from "./LoginScreenProps";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
    backgroundColor: 'white',
    height: '100%',
    padding: 0,
    margin: 0
  },
  loginPageText: {
    fontSize: 25,
    fontWeight: "bold",
    color: main_green,
  },
  loginTextBar: {
    width: 150,
    borderTopWidth: 1,
    borderColor: main_green,
    marginTop: 40,
    marginBottom: 25,
  },
  form: {
    alignItems: "center",
  },
  inputLabel: {
    color: grey,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: light_grey,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
  },
  loginButton: {
    backgroundColor: light_green,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  loginButtonText: {
    color: main_green,
  },
});

const Login: React.FC<LoginScreenProps> = (props) => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.loginPageText}>Login</Text>
        <Text style={styles.loginTextBar}></Text>
        <View style={styles.form}>
          <View>
            <Text style={styles.inputLabel}>email</Text>
            <TextInput style={styles.input} />
          </View>
          <View>
            <Text style={styles.inputLabel}>mot de passe</Text>
            <TextInput secureTextEntry={true} style={styles.input} />
          </View>
          <View>
            <TouchableOpacity style={styles.loginButton} onPress={()=> props.navigation.navigate('EngineChoice')}>
              <Text style={styles.loginButtonText}>Se connecter</Text>
            </TouchableOpacity>
          </View>
          <View></View>
        </View>
      </View>
      <Footer />
    </>
  );
};
export default Login;
