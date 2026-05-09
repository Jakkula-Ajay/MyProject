import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = () => {
  const [name, setName] = useState('');
  const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <View style={{ width: "100%" }}>
      <Button title="Login" onPress={() => login({ name })} />
    </View>
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',   
    alignItems: 'center',      
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',              
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});