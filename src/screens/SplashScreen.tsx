import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate('SensorList' as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digital Twins</Text>
      <Text style={styles.subtitle}>Monitoramento de Sensores Pneumáticos</Text>

      <TouchableOpacity style={styles.button} onPress={handleStart} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD', // Azul bem claro
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1565C0', // Azul forte
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#5C6BC0', // Azul 2
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1976D2', // Azul 1
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
