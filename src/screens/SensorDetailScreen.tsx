import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Tipagem das rotas
type RootStackParamList = {
  Splash: undefined;
  SensorList: undefined;
  SensorDetail: {
    sensorId: number;
    sensorName: string;
  };
};

// Acesso aos parâmetros da rota
type SensorDetailRouteProp = RouteProp<RootStackParamList, 'SensorDetail'>;
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function SensorDetailScreen() {
  const route = useRoute<SensorDetailRouteProp>();
  const navigation = useNavigation<NavigationProp>();

  const { sensorId, sensorName } = route.params;

  const [historico, setHistorico] = useState<number[]>([]);

  const gerarHistoricoMock = () => {
    const valores = Array.from({ length: 10 }, () =>
      parseFloat((Math.random() * 100).toFixed(2))
    );
    setHistorico(valores);
  };

  useEffect(() => {
    gerarHistoricoMock();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{sensorName}</Text>
      <Text style={styles.subtitle}>Histórico de Leituras</Text>

      <FlatList
        data={historico}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>
              {index + 1}ª leitura: {item}
            </Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={gerarHistoricoMock}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Atualizar 🔄</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#9E9E9E', marginTop: 10 }]}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Voltar ↩️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1565C0',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#424242',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    color: '#333333',
  },
  button: {
    backgroundColor: '#1976D2',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
