
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const calificaciones = [95, 80, 60, 100, 72];

export default function HomeScreen() {
  const [calificacion, setCalificacion] = useState('');
  const [resultado, setResultado] = useState('');
  const [error, setError] = useState('');

  function evaluarCalificacion() {
    const nota = Number(calificacion);

    // Validación de la entrada
    if (
      calificacion.trim() === '' ||
      !Number.isFinite(nota) ||
      nota < 0 ||
      nota > 100
    ) {
      setError('Ingresa una calificación válida del 0 al 100.');
      setResultado('');
      return;
    }

    setError('');

    // Estructura selectiva: if, else if y else
    if (nota >= 90) {
      setResultado('Excelente');
    } else if (nota >= 70) {
      setResultado('Aprobado');
    } else {
      setResultado('Reprobado');
    }
  }

  function mostrarCalificaciones() {
    let lista = '';

    // Estructura iterativa: for
    for (let i = 0; i < calificaciones.length; i++) {
      const nota = calificaciones[i];
      let estado = '';

      // Estructura selectiva: if-else
      if (nota >= 70) {
        estado = 'Aprobado';
      } else {
        estado = 'Reprobado';
      }

      lista += `${i + 1}. ${nota} puntos - ${estado}\n`;
    }

    return lista;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>
          PRÁCTICA ESCOLAR · REACT NATIVE
        </Text>

        <Text style={styles.title}>
          Control de calificaciones -version 2
        </Text>

        <Text style={styles.subtitle}>
          Evalúa notas y comprueba las estructuras de control.
        </Text>

        <View style={styles.card}>
          <Text style={styles.heading}>Evaluar alumno</Text>

          <Text style={styles.label}>
            Calificación (0 a 100)
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ejemplo: 85"
            placeholderTextColor="#8792A2"
            keyboardType="numeric"
            value={calificacion}
            onChangeText={(texto) => {
              setCalificacion(texto);
              setResultado('');
              setError('');
            }}
            maxLength={3}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={evaluarCalificacion}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>
              Evaluar calificación
            </Text>
          </TouchableOpacity>

          {error !== '' && (
            <Text style={styles.error}>{error}</Text>
          )}

          {resultado !== '' && (
            <View style={styles.resultBox}>
              <Text style={styles.resultLabel}>
                Resultado
              </Text>

              <Text style={styles.result}>
                {resultado}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>
            Lista de calificaciones
          </Text>

          <Text style={styles.description}>
            El ciclo for recorre cinco calificaciones y determina
            si cada alumno aprobó.
          </Text>

          <View style={styles.listBox}>
            <Text style={styles.listText}>
              {mostrarCalificaciones()}
            </Text>
          </View>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>
            Estructuras utilizadas
          </Text>

          <Text style={styles.infoText}>
            • if y else if: evalúan las calificaciones.
          </Text>

          <Text style={styles.infoText}>
            • if-else: determina si un alumno aprobó.
          </Text>

          <Text style={styles.infoText}>
            • for: recorre la lista de calificaciones.
          </Text>
        </View>

        <Text style={styles.footer}>
          Aplicación desarrollada con React Native y Expo.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },

  content: {
    padding: 22,
    paddingTop: 20,
    paddingBottom: 40,
  },

  eyebrow: {
    color: '#2563EB',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginBottom: 10,
  },

  title: {
    color: '#172033',
    fontSize: 29,
    fontWeight: '800',
    marginBottom: 8,
  },

  subtitle: {
    color: '#64748B',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  heading: {
    color: '#172033',
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 15,
  },

  label: {
    color: '#475569',
    fontSize: 14,
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    padding: 14,
    color: '#172033',
    fontSize: 17,
    marginBottom: 14,
  },

  button: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  resultBox: {
    marginTop: 16,
    padding: 15,
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
  },

  resultLabel: {
    color: '#475569',
    fontSize: 13,
  },

  result: {
    color: '#1D4ED8',
    fontSize: 23,
    fontWeight: '800',
    marginTop: 4,
  },

  error: {
    color: '#B91C1C',
    marginTop: 12,
    fontSize: 14,
  },

  description: {
    color: '#64748B',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 14,
  },

  listBox: {
    backgroundColor: '#F8FAFC',
    padding: 14,
    borderRadius: 12,
  },

  listText: {
    color: '#334155',
    fontSize: 15,
    lineHeight: 29,
  },

  infoBox: {
    backgroundColor: '#DBEAFE',
    padding: 16,
    borderRadius: 14,
    marginBottom: 18,
  },

  infoTitle: {
    color: '#1E40AF',
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 8,
  },

  infoText: {
    color: '#1E3A8A',
    fontSize: 13,
    lineHeight: 22,
  },

  footer: {
    textAlign: 'center',
    color: '#64748B',
    fontSize: 12,
    marginTop: 4,
  },
});
