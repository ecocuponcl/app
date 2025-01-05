import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#4CAF50', dark: '#1B5E20' }}
      headerImage={
        <Image
          source={require('@/assets/images/EcoCupon_head.webp')}
          style={styles.headerImage}
          resizeMode="cover"
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">EcoCupon Chile</ThemedText>
        <HelloWave />
      </ThemedView>
      
      <ThemedView style={styles.heroContainer}>
        <ThemedText type="title">Incentivando el Consumo Responsable</ThemedText>
        <ThemedText>
          Recicla, gana cupones y apoya el medio ambiente con EcoCupon Chile.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">¿Cómo Funciona?</ThemedText>
        <ThemedView style={styles.steps}>
          <ThemedView style={styles.step}>
            <ThemedText type="subtitle">1. Recolecta</ThemedText>
            <ThemedText>
              Entrega tus productos reciclables como baterías en un Punto Eco autorizado.
            </ThemedText>
          </ThemedView>
          <ThemedView style={styles.step}>
            <ThemedText type="subtitle">2. Escanea</ThemedText>
            <ThemedText>
              Escanea el código QR del Punto Eco para validar tu entrega.
            </ThemedText>
          </ThemedView>
          <ThemedView style={styles.step}>
            <ThemedText type="subtitle">3. Recibe</ThemedText>
            <ThemedText>
              Obtén un cupón de descuento para productos ecológicos como EcoBaterías.
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Beneficios</ThemedText>
        <ThemedText>• Incentiva el reciclaje responsable</ThemedText>
        <ThemedText>• Obtén descuentos en productos sostenibles</ThemedText>
        <ThemedText>• Forma parte de una comunidad consciente del medio ambiente</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  heroContainer: {
    gap: 8,
    marginBottom: 24,
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    borderRadius: 8,
  },
  stepContainer: {
    gap: 12,
    marginBottom: 24,
  },
  steps: {
    gap: 16,
  },
  step: {
    padding: 16,
    backgroundColor: 'rgba(76, 175, 80, 0.05)',
    borderRadius: 8,
    gap: 8,
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
});
