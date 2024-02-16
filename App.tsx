import React from 'react';
import { 
  Text,
  StyleSheet, 
  TextInput, 
  View ,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.title1}>Username</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Masukkan Username anda"
      />
      <Text style={styles.title1}>Password</Text>
      <TextInput
        style={styles.textInput1}
        placeholder="Masukkan Password anda"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 35,
  },
  title1: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
    fontWeight: 'bold',

  },
  textInput: {
    height: 50,
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 30,
    paddingHorizontal: 15,
    width: '100%',
  },
  textInput1: {
    height: 50,
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 40,
    paddingHorizontal: 15,
    width: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fc5e03',
    padding: 15,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',

  }
});

export default App;