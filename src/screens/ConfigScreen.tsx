import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SensorList'>;

export default function ConfigScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [apiUrl, setApiUrl] = useState<string>('http://localhost:8081');

  const handleSave = () => {
    Alert.alert('Configuração Salva', `URL da API: ${apiUrl}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔧 Configurações de Conexão</Text>

      <Text style={styles.label}>URL da API:</Text>
      <TextInput
        style={styles.input}
        value={apiUrl}
        onChangeText={setApiUrl}
        placeholder="Digite a URL da API"
        placeholderTextColor="#9E9E9E"
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1565C0',
    marginBottom: 30,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    color: '#1565C0',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#90CAF9',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1976D2',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
