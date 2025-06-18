import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Navigation';

const sensorsData = require('../mock/sensors.json');

interface Sensor {
  id: number;
  nome: string;
  valorAtual: string;
  status: string;
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SensorList'>;

export default function SensorListScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [sensors, setSensors] = useState<Sensor[]>([]);

  useEffect(() => {
    setSensors(sensorsData);
  }, []);

  const renderItem = ({ item }: { item: Sensor }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('SensorDetail', {
          sensorId: item.id,
          sensorName: item.nome,
        })
      }
    >
      <Text style={styles.sensorName}>{item.nome}</Text>
      <Text style={styles.sensorValue}>Valor: {item.valorAtual}</Text>
      <Text
        style={[
          styles.sensorStatus,
          item.status === 'OK' ? styles.statusOk : styles.statusAlert,
        ]}
      >
        Status: {item.status}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📡 Lista de Sensores</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Config')}
        style={styles.configButton}
      >
        <Text style={styles.configButtonText}>⚙️ Configurações</Text>
      </TouchableOpacity>

      <FlatList
        data={sensors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1565C0',
    textAlign: 'center',
    marginBottom: 10,
  },
  configButton: {
    backgroundColor: '#1976D2',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  configButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sensorName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 4,
  },
  sensorValue: {
    fontSize: 16,
    color: '#424242',
    marginBottom: 4,
  },
  sensorStatus: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusOk: {
    color: 'green',
  },
  statusAlert: {
    color: 'red',
  },
});
